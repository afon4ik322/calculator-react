const { alias } = require('react-app-rewire-alias');

const aliasMap = {
  '@components': 'src/components',
  '@constants': 'src/constants',
  '@pages': 'src/pages',
  '@store': 'src/store',
  '@styles': 'src/styles',
  '@utils': 'src/utils',
};

module.exports = function override(config, env) {
  alias(aliasMap)(config);
  return config;
};

module.exports = alias(aliasMap);
