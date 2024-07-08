let font;
let text1, text2, text3, text4, text5, text6; // defining text boxes
let bg;
let triangleimg;
let arrowimg;
let circleimg;
let crescentimg;
let crossimg;
let diamondimg;
let ellipseimg;
let heartimg;
let hexagonimg;
let ovalimg;
let parallelogramimg;
let pentagonimg;
let pieimg;
let rectangleimg;
let ringimg;
let semicircleimg;
let squareimg;
let starimg;
let trapeziumimg;
let trefoilimg;
let correctsound;
let incorrectsound;
let bgmusic2;
let y = 0;
level = 1;

function dragonpreload() {
  arrowimg = loadImage("dragon/assets/shapes2/arrow-removebg-preview.png");
  circleimg = loadImage("dragon/assets/shapes2/circle-removebg-preview.png");
  crescentimg = loadImage(
    "dragon/assets/shapes2/crescent-removebg-preview.png"
  );
  crossimg = loadImage("dragon/assets/shapes2/cross-removebg-preview.png");
  diamondimg = loadImage("dragon/assets/shapes2/diamond-removebg-preview.png");
  ellipseimg = loadImage("dragon/assets/shapes2/ellipse-removebg-preview.png");
  heartimg = loadImage("dragon/assets/shapes2/heart-removebg-preview.png");
  hexagonimg = loadImage("dragon/assets/shapes2/hexagon-removebg-preview.png");
  ovalimg = loadImage("dragon/assets/shapes2/oval-removebg-preview.png");
  parallelogramimg = loadImage(
    "dragon/assets/shapes2/parallelogram-removebg-preview.png"
  );
  pentagonimg = loadImage(
    "dragon/assets/shapes2/pentagon-removebg-preview.png"
  );
  pieimg = loadImage("dragon/assets/shapes2/pie-removebg-preview.png");
  rectangleimg = loadImage(
    "dragon/assets/shapes2/rectangle-removebg-preview.png"
  );
  ringimg = loadImage("dragon/assets/shapes2/ring-removebg-preview.png");
  semicircleimg = loadImage(
    "dragon/assets/shapes2/semicircle-removebg-preview.png"
  );
  squareimg = loadImage("dragon/assets/shapes2/square-removebg-preview.png");
  starimg = loadImage("dragon/assets/shapes2/star-removebg-preview.png");
  trapeziumimg = loadImage(
    "dragon/assets/shapes2/trapezium-removebg-preview.png"
  );
  trefoilimg = loadImage("dragon/assets/shapes2/trefoil-removebg-preview.png");
  triangleimg = loadImage(
    "dragon/assets/shapes2/triangle-removebg-preview.png"
  );
  correctsound = loadSound("dragon/assets/sounds/correct.mp3");
  incorrectsound = loadSound("dragon/assets/sounds/incorrect.mp3");
  bgmusic2 = loadSound("dragon/assets/sounds/dragonbgmusic.mp3");
}

function boxMaker() {
  fill(255, 255, 255);
  //console.log(wrongY);
  box1 = square(450, 320, 90);
  box2 = square(450, 210, 90);
  box3 = square(450, 100, 90);
}

