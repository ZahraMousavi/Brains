"use strict";
var persons_list_component_1 = require('./persons-list.component');
var person_detail_component_1 = require('./person-detail.component');
exports.PersonsRoutes = [
    { path: 'persons', component: persons_list_component_1.PersonsListComponent },
    { path: 'person/:id', component: person_detail_component_1.PersonDetailComponent }
];
//# sourceMappingURL=person.routes.js.map