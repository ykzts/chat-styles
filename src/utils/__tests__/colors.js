/* eslint-env jest */

import { css, hex2rgb } from '../colors';

const WHITE = {
  a: 1,
  b: 255,
  g: 255,
  r: 255,
};

test('css() returns a <color> for CSS', () => {
  const color = css(WHITE);
  expect(color).toBe('rgb(255, 255, 255)');
});

test('css() returns a <color> with alpha', () => {
  const color = css({ ...WHITE, a: 0.5 });
  expect(color).toBe('rgba(255, 255, 255, 0.5)');
});

test('hex2rgb() returns a RGB object', () => {
  const rgb = hex2rgb('#ffffff');
  expect(rgb).toEqual({
    a: 1,
    b: 255,
    g: 255,
    r: 255,
  });
});

test('hex2rgb() returns a transparency RGB object', () => {
  const rgb = hex2rgb('#ffffff00');
  expect(rgb).toEqual({
    a: 0,
    b: 255,
    g: 255,
    r: 255,
  });
});
