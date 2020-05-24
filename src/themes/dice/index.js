import colors from './colors';
import { fonts, fontSizes, fontWeights } from './fonts';

export default {
  // -- COLORS --
  colors: {
    primary: colors.brand[3],
    white: '#fff',

    // Text colors
    colorTextPrimary: colors.cloud[2],
    colorTextSecondary: colors.ink[6],
    colorTextSuccess: colors.green[3],
    colorTextError: colors.red[3],
    colorTextInfo: colors.blue[3],
    colorTextWarning: colors.orange[3],
    colorTextCritical: colors.red[3],
    colorTextWhite: colors.cloud[0],

    // Link colors
    colorLinkPrimary: colors.brand[3],
    colorLinkPrimaryHover: colors.brand[5],

    // Background colors
    colorBgBody: colors.cloud[0],
    colorBgModal: colors.cloud[3],
  },

  // -- FONTS --
  fonts,
  fontSizes,
  fontWeights,

  radii: [0, '1px', '2px', '4px', '50%'],

  spacings: [0, 4, 8, 16, 24, 32, 64, 128, 256],

  zIndices: Array.from(Array(11).keys()).map((value) => value * 100),
};
