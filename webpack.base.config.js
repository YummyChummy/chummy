const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    'postcss-loader'
                ]
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            })
        }
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
      new HtmlWebpackPlugin({template: 'client/src/index.html'}),
      new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),

  ]
};
