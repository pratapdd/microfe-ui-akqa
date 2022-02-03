const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8084/',
  },
  devServer: {
    host: '0.0.0.0',
    port: 8084,
    historyApiFallback: {
      index: 'index.html',
    },
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
