"use strict";
var router_1 = require('@angular/router');
var basicForm_component_1 = require('./basicForm/basicForm.component');
var templateForm_component_1 = require('./templateForm/templateForm.component');
var modelForm_component_1 = require('./modelForm/modelForm.component');
var appRoutes = [
    { path: '', terminal: true, redirectTo: '/basicform' },
    { path: 'basicform', component: basicForm_component_1.BasicFormComponent },
    { path: 'templateform', component: templateForm_component_1.TemplateFormComponent },
    { path: 'modelform', component: modelForm_component_1.ModelFormComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(appRoutes)
];
//# sourceMappingURL=app.routes.js.map