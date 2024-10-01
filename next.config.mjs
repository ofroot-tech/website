/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,  // Disable ESLint during builds
  },
};

export default nextConfig;
