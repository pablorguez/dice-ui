import { system } from 'styled-system';

const italicVariant = system({
  italic: {
    property: 'fontStyle',
    transform: value => value && 'italic'
  }
});

export default italicVariant;
