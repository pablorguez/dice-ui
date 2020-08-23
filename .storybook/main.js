module.exports = {
  stories: [
    '../src/**/*.(stories|story).(js|ts|tsx|mdx)',
    '../docs/**/*.(stories|story).(js|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-jest',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
  ]
}
