import React, { FC } from 'react'
import { useLocale } from 'next-intl'
import { routing } from 'i18n/routing'
import { usePathname, useRouter } from 'next/navigation'

const LanguageSwitcher: FC = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const handleLocaleChange = (newLocale: string) => {
    // Remove the current locale from the pathname if it exists
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    
    // Navigate to the new locale
    const newPath = newLocale === routing.defaultLocale 
      ? pathnameWithoutLocale 
      : `/${newLocale}${pathnameWithoutLocale}`
    
    router.push(newPath)
  }

  return (
    <div className="flex gap-2">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            locale === loc
              ? 'bg-white text-blue-600'
              : 'text-white hover:bg-blue-700'
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
