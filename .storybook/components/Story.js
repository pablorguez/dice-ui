import React from 'react';
import { Story as StorybookStory } from '@storybook/addon-docs/blocks';

import Preview from './Preview';

// eslint-disable-next-line react/prop-types
const Story = ({ withToolbar = true, ...props }) => (
  <Preview withToolbar={withToolbar}>
    <StorybookStory {...props} />
  </Preview>
);

export default Story;
