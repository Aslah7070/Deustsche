import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <div className="h-auto md:h-screen flex flex-col md:flex-row bg-white">
      <HeroLeft />
      <div className="hidden md:block w-2/4">
        <HeroRight />
      </div>
    </div>
  )
}

export default Hero
