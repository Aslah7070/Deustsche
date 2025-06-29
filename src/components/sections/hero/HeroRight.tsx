"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

const HeroRight = () => {
  return (

    // </div>
     <div className='relative w-2/4 '>
<div className='absolute top-1/4 left-20'>
       <Image src={"/assets/plane.png"} width={150}height={150} alt='plane'/>
</div>


            <motion.svg 
                className=' absolute z-0 left-15 top-0 right-0 h-[700px]' 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
                fill="#fff1da"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
            >
                <path d="
                    M 20,0
                    L 100,0
                    C 100,0 100,5 100,10
                    L 100,100
                    C 100,95 95,100 90,100
                    L 60,60
                    C 70,5 90,60 70,60
                    C 0,40 20,0 20,0
                    Z 
                " />

                  {/* <path d="
                    M 20,0
                    L 100,0
                    C 100,0 100,5 100,10
                    L 100,100
                    C 100,95 95,100 90,100
                    L 60,60
                    C 70,5 90,60 70,60
                    C 0,40 20,0 20,0
                    Z 
                " /> */}
           
           
            </motion.svg>
            
            <div className='relative z-0 flex items-center justify-center h-[800px]'>
       
                <motion.div
                    className='relative'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                >
                    <Image 
                        className='relative w-[2000px] left-32 h-[600px] z-99 hover:scale-[1.02] transition-all ease-in-out duration-300'
                        src="/assets/Traveller 1.png"
                        alt='Women'
                        width={1000}
                        height={100}
                        
                    />
                    <motion.div 
                        className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-60 h-32 bg-black/20 rounded-full blur-sm'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0 }}
                    />
                </motion.div>
            </div>
     
        </div>
  )
}

export default HeroRight
