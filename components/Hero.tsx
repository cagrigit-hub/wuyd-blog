import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div className=' bg-teal-100  pb-20 md:pb-32 r text-black  '>
            <div className='flex mx-auto max-w-7xl '>
                <div className='px-10  mt-12 md:mt-24 '>
                    <h1 className='text-4xl md:text-6xl mb-4 max-w-2xl'>Wuyd. Sharing my personal development process day by day.</h1>
                    <h3 className='text-lg md:text-xl max-w-xl'>This is the blog where i can post my daily jobs, future jobs with world. Personal notebook, personal everything.</h3>
                </div>


                <div className='px-8 flex flex-1 justify-center items-start  md:items-center '>
                    <h1 className='hidden md:inline-flex md:text-[14rem] lg:text-[16rem]  r ml-32   '> W </h1>
                </div>
                
            </div>
            
            <div className='flex  justify-center mt-12 md:hidden '>
                <Link href="/about">
                    <button className="border border-black py-1 px-4 rounded-full text-white bg-black">About Author</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero