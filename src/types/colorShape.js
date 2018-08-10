import { number, shape, string } from 'prop-types';

export default shape({
  hex: string,
  hsl: shape({
    a: number,
    h: number.isRequired,
    l: number.isRequired,
    s: number.isRequired,
  }),
  rgb: shape({
    a: number,
    b: number.isRequired,
    g: number.isRequired,
    r: number.isRequired,
  }),
});
