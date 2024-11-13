/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: '*.*',
      },
      {
        hostname: 'passing-gwenneth-gh-masood-ce15deca.koyeb.app',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
