/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.screenshotone.com', 'avatars.githubusercontent.com'], // Оба домена в одном массиве
  },
  env: {
    API_KEY: process.env.API_KEY, 
  },
};

module.exports = nextConfig;
