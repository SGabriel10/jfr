//constructor function 
function Circle(radius){
    this.radius = radius;
    let defaultLocation= {x:0, y:0};
    
    let computeOptimumLocation= function(factory){
    }
    this.draw = function (){
        computeOptimumLocation(0.1);
        console.log('draw');
    } 
}

const circle = new Circle (1);
circle.draw();
