import React from 'react';
import { Preview as StorybookPreview } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from 'emotion-theming';

import dice from '../../src/themes/dice';

// eslint-disable-next-line react/prop-types
const Preview = ({ children, ...props }) => (
  <StorybookPreview {...props}>
    <ThemeProvider theme={dice}>{children}</ThemeProvider>
  </StorybookPreview>
);

export default Preview;
