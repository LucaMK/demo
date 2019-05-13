const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports ={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'outDist'),
        filename:"main.js"
		},
		resolve: {
			extensions: ['.js', '.vue', '.json']
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