function drawShapes(d) {
  if (d == true) {
    let index; // This will store the index of the random shape taken so that we can remove it from the array;
    createCanvas(600, 500);
    bg = loadImage("dragon/assets/slidesbg.jpg");
    // Setting the default values for positions of shapes
    shape1x = 100;
    shape1y = 120;
    shape2x = 100;
    shape2y = 200;
    shape3x = 100;
    shape3y = 280;
    shapeSize = 70;
    // Defining an array of shapes from which we can choose random shapes
    let shapesArr = [
      arrowimg,
      circleimg,
      crescentimg,
      crossimg,
      diamondimg,
      ellipseimg,
      heartimg,
      hexagonimg,
      ovalimg,
      parallelogramimg,
      pentagonimg,
      pieimg,
      rectangleimg,
      ringimg,
      semicircleimg,
      squareimg,
      starimg,
      trapeziumimg,
      trefoilimg,
      triangleimg,
    ];
    // A copy of the array of shapes
    let shapesArrCopy = shapesArr.slice(0);
    // List contaning all the descriptions of the shapes
    let descriptions = [
      "Arrow",
      "Circle",
      "Crescent",
      "Cross",
      "Diamond",
      "Ellipse",
      "Heart",
      "Hexagon",
      "Oval",
      "Parallelogram",
      "Pentagon",
      "Pie",
      "Rectangle",
      "Ring",
      "Semicircle",
      "Square",
      "Star",
      "Trapezium",
      "Trefoil",
      "Triangle",
    ];
    // Getting three unique, random shapes
    shape1 = random(shapesArr);
    index = shapesArr.indexOf(shape1);
    description1 = descriptions[shapesArrCopy.indexOf(shape1)];
    shapesArr.splice(index, 1);
    shape2 = random(shapesArr);
    description2 = descriptions[shapesArrCopy.indexOf(shape2)];
    index = shapesArr.indexOf(shape2);
    shapesArr.splice(index, 1);
    shape3 = random(shapesArr);
    descriptions.splice(shapesArrCopy.indexOf(shape1), 1);
    descriptions.splice(shapesArrCopy.indexOf(shape2), 1);
    descriptions.splice(shapesArrCopy.indexOf(shape3), 1);
    description3 = random(descriptions);
    //console.log(description3);
  } else {
    return 1;
  }
}
score = 0;
function resetter(button) {
  button.hide();
  if (score >= 50) {
    noLoop();
    console.log("Game Over");
  } else {
    // score += 5;
    dragonsetup();
  }
}
function victory() {
  noLoop();
  if (correctsound.isPlaying()) {
    correctsound.stop();
  } else {
    correctsound.play();
  }
  text("Congratulations, you passed the level! (+5 points)", 95, 200);
  score += 5;
  button = createButton("Play Next Level");
  button.style("font-size", "18px");
  button.position(240, 220);
  button.mousePressed(() => resetter(button));
}
function losing() {
  noLoop();
  if (incorrectsound.isPlaying()) {
    incorrectsound.stop();
  } else {
    incorrectsound.play();
  }
  text("Oops! That's incorrect. (-5 points)", 170, 200);
  score -= 5;
  button = createButton("Play Again");
  button.style("font-size", "18px");
  button.position(250, 220);
  button.mousePressed(() => resetter(button));
}
function exitgame() {
  // window.open('https://editor.p5js.org/babayaga07-code/full/b1DXH7JYx');
  window.location.href =
    "https://editor.p5js.org/babayaga07-code/full/B-G5vVgsU";
}
// function keyPressed(){
//   window.close();

// }
function bgmusicloop() {
  if (!bgmusic2.isPlaying()) {
    bgmusic2.play();
  }
}

function dragonsetup() {
  numActivity = 2;
  instructions2button.show();
  home2button.show();
  game1button.hide();
  game2button.hide();
  game3button.hide();
  console.log(score);
  bgmusicloop();

  // homebutton = createButton("Home");
  // homebutton.style('font-size', '18px');
  // homebutton.position(270, 400);
  // homebutton.mousePressed(exitgame);

  drawShapes(true);
  options = [0, 1, 2];
  answer1 = random(options);
  options.splice(options.indexOf(answer1), 1);
  answer2 = random(options);
  options.splice(options.indexOf(answer2), 1);
  wrongAnswer = random(options);
  soln1x = 0;
  soln1y = 0;
  soln2x = 0;
  soln2y = 0;
  //   button = createButton("Home");
  // button.position(280, 400);
  //   button.mousePressed(exitgame);
  if (answer1 == 0) {
    soln1x = 450;
    soln1y = 320;
  } else if (answer1 == 1) {
    soln1x = 450;
    soln1y = 210;
  } else if (answer1 == 2) {
    soln1x = 450;
    soln1y = 100;
  }
  if (answer2 == 0) {
    soln2x = 450;
    soln2y = 320;
  } else if (answer2 == 1) {
    soln2x = 450;
    soln2y = 210;
  } else if (answer2 == 2) {
    soln2x = 450;
    soln2y = 100;
  }
  if (wrongAnswer == 0) {
    wrongX = 450;
    wrongY = 320;
  } else if (wrongAnswer == 1) {
    wrongX = 450;
    wrongY = 210;
  } else if (wrongAnswer == 2) {
    wrongX = 450;
    wrongY = 100;
  }
  // button = createButton("Home");
  // button.position(280, 400);
  // button.mousePressed(exitgame);
  loop();
  //textDrawer(description1, description2, descript);
}

function mouseDragged() {
  if (
    mouseX > shape1x - 50 &&
    mouseX < shape1x + 50 &&
    mouseY > shape1y - 50 &&
    mouseY < shape1y + 50
  ) {
    shape1x = mouseX;
    shape1y = mouseY;
  } else if (
    mouseX > shape2x - 50 &&
    mouseX < shape2x + 50 &&
    mouseY > shape2y - 50 &&
    mouseY < shape2y + 50
  ) {
    shape2x = mouseX;
    shape2y = mouseY;
  } else if (
    mouseX > shape3x - 50 &&
    mouseX < shape3x + 50 &&
    mouseY > shape3y - 50 &&
    mouseY < shape3y + 50
  ) {
    shape3x = mouseX;
    shape3y = mouseY;
  }
  return false;
}
function textDrawer() {
  textSize(16);
  fill(0, 0, 0);
  text(description1, soln1x + 8, soln1y - 3);
  text(description2, soln2x + 8, soln2y - 3);
  text(description3, wrongX + 8, wrongY - 3);
}

