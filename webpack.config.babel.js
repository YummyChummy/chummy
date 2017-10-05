import webpackDevConfig from './webpack.dev.config.js'
import webpackProdConfig from './webpack.prod.config.js'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProduction = (LAUNCH_COMMAND === 'production')

const config = (isProduction === true) ? webpackProdConfig : webpackDevConfig

export default config
