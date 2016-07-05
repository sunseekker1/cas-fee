var MethodDecoratorClass = (function () {
    function MethodDecoratorClass() {
    }
    MethodDecoratorClass.prototype.foo = function (n) {
        return n * 2;
    };
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
            console.log("Call: " + key + "(" + a + ") => " + r);
            return result;
        }
    };
}
var decorated = new MethodDecoratorClass();
decorated.foo(12);
