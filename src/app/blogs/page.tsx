


import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
const BlogsPage = () => {
  return (
    <div className=" w-full md:max-w-[1440px]  mx-auto   overflow-hidden    lg:pl-0 ">
      <div className="w-full h-[306px] pagesBg overflow-hidden   ">
        <div className="  flex justify-center items-center h-[306px] flex-col z-50">
            <Image src={'/images/logo.png'} className="-mb-[20px]" height={100} width={100} alt="logo image"/>
            <h2 className="text-[48px] font-medium ">Blog</h2>
            <span className="flex justify-center items-center ">
                <Link href={'/'}>Home</Link>
                 <MdOutlineKeyboardArrowRight/>
                 <Link href={'/'}>Blogs</Link>
            </span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-10 lg:pt-32">
        
      <div>
      <div className="relative h-[400px] bg-[#FFF9E5] flex justify-center items-center">
  <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/intstabg.jpeg')" }}></div>
  <div className="relative z-10 text-center text-black">
    <h2>Your content here</h2>
    <p>Additional content goes here</p>
  </div>
</div>
      </div>
      </div>
      {/* services */}
      <div className="w-full bg-[#FAF4F4] flex flex-wrap   justify-center  items-center p-10">
         <div className="flex-1   p-8  ">
            <h2 className="text-[32px] font-medium">Free Delivery</h2>
            <p className="max-w-[276px] w-full text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
         </div>
         <div className="flex-1 p-8">
            <h2 className="text-[32px] font-medium">90 Days Return</h2>
            <p className="max-w-[276px] w-full text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
         </div>
         <div className="flex-1 p-8">
            <h2 className="text-[32px] font-medium">Secure Payment</h2>
            <p className="max-w-[276px] w-full text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
         </div>
      </div>
    </div>
  );
};

export default BlogsPage;
