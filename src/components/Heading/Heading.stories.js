import React from 'react';
import { select, boolean, text, number } from '@storybook/addon-knobs';

import Heading from '.';
import docs from './Heading.docs.mdx';

const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const content = 'This is a <Heading> element';

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    docs: { page: docs },
  },
};

export const base = () => (
  <Heading
    as={select('as', elements, elements[0])}
    color={text('color', 'colorTextPrimary')}
    size={number('size', 'm')}
    noMargin={boolean('noMargin', false)}
  >
    {content}
  </Heading>
);

export const size = () => (
  <>
    <Heading size="s">{content} of size s.</Heading>
    <Heading size="m">{content} of size m.</Heading>
    <Heading size="l">{content} of size l.</Heading>
  </>
);
