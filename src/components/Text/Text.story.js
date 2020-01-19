import React, { Fragment } from 'react';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';

import Text from './Text';
import docs from './Text.docs.mdx';

const content = 'This is a <Text> element';

export default {
  title: 'Typography|Text',
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
    {content}
  </Text>
)

export const size = () => (
  <Fragment>
    <Text fontSize="1">{content} of size 1 text.</Text>
    <Text fontSize="2">{content} of size 2 text.</Text>
    <Text fontSize="3">{content} of size 3 text.</Text>
  </Fragment>
)

export const bold = () => <Text bold>{content}</Text>;

export const italic = () => <Text italic>{content}</Text>;

export const strike = () => <Text strike>{content}</Text>;

export const customElement = () => <Text as="span">{content}</Text>;
