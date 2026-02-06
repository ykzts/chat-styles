import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

// Import message files directly
import jaMessages from '../../messages/ja.json'
import enMessages from '../../messages/en.json'

const messages = {
  ja: jaMessages,
  en: enMessages
}

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that the incoming locale is valid
  if (!locale || !routing.locales.includes(locale as 'ja' | 'en')) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: messages[locale as 'ja' | 'en']
  }
})
