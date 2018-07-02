(function() {
    function Trighelper() {

    };
    
    // Convert between degrees and Radians
    Trighelper.rad2deg = function(rad) {
        return rad * 180 / Math.PI;
    };

    Trighelper.deg2rad = function(deg) {
        return deg * Math.PI / 180;
    };
    
    // Move in x and y direction
    Trighelper.moveX = function(angle, speed) {
        return Math.cos(angle) * speed;
    };

    Trighelper.moveY = function(angle, speed) {
        return Math.sin(angle) * speed;
    };

    Trighelper.getDistance = function(x1, x2, y1, y2) {
        var width = x2 - x1;
        var height = y2 - y1;
        return Math.sqrt((width * width) + (height * height));
    };
    
    //Assign to global variable
    window.Trighelper = Trighelper;
})();