import React from 'react'
import NavbarLeft from './Left'
import NavbarRight from './right'

const Navbar = () => {
  return (
    <div className='flex z-0  justify-around items-center h-15'>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar
