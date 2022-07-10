/** @type {import('next').NextConfig} */
const withPreact = require('next-plugin-preact');
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  compiler: {
    removeConsole: {
      exclude: ['error', 'info', 'log'],
    },
  },
  experimental: {
    images: {
      layoutRaw: true,
      formats: ['image/avif', 'image/webp']
    },
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
}

module.exports = withPreact(nextConfig)
