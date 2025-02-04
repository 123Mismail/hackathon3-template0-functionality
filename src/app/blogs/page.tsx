


import Image from "next/image";
import Link from "next/link";
// import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaCalendar,FaTag } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { client } from "@/sanity/lib/client";
import {  urlFor } from '@/sanity/lib/image';
import {format ,parseISO} from "date-fns"
  //  interface 
  export interface ImageAsset {
    _type: 'image';
    asset: {
      _ref: string;
    };
  }
  export interface BlogPost {
    _id: string;
    description: string;
    author: string;
    slug: {
      current: string;
      _type: 'slug';
    };
    image: ImageAsset;
    date: string; // ISO 8601 date string
  }


const fetchBlogs = async()=>{
  const query=`*[_type=="blog"]{
    description,author,slug,image,date
}`
  const blog =await client.fetch(query)
  return blog
  // console.log(blog ,"blogs data is fetching")
}

const BlogsPage = async() => {
  // const [blog , setBlogs] =useState()
  const blogs = await  fetchBlogs()
  console.log(blogs ,"blogs data is fetching.....")


  const formatDate = (isoDateString:string) => {
     const date = parseISO(isoDateString);
     return format(date, 'MMMM dd, yyyy hh:mm a');
   };

  return (
    <div className=" w-full md:max-w-[1440px]  mx-auto   overflow-hidden    lg:pl-0 ">
     <div className="w-full h-[306px] pagesBg md:max-w-[1440px] overflow-hidden   ">
       
       </div>
        <div className="  flex justify-center md:max-w-[1440px]  mx-auto   overflow-hidden  items-center h-[306px] flex-col z-50">

          {}
            <Image src={'/images/logo.png'} className="-mb-[20px]" height={100} width={100} alt="logo image"/>
            <h2 className="text-[48px] font-medium ">Blog</h2>
            <span className="flex justify-center items-center ">
                <Link href={'/'}>Home</Link>
                 <MdOutlineKeyboardArrowRight/>
                 <Link href={'/'}>Blogs</Link>
            </span>
        </div>
       {/* desktop */} 
     <div className="hidden md:block">
     <div className="w-full   bg-white  py-14 flex  md:flex-row gap-12  justify-center  items-center md:justify-start md:items-start   ">
           {/* left side  */}
        <div className="flex flex-col gap-10 max-w-[840px] px-10  pb-10 md:pb-0">
          {
            blogs.map((blog:BlogPost)=>(
              <div className="flex flex-col  gap-4 " key={blog._id}>
              <Image src={urlFor(blog.image).url()} className="rounded-xl w-full  h-[400px] object-cover" height={400} width={400}   alt="blogs image "></Image>
              <div className="flex justify-start items-center gap-6 text-black/50 pt-2"> 
               <span className="flex gap-1 items-center">  <IoPerson/> {blog.author}</span>
               <span className="flex gap-1 items-center"> <FaCalendar/>{formatDate(blog.date)}</span>
               <span className="flex gap-1 items-center"> <FaTag/> Wood</span>
              </div>
              <h2 className="text-[38px] font-semibold">{blog.slug.current}</h2>
              <p className="text-black/50 leading-7 line-clamp-6">{blog.description}</p>
              <Link href={`/blogs/${blog.slug.current}`} className="pt-5 underline underline-offset-4">Learn More</Link>
        </div>

            ))
          }
     
           
           
        </div>

           {/* right side  */}
         
           <div className="flex flex-col gap-6  w-full   px-0  md:px-10 ">
            <div className="w-full">
             <span className="flex items-center "> <input type="text" className="w-full p-4 rounded-xl  border-2" />
             <BsSearch className="text-2xl -ml-10 "/></span>
            </div>
            <div className="flex flex-col gap-8 text-black/50 md:px-10 px-0">
              <h3 className="text-[32px] text-black font-semibold">Categories</h3>

              <div className="flex justify-between items-center text-[16px]"> <p>crafts</p> 2</div>
              <div className="flex justify-between items-center text-[16px]"> <p>Design</p> 3</div>
              <div className="flex justify-between items-center text-[16px]"> <p>Homemade</p> 7</div>
              <div className="flex justify-between items-center text-[16px]"> <p>Interior</p> 5</div>
              <div className="flex justify-between items-center text-[16px]"> <p>Wood</p> 3</div>
             <div className="flex flex-col gap-5">
              <h2 className="text-[24px] font-medium text-black py-5">Recent Posts</h2>
              <div className="flex     items-center    gap-4  ">
                <Image src={'/images/blog3.jpeg'} className="rounded-xl   " height={100} width={100} alt="blogs images "/>
                <span>
                  <p className="text-[16px] font-medium py-3 text-black">Going all-in with millennial design</p>
                  03 Aug 2022
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Image src={'/images/blog2.jpeg'} className="rounded-xl " height={100} width={100} alt="blogs images "/>
                <span>
                  <p className="text-[16px] font-medium text-black">Going all-in with millennial design</p>
                  03 Aug 2022
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Image src={'/images/blog1.jpeg'} className="rounded-xl " height={100} width={100} alt="blogs images "/>
                <span>
                  <p className="text-[16px] font-medium text-black">Going all-in with millennial design</p>
                  03 Aug 2022
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Image src={'/images/blog3.jpeg'} className="rounded-xl " height={100} width={100} alt="blogs images "/>
                <span>
                  <p className="text-[16px] font-medium text-black">Going all-in with millennial design</p>
                  03 Aug 2022
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Image src={'/images/blog3.jpeg'} className="rounded-xl " height={100} width={100} alt="blogs images "/>
                <span>
                  <p className="text-[16px] font-medium text-black">Going all-in with millennial design</p>
                  03 Aug 2022
                </span>
              </div>
             </div>
            </div>
         
           
        </div>

      
      </div>
     </div>
     {/* mobile */}
       <div className="md:hidden ">
     <div className="w-full    py-14 flex-col   gap-12  justify-center  items-center md:justify-start md:items-start px-10   ">
           {/* left side  */}
        <div className="flex flex-col gap-10 max-w-[840px] pb-10 md:pb-0">
        <div className="flex flex-col  gap-4 ">
                 <Image src={'/images/blog3.jpeg'} className="rounded-xl w-full  h-[400px] object-cover" height={400} width={400}   alt="blogs image "></Image>
                 <div className="flex justify-start items-center gap-6 text-black/50 pt-2"> 
                  <span className="flex gap-1 items-center">  <IoPerson/> Admin</span>
                  <span className="flex gap-1 items-center"> <FaCalendar/> 14 cot 2020</span>
                  <span className="flex gap-1 items-center"> <FaTag/> Wood</span>
                 </div>
                 <h2 className="text-[38px] font-semibold">Going all-in with millennial design</h2>
                 <p className="text-black/50 leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate id facere tempore, facilis quod sit aut, odio, voluptates debitis nisi accusantium expedita est sapiente voluptatum officia quaerat. Neque, eligendi deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab dignissimos officiis ratione, voluptatum obcaecati ipsa reiciendis aspernatur non distinctio. Doloremque dignissimos error blanditiis incidunt, autem facere ratione accusamus eligendi.</p>
                 <Link href={'/blogs'} className="pt-5 underline underline-offset-4">Learn More</Link>
           </div>
           <div className="flex flex-col gap-4">
                 <Image src={'/images/blog2.jpeg'} className="rounded-xl w-full h-[400px] object-cover" height={400} width={400} alt="blogs image "></Image>
                 <div className="flex justify-start items-center gap-6 text-black/50 pt-2"> 
                  <span className="flex gap-1 items-center">  <IoPerson/> Admin</span>
                  <span className="flex gap-1 items-center"> <FaCalendar/> 14 cot 2020</span>
                  <span className="flex gap-1 items-center"> <FaTag/> Wood</span>
                 </div>
                 <h2 className="text-[48px] font-semibold">Going all-in with millennial design</h2>
                 <p className="text-black/50 leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate id facere tempore, facilis quod sit aut, odio, voluptates debitis nisi accusantium expedita est sapiente voluptatum officia quaerat. Neque, eligendi deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab dignissimos officiis ratione, voluptatum obcaecati ipsa reiciendis aspernatur non distinctio. Doloremque dignissimos error blanditiis incidunt, autem facere ratione accusamus eligendi.</p>
                 <Link href={'/blogs'} className="pt-5 underline underline-offset-4">Learn More</Link>
           </div>
           <div className="flex flex-col gap-4">
                 <Image src={'/images/blog1.jpeg'} className="rounded-xl w-full h-[400px] object-cover" height={400} width={400} alt="blogs image "></Image>
                 <div className="flex justify-start items-center gap-6 text-black/50 pt-2"> 
                  <span className="flex gap-1 items-center">  <IoPerson/> Admin</span>
                  <span className="flex gap-1 items-center"> <FaCalendar/> 14 cot 2020</span>
                  <span className="flex gap-1 items-center"> <FaTag/> Wood</span>
                 </div>
                 <h2 className="text-[48px] font-semibold">Going all-in with millennial design</h2>
                 <p className="text-black/50 leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate id facere tempore, facilis quod sit aut, odio, voluptates debitis nisi accusantium expedita est sapiente voluptatum officia quaerat. Neque, eligendi deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab dignissimos officiis ratione, voluptatum obcaecati ipsa reiciendis aspernatur non distinctio. Doloremque dignissimos error blanditiis incidunt, autem facere ratione accusamus eligendi.</p>
                 <Link href={`/blogs`} className="pt-5 underline underline-offset-4">Learn More</Link>
           </div>
        </div>

           {/* right side  */}
         
           <div className="flex flex-col gap-6  w-full   px-0  md:px-10 ">
            <div className="w-full">
             <span className="flex items-center "> <input type="text" className="w-full p-4 rounded-xl  border-2" />
             <BsSearch className="text-2xl -ml-10 "/></span>
            </div>
            <div className="flex flex-col gap-8 text-black/50 md:px-10 px-0">
              <h3 className="text-[32px] text-black font-semibold">Categories</h3>

              <div className="flex justify-between items-center text-[16px]"> <p>crafts</p> 2</div>
              <div className="flex justify-between items-center text-[16px]"> <p>Design</p> 3</div>
              <div className="flex justify-between items-center text-[16px]"> <p>Homemade</p> 7</div>
              <div className="flex justify-between items-center text-[16px]"> <p>Interior</p> 5</div>
              <div className="flex justify-between items-center text-[16px]"> <p>Wood</p> 3</div>
             <div className="flex flex-col gap-5">
              <h2 className="text-[24px] font-medium text-black py-5">Recent Posts</h2>
              <div className="flex     items-center    gap-4  ">
                <Image src={'/images/blog3.jpeg'} className="rounded-xl   " height={100} width={100} alt="blogs images "/>
                <span>
                  <p className="text-[16px] font-medium py-3 text-black">Going all-in with millennial design</p>
                  03 Aug 2022
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Image src={'/images/blog2.jpeg'} className="rounded-xl " height={100} width={100} alt="blogs images "/>
                <span>
                  <p className="text-[16px] font-medium text-black">Going all-in with millennial design</p>
                  03 Aug 2022
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Image src={'/images/blog1.jpeg'} className="rounded-xl " height={100} width={100} alt="blogs images "/>
                <span>
                  <p className="text-[16px] font-medium text-black">Going all-in with millennial design</p>
                  03 Aug 2022
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Image src={'/images/blog3.jpeg'} className="rounded-xl " height={100} width={100} alt="blogs images "/>
                <span>
                  <p className="text-[16px] font-medium text-black">Going all-in with millennial design</p>
                  03 Aug 2022
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Image src={'/images/blog3.jpeg'} className="rounded-xl " height={100} width={100} alt="blogs images "/>
                <span>
                  <p className="text-[16px] font-medium text-black">Going all-in with millennial design</p>
                  03 Aug 2022
                </span>
              </div>
             </div>
            </div>
         
           
        </div>

      
      </div>
     </div>
      {/* page navigation  */}
      <div className="flex justify-center items-center gap-6 py-5">
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
      {/* services */}
      <div className="w-full bg-[#FAF4F4] flex flex-wrap   justify-center  items-center p-10">
         <div className="flex-1   p-8  ">
            <h2 className="text-[32px] font-medium">Free Delivery</h2>
            <p className="max-w-[276px] w-full text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
         </div>
         <div className="flex-1 p-8">
            <h2 className="text-[32px] font-medium">90 Days Return</h2>
            <p className="max-w-[276px] w-full text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
         </div>
         <div className="flex-1 p-8">
            <h2 className="text-[32px] font-medium">Secure Payment</h2>
            <p className="max-w-[276px] w-full text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
         </div>
      </div>
    </div>
  );
};

export default BlogsPage;
