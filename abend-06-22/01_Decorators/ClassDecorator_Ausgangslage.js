var ClassToDecorate = (function () {
    function ClassToDecorate(message) {
        this.greeting = message;
    }
    ClassToDecorate.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
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
    };
    replacedConstructor.prototype = original.prototype;
}
var decorated = new ClassToDecorate('I will be replaced');
console.log(decorated.greet());
