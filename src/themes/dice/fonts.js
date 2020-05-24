const fonts = {
  default:
    // eslint-disable-next-line
    'Inter, Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  mono: 'Consolas, monaco, monospace',
};

const fontSizes = [12, 14, 16, 24, 32, 48, 64, 96, 128];

fontSizes.text = {
  s: fontSizes[0],
  m: fontSizes[1],
  l: fontSizes[2],
};

fontSizes.heading = {
  s: fontSizes[3],
  m: fontSizes[4],
  l: fontSizes[5],
};

fontSizes.subHeading = {
  s: fontSizes[1],
  m: fontSizes[2],
  l: fontSizes[3],
};

const fontWeights = {
  regular: 400,
  bold: 700,
};

export {
  fonts,
  fontSizes,
  fontWeights,
};
