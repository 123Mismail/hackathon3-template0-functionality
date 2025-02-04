import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroChairs = () => {
  return (
    <div className="max-w-[1440px] mx-auto   overflow-hidden    bg-[#FFF9E5]">
      <div className="flex flex-wrap pb-10 lg:pb-0 justify-center items-center gap-10">
        <Image
          src={"/images/sofaSet.png"}
          className="w-[983px] md:w-[783px]"
          height={700}
          width={700}
          alt="sofa set images"
        ></Image>
        <div className="flex flex-col gap-3 text-center">
          <h4>New Arrivals</h4>
          <h2 className="text-[48px] font-bold">Asgaard sofa</h2>
         <Link href={'/sofa'}>
         <button className="px-10 py-3 border max-w-[200px] mx-auto">
            See More
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroChairs;
