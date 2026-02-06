import React from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from 'i18n/routing'

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

  let PrivacyContent
  if (locale === 'ja') {
    PrivacyContent = (await import('../../../../content/ja/privacy.mdx'))
      .default
  } else {
    PrivacyContent = (await import('../../../../content/en/privacy.mdx'))
      .default
  }

  return (
    <div className="py-4 max-w-4xl">
      <article className="prose prose-slate max-w-none">
        <PrivacyContent />
      </article>
    </div>
  )
}
