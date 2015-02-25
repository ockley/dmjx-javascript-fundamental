function init() {
    var canvas = new createjs.Stage("stage");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("#CC0000").drawCircle(0,0,50);
    circle.x = circle.y = 100;
    canvas.addChild(circle);
    canvas.update();
}
