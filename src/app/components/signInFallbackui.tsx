import React from 'react';

const SignInFallbackUI = () => {
  return (
    <div className="max-h-screen flex items-center justify-center py-20  bg-gray-100">
      <div className="  p-8 rounded-lg  text-center max-w-md w-full">
        {/* Icon for no internet */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          No Internet Connection
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          It looks like you're offline. Please check your internet connection and try again.
        </p>

        {/* Retry Button */}
        <button
          onClick={() => window.location.reload()} // Reload the page to retry
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Retry
        </button>

        {/* Additional Help Text */}
        <p className="text-sm text-gray-500 mt-4">
          If the issue persists, contact support.
        </p>
      </div>
    </div>
  );
};

export default SignInFallbackUI;