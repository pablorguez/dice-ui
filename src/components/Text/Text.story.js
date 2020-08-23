import React, { Fragment } from 'react';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';

import Text from './';
import docs from './Text.docs.mdx';

const content = 'This is a <Text> element';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: { page: docs },
  },
};

export const base = () => (
  <Text
    as={select('as', ['p', 'div', 'span'], 'p')}
    color={select(
      'color',
      ['colorTextPrimary', 'colorTextSecondary'],
      'colorTextPrimary'
    )}
    size={number('size', 'm')}
    bold={boolean('bold', false)}
    italic={boolean('italic', false)}
    strike={boolean('strike', false)}
  >
    {content}
  </Text>
);

export const size = () => (
  <Fragment>
    <Text size="s">{content} of size s.</Text>
    <Text size="m">{content} of size m.</Text>
    <Text size="l">{content} of size l.</Text>
  </Fragment>
);

export const bold = () => <Text bold>{content}</Text>;

export const italic = () => <Text italic>{content}</Text>;

export const strike = () => <Text strike>{content}</Text>;

export const customElement = () => (
  <Text as="span">{content} rendered as a span</Text>
);
