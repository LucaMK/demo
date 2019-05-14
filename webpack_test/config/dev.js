'use strict';

const merge = require('webpack-merge')
const proEnv = require('./pro')

module.exports = merge(proEnv, {
	NODE_ENV: '"development"'
})