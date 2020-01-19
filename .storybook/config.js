import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { sortStories } from './util/helpers';
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';

import BaseStyles from '../src/components/BaseStyles';
import dice from '@/src/themes/dice';

// Add group and story names to the sort order to explicitly order them.
// Items that are not included in the list are shown below the sorted items.
const SORT_ORDER = {
  Introduction: [
    'Welcome',
    'Developers',
    'Designers',
    'Contributing',
    'Code of Conduct'
  ],
  Styles: ['Static Styles', 'Theme'],
  Typography: ['Heading', 'SubHeading', 'Text'],
  Layout: [],
  Forms: [],
  Components: [],
  Icons: []
};

addParameters({
  options: {
    storySort: sortStories(SORT_ORDER),
    theme: themes.dark,
    panelPosition: 'bottom',
    isToolshown: true
  }
});

const withThemeProvider = storyFn => (
  <ThemeProvider theme={dice}>
    <BaseStyles />
    { storyFn() }
  </ThemeProvider>
)

const Story = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  '.sbdocs &': {
    minHeight: 'auto'
  }
});

const withStoryStyles = storyFn => {
  return <Story>{storyFn()}</Story>;
};

addDecorator(withKnobs);
addDecorator(withThemeProvider);
addDecorator(withStoryStyles);

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.(stories|story)\.(js|ts|tsx|mdx)$/),
    require.context('../docs', true, /\.(stories|story)\.(js|ts|tsx|mdx)$/),
  ], module
);
