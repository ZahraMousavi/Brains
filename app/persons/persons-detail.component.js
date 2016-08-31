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
var router_1 = require('@angular/router');
var async_1 = require('@angular/core/src/facade/async');
var persons_service_1 = require('./persons.service');
var star_component_1 = require('../shared/star.component');
var spinner_component_1 = require('./spinner.component');
var PersonsDetailComponent = (function () {
    function PersonsDetailComponent(route, router, _personsService) {
        this.route = route;
        this.router = router;
        this._personsService = _personsService;
        this.pageTitle = 'Persons Detail';
        this.showSpinner = true;
    }
    PersonsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getPersons(id);
            if (id === 1) {
                async_1.TimerWrapper.setTimeout(function () {
                    _this.showSpinner = false;
                }, 3000);
            }
            else {
                _this.showSpinner = false;
            }
        });
    };
    PersonsDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PersonsDetailComponent.prototype.getPersons = function (id) {
        var _this = this;
        this._personsService.getPersons(id).subscribe(function (persons) { return _this.persons = persons; }, function (error) { return _this.errorMessage = error; });
    };
    PersonsDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/persons']);
    };
    PersonsDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Persons Detail: ' + message;
    };
    PersonsDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/personss/persons-detail.component.html',
            directives: [spinner_component_1.SpinnerComponent,
                star_component_1.StarComponent]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, persons_service_1.PersonsService])
    ], PersonsDetailComponent);
    return PersonsDetailComponent;
}());
exports.PersonsDetailComponent = PersonsDetailComponent;
//# sourceMappingURL=persons-detail.component.js.map