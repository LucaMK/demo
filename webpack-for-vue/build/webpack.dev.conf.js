const path = require('path')
const vueLoaderConfig = require('./vue-loader-conf.js')
module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, '../'),
  entry: {
    app: '/src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/static'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {

    }
  },
  modules: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      }
    ]
  }
}