//Acceleration and force/rotation
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
		private var force:Number = 0.4;
		
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
		}
		
		
		private function draw(event:TimerEvent):void {
			var dx:Number = mouseX - car.x;
			var dy:Number = mouseY - car.y;
			var angle:Number = Math.atan2(dy, dx);
			car.rotation = angle * 180 / Math.PI;
			var ax:Number = Math.cos(angle) * force;
			var ay:Number = Math.sin(angle) * force;
			vx += ax;
			vy += ay;
			car.x += vx;
			car.y += vy;
			//event.updateAfterEvent();
		}
	}
	
}
