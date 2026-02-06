import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['ja', 'en'],
  defaultLocale: 'ja',
  localePrefix: 'as-needed'
})

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
