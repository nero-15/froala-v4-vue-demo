// TODO: add css loader

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
	}
}
