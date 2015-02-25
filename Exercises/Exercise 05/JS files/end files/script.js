
var canvas = new createjs.Stage("stage");
var vectorContainer = new createjs.Container();
var bounds;
var circles = new Array();
var speedX;
var speedY;

function init() {
    //createjs.Ticker.framerate = 60;
    //createjs.Ticker.addEventListener("tick", loop);
    vectorContainer.cache(0,0,800,600);
    canvas.addChild(vectorContainer);
    
    bounds = canvas.getBounds();
    
    for (var i = 0; i < 5; i++) {
        
        var tmp = new Ball(bounds.width * 0.5, bounds.height * 0.5, 1, vectorContainer);
		circles.push(tmp);
    }
    requestAnimationFrame(loop);
    
}

function loop() {
    for (var i = 0; i < circles.length; i++) {
        
        circles[i].moveBall(Math.random()*2-1, Math.random()*2-1);
		circles[i].drawBall();
    }
    vectorContainer.updateCache();
    canvas.update();
    requestAnimationFrame(loop);
}
