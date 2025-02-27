
"use client"
import SignInFallbackUI from '@/app/components/signInFallbackui';
import { SignIn, useClerk } from '@clerk/nextjs';

export default function SignInPage() { 
  const {loaded} =useClerk();
  
 
    
  return (
    <div  className='py-6 flex justify-center items-center '> 
       {
        loaded ? 
        <SignIn path="/sign-in" routing="path" signInUrl="/sign-up" />
        :
        <SignInFallbackUI/>
       }
    </div>
  );
}