import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 Not Found'
}

export default function NotFound() {
  return (
    <div className="py-4">
      <h1 className="text-3xl font-normal mb-4">404 Not Found</h1>

      <p className="text-base">
        あなたのお探しのページは見つけることができませんでした。
      </p>
    </div>
  )
}
