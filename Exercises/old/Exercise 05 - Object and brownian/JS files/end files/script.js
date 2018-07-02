// Declare stage and vector container
var canvas = new createjs.Stage("stage");
var vectorContainer = new createjs.Container();

// Variables to hold boundaries, array of circles and movement
var bounds;
var circles = new Array();
var speedX;
var speedY;

function init() {
//     Set cache area and add vectorContainer to stage
    vectorContainer.cache(0,0,800,600);
    canvas.addChild(vectorContainer);
    
//     Define bounds to canvas boundaries
    bounds = canvas.getBounds();
    
    for (var i = 0; i < 5; i++) {
        
//         Create 5 instances of the Ball object and provide relevant parameters
//         Parameters : _x, _y, _dim, _canvas
        var tmp = new Ball(bounds.width * 0.5, bounds.height * 0.5, 1, vectorContainer);
		// Push it to circles array
        circles.push(tmp);
    }
    
//    Call for a new animation frame (loop function) 
    requestAnimationFrame(loop);
    
}

function loop() {
    for (var i = 0; i < circles.length; i++) {
//        Call moveBall method in Ball object with random new positions
        circles[i].moveBall(Math.random()*2-1, Math.random()*2-1);
//        Call drawBall() in Ball object to draw the new circle on the canvas
		circles[i].drawBall();
    }
    
//        Update cache and stage
    vectorContainer.updateCache();
    canvas.update();
    
//    Call for a new animation frame (loop function) 
    requestAnimationFrame(loop);
}
