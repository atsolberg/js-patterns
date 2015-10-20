// Just a unique id counter.
var VEHICLE_ID = 0;

/** The prototype object used for all vehicles. */
var Vehicle = {
    getModel: function() {
        console.log('The model of this vehicle is ' + this.model);
    }
};

/** 
  * A car object that inherits the vehicle prototype and the id and model 
  * properties defined in the property definition object literal.
  * Protype chain for 'car':
  * car ---> Vehicle ---> Object.prototype ---> null
  */
var car = Object.create(Vehicle, {

    'id': {
        value: ++VEHICLE_ID,
        // writable:false, configurable:false by default
        enumerable: true
    },

    'model': {
        value: 'Ford',
        enumerable: true
    }

});

console.log(car);               // Object {id: 1, model: "Ford"}
console.log(car.id);            // 1
console.log(car.getModel());    // The model of this vehicle is Ford

/** 
  * A car object that inherits the vehicle prototype and the id and model 
  * properties defined in the property definition object literal.
  * Protype chain for 'car':
  * suv ---> car ---> Vehicle ---> Object.prototype ---> null
  */
var suv = Object.create(car, {

    'wheel_base': {
        value: '120 inches',
        // writable:false, configurable:false by default
        enumerable: true
    },

    'getWheelBase': {
        value: function () { return this.wheel_base; },
        enumerable: true
    }

});

console.log(suv);                   // Object {wheel_base: "120 inches"}
console.log(suv.id);                // 1
console.log(suv.getModel());        // The model of this vehicle is Ford
console.log(suv.getWheelBase());    // 120 inches