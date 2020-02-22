import React, { Fragment } from 'react';
import { select, boolean, text, number } from '@storybook/addon-knobs/react';

import Heading from './Heading';
import docs from './Heading.docs.mdx';

const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    docs: { page: docs }
  }
};

export const base = () => (
  <Heading
    as={select('as', elements, elements[0])}
    color={text('color', 'colorTextPrimary')}
    fontSize={number('fontSize', 5)}
    noMargin={boolean('noMargin', false)}
  >
    {text('text', 'This is a heading')}
  </Heading>
);

export const size = () => (
  <Fragment>
    <Heading fontSize={6}>This is a size 6 heading.</Heading>
    <Heading fontSize={5}>This is a size 5 heading.</Heading>
    <Heading fontSize={4}>This is a size 4 heading.</Heading>
    <Heading fontSize={3}>This is a size 3 heading.</Heading>
    <Heading fontSize={2}>This is a size 2 heading.</Heading>
  </Fragment>
);
