import React, { FC, useCallback, useEffect, useState } from 'react'

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
  label = 'フォント'
}) => {
  const [localFonts, setLocalFonts] = useState<FontData[]>([])
  const [isSupported, setIsSupported] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if Local Font Access API is supported
    if ('queryLocalFonts' in window) {
      setIsSupported(true)
    }
  }, [])

  const loadLocalFonts = useCallback(async () => {
    if (!isSupported) return

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
      setError('フォントの取得に失敗しました')
    } finally {
      setIsLoading(false)
    }
  }, [isSupported])

  const handleLoadFonts = useCallback(() => {
    void loadLocalFonts()
  }, [loadLocalFonts])

  if (!isSupported) {
    return (
      <div>
        <label className="block text-sm text-gray-600 mb-1">{label}</label>
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="例: Noto Sans JP"
        />
        <p className="text-xs text-gray-500 mt-1">
          お使いのブラウザはローカルフォント選択機能に対応していません
        </p>
      </div>
    )
  }

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>

      {localFonts.length === 0 ? (
        <div>
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled || isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed mb-2"
            placeholder="例: Noto Sans JP"
          />
          <button
            type="button"
            onClick={handleLoadFonts}
            disabled={disabled || isLoading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? '読み込み中...' : 'ローカルフォントから選択'}
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
            <option value="">フォントを選択...</option>
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
            再読み込み
          </button>
        </div>
      )}
    </div>
  )
}

export default FontPicker
