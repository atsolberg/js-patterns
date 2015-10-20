var VEHICLE_ID = 0;

/** The prototype object used for all vehicles. */
var Vehicle = {
    getModel: function() {
        console.log('The model of this vehicle is ' + this.model);
    }
};

/** 
  * The a car object that inherits the vehicle prototype
  * and the id and model properties defined in the property definition object literal.
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