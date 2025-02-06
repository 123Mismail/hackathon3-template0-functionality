// // "use client"
// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useState } from "react";
// // import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// // import { useShoppingCart } from "use-shopping-cart";
// // import { useForm, SubmitHandler } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { z } from "zod";
// // import { loadStripe } from "@stripe/stripe-js";
// // import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
 
 

// // // Load Stripe.js
 
// // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
// // // Define the schema using zod
// // const schema = z.object({
// //   firstName: z.string().min(1, "First name is required"),
// //   lastName: z.string().min(1, "Last name is required"),
// //   companyName: z.string().optional(),
// //   country: z.string().min(1, "Country is required"),
// //   streetAddress: z.string().min(1, "Street address is required"),
// //   city: z.string().min(1, "City is required"),
// //   province: z.string().min(1, "Province is required"),
// //   zipCode: z.string().min(1, "ZIP code is required"),
// //   phone: z.string().min(1, "Phone is required"),
// //   email: z.string().email("Invalid email address").min(1, "Email is required"),
// //   additionalInfo: z.string().optional(),
// // });

// // type FormValues = z.infer<typeof schema>;

// // // Stripe Payment Form Component


// // const CheckoutPage = () => {
// //   const { cartDetails, totalPrice } = useShoppingCart<any>();
// //   const [loading, setLoading] = useState(false);
// //   const items:any = Object.values(cartDetails);
// //   let arrayProductData: any = [];
// //   const objectLength = Object.keys(cartDetails);

