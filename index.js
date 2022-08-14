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

const circle1= createCircle(1,1,1);
circle.draw();
circle1.draw();


