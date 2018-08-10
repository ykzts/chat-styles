// @flow

import type { ColorResult } from 'react-color';

export const css = ({ rgb }: ColorResult): string => {
  if (typeof rgb !== 'undefined') {
    const {
      a: alpha,
      b: blue,
      g: green,
      r: red,
    } = rgb;
    const values = [red, green, blue, alpha]
      .filter(value => typeof value === 'number');

    if (values.length >= 3) {
      const funcName = values.length >= 4 ? 'rgba' : 'rgb';

      return `${funcName}(${values.join(', ')})`;
    }
  }

  return 'transparent';
};

export const hex2rgb = (hex: string): ColorResult => ({
  rgb: {
    a: parseInt(hex.slice(7, 9) || 'ff', 16) / 255,
    b: parseInt(hex.slice(5, 7) || 'ff', 16),
    g: parseInt(hex.slice(3, 5) || 'ff', 16),
    r: parseInt(hex.slice(1, 3) || 'ff', 16),
  },
});
