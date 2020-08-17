const path = require('path');
const preprocess = require('svelte-preprocess');

const custom = require('../webpack.config');

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs'],
  webpackFinal: config => {
    let j;
    const svelteloader = config.module.rules.find((r, i) => {
      if (r.loader && r.loader.includes('svelte-loader')) {
        j = i;
        return true;
      }
    });

    config.module.rules[j] = {
      ...svelteloader,
      options: {
        ...svelteloader.options,
        preprocess: preprocess()
      }
    }

    return config;
  }
};
