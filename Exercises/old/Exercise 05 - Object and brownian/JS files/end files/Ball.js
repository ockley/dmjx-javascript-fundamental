// Make an "object" called Ball
function Ball(_x, _y, _dim, _canvas) {
//	Transfer parameters to local variables
	this.x = _x;
	this.y = _y;
	this.dim = _dim;
	this.canvas = _canvas;
	
//	Create method to add provided parameters to position
	this.moveBall = function(_x, _y) {
		this.x += _x;
		this.y += _y;
	}
//	Create method to draw a circle at the actual position
	this.drawBall = function() {
        var circle = new createjs.Shape();
        circle.graphics.beginFill("rgba(200,0,0,0.1").drawCircle(0,0,this.dim);
        circle.graphics.endFill();
        circle.x = this.x;
        circle.y = this.y;
        this.canvas.addChild(circle);
	}

}

        