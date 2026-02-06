'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from 'components/atoms/LanguageSwitcher'

export default function ClientNav() {
  const t = useTranslations('usage')

  return (
    <div className="flex items-center gap-4">
      <nav>
        <Link
          href="/usage"
          className="text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors text-sm font-medium"
        >
          {t('title')}
        </Link>
      </nav>
      <LanguageSwitcher />
    </div>
  )
}
