Class Box {
    constructor(x,y,width,height){
   var options = {
       'restitution':0.8,
       'friction':1,
       'density':1
   }     
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

World.add(world,this.body);
}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();// push the object ot a new position
    translate(pos.x,pos.y);// gives you the live position of the object
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(5);// border width
    stroke("red");// border colour 
    fill("orange");// object colour 
    rect(0,0,this.width,this.height);
    pop();
}
};