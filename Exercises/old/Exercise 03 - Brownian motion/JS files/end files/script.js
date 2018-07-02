// Declare canvas as stage
var canvas = new createjs.Stage("stage");

// Create container to hold circles
var vectorContainer = new createjs.Container();

// Declare circle variables and speed
var circleX = 100;
var circleY = 100;
var circleDim = 1;
var speedX;
var speedY;

function init() {
    //Define ticker and set loop
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", loop);
    
    //Define cache area and add container to stage
    vectorContainer.cache(0,0,800,600);
    canvas.addChild(vectorContainer);
    
}

function loop() {
    // Set speed to a random number between -2 and 2
    speedX = Math.random()*4-2;
    speedY = Math.random()*4-2;
    
    // Add the result to the circles current position
    circleX += speedX;
	circleY += speedY;
    
    // Create a red circle
    var circle = new createjs.Shape();
    circle.graphics.beginFill("rgba(200,0,0,0.1").drawCircle(0,0,circleDim);
    circle.graphics.endFill();
    
    // Add random position to circle
    circle.x = circleX;
    circle.y = circleY;
    
    // Add new circle to stage and update cached image and stage
    vectorContainer.addChild(circle);
    vectorContainer.updateCache();
    canvas.update();
}


/* Vanilla JS */
/*
var ctx = document.getElementById('stage').getContext('2d');

var circleX = 100;
var circleY = 100;
var circleDim = 1;
var speedX;
var speedY;

setInterval(tick, 20);

function tick()
{
    speedX = Math.random()*2-1;
    speedY = Math.random()*2-1;
	ctx.fillStyle = "rgba(200,0,0,0.3)";
	ctx.beginPath();
	ctx.arc(circleX += speedX,circleY += speedY,circleDim,0,Math.PI*2, false);
	ctx.closePath();
	ctx.fill();
}
*/
