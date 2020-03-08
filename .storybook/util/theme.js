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
    size: 'l',
    css: headingStyles
  }),
  h2: withThemeProvider(Heading, {
    as: 'h2',
    size: 'm',
    css: headingStyles
  }),
  h3: withThemeProvider(Heading, {
    as: 'h3',
    size: 'm',
    css: headingStyles
  }),
  h4: withThemeProvider(SubHeading, {
    as: 'h4',
    size: 's',
    css: subHeadingStyles
  }),
  h5: withThemeProvider(SubHeading, {
    as: 'h5',
    size: 's',
    css: subHeadingStyles
  }),
  p: withThemeProvider(Text, { as: 'p' }),
  li: withThemeProvider(Text, { as: 'li' }),
  strong: withThemeProvider(Text, {
    as: 'span',
    bold: true
  }),
  em: withThemeProvider(Text, {
    as: 'span',
    italic: true
  }),
  ul: withThemeProvider(List, { size: 2 }),
  ol: withThemeProvider(List, { ordered: true, size: 2 }),
  a: withThemeProvider(Link, { size: 2 }),
}
