import { system } from 'styled-system';

const fullWidthVariant = system({
  fullWidth: {
    property: 'width',
    transform: (value) => value && '100%',
  },
});

export default fullWidthVariant;
