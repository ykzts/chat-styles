import React from 'react'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ locale: string }>
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
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'usage' })

  return (
    <div className="py-4 max-w-4xl">
      <h1 className="text-3xl font-normal mb-6">{t('title')}</h1>

      <div className="space-y-8 text-base">
        <section>
          <h2 className="text-2xl font-semibold mb-3">{t('what.heading')}</h2>
          <p>{t('what.paragraph1')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('basic.heading')}</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {t('basic.step1.title')}
              </h3>
              <p className="mb-3">{t('basic.step1.paragraph1')}</p>

              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>{t('basic.step1.avatar.title')}</strong>
                  <br />
                  {t('basic.step1.avatar.content')}
                </li>
                <li>
                  <strong>{t('basic.step1.font.title')}</strong>
                  <br />
                  {t('basic.step1.font.content')}
                </li>
                <li>
                  <strong>{t('basic.step1.name.title')}</strong>
                  <br />
                  {t('basic.step1.name.content')}
                </li>
                <li>
                  <strong>{t('basic.step1.message.title')}</strong>
                  <br />
                  {t('basic.step1.message.content')}
                </li>
                <li>
                  <strong>{t('basic.step1.sticker.title')}</strong>
                  <br />
                  {t('basic.step1.sticker.content')}
                </li>
                <li>
                  <strong>{t('basic.step1.other.title')}</strong>
                  <br />
                  {t('basic.step1.other.content')}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                {t('basic.step2.title')}
              </h3>
              <p>{t('basic.step2.paragraph1')}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                {t('basic.step3.title')}
              </h3>
              <p className="mb-3">{t('basic.step3.intro')}</p>

              <div className="pl-4 space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">
                    {t('basic.step3.substep1.title')}
                  </h4>
                  <ul className="list-decimal list-inside space-y-1">
                    <li>{t('basic.step3.substep1.list.item1')}</li>
                    <li>{t('basic.step3.substep1.list.item2')}</li>
                    <li>{t('basic.step3.substep1.list.item3')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">
                    {t('basic.step3.substep2.title')}
                  </h4>
                  <p className="mb-2">{t('basic.step3.substep2.content')}</p>
                  <code className="block bg-gray-100 p-2 rounded text-sm break-all">
                    https://www.youtube.com/live_chat?v=VIDEO_ID&is_popout=1
                  </code>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">
                    {t('basic.step3.substep3.title')}
                  </h4>
                  <p>{t('basic.step3.substep3.content')}</p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">
                    {t('basic.step3.substep4.title')}
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{t('basic.step3.substep4.list.item1')}</li>
                    <li>{t('basic.step3.substep4.list.item2')}</li>
                    <li>{t('basic.step3.substep4.list.item3')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">{t('tips.heading')}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>{t('tips.list.item1')}</li>
            <li>{t('tips.list.item2')}</li>
            <li>{t('tips.list.item3')}</li>
            <li>{t('tips.list.item4')}</li>
            <li>{t('tips.list.item5')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('faq.heading')}</h2>

          <div className="space-y-4">
            <div>
              <p className="font-medium mb-1">{t('faq.q1.question')}</p>
              <p className="text-gray-700">{t('faq.q1.answer')}</p>
            </div>

            <div>
              <p className="font-medium mb-1">{t('faq.q2.question')}</p>
              <p className="text-gray-700">{t('faq.q2.answer')}</p>
            </div>

            <div>
              <p className="font-medium mb-1">{t('faq.q3.question')}</p>
              <p className="text-gray-700">{t('faq.q3.answer')}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-300 pt-6">
          <p>
            {t('contact.paragraph1')}
            <a
              href="https://github.com/ykzts/chat-styles"
              className="text-blue-600 hover:underline mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('contact.github')}
            </a>
            {t('contact.paragraph2')}
          </p>
        </section>
      </div>
    </div>
  )
}
