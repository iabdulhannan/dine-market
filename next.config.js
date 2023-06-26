/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io']
  },
  webpack: config => {
    config.resolve.fallback = {tls: false, fs: false, net: false};

    return config;
  }
}

module.exports = nextConfig
