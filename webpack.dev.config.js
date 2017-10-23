const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'server/build'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.jsx?$/, exclude:'/node_modules', loader: 'babel-loader', query: {plugins: ['transform-class-properties']}},
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] }
    ]
  },
  devServer: {
      port: 8080,
      stats:{
          colors: true
      },
      historyApiFallback: true
  },
  plugins: [ new HtmlWebpackPlugin({
    template: 'client/src/index.html'
  })]
};
