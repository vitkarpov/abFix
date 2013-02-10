jquery.abFix
============

This tiny plugin emulates :after and :before for IE. 

About
-----
I am sure that every developer from one project to another makes the same hack - emulation :before and :after for IE. Generated content is very convenient and, personally, I don't wanna put empty DOM-elements manually in markup.

Probably, it is the smallest plugin in the world and very helpful.

How to use
----------
You just need to write your CSS selectors in such way: 
	
	.pic:before,
    .pic > .ie-prepend {}

In your markup you need to add classes .ie-before or .ie-after for elements you'll use :before or :after for.

Initialize plugin only for lte IE7 like this:

	$('.ie7').abFix();

How it works
------------	
- Plugin finds all elements with .after-fix and .before-fix classes inside elements you've picked with jQuery and applies abFix method. Usually it's one element — body, i.e. all document.

- Then it puts before or after inside each found element's content i.ico-append or i.ico-prepend accordingly.

- That's it.

You can redifine classes' names passes your options.

Default options: 

	{
		beforeSelector : 'before-fix',
	    afterSelector  : 'after-fix',
	    beforeClass    : 'ie-prepend',
	    afterClass     : 'ie-append'
	}