"use client";
import { SignIn } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export default function SignInPage() {
  const [hasNetwork, setHasNetwork] = useState(true);

  useEffect(() => {
    // Check network status
    const handleNetworkChange = () => {
      setHasNetwork(navigator.onLine);
    };

    // Add event listeners
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    // Set initial network status
    handleNetworkChange();

    // Cleanup event listeners
    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);

  if (!hasNetwork) {
    // Fallback UI when offline
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        <h1>No Internet Connection</h1>
        <p>Please check your network and try again.</p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      
        fallback={
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p>Loading Sign-In Page...</p>
          </div>
        }
      
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
       
    </div>
  );
}
