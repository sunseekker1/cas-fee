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
var core_1 = require('@angular/core');
//import { ShowError } from './showError.component';
var hero_1 = require('../shared/hero');
var TemplateFormComponent = (function () {
    function TemplateFormComponent() {
        this.submitted = false;
    }
    TemplateFormComponent.prototype.ngOnInit = function () {
        this.model = new hero_1.Hero(18, 'Tornado', 'Turbulent Breeze', 'Willie Wind');
        this.powers = ['Really Smart', 'Turbulent Breeze',
            'Super Hot', 'Weather Changer'];
    };
    TemplateFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    TemplateFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'template-driven-form',
            templateUrl: 'templateForm.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TemplateFormComponent);
    return TemplateFormComponent;
}());
exports.TemplateFormComponent = TemplateFormComponent;
//# sourceMappingURL=templateForm.component.js.map