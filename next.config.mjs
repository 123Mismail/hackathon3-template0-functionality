/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com','cdn.sanity.io','next-ecommerce-template-4.vercel.app'], // Add all necessary domains here
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore all ESLint errors during builds
  },
};

export default nextConfig;
