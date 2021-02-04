class Rope{
    constructor(body1, pointB){
        var options = {
            bodyA: body1,
            bodyB: pointB,
            stiffness:0.04,
            length:300    
        }
        this.Rope = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.Rope);
    }

    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
    
}