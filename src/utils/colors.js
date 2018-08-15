// @flow

import type { RGBColor } from 'react-color';

export const css = (rgb: RGBColor): string => {
  const values: Array<number> = [rgb.r, rgb.g, rgb.b];

  if (values.some(value => typeof value === 'number')) {
    let funcName = 'rgb';

    if (typeof rgb.a === 'number' && rgb.a < 1) {
      funcName = 'rgba';
      values.push(rgb.a);
    }

    return `${funcName}(${values.join(', ')})`;
  }

  return 'transparent';
};

export const hex2rgb = (hex: string): RGBColor => ({
  a: parseInt(hex.slice(7, 9) || 'ff', 16) / 255,
  b: parseInt(hex.slice(5, 7) || 'ff', 16),
  g: parseInt(hex.slice(3, 5) || 'ff', 16),
  r: parseInt(hex.slice(1, 3) || 'ff', 16),
});
