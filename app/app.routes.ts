import { provideRouter, RouterConfig } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PersonsListComponent } from './persons/persons-list.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'persons', component: PersonsListComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
