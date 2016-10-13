# TF Markdown

A simple javascript markdown parser. Converts to html. The popular one would end up adding 70kb of code to the browser (before uglify or compression). For large projects, where markdown is one of many features, that's too much for the client side. Also, simple code means simply changed. The goal is to keep this under 5kb.

## NPM

If you would like to add TF Markdown to your project use:

	npm install tfmarkdown

## Usage

This may be used via Browserify, Node.js or regularly in a browser. For Browserify or Node.js include using:

	var tfmarkdown = require('tfmarkdown'); 

Or, regularly in the browser use:

	<script src="tfmarkdown.js"></script>

The single command in TF Markdown can be called like so:

	var myhtml = tfmarkdown.parse(mymarkdown);
	
A second parameter `disableHtml` may be set to `true` to escape any existing html, and have it display as text instead. This is useful if the markdown is coming from an unknown source and you want to ensure they don't add javascript, embeds, or weird content:

	var myhtml = tfmarkdown.parse(mymarkdown, true);

A simple table implimentation is supported (that isn't markdown):

	| ID | First Name | Last Name
	| 1 | John | Snow
	| 2 | Arthur | Dent

## Command Line Usage

If you install this modules using:

	npm install tfmarkdown -g
	
it can easily be used from the command line like so:

	tfmarkdown input.txt -o output.txt
