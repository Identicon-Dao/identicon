/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: [ ],
  },
  // using .env file instead
  // env: { 
  //   GATEWAY_BASE_URL: "http://identicon.network:4000"
  // },
  pageExtensions: ["page.tsx"],
  experimental: {
    outputStandalone: true,
  },     
};

module.exports = nextConfig;
