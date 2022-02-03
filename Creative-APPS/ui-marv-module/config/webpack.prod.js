const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const commonConfig = require('./webpack.common');
const PUB_PATH = '/s3_bucket/latest/marv/';

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: PUB_PATH,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marv',
      filename: 'remoteEntry.js',
      exposes: {
        './MarvApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
