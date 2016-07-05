import { provideRouter, RouterConfig } from '@angular/router';

import { BasicFormComponent } from './basicForm/basicForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ModelFormComponent } from './modelForm/modelForm.component';

const appRoutes: RouterConfig = [
  { path: '', terminal: true, redirectTo: '/basicform' },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'modelform',     component: ModelFormComponent    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];