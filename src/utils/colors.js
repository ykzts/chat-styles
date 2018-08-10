export const css = ({ rgb } = {}) => (rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})` : 'transparent');

export const hex2rgb = hex => ({
  rgb: {
    a: parseInt(hex.slice(7, 9) || 'ff', 16) / 255,
    b: parseInt(hex.slice(5, 7) || 'ff', 16),
    g: parseInt(hex.slice(3, 5) || 'ff', 16),
    r: parseInt(hex.slice(1, 3) || 'ff', 16),
  },
});
