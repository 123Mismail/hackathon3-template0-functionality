import Link from "next/link";


export default function CancelPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold">Payment Canceled</h1>
        <p>Your order was not completed.</p>
        <Link href={'/checkout'}><button className="px-10 py-2 bg-blue-700 text-white mt-3 hover:bg-blue-600 duration-300 hover:rounded-xl">Go Back </button></Link>
      </div>
    );
  }
  