"use client";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
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
}

const page = ({ params }: { params: any }) => {
  const [productsData, setProductsData] = useState<Iproduct>();
  const [categoryProduct, setCategoryProduct] = useState<Iproduct[]>();
  const [productId, setProductId] = useState("");
  const { cartDetails, decrementItem, incrementItem, addItem } =
    useShoppingCart();
  // const [quantityProduct, setQuantityProduct] = useState(0);

  // if (cartDetails && productsData !== undefined)
  //   const arrayProduct = Object.values(cartDetails);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const handelFetchDataByCategory = async () => {
      if (productsData !== undefined) {
        const fetchedDataCategory =
          await client.fetch(`*[_type=="product" && category=='${productsData?.category}']{
              name,id,imagePath,description,stockLevel,price,category
             
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

      
    if(productsData == undefined){
      return <p className="w-full h-1/3 text-center  p-28">Data not found ....</p>
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
            <div className="max-w-[76px] bg-[#FFF9E5] w-full">
              <Image
                src={productsData?.imagePath}
                className="object-cover rotate-[180deg]"
                height={220}
                width={220}
                alt="product imges"
              ></Image>
            </div>
            <div className="max-w-[76px] bg-[#FFF9E5] w-full">
              <Image
                src={productsData?.imagePath}
                className="object-cover rotate-[90deg]"
                height={220}
                width={220}
                alt="product imges"
              ></Image>
            </div>
            <div className="max-w-[76px] bg-[#FFF9E5] w-full">
              <Image
                src={productsData?.imagePath}
                className="object-cover rotate-[360deg]"
                height={220}
                width={220}
                alt="product imges"
              ></Image>
            </div>
            <div className="max-w-[76px] bg-[#FFF9E5] w-full">
              <Image
                src={productsData?.imagePath}
                className="object-cover rotate-[270deg]"
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
              className="lg:w-1/2 w-full bg-[#FFF9E5] lg:h-auto h-64 object-contain object-center rounded "
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
                  <span className="text-[#9F9F9F] text-[13px] font-normal">
                    5 Customer Review
                  </span>
                </span>
              </div>
              <p className="leading-relaxed text-[13px] font-normal  ">
                {productsData?.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <div className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                  <div className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                  <div className="border-2 border-gray-300 ml-1 bg-[#FFDA5B] rounded-full w-6 h-6 focus:outline-none" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
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

                  <span
                    className="cursor-pointer"
                    onClick={() => incrementItem(productId)}
                  >
                    +
                  </span>
                </span>
                <button
                  className="px-12 py-4   border-2 rounded-[15px]"
                  onClick={() => {
                    addItem(productsData), notifySuccess();
                  }}
                >
                  Add To Cart
                </button>
              </div>
              <div className="h-[2px] mt-10 w-full bg-[#D9D9D9]" />

              <div className="flex flex-col  gap-5   py-7 ">
                <span className="text-[16px] text-[#9F9F9F] flex justify-start gap-10">
                  {" "}
                  <h3>SKU</h3> <span>: {productsData.sku}</span>
                </span>
                <span className="text-[16px] text-[#9F9F9F] flex  justify-start gap-2">
                  {" "}
                  <h3>Category</h3> <span>: {productsData.category}</span>
                </span>
                <span className="text-[16px] text-[#9F9F9F] flex  justify-start gap-10">
                  {" "}
                  <h3>Tags</h3> <span>: Sofa, Chair, Home, Shop</span>
                </span>
                <span className="text-[16px] text-[#9F9F9F] flex  justify-start gap-10">
                  {" "}
                  <h3>Share</h3>{" "}
                  <span className="text-black flex  justify-start items-center gap-5 md:gap-10 text-xl">
                    :<FaFacebook /> <FaLinkedin className="rounded-[100px]" />
                    <AiFillTwitterCircle />
                  </span>
                  <CiHeart className="text-5xl text-[#FF0000] " />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <div className="h-[1.3px] bg-black/40 w-full max-w-[1440px]" />
      <div className="max-w-[1440px] mx-auto relative overflow-hidden  py-10 ">
        <div className="max-w-[650px] mx-auto text-[24px] px-5 flex flex-wrap justify-between ">
          <h2>Description</h2>
          <p className="text-[#9F9F9F]">Additional Information</p>
          <p className="text-[#9F9F9F]">Reviews [5]</p>
        </div>
        <div className="max-w-[1026px] px-5 text-[16px] leading-7 text-[#9F9F9F] mx-auto  flex flex-col gap-6 py-4">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
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
              src={"/images/productSofa.png"}
              className="object-cover object-bottom mb-28 w-[600px]"
              height={500}
              width={500}
              alt="sofa set image "
            ></Image>
          </div>
          <div className="bg-[#FFF9E5] overflow-hidden h-[348px] flex justify-center items-center">
            <Image
              src={"/images/product.png"}
              className="object-contain object-center  w-[600px] mb-28"
              height={500}
              width={500}
              alt="sofa set image"
            />
          </div>
        </div>
      </div>

      {/* related  */}

      <div className="max-w-[1440px] mx-auto relative overflow-hidden   px-4 py-14 ">
        <div className=" flex flex-col justify-center items-center gap-14 pb-8 ">
          <h2 className="text-[36px] font-medium">Related Products</h2>
        </div>
        <div className="max-w-[1240px] mx-auto    overflow-hidden  flex  flex-wrap justify-center   lg:justify-between   pl-10 lg:pl-0    md:gap-0  ">
          {/* related products */}

          {categoryProduct &&
            categoryProduct.slice(0, 4).map((categoryProduct: any) => (
              <div key={productsData.id} className="mx-3">
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
                  <button
                    className="px-10 py-3 bg-blue-700 text-white hover:bg-blue-600   scale-110 duration-200"
                    onClick={() => {
                      addItem(categoryProduct.id), notifySuccess();
                    }}
                  >
                    Add to card
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className=" flex justify-center items-center p-6 mt-6">
          <Link href={"/shop"}>
            {" "}
            <button className="underline underline-offset-8 mx-auto text-[20px] font-medium">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
