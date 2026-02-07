import React, { ReactElement } from 'react'
import { Link } from 'i18n/routing'
import { getTranslations } from 'next-intl/server'

export default async function Footer(): Promise<ReactElement> {
  const t = await getTranslations('footer')

  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-12 px-4 py-6">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
        <ul className="list-none m-0 p-0 flex flex-row gap-4">
          <li className="m-0 p-0">
            <Link href="/privacy" className="text-blue-600 hover:underline">
              {t('privacyPolicy')}
            </Link>
          </li>
          <li className="m-0 p-0">
            <a
              href="https://github.com/ykzts/chat-styles"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              {t('sourceCode')}
            </a>
          </li>
        </ul>
        <ul className="list-none m-0 p-0 space-y-2">
          <li className="m-0 p-0">
            Inspired by{' '}
            <a
              href="https://chatv2.septapus.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Chat v2.0 Style Generator
            </a>
          </li>
          <li className="m-0 p-0">
            Created by{' '}
            <a
              href="https://ykzts.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Yamagishi Kazutoshi
            </a>
          </li>
          <li className="m-0 p-0">
            Designed by{' '}
            <a
              href="https://7-nana.bio/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              7_nana
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
