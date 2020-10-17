import React from 'react';
import { Canvas } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from 'emotion-theming';

import dice from '../../src/themes/dice';

// eslint-disable-next-line react/prop-types
const Preview = ({ children, ...props }) => (
  <Canvas {...props}>
    <ThemeProvider theme={dice}>{children}</ThemeProvider>
  </Canvas>
);

export default Preview;
