/** @type {import('next').NextConfig} */

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: [ ],
  },
  pageExtensions: ["page.tsx"],
  experimental: {
    outputStandalone: true,
  },     
};

module.exports = nextConfig;
