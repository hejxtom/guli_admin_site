'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://1.14.111.68:9110"',
  OSS_PATH: '"https://guli-file-hejx.oss-cn-beijing.aliyuncs.com"'
})
