import React, { useState, useEffect } from 'react'
import { dummyCreationData } from '../assets/assets'
import { Gem, Sparkles } from 'lucide-react'
import { Protect } from '@clerk/clerk-react'
import CreationItem from '../components/CreationItem'

const Dashboard = () => {
  // in dashboard at top is total creations made by user
  const [creations, setCreations] = useState([])

  // get creations from backend and display here
  const getDashboardData = async () => {
    //  replace this with your real fetch call
    setCreations(dummyCreationData)
  }

  useEffect(() => {
    getDashboardData()
  }, [])

  return (
    <div className='h-full overflow-y-scroll p-6'>
      <div className='flex justify-start gap-4 flex-wrap'>
        {/* total creations card */}
        <div className='flex justify-between items-center w-72 p-4 bg-white rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-sm'>Total Creations</p>
            <h2 className='text-xl font-semibold'>{creations.length}</h2>
          </div>

          <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex justify-center items-center'>
            <Sparkles className='w-6 h-6 text-white' />
          </div>
        </div>

        {/* plan card */}
        <div className='flex justify-between items-center w-72 p-4 bg-white rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-sm'>Active Plan</p>
            <h2 className='text-xl font-semibold'>
              <Protect plan='premium' fallback={'free'}>
                Premium
              </Protect>
            </h2>
          </div>

          <div className='w-10 h-10 rounded-lg bg-linear-to-br from-[#FF7F50] to-[#FB923C] text-white flex justify-center items-center'>
            <Gem className='w-6 h-6 text-white' />
          </div>
        </div>
      </div>
      {/* recent creations part */}
      <div className='space-y-3'>
        <p className='mt-6 mb-4'>Recent Creations</p>
        {
          creations.map((item)=><CreationItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default Dashboard
