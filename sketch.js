let myPiece;
let sound;
let gameStarted;

function setup() {
  createCanvas(canvasW, canvasH);
  myPiece = new Piece(
    piece_L,
    canvasW / 2 - boxDimension * 2,
    boxDimension * 3,
    colors[2]
  );
  setInterval(() => applyGravity(), timer);
  sound = false;
  gameStarted = true;
}

function draw() {
  //The background of game
  if (gameStarted) {
    background(44);
    stroke(130);
    fill(70);
    strokeWeight(boxDimension);
    rect(
      boxDimension / 2,
      boxDimension / 2,
      canvasW - boxDimension,
      canvasH - boxDimension
    );
    stroke(255);
    noFill();
    strokeWeight(7);
    rect(0, 0, canvasW, canvasH);
    strokeWeight(2);
    stroke(5);
    fill(35);
    rect(
      boxDimension * 5,
      canvasH - 21 * boxDimension - 1,
      boxDimension * 10,
      boxDimension * 20
    );

    //reset stroke
    stroke(0);
    strokeWeight(2);

    myPiece.show();
  }
}

let applyGravity = () => {
  myPiece.y += boxDimension;
};

function keyPressed() {
  if (keyCode === UP_ARROW) myPiece.rotation();

  if (keyCode === RIGHT_ARROW && !myPiece.canCollide(box => box.x + boxDimension === width)
  && !platform.piecesColliding(currentPiece, (rect1, rect2) =>
  rectCollision(rect1, rect2), (box) => box.x += boxDimension))
  myPiece.x += boxDimension;
  myPiece.y -= boxDimension;

  if (keyCode === LEFT_ARROW && !myPiece.canCollide(box => box.x === begginingPoint)
  && !platform.piecesColliding(myPiece, (rect1, rect2) =>
  rectCollision(rect1, rect2), (box) => box.x -= boxDimension))
  myPiece.x -= boxDimension;
  myPiece.y -= boxDimension;

  if (keyCode === DOWN_ARROW) applyGravity();
  applyGravity();
  applyGravity();
}

let mySound;
function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("Original Tetris theme (Tetris Soundtrack).mp3");
}

function mousePressed() {
  if (sound) {
    mySound.stop();
    sound = false;
  } else {
    mySound.play();
    sound = true;
  }
}
