import React from 'react'
import { useClerk, useUser } from '@clerk/clerk-react'
import { NavLink } from 'react-router-dom'
import {Eraser,FileText,Hash,House,Scissors,SquarePen,Users,Image,LogOut,} from 'lucide-react'

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
  { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate-image', label: 'Generate Image', Icon: Image },
  { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
  { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
  { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
  { to: '/ai/community', label: 'Community', Icon: Users },
]

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser()
  const { signOut, openUserProfile } = useClerk()

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'
      } transition-all duration-300 ease-in-out`}
    >
      {/* Top user section */}
      <div className="w-full">
        <div className="flex flex-col items-center mt-6">
          <img
            src={user?.imageUrl}
            alt="User avatar"
            className="w-16 h-16 rounded-full cursor-pointer"
            onClick={openUserProfile}
          />
          <h1 className="mt-2 text-center font-medium text-gray-800">
            {user?.fullName}
          </h1>
        </div>

        {/* Navigation links */}
        <div className="px-6 mt-6 text-sm text-gray-700 font-medium space-y-1">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to} 
               to={to}
            //   end is needed to make sure only exact match is active
            //   for example /ai should not be active when we are on /ai/write-article
            //   if not dashboard link will always be active as all other links start with /ai
              end={to === '/ai'}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-linear-to-r from-[#3C81F6] to-[#FB923C] text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-white' : 'text-gray-500'
                    }`}
                  />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom logout button */}
      <div className="w-full px-6 mb-6">
        <button
          onClick={() => signOut()}
          className="w-full flex items-center justify-center gap-2 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-700 transition-all"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
