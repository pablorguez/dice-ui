import { system } from 'styled-system';

const noMarginVariant = system({
  noMargin: {
    property: 'noMargin',
    properties: ['spacings'],
    transform: (value) => value && 0,
  },
});

export default noMarginVariant;
