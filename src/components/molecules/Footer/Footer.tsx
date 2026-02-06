'use client'

import React, { FC, ReactElement } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Footer: FC = (): ReactElement => {
  const t = useTranslations('footer')

  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-12 px-4 py-6">
      <ul className="list-none m-0 p-0 space-y-2">
        <li className="m-0 p-0 text-right">
          {t('inspiredBy') + ' '}
          <a
            href="https://chatv2.septapus.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Chat v2.0 Style Generator
          </a>
        </li>
        <li className="m-0 p-0 text-right">
          {t('createdBy') + ' '}
          <a
            href="https://ykzts.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Yamagishi Kazutoshi
          </a>
        </li>
        <li className="m-0 p-0 text-right">
          {t('designedBy') + ' '}
          <a
            href="https://7-nana.bio/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            7_nana
          </a>
        </li>
        <li className="m-0 p-0 text-right">
          <a
            href="https://github.com/ykzts/chat-styles"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            {t('sourceCode')}
          </a>
        </li>
        <li className="m-0 p-0 text-right">
          <Link href="/privacy" className="text-blue-600 hover:underline">
            {t('privacyPolicy')}
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
