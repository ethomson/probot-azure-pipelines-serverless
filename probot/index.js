const { serverless } = require('probot-serverless-azurefunctions')
const appFn = require('probot-azure-pipelines/lib/index.js')
module.exports.probot = serverless(appFn)
