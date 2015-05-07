function Car(_x, _y, _canvas) {
	this.x = _x;
	this.y = _y;
	this.canvas = _canvas;
	this.rotation = 0;
	this.imgObj = new Image();
	this.imgObj.src = 'car.png';

	this.drawCar = function() {
		this.canvas.save();
		this.canvas.translate(this.x, this.y);
		this.canvas.rotate(this.rotation);
		this.canvas.drawImage(this.imgObj, this.imgObj.width/ 2 * -1, this.imgObj.height / 2 * -1);
		this.canvas.restore();
	}

}
