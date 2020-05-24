import { variant } from 'styled-system';

const typeVariant = variant({
  prop: 'type',
  variants: {
    default: {
      color: 'colorLinkPrimary',
      textDecoration: 'none',

      ':hover': {
        color: 'colorLinkPrimaryHover',
        textDecoration: 'underline',
      },
    },

    negative: {
      backgroundColor: 'colorLinkPrimary',
      color: 'colorTextPrimary',
      textDecoration: 'none',

      ':hover': {
        backgroundColor: 'transparent',
        color: 'colorLinkPrimary',
      },
    },
  },
});

export default typeVariant;
