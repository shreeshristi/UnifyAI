import { clerkClient } from "@clerk/express";

// middleware to check userid and haspremium
export const auth = async(req, res, next) => {
    try{
        // userid, has are data of req
         const {userId, has} = await req.auth;
        const hasPremium = await has({plan: 'premium'});
// got userid and thus user object that is all info of user
        const user = await clerkClient.users.getUser(userId);   
        if(!hasPremium && user.privateMetadata.free_usage){
            req.free_usage = user.privateMetadata.free_usage;
        }else{
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: 0
                }
            })
            req.free_usage = 0;
        }
        req.plan = hasPremium ? 'premium' : 'free';
        next()

    }
    catch(err){
        res.json({error: "Authentication Failed"})

       
    }

}