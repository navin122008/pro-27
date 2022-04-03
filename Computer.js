class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1="green"
    this.life2 ="green"
    this.life3="green"

    World.add(world, this.body);
  }

 
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
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
    text("Computer",1400,40);

    fill(this.life1);
    rect(1400,50,30,70);
    fill(this.life2);
    rect(1350,50,30,70);
    fill(this.life3);;
    rect(1450,50,30,70);
    pop();
  }
}
