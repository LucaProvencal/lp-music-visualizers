let bitDepth = 1024
let mic, fft, trigger;

function setup() {
  createCanvas(1600, 1600, WEBGL);

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT(0.8, bitDepth);
  fft.setInput(mic);
}

function draw() {
  let waveform = fft.waveform();
 
  background(0);
}

function touchStarted() {
  getAudioContext().resume();
}
