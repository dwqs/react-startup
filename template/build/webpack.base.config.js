const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HappyPack = require('happypack');   

const getHappyPackConfig = require('./happypack');
const config = require('../config');
const utils = require('./utils');

const env = process.env.NODE_ENV || 'development';
const apiPrefix = env === 'development' ? config[env].prefix : config[env].prefix;

console.log('---------env------:', env, '------apiPrefix-------:', apiPrefix);

module.exports = {
  mode: env,
  context: utils.resolve('src'),
  module: {
    noParse: [/static|assets/],
    rules: [
      {
        test: /\.(js|jsx)$/,
        type: 'javascript/auto',
        exclude: /node_modules/,
        loader: 'happypack/loader?id=js'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'javascript/auto',
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: utils.assetsPath('images/[name].[ext]')
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'javascript/auto',
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[ext]')
          }
        }]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [utils.resolve('node_modules')],
    alias: {
      '@src': utils.resolve('src'),
      '@components': utils.resolve('src/components'){{#if_eq state 'redux'}},
      '@redux': utils.resolve('src/redux'){{/if_eq}}
    }
  },

  resolveLoader: {
    modules: [utils.resolve('node_modules')]
  },

  performance: {
    hints: false
  },

  stats: {
    children: false
  },

  plugins: [
    new HappyPack(getHappyPackConfig({
      id: 'js',
      loaders: [{
        path: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      }] 
    })),

    // copy assets
    new CopyWebpackPlugin([
      { 
        context: '..', 
        from: 'static/**/*', 
        to: utils.resolve('dist'), 
        force: true,
        ignore: ['.*']
      }, 
      {
        context: '../src',
        from: 'assets/**/*',
        to: utils.resolve('dist'),
        force: true,
        ignore: ['.*']
      }
    ]),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      env: env,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
      }
    }),

    new ProgressBarPlugin()
  ]
};
