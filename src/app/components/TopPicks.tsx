import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopPicks = () => {
  return (
    <div className="max-w-[1440px] mx-auto relative overflow-hidden bg-[#FFFFFF] py-10  px-10">
      <div className=" flex flex-col justify-center items-center gap-14 pb-8 ">
        <h2 className="text-[36px] font-medium">Top Picks For You</h2>
        <p className="text-[#9F9F9F] text-[16px] font-medium  pb-5">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto   overflow-hidden  flex  flex-wrap justify-center     lg:justify-between    lg:pl-0   gap-4 md:gap-8  ">
        <div>
        <Image
            src={"/images/shop3.png"}
            height={350}
            width={350}
            alt="blogs laptop images"
            className="w-[230px] h-[250px]   object-cover  object-bottom "
          />
          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <p className="text-center pt-3">
              Going all-in with millennial design
            </p>
            <Link href={'/shop'}><button className="underline underline-offset-8   font-medium mx-auto">
              Read More
            </button></Link>
          </div>
        </div>
        <div>
        <Image
            src={"/images/shop4.png"}
            height={350}
            width={350}
            alt="blogs laptop images"
            className="w-[230px] h-[250px]   object-cover"
          />
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <Link href={'/shop'}><button className="underline underline-offset-8   font-medium mx-auto">
              Read More
            </button></Link>
          </div>
        </div>
        <div>
        <Image
            src={"/images/shop6.png"}
            height={350}
            width={350}
            alt="blogs laptop images"
            className="w-[230px] h-[250px]   object-contain"
          />
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <Link href={'/shop'}><button className="underline underline-offset-8   font-medium mx-auto">
              Read More
            </button></Link>
          </div>
        </div>
        <div>
        <Image
            src={"/images/shop9.png"}
            height={350}
            width={350}
            alt="blogs laptop images"
            className="w-[230px] h-[250px]   object-contain"
          />
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <Link href={'/shop'}><button className="underline underline-offset-8   font-medium mx-auto">
              Read More
            </button></Link>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center p-6 mt-6">
      <Link href={'/shop'}><button className="underline underline-offset-8   font-medium mx-auto">
              Read More
            </button></Link>
      </div>
    </div>
  );
};

export default TopPicks;
