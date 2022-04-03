class PlayerArcher {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);

    Matter.Body.setAngle(this.body, -PI / 2); // -90 degree
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    if (keyIsDown(DOWN_ARROW) && angle < -1) {
      angle += 0.01;
      Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(UP_ARROW) && angle > -2.3) {
      angle -= 0.01;
      Matter.Body.setAngle(this.body, angle);
    }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  life() {
    push();
    textSize(20)
    fill("white");
    text("Player",280,40);

    fill(this.life1);
    rect(180,50,30,70);
    fill(this.life2);
    rect(250,50,30,70);
    fill(this.life3);;
    rect(320,50,30,70);
    pop();
  }
}
