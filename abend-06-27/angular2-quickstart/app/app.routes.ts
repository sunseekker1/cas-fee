import { provideRouter, RouterConfig } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';

export const routes: RouterConfig = [
  { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
