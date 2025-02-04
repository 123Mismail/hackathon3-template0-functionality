
"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useShoppingCart } from "use-shopping-cart";
import Loader from "../components/loader";

interface Iproduct{
  imagePath: string,
  description: string,
  stockLevel: number,
  price: number,
  category: string,
  name: string,
  id:number

}
 
const CartPage = () => {
  console.log(useShoppingCart() ,"tying to check data into use shopping cart ")
  const {cartDetails,totalPrice,removeItem} =useShoppingCart()
  const detailArray=Object.values(cartDetails!)
  

  return (
    <div className=" w-full md:max-w-[1440px]  mx-auto   overflow-hidden    lg:pl-0 ">
      <div className="w-full h-[306px] pagesBg md:max-w-[1440px] overflow-hidden   ">
       
      </div>

      {/* card detail array is displaying  */}

     
        
              
          <div className="  flex   justify-center items-center h-[306px] flex-col z-50"
          >
          <Image
            src={"/images/logo.png"}
            className="-mb-[20px]"
            height={100}
            width={100}
            alt="logo image"
          />
          <h2 className="text-[48px] font-medium ">Cart</h2>
          <span className="flex justify-center items-center ">
            <Link href={"/"}>Home</Link>
            <MdOutlineKeyboardArrowRight />
            <Link href={"/"}>Cart</Link>
          </span>
        </div>

 

        {/* card proce total  */}
   
      <div className="max-w-[1250px]    flex-col md:flex-row  justify-center items-center gap-6 p-10">
      
                  <div className="   md:max-w-[817px]     flex-col  gap-10 w-full">
                  <ul className="flex flex-wrap justify-evenly items-center pl-0 md:pl-24  bg-[#FFF9E5] w-full h-[55px]  ">
                    <li>Product</li>
                    <li className="ml-3">Price</li>
                    <li className="ml-3">Quantity</li>
                    <li>Subtotal</li>
                  </ul>

                  {detailArray.map((product) => (
  <div key={product.id} className="border-b border-gray-200 py-4">
    {/* Desktop View */}
    <ul className="hidden md:flex justify-between items-center h-[55px] w-full">
      <li className="bg-[#FFF9E5] -mr-5 flex-1 mb-2">
        {product.imagePath ? (
          <Image
            src={product.imagePath}
            height={90}
            width={90}
            alt="sofa set image"
            className="h-[70px] w-[100px] object-cover mb-3 rounded-lg"
          />
        ) : (
          <Loader />
        )}
      </li>
      <li className="flex-1 ml-2 line-clamp-2 max-w-24 text-gray-700 font-medium">
        {product.name}
      </li>
      <li className="mr-5 ml-4 md:ml-0 flex-1 text-gray-600">
        Rs {product.price}
      </li>
      <li className="flex-1">
        <span className="h-[20px] w-[20px] border p-2 rounded-lg border-gray-300 mr-10 flex items-center justify-center text-gray-700">
          {product.quantity}
        </span>
      </li>
      <li className="mr-8 flex-1 text-gray-700 font-semibold">
        Rs {product.quantity > 1 ? product.quantity * product.price : product.price}
      </li>
      <button
        className="flex-1 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition duration-300"
        onClick={() => removeItem(product.id)}
      >
        Remove
      </button>
    </ul>

    {/* Mobile View */}
    <div className="md:hidden flex justify-between items-center mb-2">
      {product.imagePath ? (
        <Image
          src={product.imagePath}
          height={150}
          width={150}
          className="h-[70px] w-[100px] mt-2 rounded-lg"
          alt="sofa set image"
        />
      ) : (
        <Loader />
      )}
      <div className="flex flex-col items-end space-y-2">
        <span className="text-gray-700 font-medium">{product.name}</span>
        <span className="text-gray-600">Rs {product.price}</span>
        <span className="text-gray-700 font-semibold">
          Total: Rs {product.quantity > 1 ? product.quantity * product.price : product.price}
        </span>
        <button
          className="px-3 h-10 bg-red-400 text-white rounded-lg hover:bg-red-500 transition duration-300"
          onClick={() => removeItem(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  </div>
))}
                </div>
      

       


        <div className="p-10 flex    flex-col justify-center items-center gap-5    bg-[#FFF9E5]">
          <h2>Cart Totals</h2>
          <span className="flex justify-between items-center gap-8 text-[16] font-medium">
            {" "}
            Subtotal{" "}
            <p className="text-[#9F9F9F] text-[16px] font-normal">
              Rs. {totalPrice}
            </p>
          </span>
          <span className="flex justify-between items-center gap-8 text-[16] font-medium">
            {" "}
            Total{" "}
            <p className="text-[#B88E2F] text-[20px] font-medium">
              Rs. {totalPrice}
            </p>
          </span>
         <Link href={'/checkout'}> <button className="px-10 py-2 rounded-xl border-2">Check Out</button></Link>
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
