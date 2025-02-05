 "use client"
import { ClerkProvider } from "@clerk/nextjs";
 

interface ClerkWrapperProps {
  children: React.ReactNode;
}

export default function ClerkWrapper({ children }: ClerkWrapperProps) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  )
}