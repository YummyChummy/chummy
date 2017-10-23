const webpack = require('webpack');

module.exports = {
    module: {
    loaders: [
      {test: /\.jsx?$/, exclude: '/node_modules/', loaders: 'babel-loader', query: {presets:[ 'es2015', 'react'], plugins:['transform-class-properties']}}]
     },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json']
    },
    plugins: [
        new webpack.DefinePlugin({'process.env': { NODE_ENV: JSON.stringify('production')}}),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
}
