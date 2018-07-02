// Declare stage and vector container
var canvas = document.getElementById('stage');
var ctx = canvas.getContext('2d');

var fps = 60;			// Frames per Second
var car;
var vx = 0;				// Velocity
var vy = 0;
var ax = 0;				// Current acceleration
var ay = 0;

var force = 1;          // Speed
var friction = 0.95;    // Friction

var mouse = {           // Mouse object
	x: 0,
	y: 0
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
            
//            Calculate x and y acceleration based on angle
            ax = Trighelper.moveX(angle, force);
            ay = Trighelper.moveY(angle, force);
            
//            Add acceleration to velocity
            vx += ax;
            vy += ay;
            
//            Add friction to total speed
            vx *= friction;
            vy *= friction;
            
//            Add velocity to current position
            car.x += vx;
            car.y += vy;
            
//            Clear the canvas and draw a car
            ctx.clearRect(0,0, canvas.width, canvas.height);
            car.drawCar();
        }
        
        
        }, 1000 / fps)
};