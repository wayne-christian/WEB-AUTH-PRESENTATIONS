// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	width: '80%',
	height: '100%',

	transition: 'concave', // none/fade/slide/convex/concave/zoom
	dependencies: [{
			src: 'lib/js/classList.js',
			condition: function () {
				return !document.body.classList;
			}
		}, {
			src: 'plugin/markdown/marked.js',
			condition: function () {
				return !!document.querySelector('[data-markdown]');
			}
		}, {
			src: 'plugin/markdown/markdown.js',
			condition: function () {
				return !!document.querySelector('[data-markdown]');
			}
		}, {
			src: 'plugin/highlight/highlight.js',
			async: true,
			callback: function () {
				hljs.initHighlightingOnLoad();
			}
		}, {
			src: 'plugin/zoom-js/zoom.js',
			async: true
		}, {
			src: 'plugin/notes/notes.js',
			async: true
		},
		{
			src: 'plugin/live-coding/live-coding.js',
			async: true,
			condition: function () {
				return !!document.body.classList;
			}
		}, 
		{
			src: 'plugin/menu/menu.js'
		}


	],

	menu: {
		// Specifies which side of the presentation the menu will 
		// be shown. Use 'left' or 'right'.
		side: 'left',
		transitions: false,
		themes: false,
		slides: false
	}
});

Reveal.addEventListener('salary', function () {
	console.log('stats called!');
});

var entityMap = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
	'/': '&#x2F;',
	'`': '&#x60;',
	'=': '&#x3D;'
};

function escapeHtml(string) {
	return String(string).replace(/[&<>"'`=\/]/g, function (s) {
		return entityMap[s];
	});
}

$(document).ready(function () {
	console.log('ready');
	/*$( "code" ).each(function( index ) {
		console.log($( this ).html());
	 //escapeHtml($( this ).html() );
		
	});*/
});
