/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.sailmates.app',
        port: '',
        pathname: '/api/files/**/**',
      },
    ],
  },
};

export default nextConfig;
