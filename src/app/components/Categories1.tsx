import React from "react";
import BtnComponent from "./BtnComponent";
import Image from "next/image";

const Categories1 = () => {
  return (
    <div className="max-w-[1170px] mx-auto my-10">
      <div className="w-full min-h-[500px] lg:h-[500px] bg-black  flex  items-center">
        {/*content */}
        <div className="text-white flex-1 flex-col justify-center items-center  p-8 ">
          <h3 className="text-[#00FF66] text-[16px] font-semibold pb-2">Catedories</h3>
          <h2 className="text-[48px] font-semibold">Enhance Your Music Experience</h2>
          <div className="flex gap-2 py-2">
            <div className="h-20 w-20 rounded-full bg-white text-black  flex flex-col justify-center items-center">
              <span className=" text-[16px] font-semibold">23</span>
              Hours
            </div>
            <div className="h-20 w-20 rounded-full bg-white text-black  flex flex-col justify-center items-center">
              <span className=" text-[16px] font-semibold">23</span>
              Hours
            </div>
            <div className="h-20 w-20 rounded-full bg-white text-black  flex flex-col justify-center items-center">
              <span className=" text-[16px] font-semibold">23</span>
              Hours
            </div>
            <div className="h-20 w-20 rounded-full bg-white text-black  flex flex-col justify-center items-center">
              <span className=" text-[16px] font-semibold">23</span>
              Hours
            </div>
          </div>
         <div className="pt-3 "> <BtnComponent classes={" px-8 py-3 rounded-[3px] bg-[#00FF66] text-white "} text={"Buy Now!"}/></div>
        </div>
        {/* image */}
        <div className="overflow-hidden">
            <Image src={'/images/category1.png'} height={500} width={500} alt="category products image" className="w-[568px] shadow-2xl "></Image>
        </div>
      </div>
    </div>
  );
};

export default Categories1;
