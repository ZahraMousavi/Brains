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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
var PersonsService = (function () {
    function PersonsService(_http) {
        this._http = _http;
        this._personsUrl = 'http://assignment.siteimprove.com/api/persons';
        this._childrenBaseUrl = 'http://assignment.siteimprove.com/api/persondetails/';
    }
    // Get persons list
    PersonsService.prototype.getPersons = function () {
        return this._http.get(this._personsUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Get person's detail list
    PersonsService.prototype.getPerson = function (id) {
        return this._http.get(this._childrenBaseUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PersonsService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    PersonsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonsService);
    return PersonsService;
}());
exports.PersonsService = PersonsService;
//# sourceMappingURL=persons.service.js.map