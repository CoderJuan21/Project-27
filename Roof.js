class Ground{
    constructor(x,y){
        var options = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 200, 40, options);
        this.width = 200
        this.height = 40
        World.add(world,this.body)
    }

    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x , pos.y , this.width, this.height);
    }
}