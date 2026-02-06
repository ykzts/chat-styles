import React from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from 'i18n/routing'
import { readFile } from 'fs/promises'
import { join } from 'path'
import Markdown from 'react-markdown'

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

async function getMarkdownContent(locale: string): Promise<string> {
  // eslint-disable-next-line no-undef
  const filePath = join(process.cwd(), 'content', locale, 'privacy.md')
  return await readFile(filePath, 'utf-8')
}

export default async function Privacy({ params }: Props) {
  const { locale } = await params
  const content = await getMarkdownContent(locale)

  return (
    <div className="py-4 max-w-4xl">
      <article className="prose prose-slate max-w-none">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  )
}
