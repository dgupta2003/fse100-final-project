let bgins2;

function instructions2preload() {
  bgins2 = loadImage('dragon/assets/slidesbg.jpg');
}

function instructions2setup() {
  clear();
  numActivity = 4;
  instructions2button.hide();
  game2button.show();
  home2button.hide();
  
}

function drawInstructions2() {
  createCanvas(600,500);
  //bgins2 = loadImage('dragon/assets/slidesbg.jpg');
  background(bgins2);
    fill("rgb(8,8,9)");
    textSize(18);
  text('This game is made by Devansh Gupta.\n\nYou will be presented with 3 distinct shapes and 3 distinct\nchoices (on every level) out of which only 2 matches are\ncorrect.\n\nYou need to click and drag the object to the choice of field\nwhich represents the best match according to you.\n\nFor every correct match 5 points will be awarded; and, for\nevery incorrect match 5 points will be deducted.', 60, 100);
  
}
