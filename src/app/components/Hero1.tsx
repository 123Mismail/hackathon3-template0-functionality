import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero1 = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[#FAF4F4]  mb-10  overflow-hidden  ">
      <div className=" w-full flex flex-col gap-10 justify-center items-center  md:hidden    px-10 mx-auto overflow-hidden  mb-16">
        <div className="w-full flex flex-col gap-5 justify-center itens-center  ">
          <Image
            src="/images/tabel.png"
            height={400}
            width={400}
            className="     object-center "
            alt="chairs and tables images"
          />
          <span className="  ">
            <h2 className="text-[36px] font-medium">Side table</h2>
           <Link href={'/table'}> <button className="underline underline-offset-[12px]">
              View More
            </button></Link>
          </span>
        </div>
        <div className="w-full flex flex-col gap-5 justify-start pb-4  py-1   ">
          <Image
            src="/images/sofacopy.png"
            height={400}
            width={400}
            className="  w-[600px]   object-center -mr-10 "
            alt="chairs and tables images"
          />
          <span className=" ">
            <h2 className="text-[36px] font-medium ">Side Sofa</h2>
           <Link href={'/sofa'}> <button className="underline underline-offset-[12px]">
              View More
            </button></Link>
          </span>
        </div>
      </div>

{/* desktop view */}
      <div className=" hidden md:w-full   md:max-w-[1040px] md:flex    relative   md:justify-center md:items-center   py-20 mb-10   mx-auto overflow-hidden ">
        <div className="w-full  px-5 ">
          <Image
            src="/images/tabel.png"
            height={400}
            width={400}
            className="    object-center  "
            alt="chairs and tables images"
          />
          <span className=" absolute bottom-10 left-14 ">
            <h2 className="text-[36px] font-medium">Side table</h2>
            <Link href={'/table'}> <button className="underline underline-offset-[12px]">
              View More
            </button></Link>
          </span>
        </div>
        <div className="   w-full flex flex-col justify-start      ">
          <Image
            src="/images/sofacopy.png"
            height={500}
            width={500}
            className=" w-[700px]  md:ml-48 lg:ml-64 object-cover  "
            alt="chairs and tables images"
          />
          <span className="absolute bottom-10 right-36">
            <h2 className="text-[36px] font-medium ">Side sofa</h2>
            <Link href={'/sofa'}> <button className="underline underline-offset-[12px]">
              View More
            </button></Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
