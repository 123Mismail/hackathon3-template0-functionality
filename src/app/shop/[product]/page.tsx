
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
const page = () => {
  return (
     <div className='w-full md:max-w-[1440px]  mx-auto   overflow-hidden    lg:pl-0 '>
      <div className='w-full h-[100px] flex  justify-start px-10 items-center '>
        <ul className='flex justify-start items-center gap-4'>
          <li className='flex gap-3'><Link href={'/'}>Home</Link>  <MdOutlineKeyboardArrowRight/></li>
          <li  className='flex gap-3'><Link href={'/shop'}>Shop</Link>  <MdOutlineKeyboardArrowRight/></li>
          <li  className='flex gap-3'><Link href={'/shop/product'}>Product</Link>  <MdOutlineKeyboardArrowRight/></li>
        </ul>
      </div>

      <section className=" body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image
      height={400} width={400}
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="/images/shop2.png"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        Asgaard sofa
        </h1>
        <p>Rs. 250,000.00</p>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-[#FFDA5B]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-[#FFDA5B]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-[#FFDA5B]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-[#FFDA5B]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-[#FFDA5B]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
             
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
          <span className='text-[#9F9F9F] text-[13px] font-normal'>5 Customer Review</span>
            
          </span>
        </div>
        <p className="leading-relaxed">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
          shorts keytar banjo tattooed umami cardigan.
        </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-[#FFDA5B] rounded-full w-6 h-6 focus:outline-none" />
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <button className="flex ml-auto  border   border-1 py-2 px-6 focus:outline-none   rounded">
            add to cart
          </button>
        
        </div>
      </div>
    </div>
  </div>
</section>

    {/* related  */}

    <div className="max-w-[1440px] mx-auto relative overflow-hidden  py-10 ">
      <div className=" flex flex-col justify-center items-center gap-14 pb-8 ">
        <h2 className="text-[36px] font-medium">Related Products</h2>
       
      </div>
      <div className="max-w-[1240px] mx-auto   overflow-hidden  flex  flex-wrap justify-center   lg:justify-between   pl-10 lg:pl-0   gap-4 md:gap-0  ">
        <div>
          <Image
            src={"/images/shop2.png"}
            height={350}
            width={350}
            alt="blogs laptop images"
            className="w-[230px] h-[250px]   object-cover"
          />
          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <p className="text-center pt-3">
              Going all-in with millennial design
            </p>
            <button className="underline underline-offset-8   font-medium mx-auto">
              Read More
            </button>
          </div>
        </div>
        <div>
          <Image
            src={"/images/shop3.png"}
            className="w-[230px] h-[250px]   object-cover "
            height={350}
            width={350}
            alt="blogs laptop images"
          />
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <button className="underline underline-offset-8   font-medium mx-auto">
              Read More
            </button>
          </div>
        </div>
        <div>
          <Image
            src={"/images/shop4.png"}
            className="w-[230px] h-[250px]   object-cover"
            height={350}
            width={350}
            alt="blogs laptop images"
          />
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <button className="underline underline-offset-8 ">Read More</button>
          </div>
        </div>
        <div>
          <Image
            src={"/images/shop5.png"}
            className="w-[230px] h-[250px]   object-cover"
            height={350}
            width={350}
            alt="blogs laptop images"
          />
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <button className="underline underline-offset-8 ">Read More</button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center p-6 mt-6">
        <button className="underline underline-offset-8 mx-auto text-[20px] font-medium">
          View All
        </button>
      </div>
    </div>
     </div>
  )
}

export default page