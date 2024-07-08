let circleRad = 120;
let circleArray = [];
let timeToClick = [];
let distList = [];
let colorFill;
let colorStroke;
let colorFillHover;
let currentCirc = 0;
let codyscore = 0;
let codyimg;

let hit;
function codypreload(){
  codyimg = loadImage('Assests/Background/Background.jpg')
}

function codysetup() {
  clear();
  numActivity = 1;
  home1button.show();
  game1button.hide();
  game2button.hide();
  game3button.hide();
  
  
  
  hit = loadSound("Assests/Sounds/click.mp3");
  createCanvas(600, 500);

  colorFill = color(255, 0, 0);
  colorStroke = color(0, 0, 0);
  colorFillHover = color(162, 252, 78);

  for (let i = 0; i < 10; i++) {
    let newThing = new clickedCircle(randomRange(0, 400), randomRange(0, 400));
    circleArray[i] = newThing;
  }
}

function exitgame() {
  window.location.href = ('https://editor.p5js.org/babayaga07-code/full/B-G5vVgsU');
}

function mouseClicked() {
  if (currentCirc >= 10) return;
 try { if (circleArray[currentCirc].overCircle === true) {
    circleArray[currentCirc].onClicked();
  }

}
catch(err) {
  console.log();
}
}
class clickedCircle {
  //spawn w/ random coords
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = circleRad;
    this.overCircle = false;
  }

  //get distance from mouse to center
  findDist() {
    return Math.sqrt(
      Math.pow(mouseX - this.x, 2) + Math.pow(mouseY - this.y, 2)
    );
  }

  //per game tick (1ms?)
  onUpdate() {
    if (this.findDist() <= this.size) {
      this.overCircle = true;
    } else {
      this.overCircle = false;
    }
    this.shrink();

    this.draw();
  }

  //shrink rad by 1, if it disappears then go to next
  shrink() {
    this.size--;
    if (this.size <= 0) {
      timeToClick[currentCirc] = 1000; // they missed the window, so they waited
      this.nextCircle();
    }
  }
  draw() {
    fill(lerpColor(colorFill, colorFillHover, 1 - this.findDist() / this.size));
    stroke(
      lerpColor(colorFill, colorFillHover, 1 - this.findDist() / this.size)
    );
    circle(this.x, this.y, this.size);
  }
  onClicked() {
    codyscore += Math.round((this.size / (this.size + this.findDist() * 2)) * 1000);
    hit.play();
    distList[currentCirc] = this.findDist();
    timeToClick[currentCirc] = (1 - this.size / circleRad) * 1000;
    this.nextCircle();
  }

  //when circle shrinks down, call next Circle
  nextCircle() {
    currentCirc++;
  }
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function roundNth(num, digit) {
  return Math.floor(num * Math.pow(10, digit)) / Math.pow(10, digit);
}

function getAvg(list) {
  let avg = 0;
  list.forEach((element) => {
    avg += element;
  });
  return avg / list.length;
}

function codydraw() {
  background(codyimg);
  if (currentCirc < 10) {
    circleArray[currentCirc].onUpdate();
     fill(color(0, 0, 0));
    stroke(color(0, 0, 0));
    text("score: " + codyscore, 10, 10);
  } else {
     fill(color(0, 0, 0));
    stroke(color(0, 0, 0));
    text("Final score: " + codyscore, 150, 200);
    text("Good Job!", 150, 150);
    
    let avg = getAvg(distList);
  }
}

