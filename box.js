class Box {
    constructor(x, y, width, height) {
      var options = {
          'isStatic' : true,
          'restitution':0.8,
          'friction':0.5,
          'density':1.0
      }
    //  this.image  = loadImage("bgg/dustbingreen.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
     
      
      imageMode(CENTER);
     
      fill(0);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };