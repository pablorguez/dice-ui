
import { addons } from '@storybook/addons';

import { theme } from './util/theme';

addons.setConfig({
  theme,
  isFullscreen: false,
  showPanel: false,
  panelPosition: 'bottom',
  isToolshown: true
});
