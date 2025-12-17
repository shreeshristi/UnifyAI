import { useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { dummyPublishedCreationData } from '../assets/assets'
import { Heart } from 'lucide-react'

const Community = () => {
  const [creations, setCreations] = useState([])
  const { user } = useUser()

  const fetchCreations = async () => {
    setCreations(dummyPublishedCreationData)
  }

  useEffect(() => {
    if (user) fetchCreations()
  }, [user])

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h1 className="text-xl font-semibold">Creations</h1>

      <div className="bg-white h-full w-full rounded-xl overflow-y-auto p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {creations.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={item.content}
                alt={item.prompt}
                className="w-full h-60 object-cover"
              />

              {/* OVERLAY/ */}
              <div className="absolute inset-0 flex items-end p-3 bg-linear-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition">
                <div className="flex justify-between items-center w-full text-white">
                  <p className="text-sm line-clamp-2">
                    {item.prompt}
                  </p>

                  <div className="flex gap-1 items-center">
                    <p>{item.likes.length}</p>
                    <Heart
                      className={`w-5 h-5 cursor-pointer ${
                        item.likes.includes(user?.id)
                          ? 'text-red-500'
                          : 'text-gray-300'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Community
