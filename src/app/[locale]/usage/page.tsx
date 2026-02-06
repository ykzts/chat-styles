import React from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from 'i18n/routing'
import UsageContentJa from 'content/ja/usage'
import UsageContentEn from 'content/en/usage'

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'usage' })

  return {
    title: t('title')
  }
}

export default async function Usage({ params }: Props) {
  const { locale } = await params

  if (locale === 'ja') {
    return <UsageContentJa />
  }

  return <UsageContentEn />
}
