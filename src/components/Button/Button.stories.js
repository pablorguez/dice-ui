import React, { Fragment } from 'react';
import { select, boolean, text } from '@storybook/addon-knobs/react';

import Button from './';
import docs from './Button.docs.mdx';

export default {
  title: 'Forms/Button',
  component: Button,
  parameters: {
    docs: { page: docs }
  }
};

export const base = () => <Button>Base button</Button>;

export const sizes = () => (
  <Fragment>
    <div style={{ marginBottom: '10px' }}>
      <Button size="s">Size s button</Button>
    </div>
    <div style={{ marginBottom: '10px' }}>
      <Button size="m">Size m button</Button>
    </div>
    <Button size="l">Size l button</Button>
  </Fragment>
);

export const rounded = () => <Button rounded>Rounded button</Button>;

export const fullWidth = () => <Button fullWidth>Full width button</Button>;
