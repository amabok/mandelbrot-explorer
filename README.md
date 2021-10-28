# Mandelbrot Explorer 
A simple HTML5 + vanilla JS mandelbrot manipulation workbench to experiment with and showcase browser modules, canvas and workers features.

[Mandelbrot no zoom HSL](./images/mandelbrot_hsl.png)

[Mandelbrot no zoom Greyscale](./images/mandelbrot_grey_scale.png)

## Requirements
- NodeJs version >= 14.16.0

## Rationale
This simple application was born out of curiosity from my girlfriend on how complex would be to do the programming - or simply how to instruct the computer to do the spectacular visualizations you can see below and that are screenshots from this application - of the algorithm behind the Mandelbrot Set and associated visualization from scratch.

[UI with Mandelbrot zoom details HSL](./images/control_panel_zoom_detail.png)

[UI with Mandelbrot zoom details greyscale](./images/control_panel_zoom_detail_gs.png)

Besides some brush up on basic Complex/Imaginary number operations math 'magic' most if not all of the algorithm is based on this quite nice and pragmatic Python tutorial: https://www.codingame.com/playgrounds/2358/how-to-plot-the-mandelbrot-set/adding-some-colors

## Tech and implementation
Very simple and pragmatic:
- Plain Vanilla Javascript following the Module organisation
- A couple of modules encapsulating and separating the different concerns (ui/presentation, complex numbers, mandelbrot calculations, graphical computation)
- HTML5 Canvas for rendering
- No CSS (I'm not a big Frontend or Pixel Perfect kind of personality) 

### Resources and references used
- Animation Loop: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
- Canvas
  - Coordinate System: https://www.w3schools.com/graphics/canvas_coordinates.asp
  - Image Data in Canvas: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
  - Image Data in Canvas: https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/

## Improvements and further development 
- Implement a canvas plugin system/interface to support more canvas based visualizations - Julia Set I'm looking at you! For instance this could be accepting (point, color, color system) and then render to canvas.

- Explore some features with web worker framework
  - Interesting resources to explore
    - https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
    - https://developers.google.com/web/updates/2018/08/offscreen-canvas

  - Main and worker interactions
    - https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen
    - https://stackoverflow.com/questions/59598111/send-offscreencanvas-to-webworker-more-than-once
    - https://stackoverflow.com/questions/57762759/an-offscreencanvas-could-not-be-cloned-because-it-was-detached
    - https://www.i-programmer.info/programming/javascript/13092-javascript-canvas-offscreencanvas.html?start=2

# Setup
- Run ```npm install```

# Build
- No need the build process in itself. Node is presented as a requirement in order to have a quick  way of statically serving the files at the 
- This Javascript code is Module compatible and will run on any modern compatible web browser. For more compatibility details please check: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

# Test
- No tests yet

# Run
- First start a static content webserver to serve the page content by running: ```npx serve``
- Open your browser of choice at http://localhost:5000/mandelbrot-explorer.html
- Due to project being JS Module based the html file needs to be served from a Web server and won't run from your local file system in your preferred browser at least without any command-line or configuration magic.