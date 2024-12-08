import Image from "next/image";
import React from "react";

const Hero1 = () => {
  return (
    <div className="  ">
      <div className="max-w-[1440px] mx-auto  overflow-hidden  pl-10 lg:pl-0  ">
        <div className="flex flex-wrap gap-10 justify-center items-center ">
          {/* left  */}
          <div  className="flex-1   ">
            <Image src={'/images/tabbel.png'}   height={500} width={500} alt="chairs imahe"/>
           
            <h3>Side table</h3>
            <button className="underline underline-offset-4">View More </button>
          </div>
          {/* right */}
          <div className="flex-1 w-full  flex flex-col justify-start">
          <Image src={'/images/sofa.png'}   height={500} width={500} alt="chairs imahe"/>
            <h3>Side table</h3>
            <button className="underline underline-offset-4">View More </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
