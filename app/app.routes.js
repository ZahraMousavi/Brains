"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./home/welcome.component');
var persons_list_component_1 = require('./persons/persons-list.component');
exports.routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'persons', component: persons_list_component_1.PersonsListComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map