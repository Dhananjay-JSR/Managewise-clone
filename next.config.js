/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname:"framerusercontent.com",
            protocol: 'https',
        },{
            hostname:"i.pravatar.cc",
            protocol:"https"
        }]
    }
}

module.exports = nextConfig
