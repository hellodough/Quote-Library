/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://zenquotes.io/api/:path*'
          }
        ]
      }
  };
   
  module.exports = nextConfig;