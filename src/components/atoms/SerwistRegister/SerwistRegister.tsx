'use client'

import { useEffect } from 'react'

export default function SerwistRegister() {
  useEffect(() => {
    if (
      'serviceWorker' in navigator &&
      typeof window !== 'undefined' &&
      window.location.hostname !== 'localhost'
    ) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration)
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })
    }
  }, [])

  return null
}
