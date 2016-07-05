var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ClassToDecorate = (function () {
    function ClassToDecorate(message) {
        this.greeting = message;
    }
    ClassToDecorate.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    ClassToDecorate = __decorate([
        hiDecorator
    ], ClassToDecorate);
    return ClassToDecorate;
}());
function hiDecorator(constructorToDecorate) {
    var original = constructorToDecorate;
    function construct(constructor, args) {
        var decoratedClass = function () {
            return constructor.apply(this, args);
        };
        decoratedClass.prototype = constructorToDecorate.prototype;
        return new decoratedClass();
    }
    var replacedConstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return construct(original, ['hi']);
    };
    replacedConstructor.prototype = original.prototype;
    return replacedConstructor;
}
var decorated = new ClassToDecorate('I will be replaced');
console.log(decorated.greet());
