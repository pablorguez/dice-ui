import { system } from 'styled-system';

const strikeVariant = system({
  strike: {
    property: 'textDecoration',
    transform: (value) => value && 'line-through',
  },
});

export default strikeVariant;
