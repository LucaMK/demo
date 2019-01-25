"use strict"
//Template 1.0
const path = require('path');
module.exports = {
    dev: {
        //paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        host: 'localhost',//can be overwritten
        port: 80,
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // webpack dev configuration
        useEslint: true,
        showEslintErrorsInOverlay: true,

        /**
         * Source Maps
         * */
        devtool: 'eval-source-map',
        cacheBusting: true,
        cssSourcemap: false,

    },
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        //Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        /**
         *  Source Maps
         */
        productionSourceMap: true,
        devtool: '#source-map',
        bundleAnalyzerReport: process.env.npm_config_report
    }
}