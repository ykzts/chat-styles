const nextPWA = require('next-pwa')
const headers = require('./headers.json')
const rewrites = require('./rewrites.json')

const withPWA = nextPWA({
  dest: '.next/static',
  disable: process.env.NODE_ENV === 'development',
  sw: 'service-worker.js'
})

/** @type {import('next').NextConfig */
const nextConfig = {
  async headers() {
    return headers
  },
  reactStrictMode: true,
  async rewrites() {
    return rewrites
  }
}

module.exports = withPWA(nextConfig)
