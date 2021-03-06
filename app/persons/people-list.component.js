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
var product_filter_pipe_1 = require('./product-filter.pipe');
var star_component_1 = require('../shared/star.component');
var product_service_1 = require('./product.service');
var spinner_component_1 = require('./spinner.component');
var ProductListComponent = (function () {
    function ProductListComponent(router, _productService) {
        this.router = router;
        this._productService = _productService;
        this.showSpinner = true;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = '';
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
        async_1.TimerWrapper.setTimeout(function () {
            _this.showSpinner = false;
        }, 3000);
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/products/product-list.component.html',
            styleUrls: ['app/products/product-list.component.css'],
            pipes: [product_filter_pipe_1.ProductFilterPipe],
            directives: [spinner_component_1.SpinnerComponent,
                star_component_1.StarComponent,
                router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof product_service_1.ProductService !== 'undefined' && product_service_1.ProductService) === 'function' && _a) || Object])
    ], ProductListComponent);
    return ProductListComponent;
    var _a;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=people-list.component.js.map