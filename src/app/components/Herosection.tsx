import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <>
      <div className="  mx-auto bg-[#FBEBB5] overflow-hidden relative py-10 px-10 mb-10">
        <div className="flex flex-wrap justify-center gap-[-20px] items-center w-full">
          {/* content */}
          <div className="text-[#000000]   lg:pl-0">
            <h2 className=" text-[50px] md:text-[64px] text-center md:text-left font-medium md:font-semibold">
              Rocket single <br /> seater
            </h2>

          <Link  href={'/chairs'}>  <button className="underline underline-offset-4 pt-8 mx-auto">
              Shop Now
            </button></Link>
          </div>
          {/* image */}
          <div className="transform scale-x-[-1]"> {/* Flip the image horizontally */}
            <Image
              src={"/images/mainchair.png"}
              height={500}
              width={500}
              className="max-w-[853px] w-full"
              alt="seat image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;