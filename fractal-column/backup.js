// ideas:
// make it rotate on an axis
// give it rings like a planet
// render the squares in 3d space
// limit its radius
// increase radius of squares while also simultaneously zooming in!!


let bitDepth = 1024
let mic, fft, trigger;

function setup() {
  createCanvas(1200, 1200, WEBGL);

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT(0.8, bitDepth);
  fft.setInput(mic);

  frameRate(60);
  textSize(30);
  textAlign(CENTER);
}

let alphaAmpMultiplier


// in order for it to remember history, need to regenerate canvas on each frame. 
// 
// need to create custom array type [{square}, {square2}, ...]
// where each square will store keys representing props to be passed to builtin funcs when drawing
// this may get kinda performance heavy. Should be easy to make the zoom/spin effect though. 
// might have to reduce the radius in polar translate based on polar index
// 
// on each frame, calculate properties of square and add to array ( maybe 200-300 squares? )
//    then loop through array and draw all squares using builtin funcs
// 
// add responseToVolume attribute (0-1) to link drawn squares color/opacity or rotation/size to respond to current vol
// this will make the whole thing scintillate
let squares = [{}]
let square

let rotation
let rotationX
let rotationY
let rotationZ
let translateAngle
let colorOffsetG
let colorOffsetB
let opacityModifier

function draw() {
  clear();
  square = {
    rotation: millis() / 10000,
    rotationX: millis() / 10000,
    rotationY: millis() / 5000,
    rotationZ: millis() / 4000,
    translateAngle: p5.Vector.fromAngle(10, millis() / 10000+20*mic.amplitude.volume),
    colorOffsetG: Math.floor(100*Math.abs(Math.sin(millis()/100))),
    colorOffsetB: Math.floor(120*Math.abs(Math.sin(millis()/500))),
    opacityModifier: mic.amplitude.volume*12 > .2 ? mic.amplitude.volume*12 : 0,
    scaleModifier: mic.amplitude.volume*5+.8,
  }
  

  
 

  squares.push(square)

  if (squares.length > 50) {
    squares = squares.slice(1)
  }

  squares.forEach(square => {
    translate(square.translateAngle);
  
    rotateX(square.rotationX);
    rotateY(square.rotationY);
    rotateZ(square.rotationZ);
    fill(`rgba(${20}, ${square.colorOffsetG}, ${square.colorOffsetB}, ${square.opacityModifier})`)
    noStroke()
    scale(square.scaleModifier)
    rect(30, 20, 55, 55, 20, 15, 10, 5);
  })
  console.log(squares.length);
}

function touchStarted() {
  getAudioContext().resume();
}


function createSquare() {

}