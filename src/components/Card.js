import React from 'react'

function Card() {
  return (
    <div className='relative rounded-xl text-white shadow-2xl shadow-gray-400'>
      <img src="img.jpg" alt="fefae" className='static h-96 w-full rounded-xl'/>
      <h1 className='absolute text-xl font-medium -translate-y-[370px] translate-x-4 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

    </div>
  )
}

export default Card