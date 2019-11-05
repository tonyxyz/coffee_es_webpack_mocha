# coffee_es_webpack_mocha

Coffeescript, ecmascript, webpack and mocha working happily together

This is an example project demonstrating a configuration problem I was having getting
webpack, mocha, mochapack and coffeescript working happing together.

The problem was fairly simple to fix. I'll leave this here on the off chance it points
someone else in the right direction.

## Original Problem Description

The file something.coffee imports animejs.  It doesn't do anything with it but that's not the problem.

The anime object is created and exported in perfectly normal es6 syntax, the problem appears to be that the
configuration as it stands is attempting to load the file as legacy es5.

```
RUNTIME EXCEPTION  Exception occurred while loading your tests

/Users/someone/workpath/coffee_es_webpack_mocha/node_modules/animejs/lib/anime.es.js:1280
export default anime;
^^^^^^
```

If we delete the import line in something.coffee the test passes as expected.

### The Problem And The Fix

The problem was that for some historical reason I had kept this line

```
externals: [nodeExternals()],
```

in my webpack.config.js . This meant that the animejs modules was never loaded through webpack and instead
mocha tried loading it at run time, and without a runtime loader was expecting to see es5.

The fixed code is on a branch called fixed, and the original broken code is on master.

## Build And Run

Ensure you have an up to date nodejs version available.  (The .nvmrc specifies 11.10.0 but the failure
is not specific to that version.)

```
npm install
npm run test
```

## If You Can See The Problem

Please feel free to add a PR to this repo. Or answer my question stackoverflow.

I'd be enormously grateful!
