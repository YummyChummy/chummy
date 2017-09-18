const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json']
  },
  module: {
    loaders: [
      {test: /\.(js)/, use: 'babel-loader'},
      {test: /\.jsx?$/, exclude: '/node_modules/', loaders: 'babel-loader', query: {presets:[ 'es2015', 'react']}},
      {test: /\.scss$/, loaders: "style-loader!css-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
