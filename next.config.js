const withPWA = require('next-pwa')
const headers = require('./headers.json')
const rewrites = require('./rewrites.json')

const nextConfig = {
  async headers() {
    return headers
  },
  pwa: {
    dest: '.next/static',
    disable: process.env.NODE_ENV === 'development',
    sw: 'service-worker.js'
  },
  async rewrites() {
    return rewrites
  }
}

module.exports = withPWA(nextConfig)
