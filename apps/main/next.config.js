/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: [ ],
  },
  env: {
    NEXT_PUBLIC_GATEWAY_BASE_URL: 'http://api.identicon.network'
  },
  pageExtensions: ["page.tsx"],
  experimental: {
    outputStandalone: true,
  },     
};

module.exports = nextConfig;
