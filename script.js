let ball;
let player1, player2;
let p1Speed = 0,
  p2Speed = 0;
let score1 = 0,
  score2 = 0;
let gameOver = false;

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

  // crear jugadores
  player1 = { x: 20, y: height / 2 - 40, w: 10, h: 80 };
  player2 = { x: width - 30, y: height / 2 - 40, w: 10, h: 80 };
}

function draw() {
  background(0);

  // Dibujar marcador
  textSize(32);
  textAlign(CENTER, CENTER);
  text(score1, width / 4, 50);
  text(score2, (3 * width) / 4, 50);

  if (gameOver) {
    textSize(50);
    text("¡Game Over!", width / 2, height / 2);
    return;
  }

  // Dibujar jugadores
  fill(255);
  rect(player1.x, player1.y, player1.w, player1.h);
  rect(player2.x, player2.y, player2.w, player2.h);

  // Mover jugadores
  player1.y += p1Speed;
  player2.y += p2Speed;

  // Mantener los jugadores dentro del lienzo
  player1.y = constrain(player1.y, 0, height - player1.h);
  player2.y = constrain(player2.y, 0, height - player2.h);

  // Dibujar pelota
  ellipse(ball.x, ball.y, ball.radius * 2);

  // Movimiento de la pelota
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  // Rebote en los bordes superior e inferior
  if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= height) {
    ball.speedY *= -1;
  }

  // Colisión con el jugador 1
  if (
    ball.x - ball.radius < player1.x + player1.w &&
    ball.y > player1.y &&
    ball.y < player1.y + player1.h
  ) {
    ball.speedX *= -1; // Rebote correcto
  }

  // Colisión con el jugador 2
  if (
    ball.x + ball.radius > player2.x &&
    ball.y > player2.y &&
    ball.y < player2.y + player2.h
  ) {
    ball.speedX *= -1; // Rebote correcto
  }

  if (ball.x < 0) {
    score2++;
    checkGameOver();
    resetBall();
  }
  if (ball.x > width) {
    score1++;
    checkGameOver();
    resetBall();
  }
}

function resetBall() {
  ball.x = width / 2;
  ball.y = height / 2;
  ball.speedX = random([-4, 4]);
  ball.speedY = random([-3, 3]);
}

function checkGameOver() {
  if (score1 >= 10 || score2 >= 10) {
    gameOver = true;
  }
}

// Movimiento al presionar teclas
function keyPressed() {
  if (key === "W" || key === "w") p1Speed = -5;
  if (key === "S" || key === "s") p1Speed = 5;
  if (keyCode === UP_ARROW) p2Speed = -5;
  if (keyCode === DOWN_ARROW) p2Speed = 5;
}

// Movimiento al soltar teclas
function keyReleased() {
  if (key === "W" || key === "w" || key === "S" || key === "s") p1Speed = 0;
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) p2Speed = 0;
}
