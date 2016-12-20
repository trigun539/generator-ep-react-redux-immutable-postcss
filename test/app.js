var path    = require('path');
var assert  = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ep-react-ui-only:app', function () {

	before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
			.withPrompts({
				name: 'testproject',
				description: 'Awesome project'
			})
      .toPromise();
  });

	it('should creates files', function () {
    assert.file([
      'webpack.config.js',
      'package.json',
      '.gitignore',
      '.babelrc',
      'favicon.ico',
      'index.html',
			'src/app.js',
			'src/components/hello-world.js',
			'test/mocha.opts',
			'test/components/hello-world.spec.js',
			'test/helpers/setup.js'
    ]);
  });
});
