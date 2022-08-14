const circle={
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw: function() {
        console.log('draw')
    }
};
//factory function 
function createCircle(radius,x,y){
    return {
        radius,
        location: {
            x,y
        },
        draw: function(){
            console.log('Draw')
        }
    }
}
//constructor function 
function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        console.log('draw constructor');
    } 
}
const circle1= createCircle(1,1,1);
const another = new Circle(5);
console.log(another);
circle.draw();
circle1.draw();
another.draw();


