import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaCalendar, FaTag } from "react-icons/fa6";
import { format, parseISO } from "date-fns";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Interface definitions
export interface ImageAsset {
  _type: "image";
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
    _type: "slug";
  };
  image: ImageAsset;
  date: string;
}

const BlogPage = async (slugData: any) => {
  const fetchBlogs = async () => {
    console.log(slugData, "params value in component");
    const query = `*[_type=="blog"]{
      description, author, slug, image, date
    }`;
    const blog = await client.fetch(query);
    const val = slugData['slugData'];
    console.log(val, "value is trying to fetch in line no 39");
    const requiredBlog = blog.filter((value: any) => value.slug.current == val);
    return [requiredBlog, blog];
  };

  const [requiredBlog, blog] = await fetchBlogs();

  const formatDate = (isoDateString: string) => {
    const date = parseISO(isoDateString);
    return format(date, 'MMMM dd, yyyy hh:mm a');
  };

  if (!requiredBlog || requiredBlog.length === 0) {
    return <p className="w-full h-1/3 text-center p-28">Data not found ....</p>;
  }

  return (
    <div className="w-full md:max-w-[1440px] mx-auto overflow-hidden lg:pl-0">
      <div className="w-full h-[306px] pagesBg md:max-w-[1440px] overflow-hidden"></div>
      <div className="flex justify-center md:max-w-[1440px] mx-auto overflow-hidden items-center h-[306px] flex-col z-50">
        <Image
          src={"/images/logo.png"}
          className="-mb-[20px]"
          height={100}
          width={100}
          alt="logo image"
        />
        <h2 className="text-[48px] font-medium">Blog</h2>
        <span className="flex justify-center items-center">
          <Link href={"/"}>Home</Link>
          <MdOutlineKeyboardArrowRight />
          <Link href={"/"}>Blogs</Link>
        </span>
      </div>
      {/* desktop */}
      <div className="">
        <div className="w-full py-14 flex md:flex-row gap-12 justify-center items-center md:justify-start md:items-start">
          {/* left side */}
          <div className="flex flex-col gap-10 max-w-[940px] mx-auto px-10 pb-10 md:pb-0">
            {requiredBlog.map((blog: BlogPost) => (
              <div className="flex flex-col gap-4" key={blog._id}>
                <Image
                  src={urlFor(blog.image).url()}
                  className="rounded-xl w-full h-[400px] object-cover"
                  height={400}
                  width={400}
                  alt="blogs image"
                />
                <div className="flex justify-start items-center gap-6 text-black/50 pt-2">
                  <span className="flex gap-1 items-center">
                    <IoPerson /> {blog.author}
                  </span>
                  <span className="flex gap-1 items-center">
                    <FaCalendar />
                    {formatDate(blog.date)}
                  </span>
                  <span className="flex gap-1 items-center">
                    <FaTag /> Wood
                  </span>
                </div>
                <h2 className="text-[38px] font-semibold">{blog.slug.current}</h2>
                <p className="text-black/50 leading-7">{blog.description}</p>
                <Link href={"/blogs"} className="pt-5 underline underline-offset-4">
                  Go Back
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* services */}
      <div className="">
        <div className="text-center max-w-[250px] mx-auto">
          <h3 className="text-[36px] font-semibold">Related Blogs</h3>
        </div>
        <div className="w-full bg-[#FAF4F4] flex flex-wrap justify-center items-center p-10">
          {blog.map((blog: BlogPost) => (
            <div className="flex-1 p-8" key={blog._id}>
              <div className="flex flex-col gap-4">
                <Image
                  src={urlFor(blog.image).url()}
                  className="rounded-xl w-full h-[400px] object-cover"
                  height={600}
                  width={600}
                  alt="blogs image"
                />
                <div className="flex justify-start items-center gap-6 text-black/50 pt-2">
                  <span className="flex gap-1 items-center">
                    <IoPerson /> {blog.author}
                  </span>
                  <span className="flex gap-1 items-center">
                    <FaCalendar />
                    {formatDate(blog.date)}
                  </span>
                </div>
                <Link href={"/blogs"} className="pt-5 underline underline-offset-4">
                  Learn
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;