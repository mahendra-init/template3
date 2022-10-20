import React from 'react'

function Footer() {
  return (
    <div className='relative text-white text-sm mt-10'>
        <img className='static' src="wave.svg" alt="" />
        <div className="h-40 w-40 rounded-full bg-gray-300 opacity-30 absolute -translate-y-[580px] translate-x-[920px]"></div>
        <div className='absolute rounded-xl shadow-2xl shadow-gray-500 p-6 w-4/5 h-44 -translate-y-[500px] translate-x-24 bg-white'>
            <div className='h-14 w-14 inline-block static rounded-full bg-green-con'></div>
            <div className='flex flex-row w-[58vw] absolute -translate-y-12 translate-x-10'>
                <h1 className='text-black text-2xl font-medium'>Subscribe to <br /> our <br /> Newsletter</h1>
                <div className='flex flex-row flex-1 ml-16 my-8 rounded-3xl shadow-inner shadow-gray-400 p-1'>
                    <input type="text" placeholder='Email Address' className='flex-1 rounded-3xl bg-transparent px-5 py-1 placeholder: text-sm' />
                    <button className='bg-[#2367ff] px-5 py-2 text-sm rounded-3xl font-medium text-white'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className="absolute bg-transparent pt-3 pb-2  -translate-y-60">
            <div className="flex  mx-14 flex-row">
                <div className="w-2/5 pb-6">
                    <img src="icon.png" alt="" />
                    <p className='w-5/6 py-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis placeat officiis nihil a? Ipsam dignissimos sunt ipsum consectetur quod beatae, sint dolores voluptatum et adipisci sed totam rem aperiam nisi.</p>
                </div>
                <div className="flex-1 flex flex-row mx-7 justify-around">
                    <ul className='font-bold'>
                        <li className='mb-3 text-lg'>About</li>
                        <li>Home</li>
                        <li>Lifestyle</li>
                        <li>People</li>
                        <li>Slider</li>
                        <li>Sport</li>
                    </ul>
                    <ul className='font-bold'>
                        <li className='mb-3 text-lg'>Categories</li>
                        <li>Business</li>
                        <li>Design</li>
                        <li>Lifestyle</li>
                        <li>Technology</li>
                        <li>Training</li>
                    </ul>
                    <ul className='font-bold'>
                        <li className='mb-3 text-lg'>Account</li>
                        <li>Business</li>
                        <li>Design</li>
                        <li>Entertainment</li>
                        <li>Featured</li>
                        <li>Technology</li>
                    </ul>
                </div>      
            </div>
            <hr className='w-[50vw] mx-auto opacity-40' />
            <div className="flex flex-row ml-14 mr-16 items-center mt-3">
                <p className='flex-1'>© 2020 Nemesis. All Right Resereved</p>
                <div className="grid grid-cols-5 gap-3 ">
                    <img className='h-5 w-5' src="f.png" alt="" />
                    <img className='h-5 w-5' src="t.png" alt="" />
                    <img className='h-5 w-5' src="i.png" alt="" />
                    <img className='h-5 w-5' src="l.png" alt="" />
                    <img className='h-5 w-5' src="y.png" alt="" />
                </div>
            </div>
            <div className='absolute rounded-full bg-[#3e9ff7] mx-3 h-10 w-10 -translate-y-8 translate-x-[80vw]'>
                <img className='h-5 w-5 mt-2 m-auto' src="up.svg" alt="" />
            </div>
        </div>
        <div className='absolute w-full h-10 bg-white'></div>
    </div>
  )
}

export default Footer