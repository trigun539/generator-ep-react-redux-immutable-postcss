const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('styles.css');

module.exports = (env) => {
	const config = {
		entry: './src/main.js',
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: 'app.js'
		},
		resolve: {
			modulesDirectories: ['node_modules', './src']
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel',
					exclude: /node_modules/,
					query: {
						cacheDirectory: true
					}
				},
				{
					test: /\.css$/,
					loader: extractCSS.extract(['css-loader?localIdentName=[path]__[name]__[local]__[hash:base64:5]', 'postcss-loader'])
				},
				{
					test: /\.png$/,
					loader: 'file-loader?name=[name]__[hash:base64:5].[ext]'
				},
				{
					test: /\.ttf$/,
					loader: 'url-loader?limit=50000'
				}
			]
		},
		plugins: [
			extractCSS
		],
		devtool: '#inline-source-map'
	};

	return config;
};
