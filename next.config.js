/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/webp'],
    domains: ['svsfvdsg.b-cdn.net'],
  },

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
