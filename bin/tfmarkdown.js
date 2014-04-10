#! /usr/bin/env node

/*	Used to run TF Markdown at the command line. If including in your
	software use tfmarkdown.js in the root folder.
*/

var tfm = require('../tfmarkdown.js');
var stdio = require('stdio');
var fs = require('fs');

var ops = stdio.getopt({
    'output': {key: 'o', args: 1, description: 'Output file name.'}
});

ops.output = ops.output ? ops.output : 'result.html';

fs.readFile(ops.args[0], 'utf8', function(err, data) {
	var html = tfm.parse(data);
	fs.writeFile(ops.output, html);
});
