// Declare stage and vector container
var canvas = new createjs.Stage("stage");
var vectorContainer = new createjs.Container();

// Variables to hold boundaries, array of circles and movement
var bounds,
    circles,
    numCircles,
    speedX,
    speedY;

function init() {
    // Set up ticker and loop
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", loop);
    
    // Set cache area and add vectorContainer to stage
    vectorContainer.cache(0,0,800,600);
    canvas.addChild(vectorContainer);
    
    // Define bounds to canvas boundaries
    bounds = canvas.getBounds();
    
    
    // Create Array to hold number of circles.
    circles = new Array();
    numCircles = 5;
    
    for (var i = 0; i < numCircles; i++) {
        // Make an object that holds individual position and dimension
        var tmp = new Object();
        tmp.x = bounds.width * 0.5;
        tmp.y = bounds.height * 0.5;
        tmp.dim = 1;
        
        // Push it to the array
        circles.push(tmp);
    }
    
}

function loop() {
    for (var i = 0; i < circles.length; i++) {
        
        //Update position of every instance in array
        speedX = Math.random()*4-2;
        speedY = Math.random()*4-2;
        circles[i].x += speedX;
        circles[i].y += speedY;
        
        // Draw a circle and take position and dimension from object in array
        var circle = new createjs.Shape();
        circle.graphics.beginFill("rgba(200,0,0,0.1").drawCircle(0,0,circles[i].dim);
        circle.graphics.endFill();
        circle.x = circles[i].x;
        circle.y = circles[i].y;
        
        // Add it to the container
        vectorContainer.addChild(circle);
    }
    
    //Update cache and stage
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