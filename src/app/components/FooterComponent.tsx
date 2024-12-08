import React from "react";

import Link from "next/link";

const FooterComponent = () => {
  return (
    <div className="min-h-[440px] bg-white ">
      <div className="     max-w-[1440px] min-h-[555px]  mx-auto overflow-hidden">
        <div className=" flex flex-wrap  p-[10px] pl-10 lg:pl-0 justify-between  items-center max-w-[1131px] min-h-[312px] mx-auto gap-10">
          <div className="max-w-60">
            <h3 className="text-[#9F9F9F] mb-10">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </h3>
          </div>
          <div>
            <div className="flex flex-wrap gap-20">
              <div className="flex flex-col gap-5">
                <h2 className="text-black/40">Links</h2>
                <ul className="flex flex-col gap-5 font-medium">
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"/shop"}>Shop</Link>
                  </li>
                  <li>
                    <Link href={"/about"}>About </Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-black/40">Helps</h2>

                <ul className="flex flex-col gap-5">
                  <li>
                    <Link href={"/"}>Payment OPtions</Link>
                  </li>
                  <li>
                    <Link href={"/shop"}>Returns</Link>
                  </li>
                  <li>
                    <Link href={"/about"}>Privacy Policy </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-black/40">Newsletter</h2>

                <ul className="flex justify-center items-center  gap-5">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address "
                    className=" underline  underline-offset-2 outline-none"
                  />
                  <label
                    htmlFor="#"
                    className="underline underline-offset-4 text-[14px] font-medium"
                  >
                    SUBSCRIBE
                  </label>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px]  max-w-[1131px] bg-[#9F9F9F] mx-auto" />
        <div className="h-[1px]  max-w-[1131px] mx-auto pt-10 text-[#9F9F9F] pl-10 md:pl-0">
          2022 Meubel House. All rights reverved
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
