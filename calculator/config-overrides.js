const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@components': path.resolve(__dirname, './src/components'),
    '@constants': path.resolve(__dirname, './src/constants'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@store': path.resolve(__dirname, './src/store'),
    '@styles': path.resolve(__dirname, './src/styles'),
    '@utils': path.resolve(__dirname, './src/utils'),
  };

  config.output = {
    // ЗДЕСЬ МОЖНО ДОБАВИТЬ КОНФИГУРАЦИЮ WEBPACK
    ...config.output,
    path: path.resolve(__dirname, './dist'),
    filename: 'modsen_bundle.js',
  };

  return config;
};
