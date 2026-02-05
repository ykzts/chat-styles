import type { Metadata, Viewport } from 'next'
import Layout from 'components/templates/Layout'
import SerwistRegister from 'components/atoms/SerwistRegister'
import 'styles/globals.css'

const description =
  'Chat StylesはYouTube Liveのチャットの見た目を変更するCSSを生成するためのツールです。OBS StudioのブラウザソースのカスタムCSSとして使われることを前提としています。'

export const metadata: Metadata = {
  title: {
    default: 'Chat Styles',
    template: '%s - Chat Styles'
  },
  description: description,
  icons: {
    icon: '/favicon.ico'
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Chat Styles',
    type: 'website',
    images: [
      {
        url: '/favicon-192x192.png',
        width: 192,
        height: 192
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Chat Styles',
    description: description,
    images: ['/favicon-192x192.png']
  }
}

export const viewport: Viewport = {
  themeColor: '#2563eb'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?display=swap&amp;family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Inconsolata"
          rel="stylesheet"
        />
      </head>
      <body>
        <SerwistRegister />
        <Layout title="Chat Styles">{children}</Layout>
      </body>
    </html>
  )
}
