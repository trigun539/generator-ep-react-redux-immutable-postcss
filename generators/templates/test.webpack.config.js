const webpack     = require('webpack');
const path        = require('path');
const nodeModules = require('webpack-node-externals')();

module.exports = (env) => {
	const config = {
		target: 'node',
		externals: nodeModules,
		resolve: {
			modules: ['node_modules', './src', './test']
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel',
					exclude: /node_modules/,
					query: {
						cacheDirectory: true
					}
				}
			]
		}
	};

	return config;
}
