// Declare stage and vector container
var canvas = document.getElementById('stage');
var ctx = canvas.getContext('2d');

var fps = 60;
var car;
var vx = 0;
var vy = 0;
var speed = 5;

//  Make object to hold mouse coordinates
var mouse = {
	x:0,
	y:0
};

function init() {
//    Make new instance of car object
	car = new Car(canvas.width * 0.5, canvas.height * 0.5, ctx);
    
//    Listen for the mouse movement and call onMouseMove method
	canvas.addEventListener('mousemove', onMouseMove, false);
    
//    Call for a new animation frame
    requestAnimationFrame(tick);
}

function onMouseMove(event) {
//    transfer current mouse position to mouse object
	mouse.x = event.pageX - canvas.offsetLeft;
	mouse.y = event.pageY - canvas.offsetTop;
}

function tick()
{
//     make a time out to keep the frame rate
    setTimeout(function(){
//        Call for another frame
        requestAnimationFrame(tick);
        
//        Calculate distance between mouse and car
        var dx = mouse.x - car.x;
        var dy = mouse.y - car.y;
        
//        Is mouse more than 1 pixel away?
        if(Math.abs(dx) > 1 && Math.abs(dy) > 1)
        {
//            Find angle based on distance and rotate car
            var angle = Math.atan2(dy, dx);
            car.rotation = angle;
//            Find velocity in x and y axis based on angle and speed
            vx = Math.cos(angle) * speed;
            vy = Math.sin(angle) * speed;
            
//            Add velocity to current position
            car.x += vx;
            car.y += vy;
            
//            Clear the canvas and draw a car
            ctx.clearRect(0,0, canvas.width, canvas.height);
            car.drawCar();
        }
        
        
        }, 1000 / fps);
}
