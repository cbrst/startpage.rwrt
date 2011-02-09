/**
	Startpage Reworked
	==================

	by Christian Brassat,
	reusing code by Jukka Svahn
*/

/**
	Released under MIT License
	
	Copyright (c) 2010 Jukka Svahn, Christian Brassat
	<http://rahforum.biz>
	<http://crshd.cc>

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

$(document).ready(function() {
	
	/* Get Links
	=================*/
	var linkString = $('body').text();

	/* Clear Page
	================*/
	$('body').empty();

	/* Create Array from linkString
	================*/
	var linkArray = linkString.split("\n");

	/* Go thru Array
	================*/
	var i;
	var count = 1;
	var html = '';

	for(i in linkArray) {

		/* Get line
		================*/
		var line = jQuery.trim(linkArray[i]);

		// If line is empty, skip
		if(!line)
			continue;

		/* If it doesn't start with http,
		 * it must be a seperator
		 ================*/
		if(line.substr(0,4) != 'http') {
			if(count > 1)
				html = html + '</div>';
			html = html + '<div class="block"><h1>' + line + '</h1><ul>';
			count++;
			continue;
		}

		/* Split URL and Title
		================*/
		var lineArray = line.split(" || ");
		var url = lineArray[0];
		var title = lineArray[1];

		/* Add HTML code
		================*/
		html = html + '<li><a href="' + url + '">' + title + '</a></li>'
	}

	/* Add generated content to page
	================*/
	html = html + '</ul></div>';
	$('body').append(html);


	/* Animation Time!
	================*/
	
	/* Hide lists
	================*/
	$('ul').slideUp();

	/* Show on hover
	================*/
	$('.block').mouseenter(function() {
		$('ul', this).slideDown();
	});

	/* Hide on unhover
	================*/
	$('.block').mouseleave(function() {
		$('ul', this).slideUp();
	});


	/* Search Box
	================*/
	var search = '<form method="get" action="http://www.google.com/search">';
			search = search + '<input type="text" id="g" name="q" size="31" maxlength="255" value="" />';
			search = search +	'<input type="submit" value="Search" />';
			search = search + '</form>';
	
	/* Add to page
	================*/
	$('body').append(search);
	$('#q').focus();

});
