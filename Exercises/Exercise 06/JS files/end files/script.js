var canvas = new createjs.Stage("stage");
var ball = new createjs.Shape();
var bounds;
var vx = 5;
var vy = 5;

function init() {
    //createjs.Ticker.framerate = 60;
    //createjs.Ticker.addEventListener("tick", loop);
    bounds = canvas.getBounds();
    console.log(canvas);
    ball = new Ball(0, 0, 40, canvas);
    requestAnimationFrame(loop);
}

function loop() {
    ball.x += vx;
    ball.y += vy;
    ball.drawBall();
    canvas.update();
    requestAnimationFrame(loop);
}