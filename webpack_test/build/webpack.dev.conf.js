var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var {VueLoaderPlugin} = require('vue-loader');


module.exports = {
	mode: 'development',
	// context: path.resolve(__dirname, '/'),
	entry: './src/main.js',
	output:{
		path:path.resolve(__dirname,'outDist'),
		filename:"main.js"
	},
	resolve: {
		extensions: ['.js', '.vue', '.json']
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.sass$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images'
						}
					}
				]
			}
		]
	},
	devServer: {
		contentBase: './outDist',
		clientLogLevel: 'warning',
		compress: true,
		hot: true,
		// proxy:
		host: 'localhost',
		port: 8019,
		after: function (app, server) {
			
			console.log('this is dev server open start');
		}
	},
	node: {
		// prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
		setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'dev_index.html'
		}),
		
	]
}