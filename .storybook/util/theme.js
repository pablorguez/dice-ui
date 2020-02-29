import React from 'react';
import { create } from '@storybook/theming/create';
import { ThemeProvider } from 'emotion-theming';
import css from '@styled-system/css';

import BaseStyles from '../../src/components/BaseStyles';
import Heading from '../../src/components/Heading';
import List from '../../src/components/List';
import Link from '../../src/components/Link';
import SubHeading from '../../src/components/SubHeading';
import Text from '../../src/components/Text';

import dice from '../../src/themes/dice';

export const theme = create({
  base: 'dark',

  appContentBg: '#333',
})

const withThemeProvider = (Component, baseProps = {}) => (props = {}) => (
  <ThemeProvider theme={dice}>
    <BaseStyles />
    <Component {...baseProps} {...props} />
  </ThemeProvider>
)

const headingStyles = css({
  '*:not(h1):not(h2):not(h3) + &': {
    mt: 4
  }
})

const subHeadingStyles = css({
  mt: 2
})

export const components = {
  h1: withThemeProvider(Heading, {
    as: 'h1',
    size: 6,
    css: headingStyles
  }),
  h2: withThemeProvider(Heading, {
    as: 'h2',
    size: 5,
    css: headingStyles
  }),
  h3: withThemeProvider(Heading, {
    as: 'h3',
    size: 4,
    css: headingStyles
  }),
  h4: withThemeProvider(SubHeading, {
    as: 'h4',
    size: 3,
    css: subHeadingStyles
  }),
  h5: withThemeProvider(SubHeading, {
    as: 'h5',
    size: 2,
    css: subHeadingStyles
  }),
  p: withThemeProvider(Text, { as: 'p', size: 2 }),
  li: withThemeProvider(Text, { as: 'li', size: 2 }),
  strong: withThemeProvider(Text, {
    as: 'span',
    size: 2,
    bold: true
  }),
  em: withThemeProvider(Text, {
    as: 'span',
    size: 2,
    italic: true
  }),
  ul: withThemeProvider(List, { size: 2 }),
  ol: withThemeProvider(List, { ordered: true, size: 2 }),
  a: withThemeProvider(Link, { size: 2 }),
}
