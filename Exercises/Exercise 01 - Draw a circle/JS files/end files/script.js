function init() {
    
    // Declare the canvas as stage
    var canvas = new createjs.Stage("stage");
    
    // Declare a shape to hold the circle
    var circle = new createjs.Shape();
    
    // Draw a red circle
    circle.graphics.beginFill("#CC0000").drawCircle(0,0,50);
    
    // Position the circle
    circle.x = circle.y = 100;
    
    // Add it to the stage
    canvas.addChild(circle);
    
    // Update stage
    canvas.update();
}
