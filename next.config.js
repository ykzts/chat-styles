const withOffline = require('next-offline')

const nextConfig = {
  experimental: {
    headers: () => [
      {
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=600, s-maxage=60'
          },
          {
            key: 'content-security-policy',
            value:
              "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://polyfill.io; default-src 'none'; font-src https://fonts.gstatic.com; frame-src 'self'; img-src 'self' data:; manifest-src 'self'; sandbox allow-popups allow-same-origin allow-scripts; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://storage.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; worker-src 'self'"
          },
          {
            key: 'referrer-policy',
            value: 'same-origin, strict-origin-when-cross-origin'
          }
        ],
        source: '/((?!_next/).*)'
      },
      {
        headers: [
          {
            key: 'content-security-policy',
            value:
              "default-src 'none'; font-src https://fonts.gstatic.com; img-src 'self' data:; script-src 'unsafe-inline' https://polyfill.io; style-src 'unsafe-inline' blob: https://fonts.googleapis.com"
          },
          {
            key: 'referrer-policy',
            value: 'no-referrer'
          }
        ],
        source: '/preview/(.*)'
      },
      {
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=0'
          }
        ],
        source: '/service-worker.js'
      },
      {
        headers: [
          {
            key: 'content-type',
            value: 'application/manifest+json'
          }
        ],
        source: '/manifest.json'
      }
    ],
    modern: true,
    plugins: true,
    rewrites: () => [
      {
        destination: '/_next/static/service-worker.js',
        source: '/service-worker.js'
      },
      {
        destination: '/_next/static/service-worker.js.map',
        source: '/service-worker.js.map'
      }
    ]
  },
  workboxOpts: {
    clientsClaim: true,
    skipWaiting: true,
    swDest: 'static/service-worker.js'
  }
}

module.exports = withOffline(nextConfig)
