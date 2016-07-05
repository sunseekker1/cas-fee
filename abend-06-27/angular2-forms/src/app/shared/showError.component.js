"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
//Example usage: <show-error control="name" [errors]="['required']"></show-error>
var ShowError = (function () {
    function ShowError(ngForm) {
        this.errors = { 'required': 'This field is required' };
        this.ngForm = ngForm;
    }
    Object.defineProperty(ShowError.prototype, "errorMessage", {
        get: function () {
            var control = this.ngForm.form.find(this.controlPath);
            if (control !== undefined && control !== null && control.touched) {
                for (var _i = 0, _a = this.errorTypes; _i < _a.length; _i++) {
                    var errorType = _a[_i];
                    if (control.hasError(errorType)) {
                        return this._errorMessage(errorType);
                    }
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    ShowError.prototype._errorMessage = function (errorType) {
        return this.errors[errorType];
    };
    ShowError = __decorate([
        core_1.Component({
            selector: 'show-error',
            inputs: ['controlPath: control', 'errorTypes: errors'],
            template: "\n    <div class=\"alert alert-danger\" *ng-if=\"errorMessage !== null\">{{errorMessage}}</div>\n  "
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [common_1.NgForm])
    ], ShowError);
    return ShowError;
}());
exports.ShowError = ShowError;
//# sourceMappingURL=showError.component.js.map