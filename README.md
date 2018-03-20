# lognana

> 🍌 An emoji fueled log system with zero dependencies


## Install

```console
$ npm install lognana
```


## Usage

```js
const Log = require( 'lognana' );

Log.emoji = '🍌';

// Check if the user is in verbose mode
if( process.argv.includes( '-v' ) || process.argv.includes( '--verbose' ) ) {
  Log.verboseMode = true;
};


Log.message( 'hello world' );
Log.welcome( 'hello world' );
Log.error( 'hello world' );
Log.info( 'hello world' );
Log.ok( 'hello world' );
Log.verbose( 'hello world' );
```

```shell
$ node index.js --verbose
 2018-03-20T09:31:09 | Message - hello world
 🍌🍌🍌        \u001B[1mhello world\u001b[22m
 ❌ 🍌        \u001B[31mERROR:    hello world\u001b[39m
 🔔 🍌        INFO:     hello world
 👌 🍌        \u001B[32mOK:       hello world\u001b[39m
 📢 🍌        \u001B[90mVERBOSE:  hello world\u001b[39m
```


## Release History

* v1.0.0 - First release
