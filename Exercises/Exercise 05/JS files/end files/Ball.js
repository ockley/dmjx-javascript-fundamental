function Ball(_x, _y, _dim, _canvas) {
	this.x = _x;
	this.y = _y;
	this.dim = _dim;
	this.canvas = _canvas;

	this.moveBall = function(_x, _y) {
		this.x += _x;
		this.y += _y;
	}

	this.drawBall = function() {
        var circle = new createjs.Shape();
        circle.graphics.beginFill("rgba(200,0,0,0.1").drawCircle(0,0,this.dim);
        circle.graphics.endFill();
        circle.x = this.x;
        circle.y = this.y;
        this.canvas.addChild(circle);
	}

}

        