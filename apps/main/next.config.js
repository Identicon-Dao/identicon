/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: [ ],
  },
  env: {
  },
  pageExtensions: ["page.tsx"],
  experimental: {
    outputStandalone: true,
  },     
};

module.exports = nextConfig;
