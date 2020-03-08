const baseColors = {
  brand: [
    '#ECF8F7',
    '#D6F0EE',
    '#C0E8E4',
    '#00A991',
    '#009882',
    '#008F7B',
    '#007F6D',
    '#007060',
    '#006657',
    '#005C4E'
  ],
  orange: [
    '#FDF0E3',
    '#FAE2C7',
    '#F8D3AB',
    '#F9971E',
    '#F38906',
    '#D67906',
    '#AB3307',
    '#972C07',
    '#7A2405',
    '#842706'
  ],
  red: [
    '#FAEAEA',
    '#F4D2D2',
    '#EEB9B9',
    '#D21C1C',
    '#B91919',
    '#9D1515',
    '#970C0C',
    '#890B0B',
    '#6D0909',
    '#760909'
  ],
  green: [
    '#EBF4EC',
    '#D7EAD9',
    '#C3DFC7',
    '#28A138',
    '#238B31',
    '#1D7228',
    '#2D7738',
    '#276831',
    '#1F5126',
    '#235C2B'
  ],
  blue: [
    '#E5F7FF',
    '#C7EEFF',
    '#A8E5FF',
    '#0172CB',
    '#0161AC',
    '#01508E',
    '#005AA3',
    '#004F8F',
    '#003E70',
    '#004680'
  ],
  cloud: [
    '#F5F7F9',
    '#E5EAEF',
    '#D6DEE6',
    '#EFF2F5',
    '#DCE3E9',
    '#CAD4DE',
    '#E8EDF1'
  ],
  ink: [
    '#BAC7D5',
    '#A6B6C8',
    '#94A8BE',
    '#5F738C',
    '#52647A',
    '#465567',
    '#252A31',
    '#181B20',
    '#0B0C0F'
  ]
};

const fontSizes = [12, 14, 16, 24, 32, 48, 64];

fontSizes.text = {
  s: fontSizes[0],
  m: fontSizes[1],
  l: fontSizes[2]
};

fontSizes.heading = {
  s: fontSizes[3],
  m: fontSizes[4],
  l: fontSizes[5]
};

fontSizes.subHeading = {
  s: fontSizes[1],
  m: fontSizes[2],
  l: fontSizes[3]
};

export default {
  // -- COLORS --
  colors: {
    primary: baseColors.brand[3],
    white: '#fff',

    // Text colors
    colorTextPrimary: baseColors.cloud[2],
    colorTextSecondary: baseColors.ink[6],
    colorTextSuccess: baseColors.green[3],
    colorTextError: baseColors.red[3],
    colorTextInfo: baseColors.blue[3],
    colorTextWarning: baseColors.orange[3],
    colorTextCritical: baseColors.red[3],
    colorTextWhite: baseColors.cloud[0],

    // Link colors
    colorLinkPrimary: baseColors.brand[3],
    colorLinkPrimaryHover: baseColors.brand[5],

    // Background colors
    colorBgBody: baseColors.cloud[0],
    colorBgModal: baseColors.cloud[3]
  },
  // Font Sizes
  fontSizes,
  // -- FONTS --
  fonts: {
    default:
      // eslint-disable-next-line
      'Inter, Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'Consolas, monaco, monospace'
  },

  fontWeights: {
    regular: 400,
    bold: 700
  },

  radii: [0, '1px', '2px', '4px', '50%'],

  spacings: [0, 4, 8, 16, 24, 32, 64, 128, 256],

  zIndices: Array.from(Array(11).keys()).map(value => value * 100)
};
