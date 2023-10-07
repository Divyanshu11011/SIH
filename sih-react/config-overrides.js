const exposeLoader = require('expose-loader');

module.exports = function override(config, env) {
  // Add a rule to expose jQuery globally
  config.module.rules.push({
    test: require.resolve('jquery'),
    use: [
      {
        loader: exposeLoader.loader,
        options: 'jQuery',
      },
      {
        loader: exposeLoader.loader,
        options: '$',
      },
    ],
  });

  return config;
};
