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
