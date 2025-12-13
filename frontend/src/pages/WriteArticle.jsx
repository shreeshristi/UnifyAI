import React, { useState } from 'react'
import { Edit, Sparkles } from 'lucide-react'

const WriteArticle = () => {
  const articlelengthOptions = [
    { length: 800, text: 'Short (around 800 words)' },
    { length: 1500, text: 'Medium (around 1200 words)' },
    { length: 3000, text: 'Long (around 1800 words)' },
  ]

  // to store selected length
  const [selectedLength, setSelectedLength] = useState(articlelengthOptions[0])
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
          <h1 className='text-xl font-semibold'>Article Configuration</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Article topic</p>

        <input
          onChange={(e) => setInputTopic(e.target.value)}
          value={inputTopic}
          type="text"
          placeholder='Enter article topic'
          className='w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />

        <p className='mt-4 text-sm font-medium'>Article Length</p>

        <div className='mt-3 flex gap-3 flex-wrap'>
          {articlelengthOptions.map((item, index) =>
            <span
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer 
                ${selectedLength.text === item.text ?
                  'bg-blue-100 border-blue-500 text-blue-700' :
                  'bg-gray-100 border-gray-300 text-gray-700'
                }`}
              key={index}
            >
              {item.text}
            </span>
          )}
        </div>

        <button className='w-full flex justify-center items-center gap-2 bg-linear-to-r 
          from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md 
          hover:from-blue-600 hover:to-indigo-700 transition-colors mt-6'>
          <Edit className='w-5' /> Generate Article
        </button>
      </form>

      {/* RIGHT BOX */}
      <div className='w-full sm:w-[48%] p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>

        <div className='flex items-center gap-3'>
          <Edit className='w-9 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Generated Article</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Edit className='w-9 h-9 text-[#4A7AFF]' />
            <p>Enter a topic and click "Generate Article" to get started</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default WriteArticle
