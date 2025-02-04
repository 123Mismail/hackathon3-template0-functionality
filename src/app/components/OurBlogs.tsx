import Image from "next/image";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegCalendarMinus } from "react-icons/fa";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Loader from "./loader";
import { urlFor } from "@/sanity/lib/image";
const OurBlogs = async () => {
  interface ImageAsset {
    _type: "image";
    asset: {
      _ref: string;
    };
  }
  interface BlogPost {
    _id: string;
    description: string;
    author: string;
    slug: {
      current: string;
      _type: "slug";
    };
    image: ImageAsset;
    date: string; // ISO 8601 date string
  }

  const fetchBlogs = async () => {
    const query = `*[_type=="blog"]{
        description,author,slug,image,date
    }`;
    const blog = await client.fetch(query);
    return blog;
    // console.log(blog ,"blogs data is fetching")
  };

  const blogs = await fetchBlogs();

  console.log(blogs, "blogs page i s");

  return (
    <div className="max-w-[1440px] mx-auto bg-[#FFFFFF]  overflow-hidden  py-10  px-10">
      <div className=" flex flex-col justify-center items-center gap-8 ">
        <h2 className="text-[36px] font-medium">Our Blogs</h2>
        <p className="text-[#9F9F9F] pb-5">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto   overflow-hidden  flex  flex-wrap justify-center items-center   lg:justify-between   pl-0  md:pl-10 lg:pl-0   gap-4 md:gap-0  ">
        {/* dinamically rendering blogs data  */}
        {blogs &&
          blogs.map((blog: BlogPost) => (
            <div key={blog._id}>
              { blog.image ? <Image
                 src={urlFor(blog.image).url()}
                height={350}
                width={350}
                alt="blogs laptop images"
                className="w-[300px] h-[320px] rounded-[7px] object-cover"
              /> : <Loader/>}
              <div className="flex flex-col gap-6 justify-center items-center text-center">
                <p className="text-center pt-3">{blog.author}</p>
                <Link href={`/blogs/${blog.slug.current}`}>
                  {" "}
                  <button className="underline underline-offset-8 ">
                    Read More
                  </button>
                </Link>
                <span className="flex  justify-center items-center gap-2">
                  <IoTimeOutline />
                   
                  <FaRegCalendarMinus />
                  <p>{blog.date}</p>
                </span>
              </div>
            </div>
          ))}
      </div>
      <div className=" flex justify-center items-center p-6 mt-6">
        <Link href={"/blogs"}>
          {" "}
          <button className="underline underline-offset-8 mx-auto text-[20px] font-medium">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurBlogs;
