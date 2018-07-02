// Declare position and dimension
var circleX = 100;
var circleY = 100;
var circleDim = 40;

// Declare canvas and shape
var canvas = new createjs.Stage("stage");
var circle = new createjs.Shape();

function init() {
    // Add a ticker to run a loop
    createjs.Ticker.addEventListener("tick", loop);
    
    //Draw a circle in the circle shape
    circle.graphics.beginFill("#CC0000").drawCircle(0,0,circleDim);
    
    //Position and add it to the stage
    circle.x = circleX;
    circle.y = circleY;
    canvas.addChild(circle);
}

function loop() {
    // Update circles x-position
    circle.x++;
    
    //Update canvas
    canvas.update();
}
