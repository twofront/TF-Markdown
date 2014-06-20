
var tfmarkdown = {
	parse: function(md) {

		// Titles
		md = md.replace(/^(#+)\s(.*)/gm, function(all, hashcount, title){
			var hc = hashcount.length;
			return '<h'+hc+'>'+title+'</h'+hc+'>';
		});
		md = md.replace(/^(.*)\n([=-]{2,})/gm, function(all, title, ttype){
			var hc = ttype[0] === '=' ? '1' : '2';
			return '<h'+hc+'>'+title+'</h'+hc+'>';
		});

		// Blockquotes and code blocks
		md = md.replace(/^>\s((.+\n{0,1})+)/gm, function(all, text){
			text = text.replace(/(\n>\s|\n)/g, '<br />\n');
			return '<blockquote>'+text+'</blockquote>';
		});
		md = md.replace(/^(((\t+|\s{2,}).*\n)+)/gm, function(all, text){
			text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
			text = text.replace(/\n/g, '<br />\n');
			return '<code>'+text+'</code>\n';
		});

		// Ordered and unordered lists
		md = md.replace(/^(\*\s.+\n?)+/gm, function(all){
			all = all.replace(/^\*\s(.*)\n?/gm, '<li>$1</li>');
			return '<ul>'+all+'</ul>';
		});
		md = md.replace(/^([0-9]+\.\s.+\n?)+/gm, function(all){
			all = all.replace(/^[0-9]+\.\s(.*)\n?/gm, '<li>$1</li>');
			return '<ol>'+all+'</ol>';
		});

		// Bold, italics and links
		md = md.replace(/(\*\*|__)(.*)(\*\*|__)/g, '<b>$2</b>');
		md = md.replace(/[\*_](.*)[\*_]/g, '<i>$1</i>');
		md = md.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

		// Reference-style links
		md = md.replace(/\[(.*?)\]\s*\[(.*?)\]/g, function(all, text, ref) {
			var path = '';
			ref = ref.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
			md.replace(new RegExp('\\\['+ref+'\\\]:\\s*(.*)'), function(all2, path2) {
				path = path2;
			});
			return '<a href="'+path+'">'+text+'</a>';
		});

		// Remove reference lines
		md = md.replace(/\[.*\]:.*/g, '');

		// Paragraphs
		md = md.replace(/(^|\n{2,})([^<])(.*)/g, '\n<p>$2$3</p>');

		// Remove extra line breaks etc
		md = md.replace('<code><br />', '<code>');

		return md;
	}
}

// If we are using node or browserify!
if (module && module.exports) module.exports = tfmarkdown;
