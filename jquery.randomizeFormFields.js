/*
 * Randomize Form Fields for jQuery
 *
 * Copyright (c) 2021 Cicero Monteiro
 * cicerogeorge@gmail.com
 *
 * Date: March 17 2021
 * Version: 1.0.1
 *
 * Randomize form fields names to avoid browser autofill
 */

(function($) {
	$.fn.randomizeFormFields = function( options ) {
		var settings = $.extend({
			'length': 25,
			'exclude': []
		}, options);

		var fields = {};

		this.find( 'input' ).each(function(){
			// check if input has a name
			const fieldName = $( this ).attr( 'name' );
			if (typeof fieldName !== 'undefined' && fieldName !== false && fieldName !== '') {
				// check if field should be excluded
				if (settings.exclude.indexOf(fieldName) === -1) {
					// randomizes field name
					const randomName = getRandomName(settings.length);
					fields[randomName] = fieldName;
					$( this ).attr({
						'name': randomName,
						'autocomplete': 'off'
					});
				}
			}
		});

		this.submit(function( e ){
			// get fields names back before submit
			$( this ).find( 'input' ).each(function(){
				$( this ).attr( 'name', fields[$( this ).attr( 'name' )] );
			});
		});

		return this;
	};

	function getRandomName( length ) {
		let rand = '';
		const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
		for ( let i = 0; i < length; i++ ) {
			rand += charList.charAt(Math.floor(Math.random() * charList.length));
		}
		return rand;
	}
}( jQuery ));
