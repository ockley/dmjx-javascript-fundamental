var canvas = new createjs.Stage("stage");
var vectorContainer = new createjs.Container();

var circleX = 100;
var circleY = 100;
var circleDim = 1;
var speedX;
var speedY;

function init() {
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", loop);
    vectorContainer.cache(0,0,800,600);
    canvas.addChild(vectorContainer);
    
}

function loop() {
    speedX = Math.random()*2-1;
    speedY = Math.random()*2-1;
    circleX += speedX;
	circleY += speedY;
    
    var circle = new createjs.Shape();
    circle.graphics.beginFill("rgba(200,0,0,0.1").drawCircle(0,0,circleDim);
    circle.graphics.endFill();
    circle.x = circleX;
    circle.y = circleY;
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
