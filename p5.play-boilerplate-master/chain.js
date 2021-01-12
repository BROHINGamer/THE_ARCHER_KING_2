class Constaraint{
    constructor(){
    var options = {
        bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
    }
    this.pointB = pointB
    this.chain = Constraint.create(options);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

display(){
    
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
       


}
}