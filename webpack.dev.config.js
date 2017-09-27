const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader'},
      { test: /\.jsx?$/, exclude:'/node_modules', loader: 'babel-loader'},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [ new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
};
