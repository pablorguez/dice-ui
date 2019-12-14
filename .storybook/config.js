import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { sortStories } from './util/helpers';
import { themes } from '@storybook/theming';

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

addDecorator(withKnobs);

// These decorators need to be disabled for StoryShots to work.
// if (!__TEST__) {
//   const withTests = require('./util/withTests').default;
//   addDecorator(withTests);
//   addDecorator(withStoryStyles);
// }

// addDecorator(withThemeProvider);

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.(stories|story)\.(js|ts|tsx|mdx)$/),
    require.context('../docs', true, /\.(stories|story)\.(js|ts|tsx|mdx)$/),
  ], module
);
