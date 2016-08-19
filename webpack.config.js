'use strict'

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
module.exports = {
  context: path.resolve(__dirname, 'dist'),

  entry: ['./index.pug', './scss/index.scss', './main.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: './js/main.js'
  },
  cache: true,
  devServer: {
    inline: true,
    contentBase: './build',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.scss$/,


      loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!sass?indentedSyntax=true&sourceMap=true')

      },
      { test: /\.css$/, loader: 'style!css' },

      {
        test: /\.(jpe?g|png|svg)$/i,
        exclude: /(node_modules)/,
        loaders: [
          'url-loader?name=[path][name].[ext]&limit=10000',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 3 versions', '> 1%', 'ie 8', 'ie 9'] }) ],

  plugins: [
    new ExtractTextPlugin('./style/[name].css', { allChunks: true }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: 'index.pug',
      inject: true
    })
  ]

}