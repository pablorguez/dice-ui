import { variant } from 'styled-system';

const sizeVariant = variant({
  prop: 'size',
  variants: {
    s: {
      fontSize: 'text.s',
      height: '32px',
      px: 2
    },

    m: {
      fontSize: 'text.m',
      height: '42px',
      px: 3
    },

    l: {
      fontSize: 'text.m',
      height: '52px',
      px: 4
    }
  }
});

export default sizeVariant;
