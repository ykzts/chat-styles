import React, { FC, useTransition } from 'react'
import { useLocale } from 'next-intl'
import { routing, usePathname, useRouter } from 'i18n/routing'

const LanguageSwitcher: FC = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  return (
    <div className="flex gap-2">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          disabled={isPending}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            locale === loc
              ? 'bg-white text-blue-600'
              : 'text-white hover:bg-blue-700'
          } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
