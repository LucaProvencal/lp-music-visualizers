let bitDepth = 512;
let mic, fft, trigger;

function setup() {
  createCanvas(1500, 1500, WEBGL);

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT(0.8, bitDepth);
  fft.setInput(mic);

  frameRate(60);
}

let squares = [{}];
let square;
let rotation;
let rotationX;
let rotationY;
let rotationZ;
let translateAngle;
let colorOffsetG;
let colorOffsetB;
let opacityModifier;

function draw() {
  clear();
  square = {
    rotation: millis() / 10000,
    rotationX: millis() / 10000,
    rotationY: millis() / 5000,
    rotationZ: millis() / 4000,
    translateAngle: p5.Vector.fromAngle(10 * mic.amplitude.volume + 10, millis() / 10000 + 20 * mic.amplitude.volume),
    colorOffsetG: Math.floor(100 * Math.abs(Math.sin(millis() / 100))),
    colorOffsetB: Math.floor(120 * Math.abs(Math.sin(millis() / 500))),
    opacityModifier: mic.amplitude.volume * 12 > 0.2 ? mic.amplitude.volume * 12 : 0,
    scaleModifier: mic.amplitude.volume * 4 + 0.8,
  };

  squares.push(square);

  if (squares.length > 50) {
    squares = squares.slice(1);
  }

  squares.forEach((square) => {
    translate(square.translateAngle);
    rotateX(square.rotationX);
    rotateY(square.rotationY);
    rotateZ(square.rotationZ);
    fill(`rgba(${20}, ${square.colorOffsetG}, ${square.colorOffsetB}, ${square.opacityModifier})`);
    noStroke();
    scale(square.scaleModifier);
    rect(30, 20, 55, 55, 20, 15, 10, 5);
  });
}

function touchStarted() {
  getAudioContext().resume();
}
