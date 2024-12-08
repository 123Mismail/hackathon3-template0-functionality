import Image from "next/image";
import React from "react";

const Catedgories = () => {
  return (
    <div className="max-w-[1170px] mx-auto my-10">
      <div className="flex flex-col gap-10 ">

        <div className="flex flex-col gap-4">
          <div className="flex justify-start items-center gap-4">
            <div className="h-12 w-6 rounded-lg bg-red-500" />
            <h2 className="font-semibold text-red-400">Today's</h2>
          </div>
          <h3 className="text-[36px] font-semibold">Flashe Sale's</h3>
        </div>

          <div className="md:flex-row justify-start items-end gap-9  ">
            
          <div className="h-[145px] relative w-[170px]  border  flex flex-col justify-center items-center rounded-[3px]">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_39959_868)">
                  <path
                    d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.6667 7H31.1354"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28 44.0052V44.0305"
                    stroke="black"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <line
                    x1="15.1667"
                    y1="39.8334"
                    x2="40.8333"
                    y2="39.8334"
                    stroke="black"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_39959_868">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className=" p-2 ">
                <h3>Phones</h3>
              </div>
            </div>
     
          </div>
        </div>
  
    </div>
  );
};

export default Catedgories;
