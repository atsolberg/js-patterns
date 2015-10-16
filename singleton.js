/** 
  * The singleton pattern 'serve as a shared resource namespace 
  * which isolates implementation code from the global namespace 
  * so as to provide a single point of access for functions.'
  * http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
  */

var AreaUtils = AreaUtils || (function() {

    // Instance stores a reference to the Singleton
    var _instance;

    var _init = function () {

        /** 
          * This will be return and therefore is our public api.
          * Anything outside this object will be private.
          */
        var module = {};

        // PRIVATE DATA

        var _pi = Math.PI;

        // A randomly generated id that should be the same
        // no matter how many times getInstance is used,
        // proving this is truly a singleton.
        var _instance_id = Math.random() * (9999999 - 1000000) + 1000000;

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

        module.getInstanceId = function () {
            return _instance_id;
        };

        return module;
    };

    return {
        /** Get the Singleton instance if one exists or create one if it doesn't */
        getInstance: function () {
            if (!_instance) _instance = _init();
            return _instance;
        }
    };
})();

var area_utils_singleton = AreaUtils.getInstance();

// Publicly accessible 
area_utils_singleton.circle(42); // 5541.77
area_utils_singleton.triangle(10, 5); // 25

// Hidden
area_utils_singleton.module; // undefined
area_utils_singleton._pi; // undefined
area_utils_singleton._round; // undefined

// Prove this is a singleton
area_utils_singleton2 = AreaUtils.getInstance();
area_utils_singleton2.getInstanceId() == area_utils_singleton.getInstanceId(); // true