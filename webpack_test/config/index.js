'use strict';

const path = require('path');

module.exports = {
	dev: {
		// paths
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		// proxy setting  代理设置
		proxyTable: {},

		// Various Dev server setting
		host: 'localhost',
		port: 8080,
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false,

		useEslint: true,
		showEsLintErrorsInOverlay: false,

		/**
		 * Source mapGetters
		 */
		devtool: 'cheap-module-eval-source-map',

		cacheBusting: true,

		cssSourceMap: true,
	},
	build: {
		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),

		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsSubdirectory: '/',

		/**
		 * Source map
		 */

		productionSourceMap: true,

		devtool: "#source-map",

		productionGzip: false,

		productionGzipExtensions: ['js', 'css'],

		bundleAnalyzerReport: process.env.npm_config_report
	}
}