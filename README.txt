# Music visualizers built with p5.js

Contains two music visualizers that run in the browser and respond in real time to microphone input.

Demo videos:
- https://vimeo.com/946863455?share=copy
- https://vimeo.com/946862691?share=copy

# Setup

1. Clone the repo.
2. Run a web server at the root of the project. I use `http-server -c-1` to serve the files.
3. Open the appropriate url in the browser. This will be http://127.0.0.1:8080 by default if using `http-server`.
4. Navigate to either `http://127.0.0.1:8080/waveform_terrain_generation/` or `http://127.0.0.1:8080/fractal_column/`, updating the root url if needed.
5. Click anywhere in the DOM to start the visualizer.

Note: The program will accept the audio input your browser has selected. So you could use this with your computer's microphone if you'd like.
I have found it more interesting to use a program such as https://existential.audio/blackhole/ to route your system audio to the browser and speakers simultaneously.
There is a nice tutorial on how to do that here: https://existential.audio/blackhole/support/#system.

This was in the original p5.js README, so will leave it here:

# License

The p5.js library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, version 2.1.
