const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        "path": require.resolve("path-browserify") // Or set to `false` if not needed
      };
      return webpackConfig;
    },
  },
};
