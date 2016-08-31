"use strict";
var persons_list_component_1 = require('./persons-list.component');
var persons_detail_component_1 = require('./persons-detail.component');
exports.PersonsRoutes = [
    { path: 'persons', component: persons_list_component_1.PersonsListComponent },
    { path: 'persons/:id', component: persons_detail_component_1.PersonsDetailComponent }
];
//# sourceMappingURL=persons.routes.js.map