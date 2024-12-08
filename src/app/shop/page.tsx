import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
 
const CartPage = () => {
  return (
    <div className=" w-full md:max-w-[1440px]  mx-auto   overflow-hidden    lg:pl-0 ">
      <div className="w-full h-[306px] pagesBg overflow-hidden   ">
        <div className="  flex justify-center items-center h-[306px] flex-col z-50">
          <Image
            src={"/images/logo.png"}
            className="-mb-[20px]"
            height={100}
            width={100}
            alt="logo image"
          />
          <h2 className="text-[48px] font-medium ">Shop</h2>
          <span className="flex justify-center items-center ">
            <Link href={"/"}>Home</Link>
            <MdOutlineKeyboardArrowRight />
            <Link href={"/"}>Shop</Link>
          </span>
        </div>
      </div>
      <div className="max-w-[1440px]  flex flex-wrap justify-center items-center gap-6  py-3">
        <div className="w-full bg-[#FAF4F4] h-[100px]  flex flex-wrap px-3 md:px-0 justify-around items-center">
          <div>
            <ul className="flex justify-start gap-7 items-center">
              <li className="flex gap-1">
                {" "}
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.0238 7.14286H8.92858M6.54763 7.14286H2.9762M22.0238 19.0476H8.92858M6.54763 19.0476H2.9762M16.0714 13.0952H2.9762M22.0238 13.0952H18.4524M7.7381 4.76191C8.05384 4.76191 8.35664 4.88733 8.5799 5.11059C8.80315 5.33385 8.92858 5.63665 8.92858 5.95238V8.33333C8.92858 8.64907 8.80315 8.95187 8.5799 9.17513C8.35664 9.39838 8.05384 9.52381 7.7381 9.52381C7.42237 9.52381 7.11957 9.39838 6.89631 9.17513C6.67305 8.95187 6.54763 8.64907 6.54763 8.33333V5.95238C6.54763 5.63665 6.67305 5.33385 6.89631 5.11059C7.11957 4.88733 7.42237 4.76191 7.7381 4.76191V4.76191ZM7.7381 16.6667C8.05384 16.6667 8.35664 16.7921 8.5799 17.0153C8.80315 17.2386 8.92858 17.5414 8.92858 17.8571V20.2381C8.92858 20.5538 8.80315 20.8566 8.5799 21.0799C8.35664 21.3031 8.05384 21.4286 7.7381 21.4286C7.42237 21.4286 7.11957 21.3031 6.89631 21.0799C6.67305 20.8566 6.54763 20.5538 6.54763 20.2381V17.8571C6.54763 17.5414 6.67305 17.2386 6.89631 17.0153C7.11957 16.7921 7.42237 16.6667 7.7381 16.6667ZM17.2619 10.7143C17.5776 10.7143 17.8804 10.8397 18.1037 11.063C18.327 11.2862 18.4524 11.589 18.4524 11.9048V14.2857C18.4524 14.6014 18.327 14.9043 18.1037 15.1275C17.8804 15.3508 17.5776 15.4762 17.2619 15.4762C16.9462 15.4762 16.6434 15.3508 16.4201 15.1275C16.1969 14.9043 16.0714 14.6014 16.0714 14.2857V11.9048C16.0714 11.589 16.1969 11.2862 16.4201 11.063C16.6434 10.8397 16.9462 10.7143 17.2619 10.7143V10.7143Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Filter
              </li>
              <li className="flex gap-1">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6666 22.1667C17.7384 22.1667 16.8482 21.7979 16.1918 21.1415C15.5354 20.4852 15.1666 19.5949 15.1666 18.6667C15.1666 17.7384 15.5354 16.8482 16.1918 16.1918C16.8482 15.5354 17.7384 15.1667 18.6666 15.1667C19.5949 15.1667 20.4851 15.5354 21.1415 16.1918C21.7979 16.8482 22.1666 17.7384 22.1666 18.6667C22.1666 19.5949 21.7979 20.4852 21.1415 21.1415C20.4851 21.7979 19.5949 22.1667 18.6666 22.1667ZM9.33331 22.1667C8.40506 22.1667 7.51482 21.7979 6.85844 21.1415C6.20206 20.4852 5.83331 19.5949 5.83331 18.6667C5.83331 17.7384 6.20206 16.8482 6.85844 16.1918C7.51482 15.5354 8.40506 15.1667 9.33331 15.1667C10.2616 15.1667 11.1518 15.5354 11.8082 16.1918C12.4646 16.8482 12.8333 17.7384 12.8333 18.6667C12.8333 19.5949 12.4646 20.4852 11.8082 21.1415C11.1518 21.7979 10.2616 22.1667 9.33331 22.1667ZM18.6666 12.8333C17.7384 12.8333 16.8482 12.4646 16.1918 11.8082C15.5354 11.1518 15.1666 10.2616 15.1666 9.33333C15.1666 8.40508 15.5354 7.51484 16.1918 6.85846C16.8482 6.20208 17.7384 5.83333 18.6666 5.83333C19.5949 5.83333 20.4851 6.20208 21.1415 6.85846C21.7979 7.51484 22.1666 8.40508 22.1666 9.33333C22.1666 10.2616 21.7979 11.1518 21.1415 11.8082C20.4851 12.4646 19.5949 12.8333 18.6666 12.8333ZM9.33331 12.8333C8.40506 12.8333 7.51482 12.4646 6.85844 11.8082C6.20206 11.1518 5.83331 10.2616 5.83331 9.33333C5.83331 8.40508 6.20206 7.51484 6.85844 6.85846C7.51482 6.20208 8.40506 5.83333 9.33331 5.83333C10.2616 5.83333 11.1518 6.20208 11.8082 6.85846C12.4646 7.51484 12.8333 8.40508 12.8333 9.33333C12.8333 10.2616 12.4646 11.1518 11.8082 11.8082C11.1518 12.4646 10.2616 12.8333 9.33331 12.8333Z" fill="black"/>
</svg>

              </li>
              <li className="flex gap-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z" fill="black"/>
</svg>
   </li>
    <li>Showing 1–16 of 32 results</li>
            </ul>
          </div>
          <div className="">

            <ul className="flex justify-start items-center  gap-6">
                <li className="flex justify-between items-center gap-2">Show <span className="h-5 w-5 border border-1 bg-white/90 flex justify-center items-center">16 </span></li>
                <li className="flex justify-between items-center gap-3">Short by <span className="px-2 py-1 border border-1 bg-white/90">Default</span></li>
            </ul>
          </div>
        </div>

        <div className="w-full ">

        <div className="max-w-[1440px] mx-auto relative overflow-hidden  py-10 ">
       
      <div className="max-w-[1240px] mx-auto   overflow-hidden  flex  flex-wrap justify-center   lg:justify-between   pl-10 lg:pl-0   gap-4 md:gap-0  ">
        <div>
         <Link href={'/shop/product'}>
         <Image
            src={"/images/shop3.png"}
            height={350}
            width={350}
            alt="blogs laptop images"
            className="w-[230px] h-[250px]   object-contain"
          /></Link>
          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <p className="text-center pt-3">
              Going all-in with millennial design
            </p>
           <p>RS . 25,000</p>
          </div>
        </div>
        <div>
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop2.png"}
            className="w-[230px] h-[250px]   object-contain "
            height={550}
            width={550}
            alt="blogs laptop images"
          /></Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <p>RS . 25,000</p>
          </div>
        </div>
        <div>
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop4.png"}
            className="w-[230px] h-[250px]  object-contain "
            height={350}
            width={350}
            alt="blogs laptop images"
          /></Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <p>RS . 25,000</p>
          </div>
        </div> <div>
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop5.png"}
            className="w-[230px] h-[250px]   object-contain "
            height={350}
            width={350}
            alt="blogs laptop images"
          /></Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <p>RS . 25,000</p>
          </div>
        </div> 
        
        <div>
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop2.png"}
            className="w-[330px] h-[250px]  object-contain "
            height={350}
            width={250}
            alt="blogs laptop images"
          /></Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <button className="underline underline-offset-8   font-medium mx-auto">
              Read More
            </button>
          </div>
        </div>
        <div>
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop6.png"}
            className="w-[230px] h-[250px]   object-contain "
            height={350}
            width={350}
            alt="blogs laptop images"
          /></Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <p>RS . 25,000</p>
          </div>
        </div> 
        <div>
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop14.png"}
            className="w-[230px] h-[250px]   object-contain "
            height={350}
            width={350}
            alt="blogs laptop images"
          /></Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <p>RS . 25,000</p>
          </div>
        </div> 
        <div>
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop8.png"}
            className="w-[230px] h-[250px]   object-contain "
            height={350}
            width={350}
            alt="blogs laptop images"
          />
          </Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <p>RS . 25,000</p>
          </div>
        </div> 
        <div>
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop9.png"}
            className="w-[230px] h-[250px]   object-contain "
            height={350}
            width={350}
            alt="blogs laptop images"
          /></Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <p>RS . 25,000</p>
          </div>
        </div> 
        <div>
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop10.png"}
            className="w-[230px] h-[250px]   object-cover "
            height={350}
            width={350}
            alt="blogs laptop images"
          />
          </Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <p>RS . 25,000</p>
          </div>
        </div> 
        <div  >
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop11.png"}
            className="w-[230px] h-[250px]   object-contain "
            height={350}
            width={350}
            alt="blogs laptop images"
          />
          </Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <p>RS . 25,000</p>
          </div>
        </div> 
        <div className="w-[230px] h-[250px]">
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop12.png"}
            className="w-[430px] h-[250px]   object-cover "
            height={350}
            width={350}
            alt="blogs laptop images"
          /></Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <p>RS . 25,000</p>
          </div>
        </div> 
        <div>
        <Link href={'/shop/product'}>
          <Image
            src={"/images/shop13.png"}
            className="w-[230px] h-[250px]   object-contain "
            height={350}
            width={350}
            alt="blogs laptop images"
          /></Link>
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Going all-in with millennial design</p>
            <p>RS . 25,000</p>
          </div>
        </div> 
      </div>
      
    </div>
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
