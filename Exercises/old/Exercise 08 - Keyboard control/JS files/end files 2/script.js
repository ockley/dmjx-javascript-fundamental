
var canvas = document.getElementById('stage');
var ctx = canvas.getContext('2d');
var fps = 60;

var car;
var vx = 0;
var vy = 0;
var ax = 0;
var ay = 0;
var accForce = 0.1;

function init() {
	car = new Car(canvas.width * 0.5, canvas.height * 0.5, ctx);
	window.addEventListener('keydown', onKeyDown, false);
	window.addEventListener('keyup', onKeyUp, false);
    requestAnimationFrame(tick);
}

function onKeyDown(event) {
	var code = event.keyCode;

	switch(code) {
		case 37:
			console.log("Left");
			ax = accForce * -1;
			break;
		case 38:
			console.log("Up");
			ay = accForce * -1;
			break;
		case 39:
			console.log("Right");
			ax = accForce;
			break;
		case 40:
			console.log("Down");
			ay = accForce;
			break;
		default:
			console.log("default");
			break;

	}
}

function onKeyUp(event) {
	ax = 0;
	ay = 0;
}

function tick()
{
    setTimeout(function(){
        requestAnimationFrame(tick);
	   
        testBounce();
        vx += ax;
        vy += ay;
        car.x += vx;
        car.y += vy;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        car.drawCar();
    }, 1000 / fps);
}

function testBounce() {
    console.log("test");
    if (car.x < 0 || car.x > canvas.width)
        vx *= -1;
    if (car.y < 0 || car.y > canvas.height)
        vy *= -1;
}