
"use client"
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
     
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <SignIn path="/sign-in" routing="path" signInUrl="/sign-up" />
    </div>
  );
}