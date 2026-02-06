import type { Metadata, Viewport } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from 'i18n/routing'
import LocaleLayoutContent from './LocaleLayoutContent'

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

export default function LocaleLayout({ children, params }: Props) {
  return <LocaleLayoutContent params={params}>{children}</LocaleLayoutContent>
}
