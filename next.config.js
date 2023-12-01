/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname:"framerusercontent.com",
            protocol: 'https',
        }]
    }
}

module.exports = nextConfig
