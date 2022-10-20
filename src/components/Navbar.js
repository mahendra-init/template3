import React from 'react'

function Navbar() {
  return (
    <div className='px-20 py-12 flex flex-row border-t-[1px] border-gray-700'>
        <img className='mr-16' src="icon.png" alt="" />
        <ul className="flex flex-row space-x-4 text-sm text-gray-600 flex-1 font-medium items-center">
            <li className='flex flex-row items-center'>HOME <img className='h-4 w-4 mt-0.5' src="down.svg" alt="" /></li>
            <li className='flex flex-row items-center'>PAGES <img className='h-4 w-4 mt-0.5' src="down.svg" alt="" /></li>
            <li>SPORT</li>
            <li>POLICY</li>
            <li className='flex flex-row items-center'>FEATURES <img className='h-4 w-4 mt-0.5' src="down.svg" alt="" /></li>
            <li>ERROR PAGE</li>
            <li>LIFESTYLE</li>
        </ul>
        <div className="flex flex-row">
            <img className='h-6 w-6 mx-1' src="search.svg" alt="" />
            <img className='h-6 w-6' src="hamburger.svg" alt="" />
        </div>
    </div>
  )
}

export default Navbar