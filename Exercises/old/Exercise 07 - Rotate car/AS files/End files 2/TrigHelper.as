package  {
	import flash.geom.Point;
	
	public class TrigHelper {

		// Convert between degrees and Radians
		public static function rad2deg(rad:Number): Number {
			return rad * 180 / Math.PI;
		}
		
		public static function deg2rad(deg:Number): Number {
			return deg * Math.PI / 180;
		}
		
		// Move in x and y direction
		public static function moveX(angle:Number, speed:Number) : Number {
			return Math.cos(angle) * speed;
		}
		
		public static function moveY(angle:Number, speed:Number) : Number {
			return Math.sin(angle) * speed;
		}
		
		// Get distance
		public static function getDistance(p1:Point, p2:Point) : Number {
			var width:Number = p2.x - p1.x;
			var height:Number = p2.y - p1.y;
			return Math.sqrt((width * width) + (height * height));
		}
	}
	
}
