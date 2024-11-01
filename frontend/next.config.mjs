/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: '*.gh-masoud.ir',
      },
      {
        hostname: 'passing-gwenneth-gh-masood-ce15deca.koyeb.app',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
