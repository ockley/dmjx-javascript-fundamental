
var canvas = document.getElementById('stage');
var ctx = canvas.getContext('2d');

var fps = 60;
var car;
var vx = 0;
var vy = 0;
var speed = 5;
var mouse = {
	x:0,
	y:0
};

function init() {
	car = new Car(canvas.width * 0.5, canvas.height * 0.5, ctx);
	canvas.addEventListener('mousemove', onMouseMove, false);
    requestAnimationFrame(tick);
}

function onMouseMove(event) {
	mouse.x = event.pageX - canvas.offsetLeft;
	mouse.y = event.pageY - canvas.offsetTop;
}

function tick()
{
    setTimeout(function(){
        requestAnimationFrame(tick);
        var dx = mouse.x - car.x;
        var dy = mouse.y - car.y;
        if(Math.abs(dx) > 1 && Math.abs(dy) > 1)
        {
            var angle = Math.atan2(dy, dx);
            car.rotation = angle;
            vx = Trighelper.moveX(angle, speed);
            vy = Trighelper.moveY(angle, speed);
            car.x += vx;
            car.y += vy;
            ctx.clearRect(0,0, canvas.width, canvas.height);
            car.drawCar();
        }
        
        
        }, 1000 / fps);
}
