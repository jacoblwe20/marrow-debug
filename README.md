## Marrow Debug

[![Greenkeeper badge](https://badges.greenkeeper.io/jcblw/marrow-debug.svg)](https://greenkeeper.io/)

smart debugging for web apps

### Use

include [Marrow.js](https://github.com/jacoblwe20/marrow) script before the debug script

#### Listening to certain events

```javascript
var debug = Debug();

debug.listenTo( 'app:activity' );
```

#### Debug Sections

```javascript
( function () {
	var debug = Debug( 'app:activity' );

	debug.log( 'activity started' );
} ( ) );

( function () {
	var debug = Debug( 'app:profile' );

	debug.log( 'profile started' );
} ( ) );
```

in the examples if I were to only listen to `app:activity` in my console I would only see the log `activity started`. You can even listen to `app` with no sub section and it will listen to all logs that begin with app. eg `app:*` or `app`

for more information view 
