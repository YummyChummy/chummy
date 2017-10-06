const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json']
  },
  module: {
    loaders: [
      {test: /\.(js)/, use: 'babel-loader'},
      {test: /\.jsx?$/, exclude: '/node_modules/', loaders: 'babel-loader', query: {presets:[ 'es2015', 'react'], plugins:['transform-class-properties']}},
      {test: /\.scss$/, use: extractSass.extract({
          use: [ {loader: 'css-loader'}, {loader: 'sass-loader'}],
          fallback: 'style-loader'
      })},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
    devServer: {
        port: 8080,
        stats:{
            colors: true
        },
        historyApiFallback: true
    },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
      extractSass
  ]
};
