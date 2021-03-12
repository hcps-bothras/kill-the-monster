class Block{
    constructor(x,y,width,height){
      var options = {
        restitution: .5,
        friction: 0,
        density: 1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle
        push()
        rotate(angle);
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop()
    }
} 