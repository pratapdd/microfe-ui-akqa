const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MARV_PUB_PATH = '/s3_bucket/latest/marv/';

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8082/',
  },
  devServer: {
    host: '0.0.0.0',
    port: 8082,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'space',
      filename: 'remoteEntry.js',
      exposes: {
        './SpaceApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marv: `marv@http://localhost:8084/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
