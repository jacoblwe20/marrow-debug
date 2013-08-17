/*
 * Marrow-Debug.js - 0.0.2 
 * Description : Marrow Debug is a small utitlity that allows you to debug code and not have to worry about scattering console logs everywhere 
 * Project Url : https://github.com/jacoblwe20/marrow-debug 
 * Author : Jacob Lowe <http://jacoblowe.me> 
 * License : MIT 
 * Depedencies: Marrow.js 
 */

( function ( Marrow, exports ) {

	// messanger just handles all the events
	var Messenger = function ( ) { };
	Messenger = Marrow( Messenger );
	var messenger = new Messenger( );

	var Debug = function ( config, options ) {
		if( !( this instanceof Debug ) ){
			return new Debug( config, options );
		}
		this.config = config;
		return this;
	};

	Debug.prototype.listenTo = function ( config ) {
		messenger.on( config, function ( args ) {
			if ( typeof console === 'object' ) {
				console.log.apply( console, args );
			}
		} ); 
	};

	Debug.prototype.log = function ( ) {
		if ( this.config ) {
			var args = Array.prototype.slice.call(arguments, 0);
			messenger.emit( this.config, args );
		}
	};

	exports.Debug = Debug;
	
} ( Marrow, this ) );