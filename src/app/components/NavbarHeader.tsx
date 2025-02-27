"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger ,SheetClose } from "@/components/ui/sheet";
 
import { IoPersonAddOutline } from "react-icons/io5";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Loader from "./loader";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";

const NavbarHeader = () => { 
  const { isSignedIn, user } = useUser(); 
 
  const { cartDetails, totalPrice, removeItem } = useShoppingCart();
  // const [itemsInCart , setItemsInCart] = useState <any>([])
  let cartArray = cartDetails ? Object.values(cartDetails) : []; 

  // setItemsInCart(cartArray) 

   

  // Ensure cartDetails is not undefined before calculating totalItems
  const totalItems = cartDetails
    ? Object.values(cartDetails).reduce(
        (total, item) => total + item.quantity,
        0
      )
    : 0;

  //  hadel update stock level
  const updateStock = async (
    productId: string,
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
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  const handleRemoveItem = (itemId: string, quantity: number) => {
    removeItem(itemId); // Remove the item from the cart
    updateStock(itemId, quantity, "increase"); // Update the stock level
  };

  return (
    <nav>
      {/* desktop navbar */}
      <div>
        <div className="   flex justify-center items-center  h-[100px]     bg-[#FBEBB5] gap-12 mx-auto">
          <div className="hidden md:md:block">
            <ul className="flex justify-center items-center gap-10   tex-[20px] font-normal felx-wrap">
              <li className="active-underline cursor-pointer active:underline underline-offset-4   ">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="active-underline cursor-pointer active:underline underline-offset-4 ">
                <Link href={"/shop"}>Shop</Link>
              </li>
              <li className="active-underline cursor-pointer active:underline underline-offset-4 ">
                <Link href={"/"}>About</Link>
              </li>
              <li className="active-underline cursor-pointer active:underline underline-offset-4 ">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-[36px]  navElemants ">
            <Link
              href={isSignedIn ? "/myAccount" : "/sign-in"}
              className="active-underline cursor-pointer active:underline underline-offset-4 "
            >
              {user && isSignedIn ? (
                <Image
                  src={user.imageUrl}
                  height={50}
                  width={50}
                  alt="user proile picture"
                  className="rounded-full"
                />
              ) : (
                <IoPersonAddOutline className="text-2xl border-none" />
              )}
            </Link>
            {isSignedIn ? <SignOutButton /> : <SignInButton />}

            <span>
              {isSignedIn && (
                <Sheet>
                  <SheetTrigger
                    asChild
                    className="flex justify-end  items-center"
                  >
                    <button>
                      <svg
                        width="30"
                        height="30"
                        className="  text-xl"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.2354 19.1926H8.95225L9.76982 17.5273L23.3542 17.5027C23.8136 17.5027 24.2073 17.1746 24.2894 16.7207L26.1706 6.19062C26.2198 5.91445 26.146 5.63008 25.9655 5.41406C25.8763 5.30775 25.7651 5.22211 25.6395 5.16309C25.5139 5.10407 25.377 5.07308 25.2382 5.07227L7.95693 5.01484L7.80928 4.32031C7.71631 3.87734 7.31709 3.55469 6.86318 3.55469H2.63857C2.38258 3.55469 2.13707 3.65638 1.95605 3.8374C1.77503 4.01841 1.67334 4.26393 1.67334 4.51992C1.67334 4.77592 1.77503 5.02143 1.95605 5.20245C2.13707 5.38346 2.38258 5.48516 2.63857 5.48516H6.08115L6.72646 8.55312L8.31514 16.2449L6.26982 19.5836C6.16361 19.727 6.09963 19.8972 6.08514 20.075C6.07064 20.2528 6.1062 20.4312 6.18779 20.5898C6.35186 20.9152 6.68271 21.1203 7.04912 21.1203H8.76631C8.40023 21.6065 8.20249 22.1988 8.20303 22.8074C8.20303 24.3551 9.46084 25.6129 11.0085 25.6129C12.5562 25.6129 13.814 24.3551 13.814 22.8074C13.814 22.1977 13.6116 21.6043 13.2507 21.1203H17.6558C17.2897 21.6065 17.0919 22.1988 17.0925 22.8074C17.0925 24.3551 18.3503 25.6129 19.8979 25.6129C21.4456 25.6129 22.7034 24.3551 22.7034 22.8074C22.7034 22.1977 22.5011 21.6043 22.1401 21.1203H25.2382C25.7687 21.1203 26.2034 20.6883 26.2034 20.1551C26.2018 19.8994 26.0992 19.6546 25.9178 19.4743C25.7365 19.294 25.4912 19.1927 25.2354 19.1926ZM8.35889 6.91797L24.1034 6.96992L22.5612 15.6051L10.1937 15.627L8.35889 6.91797ZM11.0085 23.6715C10.5327 23.6715 10.1444 23.2832 10.1444 22.8074C10.1444 22.3316 10.5327 21.9434 11.0085 21.9434C11.4843 21.9434 11.8726 22.3316 11.8726 22.8074C11.8726 23.0366 11.7815 23.2564 11.6195 23.4184C11.4574 23.5805 11.2377 23.6715 11.0085 23.6715ZM19.8979 23.6715C19.4222 23.6715 19.0339 23.2832 19.0339 22.8074C19.0339 22.3316 19.4222 21.9434 19.8979 21.9434C20.3737 21.9434 20.762 22.3316 20.762 22.8074C20.762 23.0366 20.671 23.2564 20.5089 23.4184C20.3469 23.5805 20.1271 23.6715 19.8979 23.6715Z"
                          fill="black"
                        />
                      </svg>
                      <span className="mb-10 ml-10   text-base font-normal mr-0  absolute">
                        {totalItems}
                      </span>
                    </button>
                  </SheetTrigger>
                  <SheetContent className="flex flex-col justify-between  bg-gray-100 min-h-screen h-full pb-16 max-w-[417px] w-full  overflow-y-auto px-4">
                    <div className="px-5 scroll-mx-2">
                      <h3 className="text-[24px] font-semibold">
                        Shopping Cart
                      </h3>
                      <div className="h-[1px] w-[287px]    bg-black/40 mt-10 " />

                      {cartArray.length > 0 &&
                        cartArray.map((data) => (
                          <div className="mt-5 flex  justify-start items-center   gap-10  " key={data.id}>
                            {data.imagePath ? (
                              <Image
                                src={data?.imagePath}
                                className="bg-[#FBEBB5] h-[70px] w-[100px] object-cover  rounded-[9px] overflow-hidden"
                                height={100}
                                width={100}
                                alt="card image of producrt selected"
                              />
                            ) : (
                              <Loader />
                            )}

                            <div className=" flex justify-start items-center gap-4 ">
                              <div>
                                {" "}
                                <h3 className="text-[20px] font-normal max-w-[150px] line-clamp-1  ">
                                  {data?.name}
                                </h3>
                                <span className="flex justify-between gap-4 items-center">
                                  {data.quantity}{" "}
                                  <span className="text-xl font-light">x</span>
                                  <p className="text-[#B88E2F] font-medium">
                                    Rs.{Math.floor(data.price)}
                                  </p>
                                </span>
                              </div>
                              <button
                                onClick={() => handleRemoveItem(data.id, data.quantity)}
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
                    <div className="py-5">
                      <div className="flex justify-between items-center px-5 pb-10">
                        <h3 className="text-[16px] font-normal">Subtotal</h3>

                        <p className="text-[16px] font-semibold text-[#B88E2F] ">
                          Rs.{Math.floor(totalPrice as number)}
                        </p>
                      </div>
                      <div className="h-[1px]  w-full bg-black/60" />
                      <div className=" flex flex-col justify-center items-center gap-2 py-10 px-5  md:flex-row     ">
                        <span>
                          <Link href={"/cart"}>
                            {" "}
                          <SheetClose>
                          <button className="px-10 py-2 rounded-full border border-spacing-4 border-black w-full hover:ring-2 ring-[#f6d35ef6] duration-300">
                              View Cart
                            </button>
                          </SheetClose>
                          </Link>
                        </span>

                        <span>
                          {" "}
                          <Link href={"/checkout"}>
                          <SheetClose>

                          <button className="px-10 py-2 rounded-full border border-spacing-4 border-black hover:ring-2 ring-[#f6d35ef6] duration-300">
                              Checkout
                            </button>
                          </SheetClose>
                          
                          </Link>
                        </span>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              )}
            </span>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* mobile navbar */}

      <div className="block md:hidden absolute right-10 top-[35px]   ">
        <Sheet>
          <SheetTrigger asChild className="flex justify-end items-center     ">
            <Button variant="outline">
              <GiHamburgerMenu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full    h-screen overflow-y-auto  ">
            <div className="   flex flex-col justify-center items-center  max-w-[1440px]  bg-white gap-12 mx-auto pt-5">
              <div>
                <ul className="flex   flex-col justify-center items-center gap-4 tex-[16px] font-normal felx-wrap">
                  <li className="active-underline cursor-pointer  ">

                    <Link href={"/"}>
                    <SheetClose>
                    
                    Home
                    
                    </SheetClose>
                    </Link>
                  </li>
                  <li className="active-underline cursor-pointer">
                   <Link href={"/shop"}>
                    <SheetClose>
                   
                   Shop
                    </SheetClose>
                   </Link>
                  </li>
                  <li className="active-underline cursor-pointer">

                    <Link href={"/"}>
                    <SheetClose>
                    About
                    </SheetClose>
                    </Link>
                  </li>
                  <li className="active-underline cursor-pointer">

                    <Link href={"/contact"}>
                    <SheetClose>
                    
                    Contact
                    </SheetClose>
                    </Link>
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
