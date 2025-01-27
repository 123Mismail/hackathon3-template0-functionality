
"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useShoppingCart } from "use-shopping-cart";

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
  const {cartDetails,addItem,totalPrice,removeItem} =useShoppingCart()
  const detailArray=Object.values(cartDetails!)
  console.log(detailArray ,"card details in array format ")
  console.log( typeof cartDetails,"details of all card in card")

  return (
    <div className=" w-full md:max-w-[1440px]  mx-auto   overflow-hidden    lg:pl-0 ">
      <div className="w-full h-[306px] pagesBg md:max-w-[1440px] overflow-hidden   ">
       
      </div>

      {/* card detail array is displaying  */}

     
        
              
          <div className="  flex justify-center items-center h-[306px] flex-col z-50"
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
   
      <div className="max-w-[1250px]   flex   justify-center items-center gap-6 p-10">
      
                  <div className="   md:max-w-[817px]     flex-col  gap-10 w-full">
                  <ul className="flex flex-wrap justify-evenly items-center pl-0 md:pl-24  bg-[#FFF9E5] w-full h-[55px]  ">
                    <li>Product</li>
                    <li className="ml-3">Price</li>
                    <li className="ml-3">Quantity</li>
                    <li>Subtotal</li>
                  </ul>

                  {detailArray.map((product)=>(
                  <div>
                  <ul className="flex justify-between  items-center   h-[55px] w-full">
                    <li className="bg-[#FFF9E5] -mr-5 hidden md:block flex-1 mb-2">
                      <Image
                        src={"/images/sofaSet.png"}
                        height={90}
                        width={90}
                        alt="sofa set image"
                      ></Image>
                    </li>
                    <li className="flex-1 ml-2">{product.name}</li>
                    <li className="mr-5 ml-4 md:ml-0 flex-1">
                      
                      {product.price}</li>
                    <li className="
                    flex-1">
                      <span className="h-[20px] w-[20px] border p-2 rounded-lg border-1  mr-10">
                       {product.quantity}
                      </span>
                    </li>
                    <li className="mr-8 flex-1">Rs { product.quantity>1 ? product.quantity*product.price : product.price}</li>
                    <button className="flex-1 px-4 py-2 bg-red-400 text-black"
                     onClick={()=>removeItem(product.id)}
                    >remove</button>
                  </ul>
                  <div className=" mx-auto block md:hidden">
                    { product.image ? 
                      <Image
                      src={product.image }
                      height={150}
                      width={150}
                      alt="sofa set image"
                    ></Image> :
                    <p>Loading image</p>
                    
                  }
                 
                      
                  
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
