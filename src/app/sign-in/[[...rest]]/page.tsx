
"use client"
import { SignIn } from '@clerk/nextjs';

export default function SignUpPage() {
     
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <SignIn path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}