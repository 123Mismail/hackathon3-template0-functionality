import Image from "next/image";
 

const Herosection = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto bg-[#FBEBB5] overflow-hidden relative  py-10 ">
        <div className="flex flex-wrap justify-center gap-[-20px] items-center w-full">
          {/* content */}
          <div className=" text-[#000000]  pl-10 lg:pl-0">
            <h2 className="text-[64px] text-center md:text-left font-medium md:font-semibold">
              Rocket single <br /> seater
            </h2>

            <button className="underline underline-offset-4 pt-8 mx-auto">
              Shop Now
            </button>
          </div>
          {/* image */}
          <div>
            <Image
              src={"/images/heroimage.png"}
              height={500}
              width={500}
              className="max-w-[853px] w-full"

              alt="seat image"
            ></Image>
          </div>
        </div>
      </div>
    

    </>
  );
};

export default Herosection;
