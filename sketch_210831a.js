const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
let b1, b2, b3;
const R1 = 0;
const G1 = 0;
const B1 = 0;

function setup() {
   createCanvas(400, 400, WEBGL);
  
   b1 = color(100, 100, 100);
   b2 = color(180, 180, 180);
   b3 = color(255, 255, 255);
 
   
}

function draw() {
  setGradient(-width * 0.5, -height * 0.5, width * 1, height * 1, b3, b2, b1, Y_AXIS);
  translate(0,0, width * 0.5);
  fill('rgba(' + R1 + ', ' + G1 + ' , ' + B1 + ', 0.2)');
  stroke('rgba(' + R1 + ', ' + G1 + ' , ' + B1 + ', 0.8)');
  strokeWeight(width/10);
  rotateY(QUARTER_PI * 2.25);
  rotateZ(QUARTER_PI * -3.5);
  rotateX(QUARTER_PI * -0.15);
  box(width * 0.2);
  
  save("20210831.png");
  noLoop();
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}
