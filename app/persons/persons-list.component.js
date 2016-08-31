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
var async_1 = require('@angular/core/src/facade/async');
var person_detail_component_1 = require('./person-detail.component');
var persons_service_1 = require('./persons.service');
var spinner_component_1 = require('./spinner.component');
var PersonsListComponent = (function () {
    function PersonsListComponent(_personsService) {
        this._personsService = _personsService;
        // Initialize variables
        this.showSpinner = true;
        this.pageTitle = 'Brains List';
        this.showDetail = [false];
    }
    // Subscribe for persons list on initiation of the component
    PersonsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._personsService.getPersons()
            .subscribe(function (persons) { return _this.persons = persons; }, function (error) { return _this.errorMessage = error; });
        // Add 3sec. deliberate delay before data is loading
        async_1.TimerWrapper.setTimeout(function () {
            _this.showSpinner = false;
        }, 3000);
    };
    // Show/hide detail table 
    PersonsListComponent.prototype.toggleShow = function (i) {
        if (!this.showDetail[i])
            this.showDetail.fill(false);
        this.showDetail[i] = !this.showDetail[i];
    };
    PersonsListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/persons/persons-list.component.html',
            styleUrls: ['app/persons/persons-list.component.css'],
            directives: [spinner_component_1.SpinnerComponent,
                person_detail_component_1.PersonDetailComponent]
        }), 
        __metadata('design:paramtypes', [persons_service_1.PersonsService])
    ], PersonsListComponent);
    return PersonsListComponent;
}());
exports.PersonsListComponent = PersonsListComponent;
//# sourceMappingURL=persons-list.component.js.map