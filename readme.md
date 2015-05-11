# [React](https://facebook.github.io/react/), [Flux](https://facebook.github.io/flux/), [Promises](http://www.html5rocks.com/en/tutorials/es6/promises/)

An example repository showing how to handle the asynchronosity of promises in Flux's synchronous world.

### Background

I wrote up my thought process behind this code, you can read it [here](http://swirlycheetah.com/handling-promises-in-flux/).

### Try It Out

Dependencies

* [Node.js](https://nodejs.org/)/[io.js](https://iojs.org/en/index.html) & [npm](https://www.npmjs.com/)
* [jspm](http://jspm.io/)

Clone the repository.

```
git clone git@github.com:swirlycheetah/react-flux-promises.git
cd react-flux-promises
```

Install the project dependencies.

```
npm install
jspm install
```

Transpile the source code.

```
node_modules/.bin/gulp transpile
```

Start watching for changes to the source code.

```
node_modules/.bin/gulp watch
```

Fire up a local server from the root of the project, something like [live-server](https://www.npmjs.com/package/live-server) or Python's built in static server (`python -m SimpleHTTPServer`) should do the trick.

Navigate to the address your code is being served at in the browser to see things working.

### License

Released under the MIT license: [opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
