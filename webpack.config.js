const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist')
	},
	module: {
    loaders:
    {
      test: /\.css$/,
      loader: 'vue-style-loader!css-loader'
    },
  },
  vue: {
    loaders: {
      css: 'vue-style-loader!css-loader'
    }
  }
}
