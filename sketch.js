let beginButton;

let infoScreen;
let startScreen;
let screenColour;
let test;

let b;

let img;
function preload() {
  img = loadImage("goals.png");
}

function setup() {
  canvas = createCanvas(canvasW, canvasH);
  beginButton = new Button("Begin", canvasW / 2 - buttonW / 2, canvasH - 200);
  ballButton = new Button("Start", canvasW / 2 - buttonW / 2, canvasH - 80);
  infoScreen = true;
  startScreen = false;
  screenColour = {r: 0, g: 0, b: 0};

  //test = new Population(300); //create a new population with 1000 me
  b = new Ball()
}

function draw() {
  background(screenColour.r, screenColour.g, screenColour.b);
  b.show()
  b.update()

  //infoScreen
  if (infoScreen) {
    textSize(24);
    fill(255);
    text(infoMessage, 50, 60, 400, 500);
    screenColour = {r: 44, g: 44, b: 44};
    beginButton.show();
    img.resize(50, 25);
  }

  //defenderScreen
  else if (startScreen)
  {
    screenColour = {r: 0, g: 120, b: 0};
    ballButton.show();
    textSize(24);
    fill(255);
    text(defenceMessage, 50, 60, 400, 500);
    image(img, canvasW - 100, 50);
  }
  //gamescreen
  else
  {
    image(img, canvasW - 100, 50);
    //draw defenders(s)
    
    fill(0, 0, 255);
    rect(200, 300, 200, 10);

    if (test.allballsDead())
    {
      //genetic algorithm
      test.calculateFitness();
      test.naturalSelection();
      test.mutateDemBabies();
    }
    else
    {
      test.update();
      test.show();
    }
  }
}

function mousePressed() {
  if (beginButton.hovered()) {
    startScreen = true;
    infoScreen = false;
  }
  if (ballButton.hovered()) {
    startScreen = false;
  }
}
