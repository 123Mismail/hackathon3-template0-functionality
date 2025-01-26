"use client"; // Mark this as a client-side component

import { CartProvider } from "use-shopping-cart";
import React from "react";

export default function CartProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider
      mode="client-only" // No Stripe integration, client-only mode
      cartMode="client-only" // Local cart management
      currency="USD" // Set the currency for your app
    >
      {children}
    </CartProvider>
  );
}
