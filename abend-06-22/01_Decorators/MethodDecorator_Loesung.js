var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MethodDecoratorClass = (function () {
    function MethodDecoratorClass() {
    }
    MethodDecoratorClass.prototype.foo = function (n) {
        return n * 2;
    };
    __decorate([
        log
    ], MethodDecoratorClass.prototype, "foo", null);
    return MethodDecoratorClass;
}());
function log(target, key, descriptor) {
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var originalFunction = descriptor.value;
            var a = args.map(function (a) { return JSON.stringify(a); }).join();
            var result = originalFunction.apply(this, args);
            var r = JSON.stringify(result);
            console.log("Call: " + key + "(" + a + ") => " + r);
            return result;
        }
    };
}
var decorated = new MethodDecoratorClass();
decorated.foo(12);
