'use strict';
var yeoman = require('yeoman-generator');
var chalk  = require('chalk');
var yosay  = require('yosay');

module.exports = yeoman.Base.extend({
	prompting: function () {

		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the breathtaking ' + chalk.red('React Redux Immutable PostCSS App') + ' generator!'
		));

		var prompts = [{
			type: 'input',
			name: 'name',
			message: 'Your project name',
			default: this.appname // Default to current folder name
		}, {
			type: 'input',
			name: 'description',
			message: 'Description',
			default: 'Awesome project'
		}];

		return this.prompt(prompts).then(function (props) {
			// To access props later use this.props.someAnswer;
			this.props = props;
		}.bind(this));
	},

	writing: function () {
		// App.js
		this.fs.copy(
			this.templatePath('src/app.js'),
			this.destinationPath('src/app.js')
		);

		// Sample component
		this.fs.copy(
			this.templatePath('src/components/hello-world.js'),
			this.destinationPath('src/components/hello-world.js')
		);

		// webpack.config.js
		this.fs.copy(
			this.templatePath('webpack.config.js'),
			this.destinationPath('webpack.config.js')
		);

		// .babelrc
		this.fs.copy(
			this.templatePath('.babelrc'),
			this.destinationPath('.babelrc')
		);

		// .gitignore
		this.fs.copy(
			this.templatePath('gitignore'),
			this.destinationPath('.gitignore')
		);

		// favicon.ico
		this.fs.copy(
			this.templatePath('favicon.ico'),
			this.destinationPath('favicon.ico')
		);

		// package.json
		this.fs.copyTpl(
			this.templatePath('package.json'),
			this.destinationPath('package.json'),
			{
				name: this.props.name,
				description: this.props.description
			}
		);

		// index.html
		this.fs.copyTpl(
			this.templatePath('index.html'),
			this.destinationPath('index.html'),
			{
				name: this.props.name
			}
		);

		// UNIT TESTING

		this.fs.copy(
			this.templatePath('test/helpers/setup.js'),
			this.destinationPath('test/helpers/setup.js')
		);

		this.fs.copy(
			this.templatePath('test/components/hello-world.spec.js'),
			this.destinationPath('test/components/hello-world.spec.js')
		);

		this.fs.copy(
			this.templatePath('test/mocha.opts'),
			this.destinationPath('test/mocha.opts')
		);

	},

	install: function () {
		this.npmInstall([
			'react',
			'react-dom',
			'babel',
			'babel-core',
			'babel-loader',
			'babel-register',
			'webpack@beta',
			'babel-preset-es2015',
			'babel-preset-react',
			'babel-preset-stage-0',
			'serve',
			'mocha',
			'sinon',
			'chai',
			'istanbul@1.1.0-alpha.1',
			'jsdom',
			'react-addons-test-utils',
			'enzyme'
		], {'save-dev': true});
	}
});
