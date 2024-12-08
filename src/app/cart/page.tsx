import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
const CartPage = () => {
  return (
    <div className=" w-full md:max-w-[1440px]  mx-auto   overflow-hidden    lg:pl-0 ">
      <div className="w-full h-[306px] pagesBg overflow-hidden   ">
        <div className="  flex justify-center items-center h-[306px] flex-col z-50">
          <Image
            src={"/images/logo.png"}
            className="-mb-[20px]"
            height={100}
            width={100}
            alt="logo image"
          />
          <h2 className="text-[48px] font-medium ">Cart</h2>
          <span className="flex justify-center items-center ">
            <Link href={"/"}>Home</Link>
            <MdOutlineKeyboardArrowRight />
            <Link href={"/"}>Cart</Link>
          </span>
        </div>
      </div>
      <div className="max-w-[1250px] flex flex-wrap justify-center items-center gap-6 p-10">
        <div className="max-w-[817px] flex flex-col gap-10 w-full">
          <ul className="flex flex-wrap justify-evenly items-center pl-0 md:pl-24  bg-[#FFF9E5] w-full h-[55px]  ">
            <li>Product</li>
            <li className="ml-3">Price</li>
            <li className="ml-3">Quantity</li>
            <li>Subtotal</li>
          </ul>
          <ul className="flex justify-between items-center   h-[55px] w-full">
            <li className="bg-[#FFF9E5] -mr-5 hidden md:block">
              <Image
                src={"/images/sofaSet.png"}
                height={90}
                width={90}
                alt="sofa set image"
              ></Image>
            </li>
            <li>Asgaard sofa</li>
            <li className="mr-5">Rs. 250,000.00</li>
            <li>
              <span className="h-[20px] w-[20px] border p-2 rounded-lg border-1  mr-10">
                1
              </span>
            </li>
            <li className="mr-8">Rs. 250,000.00</li>
          </ul>
          <div className=" mx-auto block md:hidden">
          <Image
                src={"/images/sofaSet.png"}
                height={150}
                width={150}
                alt="sofa set image"
              ></Image>
          </div>
          <div></div>
        </div>
        <div className="p-10 flex flex-col justify-center items-center gap-5 bg-[#FFF9E5]">
          <h2>Cart Totals</h2>
          <span className="flex justify-between items-center gap-8 text-[16] font-medium">
            {" "}
            Subtotal{" "}
            <p className="text-[#9F9F9F] text-[16px] font-normal">
              Rs. 2500.00
            </p>
          </span>
          <span className="flex justify-between items-center gap-8 text-[16] font-medium">
            {" "}
            Total{" "}
            <p className="text-[#B88E2F] text-[20px] font-medium">
              Rs. 2500.00
            </p>
          </span>
         <Link href={'/checkout'}> <button className="px-10 py-2 rounded-xl border-2">Check Out</button></Link>
        </div>
      </div>
      {/* services */}
      <div className="w-full bg-[#FAF4F4] flex flex-wrap   justify-center  items-center p-10">
        <div className="flex-1   p-8  ">
          <h2 className="text-[32px] font-medium">Free Delivery</h2>
          <p className="max-w-[276px] w-full text-[#9F9F9F]">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>
        <div className="flex-1 p-8">
          <h2 className="text-[32px] font-medium">90 Days Return</h2>
          <p className="max-w-[276px] w-full text-[#9F9F9F]">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div className="flex-1 p-8">
          <h2 className="text-[32px] font-medium">Secure Payment</h2>
          <p className="max-w-[276px] w-full text-[#9F9F9F]">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
