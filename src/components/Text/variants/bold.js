import { system } from 'styled-system';

const boldVariant = system({
  bold: {
    property: 'fontWeight',
    scale: 'fontWeights',
    transform: value => value && 'bold'
  }
});

export default boldVariant;
