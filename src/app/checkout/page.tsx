import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CheckoutPage = () => {
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
          <h2 className="text-[48px] font-medium ">CheckOut</h2>
          <span className="flex justify-center items-center ">
            <Link href={"/"}>Home</Link>
            <MdOutlineKeyboardArrowRight />
            <Link href={"/"}>CheckOut</Link>
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-10 lg:pt-32">
        <div className="flex flex-wrap justify-center p-10   gap-10  py-10 w-full">
          {/* left */}
          <div className="max-w-[635px] flex flex-col w-full  flex-1  justify-center items-start gap-3">
            <h2 className="text-[36px] font-semibold">Billing details</h2>
            <div className="flex justify-center gap-4">
              <div className="    ">
                <span className="flex justify-center items-center gap-4 w-full">
                  <span className="w-full">
                    <label htmlFor="#">First Name</label> <br />
                    <br />
                    <input
                      type="text"
                      placeholder="abc"
                      className="p-3 w-full border-2 border-black/30 rounded-lg"
                    />
                  </span>
                  <span className="w-full">
                    {" "}
                    <label htmlFor="#">First Name</label> <br />
                    <br />
                    <input
                      type="text"
                      placeholder="abc"
                      className="p-3 w-full border-2 border-black/30 rounded-lg"
                    />{" "}
                  </span>
                </span>{" "}
                <br />
                <br />
                <label htmlFor="#">Company Name (Optional)</label> <br />
                <br />
                <input
                  type="text"
                  placeholder="abc"
                  className="p-3    w-[320px]   md:w-[530px] border-2 border-black/30 rounded-lg"
                />
                <br />
                <br />
                <label htmlFor="#">Country / Region</label> <br />
                <br />
                <input
                  type="text"
                  placeholder="abc"
                  className="p-3    w-[320px]   md:w-[530px] border-2 border-black/30 rounded-lg"
                />
                <br />
                <br />
                <label htmlFor="#">Street address</label> <br />
                <br />
                <input
                  type="text"
                  placeholder="abc"
                  className="p-3    w-[320px]   md:w-[530px] border-2 border-black/30 rounded-lg"
                />
                <br />
                <br />
                <label htmlFor="#">Country / Region</label> <br />
                <br />
                <input
                  type="text"
                  placeholder="abc"
                  className="p-3    w-[320px]   md:w-[530px] border-2 border-black/30 rounded-lg"
                />
                <br />
                <br /> <label htmlFor="#">Town / City</label> <br />
                <br />
                <input
                  type="text"
                  placeholder="abc"
                  className="p-3    w-[320px]   md:w-[530px] border-2 border-black/30 rounded-lg"
                />
                <br />
                <br /> <label htmlFor="#">Province</label> <br />
                <br />
                <input
                  type="text"
                  placeholder="abc"
                  className="p-3    w-[320px]   md:w-[530px] border-2 border-black/30 rounded-lg"
                />
                <br />
                <br />
                <label htmlFor="#">ZIP code</label> <br />
                <br />
                <input
                  type="text"
                  placeholder="abc"
                  className="p-3    w-[320px]   md:w-[530px] border-2 border-black/30 rounded-lg"
                />
                <br />
                <br />
                <label htmlFor="#">Phone</label> <br />
                <br />
                <input
                  type="text"
                  placeholder="abc"
                  className="p-3    w-[320px]   md:w-[530px] border-2 border-black/30 rounded-lg"
                />
                <br />
                <br /> <label htmlFor="#">Email address</label> <br />
                <br />
                <input
                  type="text"
                  placeholder="abc"
                  className="p-3    w-[320px]   md:w-[530px] border-2 border-black/30 rounded-lg"
                />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Additional information"
                  className="p-3    w-[320px]   md:w-[530px] border-2 border-black/30 rounded-lg"
                />
                <br />
                <br />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="max-w-[635px] flex flex-col w-full  flex-1  gap-3">
            <div className="flex flex-col gap-5 px-10">
              <div className="flex justify-between items-center">
                <h2 className="text-[24px] font-medium">Product</h2>
                <h2 className="text-[24px] font-medium">Subtotal</h2>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="   text-[16px] font-normal ">
                  Asgaard sofa <span>x 1</span>
                </h2>
                <h2 className="text-[16px] font-light">Rs. 250,000.00</h2>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="   text-[16px] font-normal ">Subtotal</h2>
                <h2 className="text-[16px] font-light">Rs. 250,000.00</h2>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="text-[16px] font-normal">Total</h2>
                <h2 className="text-[#B88E2F]  text-[24px] font-bold">
                  Rs. 250,000.00
                </h2>
              </div>
            </div>
            <div className="h-[1px] max-w-[535px] mx-auto bg-black/30 w-full  " />

            <div className="flex flex-col gap-5 px-10">
              <div className="flex gap-2 justify-start   items-center">
                <div className="h-3 w-3 bg-black rounded-full " />
                <p>Direct Bank Transfer</p>
              </div>
              <p className="text-[#9F9F9F] font-[16px] ">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <div className="flex gap-2 justify-start items-center">
                <div className="h-3 w-3 border border-1  rounded-full " />
                <p className="text-[16px] font-medium text-[#9F9F9F]">Direct Bank Transfer</p>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <div className="h-3 w-3 border border-1 rounded-full " />
                <p className="text-[16px] font-medium text-[#9F9F9F]">Direct Bank Transfer</p>
              </div>
              <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
              <button className="px-10 py-2 rounded-2xl border border-1 mx-auto text-center">Place order</button>
            </div>
          </div>
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

export default CheckoutPage;
