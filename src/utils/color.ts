import { RGBColor } from 'react-color'

export const hex2rgb = (hex: string): RGBColor => ({
  a: parseInt(hex.slice(7, 9) || 'ff', 16) / 255,
  b: parseInt(hex.slice(5, 7) || 'ff', 16),
  g: parseInt(hex.slice(3, 5) || 'ff', 16),
  r: parseInt(hex.slice(1, 3) || 'ff', 16)
})

export const rgb2hex = ({ a, b, g, r }: RGBColor): string =>
  [
    '#',
    r.toString(16).padStart(2, '0'),
    g.toString(16).padStart(2, '0'),
    b.toString(16).padStart(2, '0'),
    Math.round((a || 0) * 255)
      .toString(16)
      .padStart(2, '0')
  ].join('')
