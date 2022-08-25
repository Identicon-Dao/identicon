/** @type {import('next').NextConfig} */

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: [ ],
  },
  env: {
    GATEWAY_BASE_URL: (process.env.NODE_ENV === 'production') 
      ? "http://api.identicon.network"
      : "http://localhost:4000"
  },
  pageExtensions: ["page.tsx"],
  experimental: {
    outputStandalone: true,
  },     
};

module.exports = nextConfig;
