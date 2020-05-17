const canvasH = 600;
const canvasW = 500;
const boxDimension = 25;
const timer = 600;

piece_Box = [
  [null, null, null],
  [1, 1, null],
  [1, 1, null]
];

piece_Line = [
  [1, null, null],
  [1, null, null],
  [1, null, null]
];

piece_S = [
  [null, null, null],
  [null, 1, 1],
  [1, 1, null]
];

piece_S2 = [
  [null, null, null],
  [1, 1, null],
  [null, 1, 1]
];

piece_L = [
  [1, null, null],
  [1, null, null],
  [1, 1, null]
];

piece_L2 = [
  [null, 1, null],
  [null, 1, ],
  [1, 1, null]
];

piece_T = [
  [null, null, null],
  [null, 1, null],
  [1, 1, 1]
];

/* Colors */

const purpleColor = {r : 175, g : 100, b : 220}
const pinkColor   = {r : 240, g : 150, b : 150}
const yellowColor = {r : 255, g : 204, b : 0}
const blueColor   = {r : 0,   g : 0,   b: 255}
const darkColor   = {r : 50,  g : 55,  b : 100}

const colors = [purpleColor, pinkColor, yellowColor, blueColor, darkColor]
