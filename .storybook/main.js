const aliases = require("./aliases");

module.exports = {
  stories: ['../src/**/*.story.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/preset-typescript', '@storybook/addon-docs'],
  webpackFinal: async (config) => {
    
    const existingResolve = config.resolve || {};
    const existingAliases = existingResolve.alias|| {};

    config.resolve = {
      ...existingResolve,
      alias: {
        ...existingAliases,
        ...aliases
      }
    };

    return config;

  },
};
