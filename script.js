let ball;
let player1, player2;
let p1Speed = 0,
  p2Speed = 0;

function setup() {
  createCanvas(800, 400);

  // crear pelota
  ball = {
    x: width / 2,
    y: height / 2,
    radius: 10,
    speedX: 4,
    speedY: 3,
  };

  // crear player
  player1 = { x: 20, y: height / 2 - 40, w: 10, h: 80 };
  player2 = { x: width - 30, y: height / 2 - 40, w: 10, h: 80 };
}

function draw() {
  background(0);

  textSize(32);
  textAlign(CENTER, CENTER);
  text("0", width / 4, 50);
  text("0", (3 * width) / 4, 50);

  // jugadores stats
  fill(255);
  rect(player1.x, player1.y, player1.w, player1.h);
  rect(player2.x, player2.y, player2.w, player2.h);
  player1.y += p1Speed;
  player2.y += p2Speed;
  player1.y = constrain(player1.y, 0, height - player1.h);
  player2.y = constrain(player2.y, 0, height - player2.h);

  // pelota stats
  ellipse(ball.x, ball.y, ball.radius * 2);
 
}

// movimiento al pulsar
function keyPressed() {
  if (key === "W" || key === "w") p1Speed = -5;
  if (key === "S" || key === "s") p1Speed = 5;
  if (keyCode === UP_ARROW) p2Speed = -5;
  if (keyCode === DOWN_ARROW) p2Speed = 5;
}
// movimiento al soltar
function keyReleased() {
  if (key === "W" || key === "w" || key === "S" || key === "s") p1Speed = 0;
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) p2Speed = 0;
}
