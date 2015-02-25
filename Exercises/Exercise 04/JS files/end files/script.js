
var canvas = new createjs.Stage("stage");
var vectorContainer = new createjs.Container();
var bounds;
var circles = new Array();
var speedX;
var speedY;

function init() {
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", loop);
    vectorContainer.cache(0,0,800,600);
    canvas.addChild(vectorContainer);
    
    bounds = canvas.getBounds();
    
    for (var i = 0; i < 5; i++) {
        var tmp = new Object();
        tmp.x = bounds.width * 0.5;
        tmp.y = bounds.height * 0.5;
        tmp.dim = 1;
        circles.push(tmp);
    }
    
}

function loop() {
    for (var i = 0; i < circles.length; i++) {
        
        speedX = Math.random()*2-1;
        speedY = Math.random()*2-1;
        circles[i].x += speedX;
        circles[i].y += speedY;

        var circle = new createjs.Shape();
        circle.graphics.beginFill("rgba(200,0,0,0.1").drawCircle(0,0,circles[i].dim);
        circle.graphics.endFill();
        circle.x = circles[i].x;
        circle.y = circles[i].y;
        vectorContainer.addChild(circle);
    }
    vectorContainer.updateCache();
    canvas.update();
}


/* Vanilla JS */
/*
var ctx = document.getElementById('stage').getContext('2d');


var circles = new Array();
var speedX;
var speedY;

for (var i = 0; i < 5;i++)
{
	var tmp = new Object();
	tmp.x = document.getElementById('stage').width * 0.5;
	tmp.y = document.getElementById('stage').height * 0.5;
	tmp.dim = 1;
	circles.push(tmp);
}

setInterval(tick, 2);
function tick()
{
	for (var i = 0; i < 5;i++)
	{
    speedX = Math.random()*2-1;
    speedY = Math.random()*2-1;
	ctx.fillStyle = "rgba(200,0,0,0.3)";
	ctx.beginPath();
	ctx.arc(circles[i].x += speedX,circles[i].y += speedY,circles[i].dim,0,Math.PI*2, false);
	ctx.closePath();
	ctx.fill();
	}
}
*/