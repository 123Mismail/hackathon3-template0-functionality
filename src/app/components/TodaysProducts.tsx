import React from "react";
import Card from "./Card";
import BtnComponent from "./BtnComponent";

const TodaysProducts = () => {
  return (
    <div className='max-w-[1170px] mx-auto my-10'>
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col md:flex-row justify-start items-end gap-9  ">
          <div className="flex flex-col gap-4">
            <div className="flex justify-start items-center gap-4">
              <div className="h-12 w-6 rounded-lg bg-red-500" />
              <h2 className="font-semibold text-red-400">Today's</h2>
            </div>
            <h3 className="text-[36px] font-semibold">Flashe Sale's</h3>
          </div>
          <div className="flex gap-4">
            <span className="flex flex-col text-[36px] font-semibold">
              <h3 className="text-[18px] font-normal">Days </h3>
              03 :
            </span>

            <span className="flex flex-col text-[36px] font-semibold">
              <h3 className="text-[18px] font-normal">Hours </h3>
              23 :
            </span>

            <span className="flex flex-col text-[36px] font-semibold">
              <h3 className="text-[18px] font-normal">Mints </h3>
              19 :
            </span>

            <span className="flex flex-col text-[36px] font-semibold">
              <h3 className="text-[18px] font-normal">Seconds </h3>
              56
            </span>
          </div>
        </div>
         <div className="flex gap-10 max-w-[1308px] flex-wrap md:flex-nowrap ">
        <Card />
        <Card />
        <Card />
        <Card />
          <Card /></div>
          <div className="flex justify-center items-center">
          <BtnComponent
            classes={"px-10 py-3 rounded-[3px] bg-red-400 text-white"}
            text={"view all products"}
          />
        </div>
      </div>
    </div>
  );
};

export default TodaysProducts;
