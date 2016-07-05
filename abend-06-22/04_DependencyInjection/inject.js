define(["require", "exports"], function (require, exports) {
    "use strict";
    function inject(injectionKey) {
        return function recordInjection(target, decoratedPropertyName) {
            var targetType = target.constructor;
            if (!targetType.hasOwnProperty('__inject__')) {
                targetType.__inject__ = {};
            }
            targetType.__inject__[decoratedPropertyName] = injectionKey;
        };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = inject;
});
