import React from 'react';
import { select, number, boolean } from '@storybook/addon-knobs';

import Text from '.';
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
  <>
    <Text size="s">{content} of size s.</Text>
    <Text size="m">{content} of size m.</Text>
    <Text size="l">{content} of size l.</Text>
  </>
);

export const bold = () => <Text bold>{content}</Text>;

export const italic = () => <Text italic>{content}</Text>;

export const strike = () => <Text strike>{content}</Text>;

export const customElement = () => (
  <Text as="span">{content} rendered as a span</Text>
);
