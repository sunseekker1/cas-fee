define(["require", "exports"], function (require, exports) {
    "use strict";
    var Injector = (function () {
        function Injector() {
            this.valuesByInjectionKey = {};
        }
        Injector.prototype.mapValue = function (injectionKey, value) {
            this.valuesByInjectionKey[injectionKey] = value;
        };
        Injector.prototype.instantiate = function (Class) {
            var instance = new Class();
            for (var _i = 0, _a = this.getInjectionPoints(Class); _i < _a.length; _i++) {
                var injectionPoint = _a[_i];
                var injectionValue = this.valuesByInjectionKey[injectionPoint.injectionKey];
                if (injectionValue) {
                    instance[injectionPoint.propertyName] = injectionValue;
                }
            }
            return instance;
        };
        Injector.prototype.getInjectionPoints = function (Class) {
            var result = [];
            if (Class.hasOwnProperty('__inject__')) {
                result = Object.keys(Class.__inject__)
                    .map(function (propertyName) {
                    return {
                        propertyName: propertyName,
                        injectionKey: Class.__inject__[propertyName]
                    };
                });
            }
            return result;
        };
        return Injector;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Injector;
});
