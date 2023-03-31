/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   output: 'standalone',
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '**',
         },
         {
            protocol: 'http',
            hostname: '**',
         },
      ],
   },
};

module.exports = nextConfig;
