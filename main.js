Reveal.initialize({
    slideNumber: 'h.v',
    margin: -.1,
    controls: true,
    progress: true,
    center: true,
    hash: true,
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    // More info https://github.com/hakimel/reveal.js#dependencies
    dependencies: [
      { src: 'node_modules/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: 'node_modules/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: 'node_modules/reveal.js/plugin/highlight/highlight.js', async: true },
      { src: 'node_modules/reveal.js/plugin/search/search.js', async: true },
      { src: 'node_modules/reveal.js/plugin/zoom-js/zoom.js', async: true },
      { src: 'node_modules/reveal.js/plugin/notes/notes.js', async: true }
    ]
  });
