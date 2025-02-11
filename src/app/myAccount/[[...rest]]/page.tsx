


import { UserProfile } from "@clerk/nextjs"; // Correct import
import React from "react";

const Profile = () => {
  return (
    <div className="w-full mx-auto flex justify-center items-center py-4">
      <UserProfile /> {/* This will render the Profile UI along with SignOut button */}
    </div>
  );
};

export default Profile