import { system } from 'styled-system';

const sizeVariant = system({
  size: {
    property: 'fontSize',
    scale: 'fontSizes',
    transform: (value, scale) => value && scale.heading[value],
  },
});

export default sizeVariant;
