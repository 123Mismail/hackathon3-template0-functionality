

 
import BlogPage from '@/app/components/blog'
import React from 'react'

const Page = async ({ params }: any) => {
  const { slug } = await params; // Await the promise to extract the slug
       console.log(slug ,"slug value is trying to console over here")
  return (
    <div>
      <BlogPage slugData={slug} />
    </div>
  );
};

export default Page;


 