package {

	import flash.display.MovieClip;
	import flash.utils.Timer;
	import flash.events.TimerEvent;


	public class Main extends MovieClip {
		private var ball: Ball;
		private var vx: Number = 5;
		private var vy: Number = 5;
		private var timer: Timer;

		public function Main() {
			// constructor code
			init();
		}

		private function init(): void {
			ball = new Ball();
			addChild(ball);
			ball.x = 100;
			ball.y = 100;
			timer = new Timer(20);
			timer.addEventListener(TimerEvent.TIMER, draw);
			timer.start();
		}

		private function draw(event: TimerEvent): void {
			ball.x += vx;
			ball.y += vy;
			//event.updateAfterEvent();
		}
	}

}