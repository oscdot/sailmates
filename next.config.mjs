import './src/env.mjs';

/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend.nudesafe.com',
                port: '',
                pathname: '/api/files/**/**',
            },
        ],
    },
};

export default nextConfig;
