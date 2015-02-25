package  {
	import flash.display.Sprite;
	import flash.display.Loader;
	import flash.events.Event;
	import flash.net.URLRequest;
	
	public class Car extends Sprite{
		private var loader:Loader;
		
		public function Car() {
			loader = new Loader();
			
			var url:URLRequest = new URLRequest("car.png");
			loader.contentLoaderInfo.addEventListener(Event.COMPLETE, loadComplete);
			loader.load(url);
		}
		
		public function loadComplete(event:Event):void {
			addChild(loader);
			loader.x = loader.width / -2;
			loader.y = loader.height / -2;
		}

	}
	
}
