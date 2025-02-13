
"use client"
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
 
  // const styles =style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }} 
    if(!SignIn){
      return <p className='flex justify-center items-center '>Network error ...</p>
    }
  return (
    <div  className='py-6 flex justify-center items-center '>
      <SignIn path="/sign-in" routing="path" signInUrl="/sign-up" />
    </div>
  );
}