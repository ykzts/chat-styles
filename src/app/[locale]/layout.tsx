import type { Metadata, Viewport } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from 'i18n/routing'
import Layout from 'components/templates/Layout'
import IntlProvider from 'providers/IntlProvider'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params
}: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: {
      default: 'Chat Styles',
      template: t('titleTemplate')
    },
    description: t('description'),
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
      description: t('description'),
      images: ['/favicon-192x192.png']
    }
  }
}

export const viewport: Viewport = {
  themeColor: '#2563eb'
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  return (
    <html lang={locale}>
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
        <IntlProvider locale={locale}>
          <Layout title="Chat Styles">{children}</Layout>
        </IntlProvider>
      </body>
    </html>
  )
}
