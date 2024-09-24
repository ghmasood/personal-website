/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*.gh-masoud.ir',
      },
    ],
  },
};

export default nextConfig;
