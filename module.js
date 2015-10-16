/** 
  * The module pattern uses a closure for private data encapsulation
  * and a returned object to expose a public api.
  */

var AreaUtils = AreaUtils || (function() {

    /** 
      * This will be return and therefore is our public api.
      * Anything outside this object will be private.
      */
    var module = {};

    // PRIVATE DATA
    var _pi = Math.PI;

    var _round = function (value) {
        return +(Math.round(value + 'e+2')  + 'e-2');
    };

    // PUBLIC API

    /** Get the area of a circle. */
    module.circle = function (radius) {
        var area = _pi * Math.pow(radius, 2);
        return _round(area);
    };

    /** Get the area of a rectangle. */
    module.rectangle = function (width, height) {
        var area = width * height;
        return _round(area);
    };


    /** Get the area of a triangle. */
    module.triangle = function (base, height) {
        var area = (height * base) / 2;
        return _round(area);
    };

    return module;
})();

// Publicly accessible 
AreaUtils.circle(42); // 5541.77
AreaUtils.triangle(10, 5); // 25

// Hidden
AreaUtils._pi; // undefined
AreaUtils._function; // undefined