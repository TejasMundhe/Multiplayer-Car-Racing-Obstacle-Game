var database, game;
var car1Img, car2Img;
var car1, car2, raceTrack, cars, raceTrackImg;
var cone, barrior, obstacles, obstaclesGroup;
var playerCount, allPlayers, form, player;
var gameState = 0;
var player1score = 0;
var player2score = 0;

function preload(){
 car1Img = loadImage("images/car2.png");
 car2Img = loadImage("images/car3.png");
 raceTrack = loadImage("images/track.png");
 cone = loadImage("images/coneImg.png");
 barrior = loadImage("images/barriorImg.png");
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

  
  
}

function draw() {
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
    game.spawnObstacles()
    game.handlePlayerControls();
    textSize(5)
    fill("Blue")
    text("Player1:"+ player1score, 50, 50);
    text("Player2:"+ player2score, 1000, 50);
  }
  if(gameState === 2){
    game.end();
    textSize(5)
    fill("Blue")
    text("Player2:"+ player1score, 50, 50);
    text("Player1:"+ player2score, 1000, 50);
  }
  

}

