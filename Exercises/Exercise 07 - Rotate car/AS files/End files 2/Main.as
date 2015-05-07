//Velocity and Angle
package  {
	
	import flash.display.MovieClip;
	import flash.utils.Timer;
	import flash.events.TimerEvent;
	
	
	public class Main extends MovieClip {
		private var car:Car;
		private var speed:Number = 5;
		private var timer:Timer;
		
		public function Main() {
			// constructor code
			init();
		}
		
		private function init():void {
			car = new Car();
			addChild(car);
			car.x = 100;
			car.y = 100;
			timer = new Timer(15);
			timer.addEventListener(TimerEvent.TIMER, draw);
			timer.start();
		}
		
		private function draw(event:TimerEvent):void {
			var dx:Number = mouseX - car.x;
			var dy:Number = mouseY - car.y;
			if(Math.abs(dx) > 1 && Math.abs(dy) > 1)
			{
				var angle:Number = Math.atan2(dy, dx);
				car.rotation = TrigHelper.rad2deg(angle);
				var vx:Number = TrigHelper.moveX(angle, speed);
				var vy:Number = TrigHelper.moveY(angle, speed);
				car.x += vx;
				car.y += vy;
				event.updateAfterEvent();
			}
		}
	}
	
}
