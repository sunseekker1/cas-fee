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
var forms_1 = require('@angular/forms');
var validation_service_1 = require('../shared/validation.service');
var hero_1 = require('../shared/hero');
var ModelFormComponent = (function () {
    function ModelFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ModelFormComponent.prototype.ngOnInit = function () {
        this.model = new hero_1.Hero(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', 'iq@superhero.com');
        this.powers = ['Really Smart', 'Super Flexible',
            'Hypersound', 'Weather Changer'];
        this.heroForm = this.formBuilder.group({
            name: [this.model.name, forms_1.Validators.required],
            alterEgo: [this.model.alterEgo, forms_1.Validators.required],
            email: [this.model.email, [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            power: [this.model.power, forms_1.Validators.required]
        });
    };
    ModelFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    ModelFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'model-driven-form',
            templateUrl: 'modelForm.component.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ModelFormComponent);
    return ModelFormComponent;
}());
exports.ModelFormComponent = ModelFormComponent;
//# sourceMappingURL=modelForm.component.js.map