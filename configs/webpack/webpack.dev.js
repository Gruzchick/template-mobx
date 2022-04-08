const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const getStyleLoaders = require('./get-style-loaders');
const getCSSModuleLocalIdent = require('./get-cssmodule-local-ident');

const appDirectory = path.resolve(__dirname, '../../'); // TODO: Поменять когда будет выноситься в node_modules
const imageInlineSizeLimit = '10000';

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const getDevConfig = ({}) => {
  return {
    mode: process.env.NODE_ENV,
    context: appDirectory,

    entry: [path.resolve(appDirectory, 'src/index.tsx')],
    bail: false,
    devtool: 'eval-source-map',
    output: {
      path: path.resolve(appDirectory, 'dist'),
      publicPath: '/',
      filename: 'static/js/bundle.js',
      chunkFilename: 'static/js/[name].chunk.js',
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
        // https://github.com/welldone-software/why-did-you-render/issues/85
        'react-redux': 'react-redux/lib',
        'react-router': 'react-router/umd/react-router.js',
        'react-query': 'react-query/dist/react-query.production.min.js',
      },
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  configFile: path.resolve(__dirname, 'babel.config.js'),
                  cacheDirectory: true,
                  cacheCompression: false,
                  compact: false,
                },
              },
            },
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
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
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders('development', {
                importLoaders: 1,
                sourceMap: true,
              }),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
            // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
            // using the extension .module.css
            {
              test: cssModuleRegex,
              use: getStyleLoaders('development', {
                importLoaders: 1,
                sourceMap: true,
                modules: {
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              }),
            },
            // Opt-in support for SASS (using .scss or .sass extensions).
            // By default we support SASS Modules with the
            // extensions .module.scss or .module.sass
            {
              test: sassRegex,
              exclude: sassModuleRegex,
              use: getStyleLoaders(
                'development',
                {
                  importLoaders: 3,
                  sourceMap: true,
                },
                'sass-loader',
              ),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
            // Adds support for CSS Modules, but using SASS
            // using the extension .module.scss or .module.sass
            {
              test: sassModuleRegex,
              use: getStyleLoaders(
                'development',
                {
                  importLoaders: 3,
                  sourceMap: true,
                  modules: {
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
                'sass-loader',
              ),
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: 'body',
        template: path.resolve(appDirectory, 'public/index.html'),
      }),
      new CleanWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin({
        async: true,
        formatter: 'basic',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        // add errors to webpack instead of warnings
        failOnError: true,
        // set the current working directory for displaying module paths
        cwd: process.cwd(),
      }),
    ],
    devServer: {
      hot: true,
      port: process.env.PORT,
      host: '0.0.0.0',
      historyApiFallback: true,
      client: {
        overlay: { errors: true, warnings: false },
      },
    },
  };
};

module.exports = getDevConfig;
