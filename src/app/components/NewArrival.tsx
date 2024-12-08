import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewArrival = () => {
  return (
    <div className="max-w-[1170px] mx-auto my-10">
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-start items-center gap-4">
          <div className="h-12 w-6 rounded-lg bg-red-500" />
          <h2 className="font-semibold text-[#DB4444]">Featured</h2>
        </div>
        <h3 className="text-[36px] font-semibold">New Arrival</h3>
      </div>
      <div className="w-full flex  md:flex-row      flex-wrap  gap-[30px]">
        {/* left div */}
        <div className=" bg-black flex-1 gap-[30px] max-h-[577px]">
          <Image
            src={"/images/newarrival.png"}
            height={500}
            width={500}
            alt="gaming gadgets pictures"
            className="object-left-bottom "
             
          />
         
        </div>
        {/* right div */}
        <div className="flex  flex-col flex-1 gap-[30px]">
          <div className=" bg-black max-w-[570px]">
            <Image
              src={"/images/arrival1.jpeg"}
              height={400}
              width={400}
              alt="girl wearing head picture"
              className="object-right"
            />
          </div>
          <div className="flex  gap-[30px]">
            <div className="bg-black">
              {" "}
              <Image
                src={"/images/arrival2.png"}
                height={400}
                width={400}
                alt="perfume brand image"
              />
            </div>
            <div className="bg-black">
           <div  className="flex justify-center items-center"> <Image
                src={"/images/arrival3.png"}
                height={400}
                width={400}
                alt="perfume brand image"
                className="object-right-bottom"
              /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
