

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
const MyAccount = () => {
  return (
    <div className=" w-full md:max-w-[1440px]  mx-auto   overflow-hidden    lg:pl-0 ">
      <div className="w-full h-[306px] pagesBg overflow-hidden   ">
        <div className="  flex justify-center items-center h-[306px] flex-col z-50">
            <Image src={'/images/logo.png'} className="-mb-[20px]" height={100} width={100} alt="logo image"/>
            <h2 className="text-[48px] font-medium ">My Account</h2>
            <span className="flex justify-center items-center ">
                <Link href={'/'}>Home</Link>
                 <MdOutlineKeyboardArrowRight/>
                 <Link href={'/'}>My Account</Link>
            </span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-10 lg:pt-32">
        

        <div className="flex flex-wrap justify-center p-10   gap-10  py-10 w-full">
          {/* left */}
          <div  className="max-w-[635px] flex flex-col w-full  flex-1  justify-center items-start gap-3">
            <h2 className="text-[36px] font-semibold">Log In</h2>
            <div className="flex justify-center gap-4">
            <div className="    ">
              <label htmlFor="#">Username or email address</label> <br /><br />
              <input
                type="text"
                placeholder="abc"
               className="p-3 w-full border-2 border-black/30 rounded-lg"
              />  <br /><br />
              <label htmlFor="#">Password</label>  <br /><br />
              <input
                type="text"
                placeholder="abc"
                className="p-3    w-[320px]   md:w-[530px] border-2 border-black/30 rounded-lg"
              /><br /><br />
             
           <span className="flex justify-start p-3 gap-2">   
             <input
                type="checkbox"
                placeholder="abc"
               className="p-3  border-2 border-black/30 rounded-lg"
              />
               <label htmlFor="#">Remember me</label> 
             </span>
              <button className="px-10 py-2 rounded-full shadow-lg border-2 mr-3">Login</button>
              <Link href={'/myAccount'}>Lost Your Password ?</Link>
            </div>
            </div>
            
           
          </div>
          {/* right */}
          <div className="max-w-[635px] flex flex-col w-full  flex-1  gap-3">
          <h2 className="text-[36px] font-semibold">Register</h2>
            <div className=" ">
              <label htmlFor="#">Email address</label> <br /><br />
              <input
                type="text"
                placeholder="abc"
                className="p-3  border-2   w-[320px]   md:w-[530px] border-black/30 rounded-lg"
              />  <br /><br />
           
                <p className="text-[16px] font-light py-7">A link to set a new password will be sent to your email address.</p>
                <p  className="text-[16px]   py-7">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy.</strong></p>
               
              <button className="px-10 py-2 rounded-full shadow-lg border-2 ">Regiter</button>
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

export default MyAccount;
