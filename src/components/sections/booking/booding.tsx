import React from 'react'
import BookingRingt from './BookingRingt'
import BookingLeft from './BookingLeft'

const Booking = () => {
  return (
    <div className=' md:flex w-full  justify-around '>
      
            <BookingLeft/>
  
      <BookingRingt/>
    </div>
  )
}

export default Booking
