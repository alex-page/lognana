/***************************************************************************************************************************************************************
 *
 * index.js
 *
 * Parse     - Parse ansi code while making sure we can nest colors
 * Style     - Returning ansi escape color codes
 * Log       - A logging object for logging prettiness
 * AddStyles - Add the styles to the log function
 *
 **************************************************************************************************************************************************************/


'use strict';


/**
 * Parse ansi code while making sure we can nest colors
 * Credit to: https://github.com/chalk/ansi-styles
 *
 * @param   {string} text  - The text to be enclosed with an ansi escape string
 * @param   {string} start - The color start code, defaults to the standard color reset code 39m
 * @param   {string} end   - The color end code
 *
 * @returns {string}       - The escaped text
 */
const Parse = ( text, start, end = `39m` ) => {
	if( text !== undefined ) {
		const replace = new RegExp( `\\u001b\\[${ end }`, 'g' ); // find any resets so we can nest styles

		return `\u001B[${ start }${ text.toString().replace( replace, `\u001B[${ start }` ) }\u001b[${ end }`;
	}
	else {
		return ``;
	}
};


/**
 * Style - Returning ansi escape color codes
 * Credit to: https://github.com/chalk/ansi-styles
 *
 * @type {Object}
 */
const Style = {
	/**
	 * Style a string with ansi escape codes
	 *
	 * @param   {string} text - The string to be wrapped
	 *
	 * @returns {string}      - The string with opening and closing ansi escape color codes
	 */

	black:   text => Parse( text, `30m` ),
	red:     text => Parse( text, `31m` ),
	green:   text => Parse( text, `32m` ),
	yellow:  text => Parse( text, `33m` ),
	blue:    text => Parse( text, `34m` ),
	magenta: text => Parse( text, `35m` ),
	cyan:    text => Parse( text, `36m` ),
	white:   text => Parse( text, `37m` ),
	gray:    text => Parse( text, `90m` ),
	bold:    text => Parse( text, `1m`, `22m` ),
};


/**
 * A logging object for logging prettiness
 *
 * @type {Object}
 */
const Log = {
	verboseMode: false, // verbose flag
	emoji: '',


	/**
	 * Log a message
	 *
	 * @param  {string}  text - The text you want to log
	 */
	message: ( text ) => {
		console.log( ` ${ Style.bold( new Date().toJSON().slice( 0, 19 ) ) } | ${ text }` );
	},


	/**
	 * Log a welcome message
	 *
	 * @param  {string} text - The text you want to log
	 */
	welcome: ( text ) => {
		console.info( ` ${ Log.emoji + Log.emoji + Log.emoji }        ${ Style.bold( `${ text }` ) }` );
	},


	/**
	 * Log an error
	 *
	 * @param  {string} text - The text you want to log with the error
	 */
	error: ( text ) => {
		console.error( ` ❌ ${ Log.emoji }        ${ Style.red( `ERROR:   ${ text }` ) }` );
	},


	/**
	 * Log some information
	 *
	 * @param  {string}  text - The text you want to log
	 */
	info: ( text ) => {
		console.info( ` 🔔 ${ Log.emoji }        INFO:    ${ text }` );
	},


	/**
	 * Log success
	 *
	 * @param  {string}  text - The text you want to log
	 */
	ok: ( text ) => {
		console.info( ` 👌 ${ Log.emoji }        ${ Style.green( `OK:      ${ text }` ) }` );
	},


	/**
	 * Log the final message
	 *
	 * @param  {string}  text - The text you want to log
	 */
	done: ( text ) => {
		console.info( ` 🚀 ${ Log.emoji }        ${ Style.green( Style.bold( text ) ) }` );
	},


	/**
	 * Log a verbose message
	 *
	 * @param  {string}  text - The text you want to log
	 */
	verbose: ( text ) => {
		if( Log.verboseMode ) {
			console.info( ` 📢 ${ Log.emoji }        ${ Style.gray( `VERBOSE: ${ text }` ) }` );
		}
	},
};


/**
 * Add the styles to the Log function
 *
 * @param  {array} styles - All of the styles
 */
const AddStyles = ( styles ) => {
	styles.map( style => {
		Log[ style ] = Style[ style ];
	});
};


AddStyles( Object.keys( Style ) );


module.exports = Log;
