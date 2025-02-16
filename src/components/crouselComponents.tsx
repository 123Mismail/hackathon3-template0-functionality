

"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

const ReactSlickCarousel = ({categoryProduct,addItem,notifySuccess}:any) => {
  // Settings for the carousel
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-rotate
    autoplaySpeed: 3000, // Auto-rotate interval (3 seconds)
    pauseOnHover: true, // Pause on hover
  };
   
  interface Iproduct {
    imagePath: string;
    sku: string;
    description: string;
    currency: string;
    stockLevel: number;
    price: number;
    category: string;
    name: string;
    id: number;
    isFeaturedProduct: boolean;
  }

  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];
  return (
    <div className="carousel-container  ">
      <Slider {...settings}>

        {/* {
          images.map((img:any)=>(
            <div>
              <img src={img} alt="image " />
              <h2>My image </h2>
              <button>Click to buy</button>
            </div>
          ))
        } */}
      {categoryProduct &&
            categoryProduct.slice(0, 4).map((categoryProduct: any ,ind:number) => (

              <div key={ind} className="mx-3 bg-red-700">
                {categoryProduct.imagePath ? (
                  <Image
                    src={categoryProduct.imagePath}
                    height={350}
                    width={350}
                    alt="blogs laptop images"
                    className="w-[230px] h-[250px] py-5  object-cover hover:scale-110 duration-300"
                  />
                ) : (
                  <p>Loading ...</p>
                )}

                <div className="flex flex-col gap-6 justify-center items-center text-center">
                  <p className="text-center pt-3">{categoryProduct.name}</p>
                  <Link
                    href={`/${categoryProduct.category.toLocaleLowerCase()}`}
                  >
                    {" "}
                    <button className="underline underline-offset-8   font-medium mx-auto">
                      Show More
                    </button>
                  </Link>
                  {categoryProduct.stockLevel > 0 ? (
                    <button
                      className="px-10 py-3 bg-[#FBEBB5] text-black hover:bg-[#f8e8b5]   scale-110 duration-200"
                      onClick={() => {
                        addItem(categoryProduct.id), notifySuccess();
                      }}
                    >
                      Add to card
                    </button>
                  ) : (
                    <button className="px-10 py-3 bg-[#e34040] text-black hover:bg-[#f8e8b5] cursor-not-allowed  scale-110 duration-200">
                      Not Availabel
                    </button>
                  )}
                </div>
              </div>
              

            ))}
      </Slider>
      <div className="mx-auto">see all</div>
    </div>
  );
};

export default ReactSlickCarousel;