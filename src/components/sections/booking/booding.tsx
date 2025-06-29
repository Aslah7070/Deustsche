import React from 'react'
import BookingRingt from './BookingRingt'
import BookingLeft from './BookingLeft'

const Booking = () => {
  return (
    <div className=' md:flex w-full'>
        {/* <div className='w-2/4'> */}
            <BookingLeft/>
        {/* </div> */}
      <BookingRingt/>
    </div>
  )
}

export default Booking