function solnChecker() {
  if (
    shape1x > soln1x &&
    shape1x < soln1x + 35 &&
    shape1y > soln1y &&
    shape1y < soln1y + 35 &&
    shape2x > soln2x &&
    shape2x < soln2x + 35 &&
    shape2y > soln2y &&
    shape2y < soln2y + 35
  ) {
    victory();
  } else if (
    shape1x > soln2x &&
    shape1x < soln2x + 35 &&
    shape1y > soln2y &&
    shape1y < soln2y + 35 &&
    shape2x > soln1x &&
    shape2x < soln1x + 35 &&
    shape2y > soln1y &&
    shape2y < soln1y + 35
  ) {
    losing();
  } else if (
    shape1x > soln2x &&
    shape1x < soln2x + 35 &&
    shape1y > soln2y &&
    shape1y < soln2y + 35
  ) {
    if (
      (shape2x > soln1x &&
        shape2x < soln1x + 35 &&
        shape2y > soln1y &&
        shape2y < soln2y + 35) ||
      (shape3x > wrongX &&
        shape3x < wrongX + 35 &&
        shape3y > wrongY &&
        shape3y < wrongY + 35) ||
      (shape2x > wrongX &&
        shape2x < wrongX + 35 &&
        shape2y > wrongY &&
        shape2y < wrongY + 35) ||
      (shape3x > soln1x &&
        shape3x < soln1x + 35 &&
        shape3y > soln1y &&
        shape3y < soln1y + 35)
    ) {
      losing();
    }
  } else if (
    shape1x > wrongX &&
    shape1x < wrongX + 35 &&
    shape1y > wrongY &&
    shape1y < wrongY + 35
  ) {
    if (
      (shape2x > soln1x &&
        shape2x < soln1x + 35 &&
        shape2y > soln1y &&
        shape2y < soln1y + 35) ||
      (shape3x > soln2x &&
        shape3x < soln2x + 35 &&
        shape3y > soln2y &&
        shape3y < soln2y + 35) ||
      (shape2x > soln2x &&
        shape2x < soln2x + 35 &&
        shape2y > soln2y &&
        shape2y < soln2y + 35) ||
      (shape3x > soln1x &&
        shape3x < soln1x + 35 &&
        shape3y > soln1y &&
        shape3y < soln1y + 35)
    ) {
      losing();
    }
  } else if (
    shape1x > soln1x &&
    shape1x < soln1x + 35 &&
    shape1y > soln1y &&
    shape1y < soln1y + 35
  ) {
    if (
      (shape2x > wrongX &&
        shape2x < wrongX + 35 &&
        shape2y > wrongY &&
        shape2y < wrongY + 35) ||
      (shape3x > soln2x &&
        shape3x < soln2x + 35 &&
        shape3y > soln2y &&
        shape3y < soln2y + 35)
    ) {
      losing();
    } else if (
      shape3x > wrongX &&
      shape3x < wrongX + 35 &&
      shape3y > wrongY &&
      shape3y < wrongY + 35
    ) {
      losing();
    }
  } else if (
    shape2x > soln2x &&
    shape2x < soln2x + 35 &&
    shape2y > soln2y &&
    shape2y < soln2y + 35
  ) {
    if (
      (shape1x > wrongX &&
        shape1x < wrongX + 35 &&
        shape1y > wrongY &&
        shape1y < wrongY + 35) ||
      (shape3x > soln1x &&
        shape3x < soln1x + 35 &&
        shape3y > soln1y &&
        shape3y < soln1y + 35)
    ) {
      losing();
    } else if (
      shape3x > wrongX &&
      shape3x < wrongX + 35 &&
      shape3y > wrongY &&
      shape3y < wrongY + 35
    ) {
      losing();
    }
  } else if (
    shape2x > soln1x &&
    shape2x < soln1x + 35 &&
    shape2y > soln1y &&
    shape2y < soln1y + 35
  ) {
    if (
      (shape1x > soln2x &&
        shape1x < soln2x + 35 &&
        shape1y > soln2y &&
        shape1y < soln2y + 35) ||
      (shape3x > wrongX &&
        shape3x < wrongX + 35 &&
        shape3y > wrongY &&
        shape3y < wrongY + 35) ||
      (shape1x > wrongX &&
        shape1x < wrongX + 35 &&
        shape1y > wrongY &&
        shape1y < wrongY + 35) ||
      (shape3x > soln2x &&
        shape3x < soln2x + 35 &&
        shape3y > soln2y &&
        shape3y < soln2y + 35)
    ) {
      losing();
    }
  } else if (
    shape2x > wrongX &&
    shape2x < wrongX + 35 &&
    shape2y > wrongY &&
    shape2y < wrongY + 35
  ) {
    if (
      (shape1x > soln1x &&
        shape1x < soln1x + 35 &&
        shape1y > soln1y &&
        shape1y < soln1y + 35) ||
      (shape3x > soln2x &&
        shape3x < soln2x + 35 &&
        shape3y > soln2y &&
        shape3y < soln2y + 35) ||
      (shape1x > soln2x &&
        shape1x < soln2x + 35 &&
        shape1y > soln2y &&
        shape1y < soln2y + 35) ||
      (shape3x > soln1x &&
        shape3x < soln1x + 35 &&
        shape3y > soln1y &&
        shape3y < soln1y + 35)
    ) {
      losing();
    }
  } else if (
    shape3x > soln1x &&
    shape3x < soln1x + 35 &&
    shape3y > soln1y &&
    shape3y < soln1y + 35
  ) {
    if (
      (shape1x > soln2x &&
        shape1x < soln2x + 35 &&
        shape1y > soln2y &&
        shape1y < soln2y + 35) ||
      (shape2x > wrongX &&
        shape2x < wrongX + 35 &&
        shape2y > wrongY &&
        shape2y < wrongY + 35) ||
      (shape1x > wrongX &&
        shape1x < wrongX + 35 &&
        shape1y > wrongY &&
        shape1y < wrongY + 35) ||
      (shape2x > soln2x &&
        shape2x < soln2x + 35 &&
        shape2y > soln2y &&
        shape2y < soln2y + 35)
    ) {
      losing();
    }
  } else if (
    shape3x > soln2x &&
    shape3x < soln2x + 35 &&
    shape3y > soln2y &&
    shape3y < soln2y + 35
  ) {
    if (
      (shape1x > soln1x &&
        shape1x < soln1x + 35 &&
        shape1y > soln1y &&
        shape1y < soln1y + 35) ||
      (shape2x > wrongX &&
        shape2x < wrongX + 35 &&
        shape2y > wrongY &&
        shape2y < wrongY + 35) ||
      (shape1x > wrongX &&
        shape1x < wrongX + 35 &&
        shape1y > wrongY &&
        shape1y < wrongY + 35) ||
      (shape2x > soln1x &&
        shape2x < soln1x + 35 &&
        shape2y > soln1y &&
        shape2y < soln1y + 35)
    ) {
      losing();
    }
  } else if (
    shape3x > wrongX &&
    shape3x < wrongX + 35 &&
    shape3y > wrongY &&
    shape3y < wrongY + 35
  ) {
    if (
      (shape1x > soln2x &&
        shape1x < soln2x + 35 &&
        shape1y > soln2y &&
        shape1y < soln2y + 35) ||
      (shape2x > soln1x &&
        shape2x < soln1x + 35 &&
        shape2y > soln1y &&
        shape2y < soln1y + 35)
    ) {
      losing();
    } else if (
      shape1x > soln1x &&
      shape1x < soln1x + 35 &&
      shape1y > soln1y &&
      shape1y < soln1y + 35
    ) {
      losing();
    } else if (
      shape2x > soln2x &&
      shape2x < soln2x + 35 &&
      shape2y > soln2y &&
      shape2y < soln2y + 35
    ) {
      losing();
    }
  }
  // else if pe1x > soln1x) && (shape1x < soln1x + 35) && (shape1y > soln1y) && (shape1y < soln1y + 35) && (shape3x > soln2x) && (shape3x < soln2x + 35) && (shape3y > soln2y) && (shape3y < soln2y + 35)) {
  //   losing();
  // }
  // else if ((shape1x > soln2x) && (shape1x < soln2x + 35) && (shape1y > soln2y) && (shape1y < soln2y + 35) && (shape3x > soln1x) && (shape3x < soln1x + 35) && (shape3y > soln1y) && (shape3y < soln1y + 35)) {
  //   losing();
  // }
  // else if ((shape2x > soln1x) && (shape2x < soln1x + 35) && (shape2y > soln1y) && (shape2y < soln1y + 35) && (shape3x > soln2x) && (shape3x < soln2x + 35) && (shape3y > soln2y) && (shape3y < soln2y + 35)) {
  //   losing();
  // }
  // else if ((shape2x > soln2x) && (shape2x < soln2x + 35) && (shape2y > soln2y) && (shape2y < soln2y + 35) && (shape3x > soln1x) && (shape3x < soln1x + 35) && (shape3y > soln1y) && (shape3y < soln1y + 35)) {
  //   losing();
  // }
}

function dragondraw() {
  background(bg);
  bgmusicloop();
  boxMaker();
  textDrawer();
  solnChecker();

  image(shape1, shape1x, shape1y, shapeSize, shapeSize);
  image(shape2, shape2x, shape2y, shapeSize, shapeSize);
  image(shape3, shape3x, shape3y, shapeSize, shapeSize);
  text("Score: " + score, 270, 100);
}
