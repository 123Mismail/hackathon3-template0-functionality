

"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";


interface    Iproduct {
  imagePath: string;
 
  description: string;
  
  stockLevel: number;
  price: number;
  category: string;
  name: string;
  id: number;
  isFeaturedProduct: boolean;
  dscountPercentage:string;
}

const ReactSlickCarousel = ({featuredProducts}:{featuredProducts:Iproduct[]} ) => {
  // Settings for the carousel
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-rotate
    autoplaySpeed: 3000, // Auto-rotate interval (3 seconds)
    pauseOnHover: true, // Pause on hover
  };
   
      interface    Iproduct {
    imagePath: string;
    
    description: string;
   
    stockLevel: number;
    price: number;
    category: string;
    name: string;
    id: number;
    isFeaturedProduct: boolean;
  }
  console.log(featuredProducts ,"featured products are fetching here in line no 51")

  const images = [
    {
      id: 1,
      url: "https://via.placeholder.com/300x200",
      alt: "Placeholder Image 1",
    },
    {
      id: 2,
      url: "https://via.placeholder.com/400x250",
      alt: "Placeholder Image 2",
    },
    {
      id: 3,
      url: "https://via.placeholder.com/500x300",
      alt: "Placeholder Image 3",
    },
    {
      id: 4,
      url: "https://via.placeholder.com/600x350",
      alt: "Placeholder Image 4",
    },
    {
      id: 5,
      url: "https://via.placeholder.com/700x400",
      alt: "Placeholder Image 5",
    },
  ];
  
 
  


  return (
    <div className="carousel-container  ">
      <Slider {...settings}>
           <div className="">
            
            <Image src={'/images/blog1.jpeg' } width={400} height={400} alt="imge of blogs" />
            
            </div>
      
      </Slider>
      <div className="mx-auto">see all</div>
    </div>
  );
};

export default ReactSlickCarousel;