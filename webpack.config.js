var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // context: path.join(__dirname, 'src'),

  entry: './src/main.js',

  output: {
    path: './dist/',
    filename: 'build.js'
  },

  // devtool: "source-map",

  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    colors: true,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    stats: 'minimal'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      }
    ]
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   comments: false
    // }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      hash: true
    })
  ]
};
