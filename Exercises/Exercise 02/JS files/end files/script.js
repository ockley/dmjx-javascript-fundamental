var circleX = 100;
var circleY = 100;
var circleDim = 40;
var canvas = new createjs.Stage("stage");
var circle = new createjs.Shape();

function init() {
    createjs.Ticker.addEventListener("tick", loop);
    
    circle.graphics.beginFill("#CC0000").drawCircle(0,0,circleDim);
    circle.x = circleX;
    circle.y = circleY;
    canvas.addChild(circle);
}

function loop() {
    circle.x++;
    canvas.update();
}
