

import Image from 'next/image'
import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { FaRegCalendarMinus } from "react-icons/fa";
const OurBlogs = () => {
  return (
    <div className='max-w-[1440px] mx-auto   overflow-hidden  py-10 '>
        <div className=' flex flex-col justify-center items-center gap-8 '>
            <h2 className='text-[36px] font-medium'>Our Blogs</h2>
            <p className='text-[#9F9F9F] pb-5'>Find a bright ideal to suit your taste with our great selection</p>
            
        </div>
        <div className='max-w-[1240px] mx-auto   overflow-hidden  flex  flex-wrap justify-center   lg:justify-between   pl-10 lg:pl-0   gap-4 md:gap-0  ' >

            <div  >
                <Image src={'/images/blog1.jpeg'}  height={350} width={350 } alt='blogs laptop images' className='w-[300px] h-[320px] rounded-lg object-cover'/>
                <div className='flex flex-col gap-6 justify-center items-center text-center'>
                    <p className='text-center pt-3'>Going all-in with millennial design</p>
                    <button className='underline underline-offset-8   font-medium mx-auto'>Read More</button>
                    <span className='flex  justify-center items-center gap-2'>
                      <IoTimeOutline/>
                      <p>5 min</p>
                      <FaRegCalendarMinus/>
                      <p>12th Oct 2022</p>
                    </span>
                </div>
            </div>
            <div >
                <Image src={'/images/blog2.jpeg'} className='w-[300px] h-[320px] rounded-lg object-cover ' height={350} width={350 } alt='blogs laptop images'/>
                <div className='flex flex-col  gap-6 justify-center items-center text-center pt-3'>
                    <p>Going all-in with millennial design</p>
                    <button className='underline underline-offset-8   font-medium mx-auto'>Read More</button>
                    <span className='flex  justify-center items-center gap-2'>
                      <IoTimeOutline/>
                      <p>5 min</p>
                      <FaRegCalendarMinus/>
                      <p>12th Oct 2022</p>
                    </span>
                </div>
            </div>
            <div>
                <Image src={'/images/blog3.jpeg'} className='w-[300px] h-[320px] rounded-lg object-cover' height={350} width={350 } alt='blogs laptop images'/>
                <div className='flex flex-col  gap-6 justify-center items-center text-center pt-3'>
                    <p>Going all-in with millennial design</p>
                    <button className='underline underline-offset-8 '>Read More</button>
                    <span className='flex  justify-center items-center gap-2'>
                      <IoTimeOutline/>
                      <p>5 min</p>
                      <FaRegCalendarMinus/>
                      <p>12th Oct 2022</p>
                    </span>
                </div>
            </div>
        </div>
       <div  className=' flex justify-center items-center p-6 mt-6'>
       <button className='underline underline-offset-8 mx-auto text-[20px] font-medium'>View All</button>

       </div>
    </div>
  )
}

export default OurBlogs