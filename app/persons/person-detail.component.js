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
var persons_service_1 = require('./persons.service');
var spinner_component_1 = require('./spinner.component');
var PersonDetailComponent = (function () {
    function PersonDetailComponent(_personsService) {
        this._personsService = _personsService;
        this.showSpinner = true;
    }
    // Subscribe for person's detail list on initiation of the component
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._personsService.getPerson(this.id)
            .subscribe(function (personDetail) { return _this.children = personDetail; }, function (error) { return _this.errorMessage = error; });
        // Add 3sec. deliberate delay before first row of data is loading
        if (this.id === 1) {
            async_1.TimerWrapper.setTimeout(function () {
                _this.showSpinner = false;
            }, 3000);
        }
        else {
            this.showSpinner = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PersonDetailComponent.prototype, "id", void 0);
    PersonDetailComponent = __decorate([
        core_1.Component({
            selector: 'personDetail',
            templateUrl: 'app/persons/person-detail.component.html',
            styleUrls: ['app/persons/person-detail.component.css'],
            directives: [spinner_component_1.SpinnerComponent]
        }), 
        __metadata('design:paramtypes', [persons_service_1.PersonsService])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map