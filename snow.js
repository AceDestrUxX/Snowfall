class Snow{
    constructor(x,y,radius){
    var options = {
        friction: 0.5,
        density: 1
    }
    this.body = Bodies.circle(x, y, radius, options)
    this.radius = radius;
    this.image = loadImage("snow4.webp");
    World.add(world,this.body)
}
    display(){
        image(this.image,0,0,this.radius)
    }
}