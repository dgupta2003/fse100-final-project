let img;
let titleimg;
let img2;
let img3;
let img4;
// let img5;
let img6;
let numActivity = 0;
// let bgmusic;

function preload() {
img = loadImage('assets/background2.jpg')  
img2 = loadImage('assets/icons/rhythm1.JPG')
img3 = loadImage('assets/icons/shapegame.jpg')
// img5 = loadImage('assets/navbuttons/quit.JPG')
img4 = loadImage('assets/icons/tic tac toe.jpg')
img6 = loadImage('assets/navbuttons/home.JPG')
titleimg = loadImage('assets/growup.JPG')
//bgmusic = loadSound('assets/If I Had A Chicken BGM.mp3')
  codypreload();
  dragonpreload();
  instructions2preload();
}

// function bgmusicloop(){
//     if (!bgmusic.isPlaying()) {
//       bgmusic.play();
//     }  
  
// }

function backToHome(){ // reloads the main menu
  clear();
  //background(220);
  
  numActivity = 0;
  mainMenu();
  // Hide the home page button, show the activity buttons
  bgmusic2.stop();
  
  try {
    button.hide();
}
  catch(err) {
    console.log("caught error");
}
  
  instructions2button.hide();
  home1button.hide();
  home2button.hide();
  game1button.show();
  game2button.show();
  game3button.show();
  score = 0;
}

function setup() {
  createCanvas(600,500);

  game1button = createButton('Tracking Game');
  game1button.position(80, 350);
  game1button.mousePressed(codysetup);
  game1button.style('font-size', '18px');
  game1button.style('color', 'blue');
  game1button.show();

  game2button = createButton('Drag-On');
  game2button.position(275, 350);
  game2button.style('font-size', '18px');
  game2button.style('color', 'purple');
  game2button.mousePressed(dragonsetup);
  game2button.show();

  
  game3button = createButton('Tic-Tac-Toe');
  game3button.position(425, 350);
  game3button.mousePressed(game3);
  game3button.style('font-size', '18px');
  game3button.style('color', 'green');
  
  home1button = createButton("Home");
  home1button.position(270, 400);
  home1button.mousePressed(backToHome);
  home1button.hide();
  
  home2button = createButton("Home");
  home2button.style('font-size', '18px');
  home2button.position(270, 400);
  home2button.mousePressed(backToHome);
  home2button.hide();
  
  instructions2button = createButton('How to Play');
  instructions2button.position(80, 400);
  instructions2button.style('font-size', '18px');
  instructions2button.style('color', 'purple');
  instructions2button.mousePressed(instructions2setup);
  instructions2button.hide();
  
  //bgmusic2.stop();
  // button = createButton('Exit')
  // button.position(380,460);
  // button.mousePressed(exitgame);
  // button.style('font-size', '18px');
  
  // button = createButton('home')
  // button.position(35,340)
  // button.style('font-size', '18px');
  
  // button = createButton('GROW UP')
  // button.position(355,70)
  // button.style('font-size', '18px');
  // button.style('color', '#ff0000');
}


function game1(){
window.open("https://editor.p5js.org/codyy122/full/E7b6p2SkL");
}

function game2(){
//console.log("Clicked");
  // window.open("https://editor.p5js.org/babayaga07-code/full/O9w6RZbXo");
  window.open("https://editor.p5js.org/babayaga07-code/full/O9w6RZbXo"); 
}

function game3(){ window.open("https://editor.p5js.org/act22686/full/GkPCmJd2u");
}
// function exitgame() {
//   window.close();
// }
function keyPressed() {
  console.log("Key pressed");
  window.close();
  return false;
}
function mainMenu() {
  background(img);
  //bgmusicloop();
  img.resize(width, height);
  image(img2,100,245)
  img2.resize(100,100);
  image(img3,270,245)
  img3.resize(100,100);
  image(img4,428,245)
  img4.resize(100,100);
  
  // image(img5,355,400)
  // img5.resize(100,50);
  
  image(titleimg,230,40)
  titleimg.resize(150,100);
  // image(img6,85,400)
  // img6.resize(100,50);
  
  
}

function draw() {
switch(numActivity){
    case 0: 
      mainMenu();
      break;
    case 1: 
      codydraw();
      break;
    case 2: 
      dragondraw();
      break;
    case 3: 
      chandraw();
      break;
    case 4:
      drawInstructions2();
      break;
   
}
}
