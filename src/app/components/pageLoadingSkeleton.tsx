import React from "react";

const ProductDetailSkeleton = () => {
  return (
    <section className="body-font overflow-hidden animate-pulse">
      <div className="container flex flex-col gap-4 lg:flex-row px-5 py-24 mx-auto">
        {/* Left Thumbnails */}
        <div className="float-left flex lg:flex-col justify-center items-center gap-4 md:gap-10">
          {Array(4).fill(0).map((_, index) => (
            <div key={index} className="max-w-[76px] bg-gray-200 w-full h-[220px] rounded-md" />
          ))}
        </div>

        {/* Main Product Display */}
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full bg-gray-200 h-[400px] rounded-md" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="h-8 bg-gray-200 w-3/4 rounded-md mb-4" />
            <div className="h-6 bg-gray-200 w-1/4 rounded-md mb-4" />
            <div className="flex mb-4">
              {Array(5).fill(0).map((_, index) => (
                <div key={index} className="w-4 h-4 bg-gray-200 rounded-full mr-1" />
              ))}
              <span className="ml-3 pl-3 border-l-2 border-gray-300 text-gray-200">5 Customer Review</span>
            </div>
            <div className="h-16 bg-gray-200 w-full rounded-md mb-4" />

            {/* Color and Size Options */}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {Array(3).fill(0).map((_, index) => (
                  <div key={index} className="border-2 border-gray-300 rounded-full w-6 h-6 bg-gray-200 ml-1" />
                ))}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="w-20 h-10 bg-gray-200 rounded-md" />
              </div>
            </div>

            {/* Quantity and Buttons */}
            <div className="flex justify-start items-center gap-4">
              <div className="h-10 w-24 bg-gray-200 rounded-md" />
              <div className="h-12 w-32 bg-gray-200 rounded-md" />
            </div>

            {/* Additional Info */}
            
          </div>
        </div>
      </div>

     
       
      
    </section>
  );
};

export default ProductDetailSkeleton;