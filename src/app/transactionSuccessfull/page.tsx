import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-[800px] h-[400px] bg-green-600 text-black mx-auto mt-1.5'>
        <div className='flex flex-col  justify-center items-center h-[400px]'>
        <h1 className='text-center text-2xl text-white'>Your transactionstion is successfull! </h1>
         <h2 className='text-lg font-medium text-center text-yellow-800'>ThankYou for choosing us .</h2>
         <Link href={'/shop'}>
         <button className='px-10 py-3 bg-blue-900 text-white text-center mt-5'>Go Back to Shopping</button>
         </Link>
        </div>
    </div>
  )
}

export default page