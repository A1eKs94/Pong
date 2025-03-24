function setup() {
    createCanvas(800, 400);
  }
  
  function draw() {
    background(0);
  
    fill(255);
    rect(20, height / 2 - 40, 10, 80);
  
    rect(width - 30, height / 2 - 40, 10, 80);
  
    ellipse(width / 2, height / 2, 15);
  
    textSize(32);
    textAlign(CENTER, CENTER);
    text("0", width / 4, 50); 
    text("0", 3 * width / 4, 50); 
  }
  