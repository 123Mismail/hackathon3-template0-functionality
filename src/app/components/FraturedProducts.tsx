"use client";

import ReactSlickCarousel from "@/components/crouselComponents";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface Iproduct {
  imagePath: string;

  description: string;
  dscountPercentage: string;
  stockLevel: number;
  price: number;
  category: string;
  name: string;
  id: number;
  isFeaturedProduct: boolean;
}

const FraturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Iproduct[]>([]);
  useEffect(() => {
    const fetchFeaturedProducst = async () => {
      try {
        const res = await client.fetch(`
           *[_type=="product" && isFeaturedProduct ]{
                name,id,imagePath,description,stockLevel,price,category,dscountPercentage
               
             }
          `);
          console.log(res ,"trying to fetch response from sanity here ")
        if (!res || res.length==0) {
          return console.log("failed to fetch data from sanity ");
        } else {
          setFeaturedProducts(res.slice(0,4));
          console.log("Featured products fetched successfully!");
        }
      } catch (error) {
        console.log("Error fetching data from sanity ", error);
      }
    };
    fetchFeaturedProducst();
  }, []);
  console.log(featuredProducts, "featured products list ");
  return (
    <div className="max-w-[1440px] mx-auto bg-[#FAF4F4]  mb-10  overflow-hidden  ">
      <div className=" flex flex-col justify-center items-center gap-14 pb-8 ">
        <h2 className="text-[36px] font-medium">Featured Products</h2>
        <p className="text-[#9F9F9F] text-[16px] font-medium  pb-5">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
        <ReactSlickCarousel featuredProducts={featuredProducts} />
      </div>
    </div>
  );
};

export default FraturedProducts;
