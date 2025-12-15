import React, { useState } from 'react'
import { Hash, Sparkles, Image } from 'lucide-react'

const GenerateImages = () => {

  const imageStyle = 
    ['Realistic', 'Digital Art', 'Ghibli Art','3D Render', 'Cartoon', 'Anime', 'Pixel Art', 'Surreal', 'Fantasy', 'Minimalist']
      // to store selected length
      const [selectedStyle, setSelectedStyle] = useState('Realistic')
      const [input, setInput] = useState('')
      //one more state for info regarding img published or not
      const [published, setPublished] = useState(false);
    
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
          <h1 className='text-xl font-semibold'>AI Image Generator</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Describe your Image</p>

        <textarea
          onChange={(e) => setInputTopic(e.target.value)}
          value={input}
          rows={4}
          
          placeholder='Describle what image you want to generate'
          className='w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />

        <p className='mt-4 text-sm font-medium'>Style</p>

        <div className='mt-3 flex gap-3 flex-wrap'>
          {imageStyle.map((item) =>
            <span
              onClick={() => setSelectedStyle(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer 
                ${selectedStyle === item ?
                  'bg-blue-100 border-blue-500 text-blue-700' :
                  'bg-gray-100 border-gray-300 text-gray-700'
                }`}
              key={item}
            >
              {item}
            </span>
          )}
        </div>
         {/* toggle for public or not */}
       <div className='my-6 flex items-center gap-2'>
          <label className='relative cursor-pointer inline-block'>
            <input
              type="checkbox"
              className='sr-only peer'
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            
            {/* Background */}
            <div className='w-9 h-5 bg-slate-300 rounded-full transition peer-checked:bg-green-500'></div>

            {/* Handle / circle */}
            <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>
          </label>

          <p className='text-sm'>Make this Image public</p>
        </div>

            
          

        
        <br />


        <button className='w-full flex justify-center items-center gap-2 bg-linear-to-r 
          from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md 
          hover:from-blue-600 hover:to-indigo-700 transition-colors mt-6'>
          <Image className='w-5' /> Generate Image
        </button>
      </form>

      {/* RIGHT BOX */}
      <div className='w-full sm:w-[48%] p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>

        <div className='flex items-center gap-3'>
          <Image className='w-9 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Generated Image</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Image className='w-9 h-9 text-[#4A7AFF]' />
            <p>Enter a topic and click "Generate Image" to get started</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default GenerateImages