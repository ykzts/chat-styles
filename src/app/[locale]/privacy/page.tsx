import React from 'react'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ locale: string }>
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
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'privacy' })

  return (
    <div className="py-4 max-w-4xl">
      <h1 className="text-3xl font-normal mb-6">{t('title')}</h1>

      <div className="space-y-6 text-base">
        <section>
          <h2 className="text-xl font-semibold mb-3">{t('intro.heading')}</h2>
          <p>{t('intro.content')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('collection.heading')}
          </h2>
          <p>{t('collection.paragraph1')}</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>{t('collection.list.item1')}</li>
            <li>{t('collection.list.item2')}</li>
            <li>{t('collection.list.item3')}</li>
            <li>{t('collection.list.item4')}</li>
            <li>{t('collection.list.item5')}</li>
            <li>{t('collection.list.item6')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{t('purpose.heading')}</h2>
          <p>{t('purpose.paragraph1')}</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>{t('purpose.list.item1')}</li>
            <li>{t('purpose.list.item2')}</li>
            <li>{t('purpose.list.item3')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('thirdParty.heading')}
          </h2>
          <p>{t('thirdParty.paragraph1')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('analytics.heading')}
          </h2>
          <p>{t('analytics.paragraph1')}</p>
          <p className="mt-2">{t('analytics.paragraph2')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{t('cookies.heading')}</h2>
          <p>{t('cookies.paragraph1')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{t('changes.heading')}</h2>
          <p>{t('changes.paragraph1')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{t('contact.heading')}</h2>
          <p>{t('contact.paragraph1')}</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <a
                href="https://github.com/ykzts/chat-styles/issues"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('contact.github')}
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-8 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-600">{t('effectiveDate')}</p>
        </section>
      </div>
    </div>
  )
}
