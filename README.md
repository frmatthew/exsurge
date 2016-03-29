# exsurge
A JavaScript library for rendering Gregorian Chant in square note notation

## Synopsis

exsurge allows developers to create SVG images of square note notation from gabc notation. These SVGs can then be inserted in the DOM or used for presentation purposes.

[ ![Codeship Status for frmatthew/exsurge](https://codeship.com/projects/6effe330-d6d1-0133-da7f-2e034c4f2b94/status?branch=master)](https://codeship.com/projects/142799)

## Live Browser Example

Want to see gabc code rendered to chant on the fly? [Try going here](http://frmatthew.github.io/exsurge/chant.html).

## Code Example

First, create a ChantContext which contains the settings for how the chant will be rendered:

```javascript
var ctxt = new exsurge.ChantContext();
```

Then, create a ChantScore from gabc code:

```javascript
var gabc = "(f3) EC(ce!fg)CE(f) *(,) ad(fe~)vé(f!gwhf)nit(f) (,)"
var score = exsurge.Gabc.loadChantScore(ctxt, gabc, true);
```

Finally, let the ChantScore handle the layout process, and use the SVG however you want:

```javascript
// perform layout on the chant
score.performLayout(ctxt, function() {
  score.layoutChantLines(ctxt, 1000, function() {

    // render the score to svg code
    var svgNode = document.createElement('div');
    var innerHtml = score.createDrawable(ctxt);
    svgNode.innerHTML = innerHtml;
    document.body.appendChild(svgNode);
  });
});
```

## Motivation

Very few good chant layout software exist for developers. exsurge allows web developers to insert beautiful chant into their workflow with the simplicity of a little JavaScript.

## Developer Installation

After grabbing the repo from github, it's a simple matter of using `npm` to build exsurge:

```npm install
npm run build
```

Alternatively, you can run `npm run dev` which will watch and compile the library after saved each change.

## API Reference

Under construction...

## Tests

Under construction...

## Contributors

Under construction...

## License

MIT License: http://adampritchard.mit-license.org/ or see [the `LICENSE` file](https://github.com/frmatthew/exsurge/blob/master/LICENSE).
