const withSerwistInit = require('@serwist/next').default
const createNextIntlPlugin = require('next-intl/plugin')
const createMDX = require('@next/mdx')
const headers = require('./headers.json')
const rewrites = require('./rewrites.json')

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {}
})

const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV === 'development'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async headers() {
    return headers
  },
  reactStrictMode: true,
  async rewrites() {
    return rewrites
  }
}

module.exports = withSerwist(withNextIntl(withMDX(nextConfig)))
