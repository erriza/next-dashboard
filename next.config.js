/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
    },
    experimental: {
        scrollRestoration: true, // Optional: Enable scroll restoration
      },
};

module.exports = nextConfig;
