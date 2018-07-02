//Acceleration and keyboard
package  {
	
	import flash.display.MovieClip;
	import flash.utils.Timer;
	import flash.events.TimerEvent;
	import flash.events.Event;
	import flash.events.KeyboardEvent;
	import flash.ui.Keyboard;
	
	
	public class Main extends MovieClip {
		private var car:Car;
		private var timer:Timer;
		
		private var vx:Number = 0;
		private var vy:Number = 0;
		private var ax:Number = 0;
		private var ay:Number = 0;
		
		public function Main() {
			// constructor code
			init();
		}
		
		private function init():void {
			car = new Car();
			addChild(car);
			car.x = stage.stageWidth / 2;
			car.y = stage.stageHeight / 2;
			timer = new Timer(20);
			timer.addEventListener(TimerEvent.TIMER, draw);
			timer.start();
			stage.addEventListener(KeyboardEvent.KEY_DOWN, keyDown);
			stage.addEventListener(KeyboardEvent.KEY_UP, keyUp);
		}
		
		private function keyDown(event:KeyboardEvent):void
		{
			switch(event.keyCode) {
				case Keyboard.LEFT:
				ax = -0.2;
				break;
				
				case Keyboard.RIGHT:
				ax = 0.2;
				break;
				
				case Keyboard.UP:
				ay = -0.2;
				break;
				
				case Keyboard.DOWN:
				ay = 0.2;
				break;
				
				default:
				break;
			}
			
		}
		private function keyUp(event:KeyboardEvent):void
		{
			ax = 0;
			ay = 0;
		}
		
		private function draw(event:TimerEvent):void {
			vx += ax;
			vy += ay;
			car.x += vx;
			car.y += vy;
			testBounce();
			event.updateAfterEvent();
		}
		private function testBounce():void {
			if (car.x < 0 || car.x > this.stage.stageWidth)
				vx *= -1;
			if (car.y < 0 || car.y > this.stage.stageHeight)
				vy *= -1;
		}
	}
	
}
