'use client'

import { useEffect } from 'react'

export default function SerwistRegister() {
  useEffect(() => {
    if (
      'serviceWorker' in navigator &&
      typeof window !== 'undefined' &&
      !window.location.hostname.match(/^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/)
    ) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Silently fail if service worker registration fails
      })
    }
  }, [])

  return null
}
