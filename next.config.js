/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
   enabled: false,
 });

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

module.exports = withBundleAnalyzer(nextConfig);
