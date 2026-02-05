const withSerwist = require('@serwist/next').default
const headers = require('./headers.json')
const rewrites = require('./rewrites.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return headers
  },
  reactStrictMode: true,
  async rewrites() {
    return rewrites
  }
}

module.exports = withSerwist({
  swSrc: 'src/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV === 'development'
})(nextConfig)

