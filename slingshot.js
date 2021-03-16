class Slingshot
{

    constructor(bodyA,bodyB)
    {
        var options = 
        {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 100,
            stiffness : 0.6
        }
            
        this.slingshot = Constraint.create(options)
        World.add(world,this.slingshot) 
 

    }

    display()
    {
        push();
        strokeWeight(5);
        stroke("blue")
        line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.slingshot.bodyB.position.x,this.slingshot.bodyB.position.y)
        pop();
   

    }



}