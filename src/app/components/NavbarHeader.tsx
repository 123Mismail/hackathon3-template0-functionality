
"use client"
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonAddOutline } from "react-icons/io5";
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from "@/components/ui/button";
import Image from "next/image";

const NavbarHeader = () => {
  
  const { addItem, cartDetails, totalPrice ,removeItem} = useShoppingCart();
  const cartArray = cartDetails ? Object.values(cartDetails) : [];

console.log(cartArray);

// Ensure cartDetails is not undefined before calculating totalItems
const totalItems = cartDetails ? Object.values(cartDetails).reduce((total, item) => total + item.quantity, 0) : 0;

console.log(  cartDetails , "total no items in card ");
  
 
  return (
    <nav>
      {/* desktop navbar */}
      <div>
        <div className="   flex justify-center items-center  max-w-[1440px] h-[100px]     bg-[#FBEBB5] gap-12 mx-auto">
          <div className="hidden md:md:block">
            <ul className="flex justify-center items-center gap-4 tex-[16px] font-normal felx-wrap">
              <li className="active-underline cursor-pointer">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="active-underline cursor-pointer">
                <Link href={"/shop"}>Shop</Link>
              </li>
              <li className="active-underline cursor-pointer">
                <Link href={"/"}>About</Link>
              </li>
              <li className="active-underline cursor-pointer">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-[24px]  navElemants ">
            <Link href={"/myAccount"}>
              {" "}
              <IoPersonAddOutline className="text-xl" />
            </Link>
            <span className="flex justify-center items-center border border-spacing-1 pr-[12px]  ">
              <svg
                className="cursor-pointer"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            
            </span>
            <span>
              {" "}
              <svg
                className="cursor-pointer"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>
              {/* <Link href={'/cart'}>
           
            </Link> */}

              <Sheet >
                <SheetTrigger asChild className="flex justify-end items-center">
                  <Button variant="destructive" className="border-none ">
                  <svg width="38" height="38" className="  text-3xl" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.2354 19.1926H8.95225L9.76982 17.5273L23.3542 17.5027C23.8136 17.5027 24.2073 17.1746 24.2894 16.7207L26.1706 6.19062C26.2198 5.91445 26.146 5.63008 25.9655 5.41406C25.8763 5.30775 25.7651 5.22211 25.6395 5.16309C25.5139 5.10407 25.377 5.07308 25.2382 5.07227L7.95693 5.01484L7.80928 4.32031C7.71631 3.87734 7.31709 3.55469 6.86318 3.55469H2.63857C2.38258 3.55469 2.13707 3.65638 1.95605 3.8374C1.77503 4.01841 1.67334 4.26393 1.67334 4.51992C1.67334 4.77592 1.77503 5.02143 1.95605 5.20245C2.13707 5.38346 2.38258 5.48516 2.63857 5.48516H6.08115L6.72646 8.55312L8.31514 16.2449L6.26982 19.5836C6.16361 19.727 6.09963 19.8972 6.08514 20.075C6.07064 20.2528 6.1062 20.4312 6.18779 20.5898C6.35186 20.9152 6.68271 21.1203 7.04912 21.1203H8.76631C8.40023 21.6065 8.20249 22.1988 8.20303 22.8074C8.20303 24.3551 9.46084 25.6129 11.0085 25.6129C12.5562 25.6129 13.814 24.3551 13.814 22.8074C13.814 22.1977 13.6116 21.6043 13.2507 21.1203H17.6558C17.2897 21.6065 17.0919 22.1988 17.0925 22.8074C17.0925 24.3551 18.3503 25.6129 19.8979 25.6129C21.4456 25.6129 22.7034 24.3551 22.7034 22.8074C22.7034 22.1977 22.5011 21.6043 22.1401 21.1203H25.2382C25.7687 21.1203 26.2034 20.6883 26.2034 20.1551C26.2018 19.8994 26.0992 19.6546 25.9178 19.4743C25.7365 19.294 25.4912 19.1927 25.2354 19.1926ZM8.35889 6.91797L24.1034 6.96992L22.5612 15.6051L10.1937 15.627L8.35889 6.91797ZM11.0085 23.6715C10.5327 23.6715 10.1444 23.2832 10.1444 22.8074C10.1444 22.3316 10.5327 21.9434 11.0085 21.9434C11.4843 21.9434 11.8726 22.3316 11.8726 22.8074C11.8726 23.0366 11.7815 23.2564 11.6195 23.4184C11.4574 23.5805 11.2377 23.6715 11.0085 23.6715ZM19.8979 23.6715C19.4222 23.6715 19.0339 23.2832 19.0339 22.8074C19.0339 22.3316 19.4222 21.9434 19.8979 21.9434C20.3737 21.9434 20.762 22.3316 20.762 22.8074C20.762 23.0366 20.671 23.2564 20.5089 23.4184C20.3469 23.5805 20.1271 23.6715 19.8979 23.6715Z" fill="black"/>
                         </svg>
                        <span className="mb-7 ml-10 text-base font-normal mr-0  absolute">
                          {totalItems}
                        </span>

                  </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col justify-between  bg-white  px-0 min-h-[746px] max-w-[417px] w-full  overflow-y-auto ">
                  <div className="px-5 scroll-mx-2">
                    <h3 className="text-[24px] font-semibold">Shopping Cart</h3>
                    <div className="h-[1px] w-[287px]  bg-black/40 mt-10 "  />
                    
              
                   {cartArray.map((data)=>(
                        
                        <div className="mt-5 flex  justify-between items-center gap-4">
                        <Image
                          src={data?.image  || "/images/shop1.png"}
                          className="bg-[#FBEBB5] h-[100px] w-[120px]   rounded-[9px]"
                          height={50}
                          width={100}
                           
                          alt="card image of producrt selected"
                        />
                        <div className=" flex justify-center items-center gap-4">
                          <div> <h3 className="text-[20px] font-normal">
                            {data?.name}
                          </h3>
                          <span className="flex justify-between gap-4 items-center">
                            {data.quantity} <span className="text-xl font-light">x</span>
                            <p className="text-[#B88E2F] font-medium">Rs.{data.price}</p>
                          
                          </span></div>
                         <button 
                         onClick={()=>removeItem(data.id)}
                         >

                         <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z"
                                fill="#9F9F9F"
                              />
                            </svg>
                         </button>
                        </div>
                      </div>
                   ))}
                   
                   

                  </div>
                  <div   className="py-5">
                    <div className="flex justify-between items-center px-5 pb-10">
                      <h3 className="text-[16px] font-normal">Subtotal</h3>

                      <p className="text-[16px] font-semibold text-[#B88E2F] ">Rs.{totalPrice}</p>
                    </div>
                    <div className="h-[1px] w-full bg-black/60"/>
                    <div className="flex justify-between items-center py-10 px-5">
                     <Link href={'/cart'}> <button className="px-10 py-2 rounded-full border border-spacing-4 border-black">View Cart</button></Link>
                         
                   <Link href={'/checkout'}>
                   <button className="px-10 py-2 rounded-full border border-spacing-4 border-black">Checkout</button>
                   </Link>

                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </span>
          </div>
          <div></div>
        </div>
      </div>

      {/* mobile navbar */}

      <div className="block md:hidden absolute right-10 top-[35px]   ">
        <Sheet>
          <SheetTrigger asChild className="flex justify-end items-center ">
            <Button variant="outline">
              <GiHamburgerMenu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full  h-screen overflow-y-auto">
            <div className="   flex flex-col justify-center items-center  max-w-[1440px]  bg-white gap-12 mx-auto pt-5">
              <div>
                <ul className="flex flex-col justify-center items-center gap-4 tex-[16px] font-normal felx-wrap">
                  <li className="active-underline cursor-pointer  ">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="active-underline cursor-pointer">
                    <Link href={"/shop"}>Shop</Link>
                  </li>
                  <li className="active-underline cursor-pointer">
                    <Link href={"/"}>About</Link>
                  </li>
                  <li className="active-underline cursor-pointer">
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>

              <div></div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavbarHeader;