// //   if (objectLength.length > 0) {
// //     arrayProductData = Object.values(cartDetails!);
// //     console.log(arrayProductData, "card details ");
// //   }

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm<FormValues>({
// //     resolver: zodResolver(schema),
// //   });

// //   const onSubmit: SubmitHandler<FormValues> = (data) => {
     
      
    
// //      console.log(data ,"trying to fetch data values when clicke button")
// //   };
  
// //   // here the stripe integration code 
// //   const StripePaymentForm = ({ onSubmit }: { onSubmit: SubmitHandler<FormValues> }) => {
// //     const stripe = useStripe();
// //     const elements = useElements();
  
// //     const handlePaymentSubmit: SubmitHandler<FormValues> = async (data) => {
// //       console.log("handelling payment integration her " , data)
// //       if (!stripe || !elements  ) {
// //         return;
// //       }
   
// //       const requestData = {
// //         ...data, // Include form data
// //         items,
// //         totalPrice // Add the products array
// //       };
// //       // Create a payment intent on your server
// //       const response = await fetch("/api/submitCustomerDetail", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(requestData), // Pass the total price
// //       });
// //       console.log(requestData ,"request data is trying to be fetch ")
// //       if (!response.ok) {
         
// //         alert("failed to submit customer and order data !");
// //       } else  {
// //         alert("order and customer detail is successfully submitted ");
// //         onSubmit(items); // Proceed with the form submission
// //       }
// //     };
  
// //     const handleCheckout = async () => {
// //       setLoading(true);
    
// //       // Example cart items
      
    
// //       try {
// //         // Call the API route to create a Checkout Session
// //         const response = await fetch('/api/checkout', {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({ totalPrice }), // Send cart items to the server
// //         });
    
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }
    
// //         const session = await response.json();
    
// //         // Redirect to Stripe Checkout
// //         const stripe = await stripePromise;
// //         const result = await stripe?.redirectToCheckout({
// //           sessionId: session.id,
// //         });
    
// //         if (result?.error) {
// //           console.error('Stripe redirect error:', result.error);
// //           alert(`Payment failed: ${result.error.message}`);
// //         }
// //       } catch (err: any) {
// //         console.error('Checkout error:', err);
// //         alert(`Checkout failed: ${err.message}`);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     setLoading(false);

// //     return (
// //       <form onSubmit={handleSubmit(handlePaymentSubmit)}>
// //         <CardElement
// //           options={{
// //             style: {
// //               base: {
// //                 fontSize: "16px",
// //                 color: "#424770",
// //                 "::placeholder": {
// //                   color: "#aab7c4",
// //                 },
// //               },
// //               invalid: {
// //                 color: "#9e2146",
// //               },
// //             },
// //           }}
// //         />
// //         <button
// //           type="submit"
// //           disabled={!stripe}
// //         onClick={handleCheckout}
// //           className="px-10 py-2 rounded-2xl border border-1 mx-auto text-center mt-4 w-full "
          
// //         >
// //          {loading ? 'Processing...' : 'Buy Now'}
// //         </button>
// //       </form>
// //     );
// //   };


  
// //   return (
// //     <div className="w-full md:max-w-[1440px] mx-auto overflow-hidden lg:pl-0">
// //       <div className="w-full h-[306px] pagesBg md:max-w-[1440px] overflow-hidden"></div>
// //       <div className="flex justify-center items-center h-[306px] flex-col z-50">
// //         <Image
// //           src={"/images/logo.png"}
// //           className="-mb-[20px]"
// //           height={100}
// //           width={100}
// //           alt="logo image"
// //         />
// //         <h2 className="text-[48px] font-medium">CheckOut</h2>
// //         <span className="flex justify-center items-center">
// //           <Link href={"/"}>Home</Link>
// //           <MdOutlineKeyboardArrowRight />
// //           <Link href={"/"}>CheckOut</Link>
// //         </span>
// //       </div>
// //       <div className="w-full flex flex-col justify-center items-center pr-5 py-10 lg:pt-32">
// //         <div className="flex flex-wrap justify-center p-10 gap-10 py-10 w-full">
// //           {/* left */}
// //           <div className="max-w-[635px] flex flex-col w-full flex-1 justify-center items-start gap-3">
// //             <h2 className="text-[36px] font-semibold">Billing details</h2>
// //             <form onSubmit={handleSubmit(onSubmit)}>
// //               <div className="flex justify-center gap-4">
// //                 <div>
// //                   <span className="flex justify-center items-center gap-4 w-full">
// //                     <span className="w-full">
// //                       <label htmlFor="firstName">First Name</label> <br />
// //                       <input
// //                         type="text"
// //                         placeholder="abc"
// //                         className="p-3 w-full border-2 border-black/30 rounded-lg"
// //                         {...register("firstName")}
// //                       />
// //                       {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
// //                     </span>
// //                     <span className="w-full">
// //                       <label htmlFor="lastName">Last Name</label> <br />
// //                       <input
// //                         type="text"
// //                         placeholder="abc"
// //                         className="p-3 w-full border-2 border-black/30 rounded-lg"
// //                         {...register("lastName")}
// //                       />
// //                       {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
// //                     </span>
// //                   </span> <br />
// //                   <label htmlFor="companyName">Company Name (Optional)</label> <br />
// //                   <input
// //                     type="text"
// //                     placeholder="abc"
// //                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
// //                     {...register("companyName")}
// //                   />
// //                   <br />
// //                   <label htmlFor="country">Country / Region</label> <br />
// //                   <input
// //                     type="text"
// //                     placeholder="abc"
// //                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
// //                     {...register("country")}
// //                   />
// //                   {errors.country && <p className="text-red-500">{errors.country.message}</p>}
// //                   <br />
// //                   <label htmlFor="streetAddress">Street address</label> <br />
// //                   <input
// //                     type="text"
// //                     placeholder="abc"
// //                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
// //                     {...register("streetAddress")}
// //                   />
// //                   {errors.streetAddress && <p className="text-red-500">{errors.streetAddress.message}</p>}
// //                   <br />
// //                   <label htmlFor="city">Town / City</label> <br />
// //                   <input
// //                     type="text"
// //                     placeholder="abc"
// //                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
// //                     {...register("city")}
// //                   />
// //                   {errors.city && <p className="text-red-500">{errors.city.message}</p>}
// //                   <br />
// //                   <label htmlFor="province">Province</label> <br />
// //                   <input
// //                     type="text"
// //                     placeholder="abc"
// //                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
// //                     {...register("province")}
// //                   />
// //                   {errors.province && <p className="text-red-500">{errors.province.message}</p>}
// //                   <br />
// //                   <label htmlFor="zipCode">ZIP code</label> <br />
// //                   <input
// //                     type="text"
// //                     placeholder="abc"
// //                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
// //                     {...register("zipCode")}
// //                   />
// //                   {errors.zipCode && <p className="text-red-500">{errors.zipCode.message}</p>}
// //                   <br />
// //                   <label htmlFor="phone">Phone</label> <br />
// //                   <input
// //                     type="text"
// //                     placeholder="abc"
// //                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
// //                     {...register("phone")}
// //                   />
// //                   {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
// //                   <br />
// //                   <label htmlFor="email">Email address</label> <br />
// //                   <input
// //                     type="text"
// //                     placeholder="abc"
// //                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
// //                     {...register("email")}
// //                   />
// //                   {errors.email && <p className="text-red-500">{errors.email.message}</p>}
// //                   <br />
// //                   <label htmlFor="additionalInfo">Additional information</label> <br />
// //                   <input
// //                     type="text"
// //                     placeholder="Additional information"
// //                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
// //                     {...register("additionalInfo")}
// //                   />
// //                   <br />
// //                 </div>
// //               </div>
// //                   {/* Stripe Card Input */}
               
               
// //             </form>
// //           </div>
// //           {/* right */}
// //           <div className="max-w-[635px] flex flex-col w-full flex-1 gap-3">
// //             <div className="flex flex-col gap-5 px-0 md:px-10">
// //               <div className="flex justify-between items-center">
// //                 <h2 className="text-[24px] flex-1 font-medium">Product</h2>
// //                 <h2 className="text-[24px] flex-1 font-medium">Quantity</h2>
// //                 <h2 className="text-[24px] flex-1 font-medium">Subtotal</h2>
// //               </div>
// //               {arrayProductData.map((details: any, id: number) => (
// //                 <div key={id}>
// //                   <div className="flex justify-between items-center">
// //                     <h2 className="flex-1 text-[16px] font-normal">{details.name}</h2>
// //                     <span className="flex-1">{details.quantity}</span>
// //                     <h2 className="text-[16px] flex-1 font-light">Rs.{details.price}</h2>
// //                   </div>
// //                   <div className="flex justify-between items-center">
// //                     <h2 className="text-[16px] font-normal">Subtotal</h2>
// //                     <h2 className="text-[16px] font-light">
// //                       Rs. {details.quantity > 0 ? details.quantity * details.price : details.price}
// //                     </h2>
// //                   </div>
// //                 </div>
// //               ))}
// //               <div className="flex justify-between items-center">
// //                 <h2 className="text-[16px] font-normal">Total</h2>
// //                 <h2 className="text-[#B88E2F] text-[24px] font-bold">Rs. {totalPrice}</h2>
// //               </div>
// //             </div>
// //             <div className="h-[1px] max-w-[535px] mx-auto bg-black/30 w-full" />
// //             <div className="flex flex-col gap-5 px:0 md:px-10">
// //               <div className="flex gap-2 justify-start items-center">
// //                 <div className="h-3 w-3 bg-black rounded-full" />
// //                 <p>Direct Bank Transfer</p>
// //               </div>
// //               <p className="text-[#9F9F9F] font-[16px]">
// //                 Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
// //               </p>
// //               {/* Stripe Card Input */}
// //                 <Elements stripe={stripePromise}>
// //                 <StripePaymentForm onSubmit={onSubmit} />
// //               </Elements>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* services */}
// //       <div className="w-full bg-[#FAF4F4] flex flex-wrap justify-center items-center p-10">
// //         <div className="flex-1 p-8">
// //           <h2 className="text-[32px] font-medium">Free Delivery</h2>
// //           <p className="max-w-[276px] w-full text-[#9F9F9F]">
// //             For all oders over $50, consectetur adipim scing elit.
// //           </p>
// //         </div>
// //         <div className="flex-1 p-8">
// //           <h2 className="text-[32px] font-medium">90 Days Return</h2>
// //           <p className="max-w-[276px] w-full text-[#9F9F9F]">
// //             If goods have problems, consectetur adipim scing elit.
// //           </p>
// //         </div>
// //         <div className="flex-1 p-8">
// //           <h2 className="text-[32px] font-medium">Secure Payment</h2>
// //           <p className="max-w-[276px] w-full text-[#9F9F9F]">
// //             100% secure payment, consectetur adipim scing elit.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CheckoutPage;


// // new code 

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { useShoppingCart } from "use-shopping-cart";
// import { useForm} from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { loadStripe } from "@stripe/stripe-js";
 

// // Load Stripe.js
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// // Define the schema using zod
// const schema = z.object({
//   firstName: z.string().min(1, "First name is required"),
//   lastName: z.string().min(1, "Last name is required"),
//   companyName: z.string().optional(),
//   country: z.string().min(1, "Country is required"),
//   streetAddress: z.string().min(1, "Street address is required"),
//   city: z.string().min(1, "City is required"),
//   province: z.string().min(1, "Province is required"),
//   zipCode: z.string().min(1, "ZIP code is required"),
//   phone: z.string().min(1, "Phone is required"),
//   email: z.string().email("Invalid email address").min(1, "Email is required"),
//   additionalInfo: z.string().optional(),
// });

// type FormValues = z.infer<typeof schema>;

// const CheckoutPage = () => {
//   const { cartDetails, totalPrice } = useShoppingCart<any>();
//   const [loading, setLoading] = useState(false);
//   const items: any = Object.values(cartDetails || {});
//   const arrayProductData = items;

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//   } = useForm<FormValues>({
//     resolver: zodResolver(schema),
//     mode: "onChange", // Validate form on change
//   });

//   const handleCheckout = async (data:FormValues) => {
//     setLoading(true);
//     try {
//       await  handelSumbitCustomerDetails(data)
//       // Call the API route to create a Checkout Session
//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           totalPrice,
//           // items: arrayProductData,
//           // customerDetails: data, // Include customer details
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const session = await response.json();

//       // Redirect to Stripe Checkout
//       const stripe = await stripePromise;
//       const result = await stripe?.redirectToCheckout({
//         sessionId: session.id,
//       });

//       if (result?.error) {
//         console.error("Stripe redirect error:", result.error);
//         alert(`Payment failed: ${result.error.message}`);
//       }
//     } catch (err: any) {
//       console.error("Checkout error:", err);
//       alert(`Checkout failed: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   async function  handelSumbitCustomerDetails (data:FormValues){
//     try {
//       // Call the API route to create a Checkout Session
//       console.log(data ,"data is trying to console")
//       const response = await fetch("/api/submitCustomerDetail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           totalPrice,
//           items: arrayProductData,
//            customerDetails: data, // Include customer details
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to submit customer detail and order detials`);
//       }

//     } catch (err: any) {
//       console.error("Checkout error:", err);
//       alert(`Checkout failed: ${err.message}`);
//     }
//           console.log( "form values trying to fetch here ")
//     }

//   return (
//     <div className="w-full md:max-w-[1440px] mx-auto overflow-hidden lg:pl-0">
//       <div className="w-full h-[306px] pagesBg md:max-w-[1440px] overflow-hidden"></div>
//       <div className="flex justify-center items-center h-[306px] flex-col z-50">
//         <Image src={"/images/logo.png"} className="-mb-[20px]" height={100} width={100} alt="logo image" />
//         <h2 className="text-[48px] font-medium">CheckOut</h2>
//         <span className="flex justify-center items-center">
//           <Link href={"/"}>Home</Link>
//           <MdOutlineKeyboardArrowRight />
//           <Link href={"/"}>CheckOut</Link>
//         </span>
//       </div>
//       <div className="w-full flex flex-col justify-center items-center pr-5 py-10 lg:pt-32">
//         <div className="flex flex-wrap justify-center p-10 gap-10 py-10 w-full">
//           {/* Left Section - Billing Details */}
//           <div className="max-w-[635px] flex flex-col w-full flex-1 justify-center items-start gap-3">
//             <h2 className="text-[36px] font-semibold">Billing details</h2>
//             <form onSubmit={handleSubmit(handleCheckout)}>
//               <div className="flex justify-center gap-4">
//                 <div>
//                   <span className="flex justify-center items-center gap-4 w-full">
//                     <span className="w-full">
//                       <label htmlFor="firstName">First Name</label> <br />
//                       <input
//                         type="text"
//                         placeholder="abc"
//                         className="p-3 w-full border-2 border-black/30 rounded-lg"
//                         {...register("firstName")}
//                       />
//                       {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
//                     </span>
//                     <span className="w-full">
//                       <label htmlFor="lastName">Last Name</label> <br />
//                       <input
//                         type="text"
//                         placeholder="abc"
//                         className="p-3 w-full border-2 border-black/30 rounded-lg"
//                         {...register("lastName")}
//                       />
//                       {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
//                     </span>
//                   </span> <br />
//                   <label htmlFor="companyName">Company Name (Optional)</label> <br />
//                   <input
//                     type="text"
//                     placeholder="abc"
//                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
//                     {...register("companyName")}
//                   />
//                   <br />
//                   <label htmlFor="country">Country / Region</label> <br />
//                   <input
//                     type="text"
//                     placeholder="abc"
//                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
//                     {...register("country")}
//                   />
//                   {errors.country && <p className="text-red-500">{errors.country.message}</p>}
//                   <br />
//                   <label htmlFor="streetAddress">Street address</label> <br />
//                   <input
//                     type="text"
//                     placeholder="abc"
//                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
//                     {...register("streetAddress")}
//                   />
//                   {errors.streetAddress && <p className="text-red-500">{errors.streetAddress.message}</p>}
//                   <br />
//                   <label htmlFor="city">Town / City</label> <br />
//                   <input
//                     type="text"
//                     placeholder="abc"
//                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
//                     {...register("city")}
//                   />
//                   {errors.city && <p className="text-red-500">{errors.city.message}</p>}
//                   <br />
//                   <label htmlFor="province">Province</label> <br />
//                   <input
//                     type="text"
//                     placeholder="abc"
//                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
//                     {...register("province")}
//                   />
//                   {errors.province && <p className="text-red-500">{errors.province.message}</p>}
//                   <br />
//                   <label htmlFor="zipCode">ZIP code</label> <br />
//                   <input
//                     type="text"
//                     placeholder="abc"
//                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
//                     {...register("zipCode")}
//                   />
//                   {errors.zipCode && <p className="text-red-500">{errors.zipCode.message}</p>}
//                   <br />
//                   <label htmlFor="phone">Phone</label> <br />
//                   <input
//                     type="text"
//                     placeholder="abc"
//                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
//                     {...register("phone")}
//                   />
//                   {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
//                   <br />
//                   <label htmlFor="email">Email address</label> <br />
//                   <input
//                     type="text"
//                     placeholder="abc"
//                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
//                     {...register("email")}
//                   />
//                   {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//                   <br />
//                   <label htmlFor="additionalInfo">Additional information</label> <br />
//                   <input
//                     type="text"
//                     placeholder="Additional information"
//                     className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
//                     {...register("additionalInfo")}
//                   />
//                   <br />
//                 </div>
//               </div>
//               <button
//                 type="submit"
                 
//                 disabled={!isValid || loading}
//                 className="px-10 py-2 rounded-2xl border border-1 mx-auto text-center mt-4 w-full"
//               >
//                 {loading ? "Processing..." : "Proceed to Payment"}
//               </button>
//             </form>
//           </div>

//           {/* Right Section - Order Summary */}
//           <div className="max-w-[635px] flex flex-col w-full flex-1 gap-3">
//             <div className="flex flex-col gap-5 px-0 md:px-10">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-[24px] flex-1 font-medium">Product</h2>
//                 <h2 className="text-[24px] flex-1 font-medium">Quantity</h2>
//                 <h2 className="text-[24px] flex-1 font-medium">Subtotal</h2>
//               </div>
//               {arrayProductData.map((details: any, id: number) => (
//                 <div key={id}>
//                   <div className="flex justify-between items-center">
//                     <h2 className="flex-1 text-[16px] font-normal">{details.name}</h2>
//                     <span className="flex-1">{details.quantity}</span>
//                     <h2 className="text-[16px] flex-1 font-light">Rs.{details.price}</h2>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <h2 className="text-[16px] font-normal">Subtotal</h2>
//                     <h2 className="text-[16px] font-light">
//                       Rs. {details.quantity > 0 ? details.quantity * details.price : details.price}
//                     </h2>
//                   </div>
//                 </div>
//               ))}
//               <div className="flex justify-between items-center">
//                 <h2 className="text-[16px] font-normal">Total</h2>
//                 <h2 className="text-[#B88E2F] text-[24px] font-bold">Rs. {totalPrice}</h2>
//               </div>
//             </div>
//             <div className="h-[1px] max-w-[535px] mx-auto bg-black/30 w-full" />
//             <div className="flex flex-col gap-5 px:0 md:px-10">
//               <div className="flex gap-2 justify-start items-center">
//                 <div className="h-3 w-3 bg-black rounded-full" />
//                 <p>Direct Bank Transfer</p>
//               </div>
//               <p className="text-[#9F9F9F] font-[16px]">
//                 Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Services Section */}
//       <div className="w-full bg-[#FAF4F4] flex flex-wrap justify-center items-center p-10">
//         <div className="flex-1 p-8">
//           <h2 className="text-[32px] font-medium">Free Delivery</h2>
//           <p className="max-w-[276px] w-full text-[#9F9F9F]">
//             For all oders over $50, consectetur adipim scing elit.
//           </p>
//         </div>
//         <div className="flex-1 p-8">
//           <h2 className="text-[32px] font-medium">90 Days Return</h2>
//           <p className="max-w-[276px] w-full text-[#9F9F9F]">
//             If goods have problems, consectetur adipim scing elit.
//           </p>
//         </div>
//         <div className="flex-1 p-8">
//           <h2 className="text-[32px] font-medium">Secure Payment</h2>
//           <p className="max-w-[276px] w-full text-[#9F9F9F]">
//             100% secure payment, consectetur adipim scing elit.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useShoppingCart } from "use-shopping-cart";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Load Stripe.js
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// Define the schema using zod
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  province: z.string().min(1, "Province is required"),
  zipCode: z.string().min(1, "ZIP code is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const CheckoutPage = () => {
  const { cartDetails, totalPrice } = useShoppingCart<any>();
  const [showErrors , setErrors] =useState('')
  const [loading, setLoading] = useState(false);
  const items: any = Object.values(cartDetails || {});

  const arrayProductData = items;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange", // Validate form on change
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
   await  handelShippingAdress(data)
    try {
      // Step 1: Submit customer details
      await handelSumbitCustomerDetails(data);

      // Step 2: Proceed to Stripe Checkout
      await handleCheckout(data);
    } catch (err: any) {
      console.error("Checkout error:", err);
      alert(`Checkout failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handelSumbitCustomerDetails = async (data: FormValues) => {
    try {
      // Validate items array
      if (!arrayProductData || arrayProductData.length === 0) {
        setLoading(false)
        throw new Error("No items in the cart.");
      }

      // Call the API route to submit customer details
      const response = await fetch("/api/submitCustomerDetail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalPrice,
          items: arrayProductData,
          customerDetails: data,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit customer details.");
      }

      const result = await response.json();
      console.log("Customer details submitted:", result);
    } catch (err: any) {
      console.error("Error submitting customer details:", err);
      throw err; // Propagate the error
    }
  };

  const handleCheckout = async (data: FormValues) => {
    try {
      // Call the API route to create a Checkout Session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const session = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      if (result?.error) {
        throw new Error(result.error.message);
      }
    } catch (err: any) {
      console.error("Stripe Checkout error:", err);
      throw err; // Propagate the error
    }
  };

  // addres
  const handelShippingAdress = async (data: FormValues) => {
    try {
      // Validate items array
      if (!arrayProductData || arrayProductData.length === 0) {
        alert("ther is no item in the card")
        throw new Error("No items in the cart.");
       
      }

      // Call the API route to submit customer details
      const response = await fetch("/api/shipEngine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shipAddress: {
            name: data.firstName,
            address_line1: data.streetAddress,
            city_locality: data.city,
            state_province: data.province,
            postal_code: data.zipCode,
            country_code: data.zipCode,
            phone: data.phone,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to  create customer address.");
      }

      const result = await response.json();
      console.log("Customer address details submitted:", result);
    } catch (err: any) {
      console.error("Error submitting customer adress details:", err);
      throw err; // Propagate the error
    }
  };

  return (
    <div className="w-full md:max-w-[1440px] mx-auto overflow-hidden lg:pl-0">
      <div className="w-full h-[306px] pagesBg md:max-w-[1440px] overflow-hidden"></div>
      <div className="flex justify-center items-center h-[306px] flex-col z-50">
        <Image src={"/images/logo.png"} className="-mb-[20px]" height={100} width={100} alt="logo image" />
        <h2 className="text-[48px] font-medium">CheckOut</h2>
        <span className="flex justify-center items-center">
          <Link href={"/"}>Home</Link>
          <MdOutlineKeyboardArrowRight />
          <Link href={"/"}>CheckOut</Link>
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center pr-5 py-10 lg:pt-32">
        <div className="flex flex-wrap justify-center p-10 gap-10 py-10 w-full">
          {/* Left Section - Billing Details */}
          <div className="max-w-[635px] flex flex-col w-full flex-1 justify-center items-start gap-3">
            <h2 className="text-[36px] font-semibold">Billing details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-center gap-4">
                <div>
                  <span className="flex justify-center items-center gap-4 w-full">
                    <span className="w-full">
                      <label htmlFor="firstName">First Name</label> <br />
                      <input
                        type="text"
                        placeholder="abc"
                        className="p-3 w-full border-2 border-black/30 rounded-lg"
                        {...register("firstName")}
                      />
                      {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                    </span>
                    <span className="w-full">
                      <label htmlFor="lastName">Last Name</label> <br />
                      <input
                        type="text"
                        placeholder="abc"
                        className="p-3 w-full border-2 border-black/30 rounded-lg"
                        {...register("lastName")}
                      />
                      {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                    </span>
                  </span> <br />
                  <label htmlFor="companyName">Company Name (Optional)</label> <br />
                  <input
                    type="text"
                    placeholder="abc"
                    className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
                    {...register("companyName")}
                  />
                  <br />
                  <label htmlFor="country">Country / Region</label> <br />
                  <input
                    type="text"
                    placeholder="abc"
                    className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
                    {...register("country")}
                  />
                  {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                  <br />
                  <label htmlFor="streetAddress">Street address</label> <br />
                  <input
                    type="text"
                    placeholder="abc"
                    className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
                    {...register("streetAddress")}
                  />
                  {errors.streetAddress && <p className="text-red-500">{errors.streetAddress.message}</p>}
                  <br />
                  <label htmlFor="city">Town / City</label> <br />
                  <input
                    type="text"
                    placeholder="abc"
                    className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
                    {...register("city")}
                  />
                  {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                  <br />
                  <label htmlFor="province">Province</label> <br />
                  <input
                    type="text"
                    placeholder="abc"
                    className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
                    {...register("province")}
                  />
                  {errors.province && <p className="text-red-500">{errors.province.message}</p>}
                  <br />
                  <label htmlFor="zipCode">ZIP code</label> <br />
                  <input
                    type="text"
                    placeholder="abc"
                    className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
                    {...register("zipCode")}
                  />
                  {errors.zipCode && <p className="text-red-500">{errors.zipCode.message}</p>}
                  <br />
                  <label htmlFor="phone">Phone</label> <br />
                  <input
                    type="text"
                    placeholder="abc"
                    className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
                    {...register("phone")}
                  />
                  {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                  <br />
                  <label htmlFor="email">Email address</label> <br />
                  <input
                    type="text"
                    placeholder="abc"
                    className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  <br />
                  <label htmlFor="additionalInfo">Additional information</label> <br />
                  <input
                    type="text"
                    placeholder="Additional information"
                    className="p-3 w-[320px] md:w-[530px] border-2 border-black/30 rounded-lg"
                    {...register("additionalInfo")}
                  />
                  <br />
                </div>
              </div>
              {arrayProductData.length > 0 ?
                <button
                type="submit"
                disabled={!isValid || loading}
                className="px-10 py-2 rounded-2xl border border-1 mx-auto text-center mt-4 w-full"
              >
              
                {loading ? "Processing..." : "Proceed to Payment"}
              </button> :
              <button  disabled className="px-7 py-2 mt-2 bg-red-400 text-white rounded-xl">Your Card is Empty </button>  
            }
              
            </form>
          </div>

          {/* Right Section - Order Summary */}
          <div className="max-w-[635px] flex flex-col w-full flex-1 gap-3">
            <div className="flex flex-col gap-5 px-0 md:px-10">
              <div className="flex justify-between items-center">
                <h2 className="text-[24px] flex-1 font-medium">Product</h2>
                <h2 className="text-[24px] flex-1 font-medium">Quantity</h2>
                <h2 className="text-[24px] flex-1 font-medium">Subtotal</h2>
              </div>
              {arrayProductData.map((details: any, id: number) => (
                <div key={id}>
                  <div className="flex justify-between items-center">
                    <h2 className="flex-1 text-[16px] font-normal">{details.name}</h2>
                    <span className="flex-1">{details.quantity}</span>
                    <h2 className="text-[16px] flex-1 font-light">Rs.{details.price}</h2>
                  </div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-[16px] font-normal">Subtotal</h2>
                    <h2 className="text-[16px] font-light">
                      Rs. {details.quantity > 0 ? details.quantity * details.price : details.price}
                    </h2>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center">
                <h2 className="text-[16px] font-normal">Total</h2>
                <h2 className="text-[#B88E2F] text-[24px] font-bold">Rs. {totalPrice}</h2>
              </div>
            </div>
            <div className="h-[1px] max-w-[535px] mx-auto bg-black/30 w-full" />
            <div className="flex flex-col gap-5 px:0 md:px-10">
              <div className="flex gap-2 justify-start items-center">
                <div className="h-3 w-3 bg-black rounded-full" />
                <p>Direct Bank Transfer</p>
              </div>
              <p className="text-[#9F9F9F] font-[16px]">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="w-full bg-[#FAF4F4] flex flex-wrap justify-center items-center p-10">
        <div className="flex-1 p-8">
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

export default CheckoutPage;