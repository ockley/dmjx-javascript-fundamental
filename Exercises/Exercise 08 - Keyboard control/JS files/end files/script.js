// Declare stage and vector container
var canvas = document.getElementById('stage');
var ctx = canvas.getContext('2d');

var fps = 60;			// Frames per Second
var car;
var vx = 0;				// Velocity
var vy = 0;
var ax = 0;				// Current acceleration
var ay = 0;
var accForce = 0.1;		// Acceleration force

function init() {
//    Make new instance of car object
	car = new Car(canvas.width * 0.5, canvas.height * 0.5, ctx);
	
//    Listen for key up and down and call relevant methods
	window.addEventListener('keydown', onKeyDown, false);
	window.addEventListener('keyup', onKeyUp, false);
	
//    Call for a new animation frame
    requestAnimationFrame(tick);
}

function onKeyDown(event) {
	
//		Make a switch based on key code
	switch(event.keyCode) {
		case 37:					// Left arrow
			console.log("Left");
//			Set x acceleration to -0.1
			ax = accForce * -1;
			break;
		case 38:					// Up arrow
			console.log("Up");
//			Set y acceleration to -0.1
			ay = accForce * -1;
			break;
		case 39:					// Right arrow
			console.log("Right");
//			Set x acceleration to 0.1
			ax = accForce;
			break;
		case 40:					// Down arrow
			console.log("Down");
//			Set y acceleration to 0.1
			ay = accForce;
			break;
		default:
			console.log("default");
			break;

	}
}

function onKeyUp(event) {
//	If key is released, set acceleration to 0
	ax = 0;
	ay = 0;
}

function tick()
{
//	Set timeout to keep frame rate
    setTimeout(function(){
		
//		Call for a new aniamtion frame
        requestAnimationFrame(tick);
		
//		Add acceleration to velocity
        vx += ax;
        vy += ay;
		
//		Add velocity to car position
        car.x += vx;
        car.y += vy;
		
//            Clear the canvas and draw a car
        ctx.clearRect(0,0, canvas.width, canvas.height);
        car.drawCar();
    }, 1000 / fps);
}
