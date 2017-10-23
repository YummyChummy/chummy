const webpackBaseConfig = require('./webpack.base.config.js')
const webpackProdConfig = require('./webpack.prod.config.js')

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProduction = (LAUNCH_COMMAND === 'production')
const config = (isProduction === true)
    ? Object.assign({}, webpackBaseConfig, webpackProdConfig)
    : webpackBaseConfig


module.exports = config
