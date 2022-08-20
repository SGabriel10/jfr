//constructor function 
function Circle(radius){
    this.radius = radius;
    this.defaultLocation= {x:0, y:0};
    this.computeOptimumLocation= function(factory){
    }
    this.draw = function (){
        this.computeOptimumLocation(0.1);
        console.log('draw');
    } 
}

const circle = new Circle (1);
circle.draw();