import React from "react";

const InstagramComp = () => {
  return (
    <div className="max-w-[1440px] mx-auto intstagramBg  overflow-hidden     ">
      <div className="flex flex-col justify-center gap-4 items-center h-[450px]  text-center lg:pl-0 ">
        <h2 className="text-[60px] font-bold">Our Instagram</h2>
        <p className="text-[20px] ">Follow our store on Instagram</p>
        <button className="px-16 py-2 rounded-full hover:scale-105 bg-white shadow-2xl text-black">
          Follow
        </button>
      </div>
    </div>
  );
};

export default InstagramComp;
