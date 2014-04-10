
var tfmarkdown = {
	parse: function(md) {

		md = md.replace(/(^)\n{0,1}(#+)(.*)\n{0,1}/gm, function(all, newline, hashcount, title){
			var hc = hashcount.length;
			return newline+'<h'+hc+'>'+title+'</h'+hc+'>';
		});

		md = md.replace(/\n{0,1}(.*)\n([=-]{2,})\n{0,1}/g, function(all, title, ttype){
			var hc = ttype[0] === '=' ? '1' : '2';
			return '<h'+hc+'>'+title+'</h'+hc+'>';
		});

		md = md.replace(/(?:\*\*|__)(.*)(?:\*\*|__)/g, function(all, bold){
			return '<b>'+bold+'</b>';
		});

		md = md.replace(/[\*_](.*)[\*_]/g, function(all, italics){
			return '<i>'+italics+'</i>';
		});

		md = md.replace(/\[(.*)\]\((.*)\)/g, function(all, text, url){
			return '<a href="'+url+'">'+text+'</a>';
		});

		md = md.replace(/^>\s((.+\n{0,1})+)/gm, function(all, text){
			text = text.replace(/(\n>\s|\n)/g, '<br />\n');
			return '<blockquote>'+text+'</blockquote>';
		});

		md = md.replace(/^(\*\s.+\n{0,1})+/gm, function(all){
			all = all.replace(/^\*\s/gm, '<li>');
			return '<ul>'+all+'</ul>';
		});

		md = md.replace(/^([0-9]+\.\s.+\n{0,1})+/gm, function(all){
			all = all.replace(/^[0-9]+\.\s/gm, '<li>');
			return '<ol>'+all+'</ol>';
		});

		md = md.replace(/\n\n/g, '<br /><br />');

		md = md.replace(/\n/g, ' ');

		return md;
	}
}

// If we are using node or browserify!
if (module && module.exports) module.exports = tfmarkdown;
