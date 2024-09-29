/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This tells Next.js to export the app as static files
    images: {
      unoptimized: true, // Disable image optimization for static exports
    },
  };
  
  export default nextConfig;
  