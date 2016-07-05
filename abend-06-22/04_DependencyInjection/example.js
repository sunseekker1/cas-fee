var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "./injector", "./inject"], function (require, exports, injector_1, inject_1) {
    "use strict";
    var Engine = (function () {
        function Engine(power) {
            this.power = power;
        }
        return Engine;
    }());
    var Tire = (function () {
        function Tire(amount) {
            this.amount = amount;
        }
        return Tire;
    }());
    var Car = (function () {
        function Car() {
        }
        __decorate([
            inject_1.default('Engine')
        ], Car.prototype, "engine", void 0);
        __decorate([
            inject_1.default('Tire')
        ], Car.prototype, "tire", void 0);
        return Car;
    }());
    var container = new injector_1.default();
    container.mapValue('Engine', new Engine('400 PS'));
    container.mapValue('Tire', new Tire(4));
    var car = container.instantiate(Car);
    console.log("My car has " + car.engine.power + " and " + car.tire.amount + " tires");
});
