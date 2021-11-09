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
			const field_name = $( this ).attr( 'name' );
			if (typeof field_name !== 'undefined' && field_name !== false && field_name !== '') {
				// check if field should be excluded
				if (settings.exclude.indexOf(field_name) == -1) {
					// randomizes field name
					const randomName = getRandomName(settings.length);
					fields[randomName] = field_name;
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
		const char_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
		for ( let i = 0; i < length; i++ ) {
			rand += char_list.charAt(Math.floor(Math.random() * char_list.length));
		}
		return rand;
	}
}( jQuery ));
