# generator-ep-react-simple [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Yeoman generator that scaffolds simple react app

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ep-react-simple using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ep-react-simple
```

Then generate your new project:

```bash
yo ep-react-simple
```

## Things generated

- webpack config
- es6 support
- Sample react component
- Unit test setup using mocha
- Unit test coverage setup using istanbul
- Simple http serve to get you up and running.

## Running

``` bash
# Builds project and starts http server
npm start

# Starts server and launches webpack in watch mode
npm run dev

# Run unit tests:
npm test

# Run test coverage:
npm run test:cov

# Building
npm run build
```

## License

MIT © [Edwin Perez](http://eperez.io)


[npm-image]: https://badge.fury.io/js/generator-ep-react-simple.svg
[npm-url]: https://npmjs.org/package/generator-ep-react-simple
[travis-image]: https://travis-ci.org/trigun539/generator-ep-react-simple.svg?branch=master
[travis-url]: https://travis-ci.org/trigun539/generator-ep-react-simple
[daviddm-image]: https://david-dm.org/trigun539/generator-ep-react-simple.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/trigun539/generator-ep-react-simple
[coveralls-image]: https://coveralls.io/repos/trigun539/generator-ep-react-simple/badge.svg
[coveralls-url]: https://coveralls.io/r/trigun539/generator-ep-react-simple
