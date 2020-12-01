class rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        //this.body2 = body2
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        if(this.rope.body1){
        var pointA = this.rope.body1.position; 
        var pointB = this.body2; 
        strokeWeight(4); 
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}