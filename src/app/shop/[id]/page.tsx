"use client";
import {
  FaFacebook,
  FaLinkedin,
  FaRegUserCircle,
  FaRegCalendarAlt,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { client } from "@/sanity/lib/client";
import { useShoppingCart } from "use-shopping-cart";
import { toast } from "react-toastify";
import ProductDetailSkeleton from "@/app/components/pageLoadingSkeleton";
import { useUser } from "@clerk/nextjs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";
import AutoCarousel from "@/app/components/AutoCarousel";
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

interface Ifeedback {
  feedback: string;
}
interface Ireviews {
  _id: string;
  _createdAt: string;
  userName: string;
  productId: string;
  feedbackText: string;
}

const page = ({ params }: { params: any }) => {
  const [productsData, setProductsData] = useState<Iproduct>();
  const [categoryProduct, setCategoryProduct] = useState<Iproduct[]>();
  const [productId, setProductId] = useState("");

  const [customerName, setCustomerName] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const { cartDetails, decrementItem, incrementItem, addItem } =
    useShoppingCart();
  const { user } = useUser();

  const [getFeedBack, setFeedBackFromSanity] = useState<Ireviews[]>([]);
  const [feedBack, setFeedBack] = useState<Ifeedback>({
    feedback: "",
  });
  
  useEffect(() => {
    const fetcFeedBack = async () => {
      const { id } = await params;
      if (!id) {
        console.log("Product ID is undefined or invalid!");
        return;
      }
      try {
        const feedback = await client.fetch(
          `*[_type == "feedback" &&  productId == $id ]  {
  _id, _createdAt,userName,productId,feedbackText,
    
}`,
          { id }
        );

        if (!feedback) {
          console.log("There is no data to fetch !");

          return;
        } else {
          setFeedBackFromSanity(feedback);
          console.log("data fetch successfully!");
        }
      } catch (error) {
        console.log("Error etching data from sanity!", error);
      }
    };
    fetcFeedBack();
  }, []);

  useEffect(() => {
    if (user) {
      setCustomerName(user.firstName as string);
    }
    const fetchDataFromSanity = async () => {
      const { id } = await params;
      setProductId(String(id));
      const fetchedData =
        await client.fetch(`*[_type=="product" && id=='${id}' ][0]{
                name,id,imagePath,description,stockLevel,price,category
               
             }`);
      if (fetchedData !== undefined) {
        setProductsData(fetchedData);
      }
    };
    fetchDataFromSanity();
  }, [user]);

  useEffect(() => {
    const handelFetchDataByCategory = async () => {
      if (productsData !== undefined) {
        const fetchedDataCategory =
          await client.fetch(`*[_type=="product" && category=='${productsData?.category}']{
              name,id,imagePath,description,stockLevel,price,category,isFeaturedProduct
             
         }`);

        if (
          fetchedDataCategory.length > 0 &&
          fetchedDataCategory !== undefined
        ) {
          setCategoryProduct(fetchedDataCategory);
        }
      }
    };
    handelFetchDataByCategory();
  }, [productsData]);

  if (!productsData) {
    return <ProductDetailSkeleton />; // Render a loading state or appropriate message
  }

  // toast
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

  const handelSummitData = async () => {
    if (feedBack) {
      try {
        const newFeeback = {
          _type: "feedback",
          productId: productId,
          userName: customerName,
          feedbackText: feedBack.feedback,
        };
        if (
          newFeeback.feedbackText !== undefined &&
          productId !== undefined &&
          newFeeback.userName !== undefined &&
          newFeeback.userName.length !== 0
        ) {
          const req = await client.create(newFeeback);
          if (!req) {
            console.log("failed to send feedback to sanity  ");
            return;
          } else {
            console.log("Feedback created successfully", req);
            alert("data created successfully ...");
          }
        } else {
          alert("incomplete data is sending to sanity ");
        }
        // If the request is successful, log the response
      } catch (error) {
        // Handle any errors that occur during the request
        console.log("Error creating feedback:", error);
      }
    } else {
      alert("fields are not filled properly ..");
    }
  };
  console.log(cartDetails, "trying to check data type of card details");

  if (productsData == undefined) {
    return (
      <p className="w-full h-1/3 text-center  p-28">Data not found ....</p>
    );
  }

  return (
    <div className="w-full md:max-w-[1440px]  mx-auto   overflow-hidden px-3   lg:pl-0 ">
      <div className="w-full h-[100px] flex  justify-start px-10 items-center ">
        <ul className="flex justify-start items-center gap-4">
          <li className="flex gap-3">
            <Link href={"/"}>Home</Link> <MdOutlineKeyboardArrowRight />
          </li>
          <li className="flex gap-3">
            <Link href={"/shop"}>Shop</Link> <MdOutlineKeyboardArrowRight />
          </li>
          <li className="flex gap-3">
            <Link href={"/shop/product"}>Product</Link>{" "}
            <MdOutlineKeyboardArrowRight />
          </li>
        </ul>
      </div>

      <section className=" body-font overflow-hidden">
        <div className="container flex flex-col gap-4 lg:flex-row px-5 py-24 mx-auto">
          <div className=" float-left   flex    lg:flex-col  justify-center items-center  gap-4 md:gap-10  ">
            <div className="max-w-[76px]   bg-[#FFF9E5] w-full">
              <Image
                src={productsData?.imagePath}
                className="object-cover rotate-[180deg]  w-[250px] overflow-hidden"
                height={220}
                width={220}
                alt="product imges"
              ></Image>
            </div>
            <div className="max-w-[76px] bg-[#FFF9E5] w-full">
              <Image
                src={productsData?.imagePath}
                className="object-cover rotate-[90deg]  w-[250px] overflow-hidden"
                height={220}
                width={220}
                alt="product imges"
              ></Image>
            </div>
            <div className="max-w-[76px] bg-[#FFF9E5] w-full">
              <Image
                src={productsData?.imagePath}
                className="object-cover rotate-[360deg]  w-[250px] overflow-hidden"
                height={220}
                width={220}
                alt="product imges"
              ></Image>
            </div>
            <div className="max-w-[76px] bg-[#FFF9E5] w-full">
              <Image
                src={productsData?.imagePath}
                className="object-cover rotate-[270deg] w-[250px] overflow-hidden"
                height={250}
                width={250}
                alt="product imges"
              ></Image>
            </div>
          </div>
          {}
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <Image
              height={400}
              width={400}
              alt="ecommerce"
              className="lg:w-1/2 w-full bg-[#FFF9E5]   h-64 object-cover object-bottom md:object-center rounded lg:h-[600px]"
              priority
              src={productsData?.imagePath}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productsData?.name}
              </h1>
              <p>Rs.{productsData?.price} </p>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FFDA5B]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FFDA5B]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FFDA5B]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FFDA5B]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#FFDA5B]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <span className="text-[#9F9F9F] text-[13px] font-normal cursor-pointer">
                    <Dialog>
                      <DialogTrigger asChild>
                        {getFeedBack.length > 0 ? (
                          <Button variant="outline" className="flex flex-col relative">
                            {getFeedBack.length} Customer Review
                            <span className="   absolute -bottom-2   items-center  h-0 hover:h-10 overflow-hidden w-full bg-gray-200 text-black">click to view reviews</span>
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            className="bg-red-300 text-black cursor-not-allowed "
                            disabled
                          >
                            No Review
                          </Button>
                        )}
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-white  ">
                        <DialogHeader>
                          <DialogTitle className="text-center relative">
                            Customer Reviews
                         
                          </DialogTitle>
                        </DialogHeader>

                        <div className="w-full   bg-white p-3">
                          <ul className="p-1 w-full">
                            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                              {/* feed back  */}

                              {getFeedBack &&
                                getFeedBack.map((feedback: Ireviews) => (
                                  <div key={feedback._id}>
                                    <span className="p-2 text-blue-950 text-lg justify-between items-center font-medium flex gap-4">
                                      <span className="flex justify-start gap-1 items-center">
                                        <FaRegUserCircle className="text-xl" />
                                        {feedback.userName}
                                      </span>
                                    </span>
                                    <li className="p-1 text-base text-black mb-1">
                                      {feedback.feedbackText}
                                    </li>

                                    <span className="flex justify-start items-center gap-1 p-2">
                                      {" "}
                                      <FaRegCalendarAlt />
                                      {feedback._createdAt}
                                    </span>
                                  </div>
                                ))}
                            </ScrollArea>
                          </ul>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </span>
                </span>
              </div>
              <p className="leading-relaxed text-[13px] font-normal  ">
                {productsData?.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <div className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none active:bg-green-600" />
                  <div className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none active:bg-green-600" />
                  <div className="border-2 border-gray-300 ml-1   rounded-full w-6 h-6 focus:outline-none active:bg-green-600" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select title="size options" className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-4">
                <span className=" h-10 w-24 border border-1 border-[#9F9F9F] p-8 rounded-[15px] flex justify-center items-center gap-4 px-5 py-6 ">
                  <span
                    className="cursor-pointer"
                    onClick={() => decrementItem(productId)}
                  >
                    -
                  </span> 

                  {cartDetails &&
                  Object.values(cartDetails).length > 0 &&
                  Object.values(cartDetails).some(
                    (item) => String(item.id) === productId
                  ) ? (
                    <span>
                      {
                        Object.values(cartDetails).find(
                          (item) => String(item.id) === productId
                        )?.quantity
                      }
                    </span>
                  ) : (
                    <span>0</span>
                  )}

{
  (productsData.stockLevel) > 0 ? (
    <button
      className="cursor-pointer"
      onClick={() => incrementItem(productId)}
    >
      +
    </button>
  ) : (
    <button disabled className="cursor-not-allowed opacity-50">
      +
    </button>
  )
}
                </span>

                {/* handelling if product is not availabel */}
                {productsData.stockLevel > 0 ? (
                  <button
                    className="px-6 md:px-12 py-3 md:py-4   border-2 rounded-[15px] hover:ring-2 ring-[#f6d35ef6] duration-300"
                    onClick={() => {
                      addItem(productsData), notifySuccess();
                    }}
                  >
                    Add To Cart
                  </button>
                ) : (
                  <button className="px-6 md:px-12 py-3 md:py-4   border-2 rounded-[15px] hover:ring-2 cursor-not-allowed  ring-[#fa0f0ff6] duration-300 text-red-500">
                    Not Availabel
                  </button>
                )}
              </div>
              <div className="h-[2px] mt-10 w-full bg-[#D9D9D9]" />

              <div className="flex flex-col gap-5 py-7">
                <span className="text-[16px] text-[#9F9F9F] flex justify-start items-center gap-4">
                  <h3 className="w-24">Stocks</h3>{" "}
                  {/* Fixed width for alignment */}
                  <span>: {productsData.stockLevel}</span>
                </span>
                <span className="text-[16px] text-[#9F9F9F] flex justify-start items-center gap-4">
                  <h3 className="w-24">Status</h3>{" "}
                  {/* Fixed width for alignment */}
                  <span>
                    :{" "}
                    {productsData.stockLevel > 0
                      ? "Available"
                      : "Not Available"}
                  </span>
                </span>
                <span className="text-[16px] text-[#9F9F9F] flex justify-start items-center gap-4">
                  <h3 className="w-24">Category</h3>{" "}
                  {/* Fixed width for alignment */}
                  <span>: {productsData.category}</span>
                </span>
                <span className="text-[16px] text-[#9F9F9F] flex justify-start items-center gap-4">
                  <h3 className="w-24">Tags</h3>{" "}
                  {/* Fixed width for alignment */}
                  <span>
                    :{" "}
                    {productsData.isFeaturedProduct
                      ? "FeaturedProduct"
                      : "Not FeaturedProduct"}
                  </span>
                </span>
                <span className="text-[16px] text-[#9F9F9F] flex justify-start items-center gap-4">
                  <h3 className="w-24">Share</h3>{" "}
                  {/* Fixed width for alignment */}
                  <span className="text-black flex justify-start items-center gap-5 md:gap-10 text-xl">
                    : <FaFacebook /> <FaLinkedin className="rounded-[100px]" />
                    <AiFillTwitterCircle />
                  </span>
                  <CiHeart className="text-5xl text-[#FF0000]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <div className="h-[1.3px] bg-black/40 w-full max-w-[1440px]" />
      <div className="max-w-[1440px] mx-auto relative overflow-hidden  py-10 ">
        <div className="max-w-[650px] mx-auto text-[24px] px-5 flex flex-wrap justify-between">
          <h2>Description</h2>
          <p className="text-[#9F9F9F]">Additional Information</p>

          <span
            className={`cursor-pointer focus:outline-none duration-300 ${
              showFeedback ? "text-black" : "text-[#9F9F9F]"
            }`}
            onClick={() => setShowFeedback((prev) => !prev)}
          >
            Leave A Feedback
          </span>
          <div className="w-full">
            {showFeedback && (
              <span className="p-3 flex justify-center  px-2  w-full items-center ">
                <label htmlFor="feedback" className="text-center text-black">
                  Feedback <br />
                  <Textarea
                    className=" w-[300px] text-lg  "
                    onChange={(e) =>
                      setFeedBack({ ...feedBack, feedback: e.target.value })
                    }
                    required
                  ></Textarea>
                  <br />
                  {feedBack && feedBack.feedback !== "" ? (
                    <Button
                      className="300px"
                      onClick={() => {
                        setShowFeedback((prev) => !prev), handelSummitData();
                      }}
                    >
                      Submit
                    </Button>
                  ) : (
                    <button className="mt-2 px-4 py-2 bg-[#f0754f] text-black rounded-lg hover:bg-[#f6c9bd] transition duration-300 focus:outline-none focus:ring-2 focus:bg-[#FBEBB5] focus:ring-offset-2 text-sm">
                      feedback
                    </button>
                  )}
                </label>
              </span>
            )}
          </div>
        </div>
        <div className="max-w-[1026px] px-5 text-[16px] leading-7 text-[#9F9F9F] mx-auto  flex flex-col gap-6 py-4">
          <p>{productsData.description}.</p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="max-w-[1239px] w-full flex  flex-col md:flex-row px-5 gap-4 mx-auto ">
          <div className="bg-[#FFF9E5]    overflow-hidden h-[348px] flex jsutify-center items-center">
            <Image
              src={productsData?.imagePath}
              className="object-cover object-bottom mb-28 w-[600px]"
              height={500}
              width={500}
              alt="sofa set image "
            ></Image>
          </div>
          <div className="bg-[#FFF9E5] overflow-hidden h-[348px] flex justify-center items-center">
            <Image
              src={productsData?.imagePath}
              className="  object-left object-cover  w-[600px] mb-28"
              height={500}
              width={500}
              alt="sofa set image"
            />
          </div>
        </div>
      </div>

      {/* related  */}

       <AutoCarousel  categoryProduct={categoryProduct} addItem={addItem} notifySuccess={notifySuccess}/>
    </div>
  );
};

export default page;
