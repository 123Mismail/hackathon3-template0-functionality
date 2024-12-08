import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
const ContactPage = () => {
  return (
    <div className=" w-full md:max-w-[1440px]  mx-auto   overflow-hidden    lg:pl-0 ">
      <div className="w-full h-[306px] pagesBg overflow-hidden   ">
        <div className="  flex justify-center items-center h-[306px] flex-col z-50">
            <Image src={'/images/logo.png'} className="-mb-[20px]" height={100} width={100} alt="logo image"/>
            <h2 className="text-[48px] font-medium ">Contact</h2>
            <span className="flex justify-center items-center ">
                <Link href={'/'}>Home</Link>
                 <MdOutlineKeyboardArrowRight/>
                 <Link href={'/'}>Contact</Link>
            </span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-10 lg:pt-32">
        <h2 className="text-[36px] font-semibold">Get In Touch With Us</h2>
        <p className="max-w-[644px]  w-full text-[#9F9F9F] text-center leading-8">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        <div className="flex flex-wrap justify-center    gap-10  py-10 w-full">
          {/* left */}
          <div className="flex flex-col gap-10   p-10">
            <div className="flex justify-center gap-4">
              <FaMapMarkerAlt className="mt-1 text-[25px]" />
              <span>
                <h3 className="text-[24px] font-medium">Address</h3>
                <p className="max-w-[212px]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <FaPhone className="mt-1 text-[25px]" />
              <span>
                <h3 className="text-[24px] font-medium">Phone</h3>
                <p className="max-w-[212px]">
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </p>
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <MdOutlineAccessTimeFilled className="mt-1 text-[25px]" />
              <span>
                <h3 className="text-[24px] font-medium">Working Time</h3>
                <p className="max-w-[212px]">
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </p>
              </span>
            </div>
          </div>
          {/* right */}
          <div className="max-w-[635px] flex w-full    gap-3">
            <div className="pl-3 md:pl-10 ">
              <label htmlFor="#">Your name</label> <br /><br />
              <input
                type="text"
                placeholder="abc"
                className="p-3 w-full border-2 border-black/30 rounded-lg"
              />  <br /><br />
              <label htmlFor="#">Email address</label>  <br /><br />
              <input
                type="text"
                placeholder="abc"
                className="p-3 w-full border-2 border-black/30 rounded-lg"
              /><br /><br />
              <label htmlFor="#">Subject</label> <br /><br />
              <input
                type="text"
                placeholder="abc"
                className="p-4  border-2 border-black/30 w-full rounded-lg"
              /><br /><br />
               <label htmlFor="#">Message</label>  <br /><br />
             
              <textarea
                rows={3}
                placeholder="Hi! i’d like to ask about"
                className="p-3  w-[320px]   md:w-[530px] border-2 border-black/30  rounded-lg "
              /> <br /><br />
              <button className="px-10 py-2 rounded-full shadow-lg border-2 ">Subumit</button>
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

export default ContactPage;
