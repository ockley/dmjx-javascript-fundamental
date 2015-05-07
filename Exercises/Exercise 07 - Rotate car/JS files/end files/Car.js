//	Create Car object
function Car(_x, _y, _canvas) {
//	Transfer parameters to local variables
	this.x = _x;
	this.y = _y;
	this.canvas = _canvas;
	this.rotation = 0;
	
	// Make a local image object and assign the car to it
	this.imgObj = new Image();
	this.imgObj.src = 'car.png';
	
	this.drawCar = function() {
//		Save the current state of canvas
		this.canvas.save();
//		Move and rotate the canvas in place
		this.canvas.translate(this.x, this.y);
		this.canvas.rotate(this.rotation);
//		Draw image of car on canvas
		this.canvas.drawImage(this.imgObj, this.imgObj.width/ 2 * -1, this.imgObj.height / 2 * -1);
//		Restore canvas position
		this.canvas.restore();
	}
}
