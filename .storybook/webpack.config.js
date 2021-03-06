const path = require('path');
const webpack = require('webpack');

module.exports = ({ config }) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      STORYBOOK: JSON.stringify(true),
      __TEST__: JSON.stringify(false),
      __PRODUCTION__: JSON.stringify(true),
      // Show deprecation warnings in Storybook
      __DEV__: JSON.stringify(true)
    })
  );

  return Object.assign(config, {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '..')
      }
    }
  });
};
