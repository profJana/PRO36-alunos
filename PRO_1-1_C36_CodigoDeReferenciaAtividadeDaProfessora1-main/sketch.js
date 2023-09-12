var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //referenciar o database (banco de dados)
  //instanciar a classe Game
  //usar a função start da classe Game
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
