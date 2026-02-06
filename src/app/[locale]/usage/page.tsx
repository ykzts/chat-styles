import React from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from 'i18n/routing'
import UsageJa from 'content/ja/usage.mdx'
import UsageEn from 'content/en/usage.mdx'

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

  const UsageContent = locale === 'ja' ? UsageJa : UsageEn

  return (
    <div className="py-4 max-w-4xl">
      <article className="prose prose-slate max-w-none">
        <UsageContent />
      </article>
    </div>
  )
}
