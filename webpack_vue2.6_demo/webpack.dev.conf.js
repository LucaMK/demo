// node.js 核心模块
var path = require('path');
var {VueLoaderPlugin} = require('vue-loader');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//-- 开发模式下使用production
	//开发模式下使用 development
	mode: 'development',
	// 入口文件
	entry: {
		main: './src/main.js'
	},
	// 输出文件路径 和 名称
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "[name].[hash].js"
	},
	// 添加模块需要使用的loader:
	module: {
		rules: [
			{
				// vue-loader 对.vue 文件进行处理 编写之前 npm i vue-loader vue-template-compiler --save-dev 进行安装
				// vue-template-compiler 独立安装,原因是可单独指定其版本, 不同版本vue 会对应不同版本的vue-template-compiler
				// 这样 vue-loader 可以生成兼容运行时的代码
				test: /\.vue$/,
				use: ['vue-loader']
			},
			{// css-loader 对css 文件处理 编写之前 npm i vue-style-loader css-loader --save-dev 
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{// sass-loader 此处使用sass 预编译器 npm i sass-loader node-sass --save-dev
				test: /\.sass$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// 注意使用 lang = "sass" 时 需要提娜姬 indentedSyntax:true
							indentedSyntax: true
						}
					}
				]
			},
			{// 处理资源路径 , 此处选用 file-loader ,也可以选用 url-loader 如果需要将较小图片转为base64 可以选用url-loader (注意: 记得设置 limit 参数)
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
	// 添加默认解析后缀
	resolve: {
		extensions: ['.js', '.css', '.vue']
	},
	plugins: [
		//这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
		new VueLoaderPlugin(),
		// 安装html-webpack-plugin  添加模板 index.html 
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
	]
}