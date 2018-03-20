/***************************************************************************************************************************************************************
 *
 * index.js unit tests
 *
 * @file src/index.js
 *
 * Tested methods:
 * - Log
 *
 **************************************************************************************************************************************************************/


// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Local
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
const Log   = require( './index' );


/***************************************************************************************************************************************************************
 * Log
 *
 * Log.message
 * Log.welcome
 * Log.error
 * Log.info
 * Log.ok
 * Log.done
 * Log.verbose
 * Log.verbose

 **************************************************************************************************************************************************************/
Log.emoji = '🍌';


test( 'Log.message: should be formatted correctly', () => {
	console.log = jest.fn();

	Log.message( `message test` );
	Log.message( `message test 2` );

	expect( console.log.mock.calls.length ).toBe( 2 );
	expect( console.log.mock.calls[0][0] ).toContain( `message test` );
	expect( console.log.mock.calls[1][0] ).toContain( `message test 2` );
});


test( 'Log.welcome: should be formatted correctly', () => {
	console.info = jest.fn();

	Log.welcome( `welcome test` );
	Log.welcome( `welcome test 2` );

	expect( console.info.mock.calls.length ).toBe( 2 );
	expect( console.info.mock.calls[0][0] ).toBe( ` 🍌🍌🍌        \u001B[1mwelcome test\u001b[22m` );
	expect( console.info.mock.calls[1][0] ).toBe( ` 🍌🍌🍌        \u001B[1mwelcome test 2\u001b[22m` );
});


test( 'Log.error: should be formatted correctly', () => {
	console.error = jest.fn();

	Log.error( `error test` );
	Log.error( `error test 2` );

	expect( console.error.mock.calls.length ).toBe( 2 );
	expect( console.error.mock.calls[0][0] ).toBe( ` ❌ 🍌        \u001B[31mERROR:   error test\u001b[39m` );
	expect( console.error.mock.calls[1][0] ).toBe( ` ❌ 🍌        \u001B[31mERROR:   error test 2\u001b[39m` );
});


test( 'Log.info: should be formatted correctly', () => {
	console.info = jest.fn();

	Log.info( `info test` );
	Log.info( `info test 2` );

	expect( console.info.mock.calls.length ).toBe( 2 );
	expect( console.info.mock.calls[0][0] ).toBe( ` 🔔 🍌        INFO:    info test` );
	expect( console.info.mock.calls[1][0] ).toBe( ` 🔔 🍌        INFO:    info test 2` );
});


test( 'Log.ok: should be formatted correctly', () => {
	console.info = jest.fn();

	Log.ok( `ok test` );
	Log.ok( `ok test 2` );

	expect( console.info.mock.calls.length ).toBe( 2 );
	expect( console.info.mock.calls[0][0] ).toBe( ` 👌 🍌        \u001B[32mOK:      ok test\u001b[39m` );
	expect( console.info.mock.calls[1][0] ).toBe( ` 👌 🍌        \u001B[32mOK:      ok test 2\u001b[39m` );
});


test( 'Log.done: should be formatted correctly', () => {
	console.info = jest.fn();

	Log.done( `done test` );
	Log.done( `done test 2` );

	expect( console.info.mock.calls.length ).toBe( 2 );
	expect( console.info.mock.calls[0][0] ).toBe( ` 🚀 🍌        \u001B[32m\u001B[1mdone test\u001B[22m\u001b[39m` );
	expect( console.info.mock.calls[1][0] ).toBe( ` 🚀 🍌        \u001B[32m\u001B[1mdone test 2\u001B[22m\u001b[39m` );
});


test( 'Log.verbose: should not print if verboseMode is false', () => {
	console.info = jest.fn();

	Log.verbose( `verbose test fail` );
	Log.verbose( `verbose test 2 fail` );
	expect( console.info.mock.calls.length ).toBe( 0 );
});


test( 'Log.verbose: should should be formatted correctly', () => {
	console.info = jest.fn();

	Log.verboseMode = true;
	Log.verbose( `verbose test` );
	Log.verbose( `verbose test 2` );

	expect( console.info.mock.calls.length ).toBe( 2 );
	expect( console.info.mock.calls[1][0] ).toBe( ` 📢 🍌        \u001B[90mVERBOSE: verbose test 2\u001b[39m` );
	expect( console.info.mock.calls[0][0] ).toBe( ` 📢 🍌        \u001B[90mVERBOSE: verbose test\u001b[39m` );
});

