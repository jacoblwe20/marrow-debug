( function ( Marrow, exports ) {

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
		} ) 
	};

	Debug.prototype.log = function ( ) {
		if ( this.config ) {
			var args = Array.prototype.slice.call(arguments, 0);
			messenger.emit( this.config, args );
		}
	};

	exports.Debug = Debug;
	
} ( Marrow, this ) );