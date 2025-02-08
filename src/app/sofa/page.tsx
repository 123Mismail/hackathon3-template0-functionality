"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { toast } from "react-toastify";
import { useShoppingCart } from "use-shopping-cart";

interface Iproducts {
  description: string;
  id: number;
  imagePath: string;
  stockLevel: number;
  discountPercentage: number;

  price: number;
  category: string;
  sku: number;
  name: string;
}

const CartPage = () => {
  const { addItem, cartDetails } = useShoppingCart();
  const [fetchedData, setFetchedData] = useState<Iproducts[]>();
  // fetching data

  useEffect(() => {
    const fetchDataFromSannity = async () => {
      const fetchedData =
        await client.fetch(`*[_type == "product"  && category=="Sofa"]{
  name,price,id,description,imagePath,category,stockLevel,discountPercentage
}`);

      setFetchedData(fetchedData);
    };

    fetchDataFromSannity();
  }, []);

  const handelAddToCard = (product: Iproducts) => {
    const itemsToAdd = {
      sku: String(product.id), // SKU or ID
      name: product.name, // Name of the product
      price:
        product.price - product.price * (product!.discountPercentage! / 100), // Price of the product
      quantity: product.stockLevel, // Default quantity (can be dynamic if needed)
      imagePath: product.imagePath,
      currency: "USD",
    };
    addItem(itemsToAdd);
    const totalItems = cartDetails
      ? Object.values(cartDetails).reduce(
          (total, item) => total + item.quantity,
          0
        )
      : 0;
  };

  //   toast
  const notifySuccess = () =>
    toast.success("Product Added to card successfully!", {
      position: "top-right",
      autoClose: 2000, // Close after 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const updateStock = async (
      productId: number,
      quantity: number,
      action: string
    ) => {
      try {
        const response = await fetch("/api/stockHandel", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId, quantity, action }),
        });
  
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Failed to update stock");
        }
  
        console.log("Stock updated:", data.updatedProduct);
      } catch (error: any) {
        console.error("Error:", error.message);
      }
    };


  if (fetchedData == undefined) {
    return (
      <p className="w-full h-1/3 text-center  p-28">Data not found ....</p>
    );
  }
  return (
    <div className=" w-full md:max-w-[1440px]  mx-auto   overflow-hidden    lg:pl-0 ">
      <div className="w-full h-[306px] pagesBg md:max-w-[1440px]  overflow-hidden   "></div>
      <div className="  flex justify-center items-center h-[306px] flex-col z-50">
        <Image
          src={"/images/logo.png"}
          className="-mb-[20px] object-cover"
          height={100}
          width={100}
          alt="logo image"
        />
        <h2 className="text-[48px] font-medium ">Shop</h2>
        <span className="flex justify-center items-center ">
          <Link href={"/"}>Home</Link>
          <MdOutlineKeyboardArrowRight />
          <Link href={"/sofa"}>Sofa</Link>
        </span>
      </div>
      <div className="max-w-[1440px]  flex flex-wrap justify-center items-center gap-6  py-3">
        <div className="w-full bg-white">
          <div className="max-w-[1440px] mx-auto relative overflow-hidden  py-10 ">
            <div  className="max-w-[1240px] mx-auto overflow-hidden flex flex-wrap justify-center   lg:justify-between pl-10 lg:pl-0 gap-4 md:gap-0">
              {/* main div  */}

              {fetchedData ? (
                fetchedData.map((product: Iproducts) => (
                  <div
                  className="mt-6 flex flex-col items-center justify-center"
                  key={product.id}
                >
                  <Link href={`/shop/${product.id}`}>
                    <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                      <Image
                        src={product.imagePath}
                        height={350}
                        width={350}
                        alt="blogs laptop images"
                        className="w-[230px] h-[180px] hover:scale-110 duration-300 object-cover transform transition-transform"
                      />
                      <span className="absolute top-0 bg-[#FBEBB5]">{product.discountPercentage}%OFF</span>
                    </div>
                  </Link>
                  <div className="flex flex-col gap-4 justify-center items-center text-center mt-4">
                    <p className="text-center pt-3 max-w-[250px] line-clamp-1 font-medium">
                      {product.name}
                    </p>
                    <p className="text-center pt-3 max-w-[250px] line-clamp-1 text-gray-600">
                      {product.description}
                    </p>
                    <span className=" flex flex-col w-full gap-2 mt-2">
                      <p className="  w-full p-2 bg-gray-600 text-white rounded-lg shadow-sm">
                        Rs : {product.price - (product.price * (product.discountPercentage! / 100))}

                        <span className="ml-7 line-through">RS:{product.price}</span>
                      </p>
                      <p className=" w-full p-2 bg-gray-600 text-white rounded-lg shadow-sm">
                        Stocks : {product.stockLevel}
                      </p>
                    </span>
                    <button
                      className="mt-2 px-6 py-2 w-full bg-[#FBEBB5] text-black rounded-lg hover:bg-[#ecdfb4] transition-colors duration-300 shadow-md"
                      onClick={() => {
                        handelAddToCard(product);
                        notifySuccess()
                        updateStock(
                          product.id,
                          product.stockLevel - 1,
                          "decrease"
                        );
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                ))
              ) : (
                <div className="tex-center w-full h-[400px] flex justify-center items-center ">
                  Loading papge .....
                </div>
              )}
            </div>
          </div>
        </div>

        {/* pages navigation section */}
        <div className="flex justify-center items-center gap-6">
          <span className="h-7 w-7 bg-[#FBEBB5] flex justify-center items-center">
            1
          </span>
          <span className="h-7 w-7 bg-[#FBEBB5]/60 flex justify-center items-center">
            2
          </span>
          <span className="h-7 w-7 bg-[#FBEBB5]/60 flex justify-center items-center">
            3
          </span>
          <span className="h-7 w-12 bg-[#FBEBB5]/60 flex justify-center items-center  px-4 py-1">
            Next
          </span>
        </div>
      </div>

      {/* services */}
      <div className="w-full bg-[#FAF4F4] flex flex-wrap   justify-center  items-center p-10">
        <div className="flex-1   p-8  ">
          <h2 className="text-[32px] font-medium">Free Delivery</h2>
          <p className="max-w-[276px] w-full text-[#9F9F9F]">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>
        <div className="flex-1 p-8">
          <h2 className="text-[32px] font-medium">90 Days Return</h2>
          <p className="max-w-[276px] w-full text-[#9F9F9F]">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div className="flex-1 p-8">
          <h2 className="text-[32px] font-medium">Secure Payment</h2>
          <p className="max-w-[276px] w-full text-[#9F9F9F]">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
