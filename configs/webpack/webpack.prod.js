const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const appDirectory = path.resolve(__dirname, '../../');
const imageInlineSizeLimit = '10000';

const config = {
  context: appDirectory,
  mode: 'production',

  entry: ['./src/index.tsx'],
  bail: true,
  devtool: 'source-map',
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    modules: ['src', 'src/services', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, 'babel.config.js'),
          },
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ttf$/],
        loader: 'url-loader',
        options: {
          limit: imageInlineSizeLimit,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: [/\.ttf$/],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(appDirectory, 'public/index.html'),
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new StatsWriterPlugin({
      stats: {
        all: true,
      },
    }),
    new ESLintPlugin(),
    new StylelintPlugin({ files: './src/**/*.{ts,tsx}' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};

module.exports = config;
