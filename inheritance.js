/** Scene */
function Scene(context, width, height, images) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.images = images;
    this.actors = [];
}

Scene.prototype.register = function (actor) {
    this.actors.push(actor);
};

Scene.prototype.unregister = function (actor) {
    var idx = this.actors.indexOf(actor);
    if (idx >= 0) {
        this.actors = this.actors.splice(idx, 1);
    }
};

Scene.prototype.draw = function () {
    this.context.clearRect(0, 0, this.width, this.height);
    this.actors.forEach(function(actor) {
        actor.draw();
    });
};

/** Actor */
function Actor(scene, x, y) {
    if (!this instanceof Actor) {
        return new Actor(scene, x, y);
    }
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.actorId = ++Actor.nextId;
    scene.register(this);
}
Actor.nextId = 0;

Actor.prototype.toString = function () {
    return '[Actor x: ' + this.x + ' y: ' + this.y + ']';
};

Actor.prototype.moveTo = function (x, y) {
    this.x = x;
    this.y = y;
    this.scene.draw();
};

Actor.prototype.exit = function () {
    this.scene.unregister(this);
    this.scene.draw();
    this.scene.draw();
};

Actor.prototype.draw = function() {
    var image = this.scene.images[this.type];
    this.scene.context.drawImage(image, this.x, this.y);
};

Actor.prototype.width = function () {
    return this.scene.images[this.type].width;
};

Actor.prototype.height = function () {
    return this.scene.images[this.type].height;
};

/** Space Ship */
function SpaceShip(scene, x, y) {
    Actor.call(this, scene, x, y);
    this.points = 0;
    this.spaceShipId = ++SpaceShip.nextId;
}
SpaceShip.nextId = 0;

SpaceShip.prototype = Object.create(Actor.prototype);

SpaceShip.prototype.type = 'SpaceShip';

SpaceShip.prototype.scorePoint = function () {
    this.points++;
};

SpaceShip.prototype.left = function () {
    this.moveTo(Math.max(this.x - 10, 0), this.y);
};

/** Alien */
function Alien(scene, x, y, direction, speed, strength) {
    Actor.call(this, scene, x, y);
    this.direction = direction;
    this.speed = speed;
    this.strength = strength;
    this.damage = 0;
    this.alienId = ++Alien.nextId;
}
Alien.nextId = 0;

Alien.prototype = Object.create(Actor.prototype);