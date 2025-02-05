 
"use client"; // Mark this as a client-side component

import { CartProvider } from "use-shopping-cart";
import React from "react";
 const stripeKey =process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
 
export default function CartProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider
      cartMode="checkout-session" // Required for Stripe session management
      
      stripe={stripeKey!} // Your Stripe public key
      currency="USD" // Set the app currency
      shouldPersist= {true}
    >
      {children}
    </CartProvider>
  );
}
 