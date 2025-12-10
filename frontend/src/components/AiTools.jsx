import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {

    const navigate = useNavigate()
    const {user}= useUser()
  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24'>
        <div className='text-center'>
            <h2 className='text-slate-700 text-[42px] font-semibold'>
                Powerful AI Tools
            </h2>
            <p className='text-gray-500 max-w-lg mx-auto'>
                Explore our suite of AI-powered tools designed to enhance your creativity and productivity.
            </p>
        </div>
        <div className='flex flex-wrap mt-10 justify-center'>
            {AiToolsData.map((tool, index)=>(
                
                <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer' onClick={()=>user&& navigate(tool.path)}>
        
                    <tool.Icon className='w-12 h-12 p-3 text-white rounded-xl' style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}} />
                    <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
                    <p className='text-gray-400 text-sm max-w-[95%]'>{tool.description}</p>
                    
              </div>
            ))}
        </div>

    </div>
  )
}

export default AiTools


// // src/pages/AiTools.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "@clerk/clerk-react";
// import {AiToolsData} from "../assets/assets"; // adjust path

// const AiTools = () => {
//   const navigate = useNavigate();
//   const { user } = useUser(); // destructure

//   return (
//     <div className="px-4 sm:px-20 xl:px-32 my-24">
//       <div className="text-center">
//         <h2 className="text-slate-700 text-[42px] font-semibold">Powerful AI Tools</h2>
//         <p className="text-gray-500 max-w-lg mx-auto">
//           Explore our suite of AI-powered tools designed to enhance your creativity and productivity.
//         </p>
//       </div>

//       <div className="flex flex-wrap mt-10 justify-center">
//         {AiToolsData.map((tool) => {
//           const Icon = tool.Icon; // IMPORTANT: capital I

//           return (
//             <div
//               key={tool.path}
//               className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
//               onClick={() => {
//                 // if you want to require sign-in:
//                 if (user) navigate(tool.path);
//                 else navigate("/sign-in"); // or open sign in
//               }}
//             >
//               {/* gradient circle with icon */}
//               <div
//                 className="w-12 h-12 p-3 rounded-xl mb-4 flex items-center justify-center"
//                 style={{ background: `linear-gradient(90deg, ${tool.bg.from}, ${tool.bg.to})` }}
//               >
//                 {Icon ? <Icon className="w-6 h-6 text-white" /> : null}
//               </div>

//               <h3 className="mt-2 mb-3 text-lg font-semibold">{tool.title}</h3>
//               <p className="text-gray-400 text-sm max-w-[95%]">{tool.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AiTools;
