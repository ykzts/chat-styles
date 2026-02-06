import React, { FC, useCallback, useState } from 'react'
import { useTranslations } from 'next-intl'

type FontData = {
  family: string
  fullName: string
  postscriptName: string
  style: string
}

type Props = {
  value?: string
  onChange: (fontFamily: string) => void
  disabled?: boolean
  label?: string
}

const FontPicker: FC<Props> = ({
  value,
  onChange,
  disabled = false,
  label
}) => {
  const t = useTranslations('fontPicker')
  const [localFonts, setLocalFonts] = useState<FontData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadLocalFonts = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Request permission and query local fonts
      const fonts = (await (
        window as unknown as { queryLocalFonts: () => Promise<FontData[]> }
      ).queryLocalFonts()) as FontData[]

      // Group fonts by family and get unique families
      const fontFamilies = new Map<string, FontData>()
      fonts.forEach((font: FontData) => {
        if (!fontFamilies.has(font.family)) {
          fontFamilies.set(font.family, font)
        }
      })

      setLocalFonts(
        Array.from(fontFamilies.values()).sort((a, b) =>
          a.family.localeCompare(b.family)
        )
      )
    } catch (err) {
      console.error('Failed to query local fonts:', err)
      setError(t('error'))
    } finally {
      setIsLoading(false)
    }
  }, [t])

  const handleLoadFonts = useCallback(() => {
    void loadLocalFonts()
  }, [loadLocalFonts])

  const displayLabel = label || t('label')

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{displayLabel}</label>

      {localFonts.length === 0 ? (
        <div>
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled || isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed mb-2"
            placeholder={t('placeholder')}
          />
          <button
            type="button"
            onClick={handleLoadFonts}
            disabled={disabled || isLoading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? t('loading') : t('localFonts')}
          </button>
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
      ) : (
        <div>
          <select
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">{t('selectFont')}</option>
            {localFonts.map((font) => (
              <option key={font.postscriptName} value={font.family}>
                {font.family}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleLoadFonts}
            disabled={disabled || isLoading}
            className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors mt-2"
          >
            {t('reload')}
          </button>
        </div>
      )}
    </div>
  )
}

export default FontPicker
