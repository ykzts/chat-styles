import React from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from 'i18n/routing'
import PrivacyContentJa from 'content/ja/privacy'
import PrivacyContentEn from 'content/en/privacy'

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })

  return {
    title: t('title')
  }
}

export default async function Privacy({ params }: Props) {
  const { locale } = await params

  if (locale === 'ja') {
    return <PrivacyContentJa />
  }

  return <PrivacyContentEn />
}
