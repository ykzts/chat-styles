/* eslint-env jest */

import { generateTextShadow } from '../styleSheets';

const WHITE = {
  a: 1,
  b: 255,
  g: 255,
  r: 255,
};

test('generateTextShadow() returns a text-shadow', () => {
  const textShadow = generateTextShadow(2, WHITE);
  const values = [
    '-2px -2px rgb(255, 255, 255)',
    '-2px -1px rgb(255, 255, 255)',
    '-2px 0px rgb(255, 255, 255)',
    '-2px 1px rgb(255, 255, 255)',
    '-2px 2px rgb(255, 255, 255)',
    '-1px -2px rgb(255, 255, 255)',
    '-1px -1px rgb(255, 255, 255)',
    '-1px 0px rgb(255, 255, 255)',
    '-1px 1px rgb(255, 255, 255)',
    '-1px 2px rgb(255, 255, 255)',
    '0px -2px rgb(255, 255, 255)',
    '0px -1px rgb(255, 255, 255)',
    '0px 0px rgb(255, 255, 255)',
    '0px 1px rgb(255, 255, 255)',
    '0px 2px rgb(255, 255, 255)',
    '1px -2px rgb(255, 255, 255)',
    '1px -1px rgb(255, 255, 255)',
    '1px 0px rgb(255, 255, 255)',
    '1px 1px rgb(255, 255, 255)',
    '1px 2px rgb(255, 255, 255)',
    '2px -2px rgb(255, 255, 255)',
    '2px -1px rgb(255, 255, 255)',
    '2px 0px rgb(255, 255, 255)',
    '2px 1px rgb(255, 255, 255)',
    '2px 2px rgb(255, 255, 255);',
  ];
  expect(textShadow).toBe(`text-shadow: ${values.join(', ')}`);
});
