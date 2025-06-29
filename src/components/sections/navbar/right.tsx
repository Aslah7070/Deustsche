import { MENU } from '@/constant/menu.constant'
import React from 'react'

const NavbarRight = () => {
  return (
    <div className="w-full  flex md:mr-25 md:justify-end justify-center  z-[99]">

      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {MENU.map((item) => (
          <p
            key={item.id}
            className="text-sm md:text-base lg:text-lg cursor-pointer hover:text-orange-600 transition-colors duration-200"
          >
            {item.label}
          </p>
        ))}
      </div>

      <div className="flex md:hidden">
        
        <button className="text-sm px-3 py-2 border rounded-lg border-gray-300">
          ☰ Menu
        </button>
      </div>
    </div>
  )    
}

export default NavbarRight
