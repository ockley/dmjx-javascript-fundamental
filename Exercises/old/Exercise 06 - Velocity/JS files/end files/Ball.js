// Make an "object" called Ball
function Ball(_x, _y, _dim, _canvas) {
	//	Transfer parameters to local variables
	this.x = _x;
	this.y = _y;
	this.dim = _dim;
	this.canvas = _canvas;
    this.circle = new createjs.Shape();

//	Create method to draw a circle at the actual position
	this.drawBall = function() {
        this.circle.graphics.beginFill("rgba(200,0,0,0.1").drawCircle(0,0,this.dim);
        this.circle.graphics.endFill();
        this.circle.x = this.x;
        this.circle.y = this.y;
        this.canvas.addChild(this.circle);
	}
}
