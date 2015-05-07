var canvas = new createjs.Stage("stage");
var ball = new createjs.Shape();
var bounds;             // canvas bounds
var vx = 5;             // Velocity in x-axis
var vy = 5;             // Velocity in y-axis

function init() {
//     Define bounds to canvas boundaries
    bounds = canvas.getBounds();
    console.log(canvas);
    
//    declare an instance of Ball object
    ball = new Ball(0, 0, 40, canvas);
    
//    Get new animation frame
    requestAnimationFrame(loop);
}

function loop() {
//    Add velocities to actual x and y values in ball object
    ball.x += vx;
    ball.y += vy;
    
//    Draw ball and update canvas
    ball.drawBall();
    canvas.update();
    
//    Get new animation frame
    requestAnimationFrame(loop);
}