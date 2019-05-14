const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports ={
		mode: 'development',
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'outDist'),
        filename:"main.js"
		},
		resolve: {
			extensions: ['.js', '.vue', '.json']
		},
		devServer: {
			contentBase: path.join(__dirname, 'outDist'),
			compress: true,
			port: 9999
		},
		module:{
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
		resolve: {
			alias: {
				vue: 'vue/dist/vue.js'
			}
		},
		plugins: [
			new VueLoaderPlugin(),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'index.html',
				inject: true,
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true
					// more options:
					// https://github.com/kangax/html-minifier#options-quick-reference
				},
				// necessary to consistently work with multiple chunks via CommonsChunkPlugin
				chunksSortMode: 'dependency'
			}),
		]
}