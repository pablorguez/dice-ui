import React, { Fragment } from 'react';
import { select, number, boolean } from '@storybook/addon-knobs/react';

import docs from './Text.docs.mdx';
import Text from './Text';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Components|Text',
  component: Text,
  parameters: {
    docs: { page: docs }
  }
}

export const base = () => (
  <Text
    as={select('as', ['p', 'div', 'span'], 'p')}
    color={text('color', 'colorTextPrimary')}
    fontSize={number('fontSize', 1)}
    bold={boolean('bold', false)}
    italic={boolean('italic', false)}
    strike={boolean('strike', false)}
  >
    This is a Text element.
  </Text>
)

export const size = () => (
  <Fragment>
    <Text fontSize="1">This is a size 1 text.</Text>
    <Text fontSize="2">This is a size 2 text.</Text>
    <Text fontSize="3">This is a size 3 text.</Text>
  </Fragment>
)
