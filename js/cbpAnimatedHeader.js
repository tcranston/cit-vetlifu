/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		atTop = true,
		changeHeaderOn = 400;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
				
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
	/*	if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );	
		} else {
			classie.remove( header, 'navbar-shrink' );
		} */

		if ( sy >= changeHeaderOn && atTop) {
			$('#global_nav').hide(0);
            classie.add( header, 'navbar-shrink' );
            $('#global_nav').fadeIn('slow');
			atTop = false;
		}

		if ( sy < changeHeaderOn && !atTop) {
			$('#global_nav').hide(0);
            classie.remove( header, 'navbar-shrink' );
            $('#global_nav').fadeIn('slow');
			atTop = true;
		} 

		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();