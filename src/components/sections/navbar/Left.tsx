

import React from 'react'

const NavbarLeft = () => {
  return (
    <div className="w-full md:ms-10 h-15 max-w-[300px]  ">
      <svg
        viewBox="0 0 300 100"
        preserveAspectRatio="xMidYMid meet"
        className="w-full "
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="10"
          y="50"
          fontFamily="Poppins"
          fontWeight="700"
          fontSize="64"
          fill="#181e4b"
        >
          Jad
        </text>
        <g>
          <circle cx="158" cy="35" r="15" fill="#f59e0b" />
          <text
            x="135"
            y="50"
            fontFamily="Poppins"
            fontWeight="700"
            fontSize="64"
            fill="#181e4b"
          >
            o
          </text>
        </g>

        <circle cx="198" cy="35" r="15" fill="#f59e0b" />
        <text
          x="178"
          y="50"
          fontFamily="Poppins"
          fontWeight="700"
          fontSize="64"
          fill="#181e4b"
        >
          o
        </text>
      </svg>
    </div>
  )
}

export default NavbarLeft
