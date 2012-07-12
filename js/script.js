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

/*  Clock  *\
\*=========*/
function updateClock() {
	var currentTime = new Date ();
	var currentHours = currentTime.getHours ();
	var currentMinutes = currentTime.getMinutes ();
	var currentSeconds = currentTime.getSeconds ();

	// Pad the minutes and seconds with leading zeros, if required
	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

	// Choose either "AM" or "PM" as appropriate
	var timeOfDay = (currentHours < 12) ? "AM" : "PM";

	// Convert the hours component to 12-hour format if needed
	currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

	// Convert an hours component of "0" to "12"
	currentHours = (currentHours == 0) ? 12 : currentHours;

	// Compose the string for display
	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

	// Fill '#clock' div with time
	$("#clock").html(currentTimeString);
}

$(document).ready(function() {
	
	/*  Get Links  *\
	\*=============*/
	var linkString = $('body').text();

	/*  Clear Page  *\
	\*==============*/
	$('body').empty();

	/*  Create Array from linkString  *\
	\*================================*/
	var linkArray = linkString.split("\n");

	/*  Go thru Array  *\
	\*=================*/
	var i;
	var count = 1;
	var html = '';

	for(i in linkArray) {

		/*  Get line  *\
		\*============*/
		var line = jQuery.trim(linkArray[i]);

		// If line is empty, skip
		if(!line)
			continue;

		/*  If it doesn't contain "://",  *\
		|*  it's not a URL                *|
		\*================================*/
		if(/:\/\//.test(line) != true) {
			if(count > 1)
				html = html + '</div>';
				html = html + '<div class="block"><h1>' + line + '</h1><ul>';
				count++;
				continue;
		}

		/*  Split URL and Title  *\
		\*=======================*/
		var lineArray = line.split(" || ");
		var url = lineArray[0];
		var title = lineArray[1];

		/*  Add HTML code  *\
		\*=================*/
		if(newwindow)
			html = html + '<li><a href="' + url + '" target="_blank">' + title + '</a></li>'
		else
			html = html + '<li><a href="' + url + '">' + title + '</a></li>'
	}

	/*  Add generated content to page  *\
	\*=================================*/
	html = html + '</ul></div>';
	$('body').append(html);


	/*  Animation Time!  *\
	\*===================*/
	
	/*  Hide lists  *\
	\*==============*/
	$('ul').slideUp();

	/*  Show on hover  *\
	\*=================*/
	$('.block').mouseenter(function() {
		$('ul', this).slideDown();
	});

	/*  Hide on unhover  *\
	\*===================*/
	$('.block').mouseleave(function() {
		$('ul', this).slideUp();
	});


	/*  Search Engines  *\
	\*==================*/

	var search = '<div id="searches">';
	
	if(google) {
		var search = search + '<form method="get" action="http://www.google.com/search">',
		    search = search + '<input type="text" id="g" name="q" size="34" maxlength="255" value="" />',
		    search = search + '<input type="submit" value="Google" />',
		    search = search + '</form>';
	  }

	if(googleimages) {
		var search = search + '<form method="get" action="http://www.google.com/images">',
		    search = search + '<input type="text" id="i" name="q" size="27" maxlength="255" value="" />',
		    search = search +	'<input type="submit" value="Google Images" />',
		    search = search + '</form>';
	}

	if(yahoo) {
		var search = search + '<form method="get" action="http://search.yahoo.com/search">',
		    search = search + '<input type="text" id="y" name="p" size="35" maxlength="255" value="" />',
		    search = search +	'<input type="submit" value="Yahoo" />',
		    search = search + '</form>';
	}

	if(wikipedia) {
		var search = search + '<form method="get" action="http://www.wikipedia.org/w/index.php">',
		    search = search + '<input type="text" id="w" name="search" size="31" maxlength="255" value="" />',
		    search = search +	'<input type="submit" value="Wikipedia" />',
		    search = search + '</form>';
	}

	if(dictcc) {
		var search = search + '<form method="get" action="http://www.dict.cc/">',
		    search = search + '<input type="text" id="dcc" name="s" size="33" maxlength="255" value="" />',
		    search = search +	'<input type="submit" value="dict.cc" />',
		    search = search + '</form>';
	}

	if(leo) {
		var search = search + '<form method="get" action="http://dict.leo.org/">',
		    search = search + '<input type="text" id="l" name="search" size="37" maxlength="255" value="" />',
		    search = search +	'<input type="submit" value="leo" />',
		    search = search + '</form>';
	}

	if(flickr) {
		var search = search + '<form method="get" action="http://www.flickr.com/search">',
		    search = search + '<input type="text" id="da" name="q" size="34" maxlength="255" value="" />',
		    search = search +	'<input type="submit" value="flickr" />',
		    search = search + '</form>';
	}

	if(deviantart) {
		var search = search + '<form method="get" action="http://browse.deviantart.com/">',
		    search = search + '<input type="text" id="da" name="q" size="30" maxlength="255" value="" />',
		    search = search +	'<input type="submit" value="deviantART" />',
		    search = search + '</form>';
	}

	var search = search + '</div>';

	/*  Add to page  *\
	\*===============*/
	$('body').append(search);
	if(focusSearch) {
		var searchDiv = document.getElementById ('searches');
		$(searchDiv.firstChild.firstChild).focus();
	}
 
	/*  Clock  *\
	\*=========*/

	if(showClock) {
		// Add empty '#clock' div
		$('body').append('<div id="clock"></div>');

		// Update clock
   	setInterval('updateClock()', 1000);
	}

});
