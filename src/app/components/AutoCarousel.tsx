 
 import ReactSlickCarousel from '@/components/crouselComponents';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
 
 const AutoCarousel = ({categoryProduct,addItem,notifySuccess}:any) => {
   return (
    
    <div className="max-w-[1440px] mx-auto relative overflow-hidden   px-4 py-14 ">
        <div className=" flex flex-col justify-center items-center gap-14 pb-8 ">
          <h2 className="text-[36px] font-medium">Related Products</h2>
        </div>
        <div className="max-w-[1240px] mx-auto    overflow-hidden  flex  flex-wrap justify-center   lg:justify-between     lg:pl-0    md:gap-0  ">
          {/* related products */}

           {/* <ReactSlickCarousel categoryProduct={categoryProduct}  addItem={addItem} notifySuccess ={notifySuccess}/> */}


               {/* <ReactSlickCarousel categoryProduct={categoryProduct} addItem={addItem} notifySuccess={notifySuccess} /> */}

               
          {categoryProduct &&
            categoryProduct.slice(0, 4).map((categoryProduct: any ,ind:number) => (

              <div key={ind} className="mx-3">
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
                  {categoryProduct.stockLevel > 0 ? (
                    <button
                      className="px-10 py-3 bg-[#FBEBB5] text-black hover:bg-[#f8e8b5]   scale-110 duration-200"
                      onClick={() => {
                        addItem(categoryProduct.id), notifySuccess();
                      }}
                    >
                      Add to card
                    </button>
                  ) : (
                    <button className="px-10 py-3 bg-[#e34040] text-black hover:bg-[#f8e8b5] cursor-not-allowed  scale-110 duration-200">
                      Not Availabel
                    </button>
                  )}
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
   )
 }
 
 export default AutoCarousel