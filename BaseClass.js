class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        // push();
        //translate(this.body.position.x, this.body.position.y);
        ellipse(this.body.position.x,this.body.position.y,50,50)
        //pop();
      }
}
