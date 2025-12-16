import { Eraser, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const RemoveBackground = () => {

  const [inputTopic, setInputTopic] = useState('')
    
  const onSubmitHandler = async (e) => {
        e.preventDefault();
      }
  return (
     <div className='h-full overflow-y-scroll p-6 flex items-start gap-4 text-slate-700 flex-wrap'>

      {/* LEFT BOX */}
      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-[48%] p-4 bg-white rounded-lg border border-gray-200'
      >
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Background Remover</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>upload image</p>

        <input
          onChange={(e) => setInputTopic(e.target.files[0])}
          
          type="file"
          accept='image/*'
          
          className='w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600'
          required
        />

        <p className='text-xs taxt-gray-500 font-light mt-1'>Support JPG,PNG and other image format.</p>

        <button className='w-full flex justify-center items-center gap-2 bg-linear-to-r 
          from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md 
          hover:from-blue-600 hover:to-indigo-700 transition-colors mt-6'>
          <Eraser className='w-5' /> Remove Background
        </button>
      </form>

      {/* RIGHT BOX */}
      <div className='w-full sm:w-[48%] p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>

        <div className='flex items-center gap-3'>
          <Eraser className='w-9 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Processed Image</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Eraser className='w-9 h-9 text-[#4A7AFF]' />
            <p>Upload an image and click 'Remove Background'.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default RemoveBackground