import React, { Fragment } from 'react';
import { select, boolean, text, number } from '@storybook/addon-knobs/react';

import SubHeading from './';
import docs from './SubHeading.docs.mdx';

const elements = ['h2', 'h3', 'h4', 'h5', 'h6'];

const content = 'This is a <SubHeading> element';

export default {
  title: 'Typography/SubHeading',
  component: SubHeading,
  parameters: {
    docs: { page: docs },
  },
};

export const base = () => (
  <SubHeading
    as={select('as', elements, elements[0])}
    color={text('color', 'colorTextPrimary')}
    size={number('size', 'm')}
    noMargin={boolean('noMargin', false)}
  >
    {content}
  </SubHeading>
);

export const size = () => (
  <Fragment>
    <SubHeading size="s">{content} of size s.</SubHeading>
    <SubHeading size="m">{content} of size m.</SubHeading>
    <SubHeading size="l">{content} of size l.</SubHeading>
  </Fragment>
);
