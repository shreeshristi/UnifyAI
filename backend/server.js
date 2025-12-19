import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { clerkMiddleware, requireAuth } from '@clerk/express'

const app = express()
// middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())
app.use(requireAuth())



// routes
app.get('/', (req,res)=>res.send('server is live!'))

const PORT= process.env.PORT || 3000;
// START
app.listen(PORT, ()=>console.log("server is runnin on port", PORT))