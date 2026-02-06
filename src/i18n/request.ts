import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

// Import message files directly
import jaMessages from '../../messages/ja.json'
import enMessages from '../../messages/en.json'

const messages = {
  ja: jaMessages,
  en: enMessages
}

export default getRequestConfig(async ({ locale, requestLocale }) => {
  // When using `setRequestLocale`, an explicit `locale` will be provided
  // Otherwise, use the value from the `[locale]` segment
  let resolvedLocale = locale || (await requestLocale)

  // Validate that the locale is valid
  if (
    !resolvedLocale ||
    !routing.locales.includes(resolvedLocale as 'ja' | 'en')
  ) {
    resolvedLocale = routing.defaultLocale
  }

  return {
    locale: resolvedLocale,
    messages: messages[resolvedLocale as 'ja' | 'en']
  }
})
