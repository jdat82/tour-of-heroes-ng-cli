webpackJsonp([0,6],{

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crisis_service__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crisis_center_component__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crisis_list_component__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crisis_center_home_component__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crisis_detail_component__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__crisis_center_routing_module__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__covalent_core__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterModule", function() { return CrisisCenterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CrisisCenterModule = (function () {
    function CrisisCenterModule() {
    }
    return CrisisCenterModule;
}());
CrisisCenterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__crisis_center_routing_module__["a" /* CrisisCenterRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__covalent_core__["a" /* CovalentCoreModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__crisis_center_component__["a" /* CrisisCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__crisis_list_component__["a" /* CrisisListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__crisis_center_home_component__["a" /* CrisisCenterHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__crisis_detail_component__["a" /* CrisisDetailComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__crisis_service__["a" /* CrisisService */]
        ]
    })
], CrisisCenterModule);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=crisis-center.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export Crisis */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Crisis = (function () {
    function Crisis(id, name) {
        this.id = id;
        this.name = name;
    }
    return Crisis;
}());

var CRISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];
var crisesPromise = Promise.resolve(CRISES);

var CrisisService = CrisisService_1 = (function () {
    function CrisisService() {
    }
    CrisisService.prototype.getCrises = function () { return crisesPromise; };
    CrisisService.prototype.getCrisis = function (id) {
        return crisesPromise
            .then(function (crises) { return crises.find(function (crisis) { return crisis.id === +id; }); });
    };
    CrisisService.prototype.addCrisis = function (name) {
        name = name.trim();
        if (name) {
            var crisis_1 = new Crisis(CrisisService_1.nextCrisisId++, name);
            crisesPromise.then(function (crises) { return crises.push(crisis_1); });
        }
    };
    return CrisisService;
}());
CrisisService.nextCrisisId = 100;
CrisisService = CrisisService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Injectable */])()
], CrisisService);

var CrisisService_1;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=crisis.service.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisCenterHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CrisisCenterHomeComponent = (function () {
    function CrisisCenterHomeComponent() {
    }
    return CrisisCenterHomeComponent;
}());
CrisisCenterHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        template: "\n    <p>Welcome to the Crisis Center</p>\n  "
    })
], CrisisCenterHomeComponent);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=crisis-center-home.component.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisCenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CrisisCenterComponent = (function () {
    function CrisisCenterComponent() {
    }
    return CrisisCenterComponent;
}());
CrisisCenterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        template: "\n    <h2>CRISIS CENTER</h2>\n    <router-outlet></router-outlet>\n  "
    })
], CrisisCenterComponent);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=crisis-center.component.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_dialog_service__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(route, router, dialogService) {
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.editName = data.crisis.name;
            _this.crisis = data.crisis;
        });
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.save = function () {
        this.crisis.name = this.editName;
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        var crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the crisis id if available
        // so that the CrisisListComponent can select that crisis.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the crises
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    };
    return CrisisDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostBinding */])('@routeAnimation'),
    __metadata("design:type", Object)
], CrisisDetailComponent.prototype, "routeAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], CrisisDetailComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostBinding */])('style.position'),
    __metadata("design:type", Object)
], CrisisDetailComponent.prototype, "position", void 0);
CrisisDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        template: "\n  <md-card *ngIf=\"crisis\">\n    <md-card-title>{{ editName }}</md-card-title>\n    <md-card-content>\n      <p><label>Id: </label>{{ crisis.id }}</p>\n      <md-input-container>\n        <input mdInput [(ngModel)]=\"editName\" placeholder=\"Name\"/>\n      </md-input-container>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button (click)=\"save()\">Save</button>\n      <button md-button (click)=\"cancel()\">Cancel</button>\n    </md-card-actions>\n  </md-card>\n  ",
        styles: ['input {width: 20em}'],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* slideInDownAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_dialog_service__["a" /* DialogService */]) === "function" && _c || Object])
], CrisisDetailComponent);

var _a, _b, _c;
/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
//# sourceMappingURL=crisis-detail.component.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crisis_service__ = __webpack_require__(777);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrisisListComponent = (function () {
    function CrisisListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    CrisisListComponent.prototype.isSelected = function (crisis) {
        return crisis.id === this.selectedId;
    };
    CrisisListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crises = this.route.params
            .switchMap(function (params) {
            _this.selectedId = +params['id'];
            return _this.service.getCrises();
        });
    };
    CrisisListComponent.prototype.onSelect = function (crisis) {
        this.selectedId = crisis.id;
        // Navigate with relative link
        this.router.navigate([crisis.id], { relativeTo: this.route });
    };
    return CrisisListComponent;
}());
CrisisListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* Component */])({
        template: "\n    <ul class=\"items\">\n      <li *ngFor=\"let crisis of crises | async\"\n        (click)=\"onSelect(crisis)\"\n        [class.selected]=\"isSelected(crisis)\">\n          <span class=\"badge\">{{ crisis.id }}</span>\n          {{ crisis.name }}\n      </li>\n    </ul>\n\n    <router-outlet></router-outlet>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__crisis_service__["a" /* CrisisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__crisis_service__["a" /* CrisisService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CrisisListComponent);

var _a, _b, _c;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=crisis-list.component.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crisis_center_home_component__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crisis_list_component__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crisis_center_component__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crisis_detail_component__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_routing_can_deactivate_guard_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crisis_detail_resolver_service__ = __webpack_require__(788);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisCenterRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var crisisCenterRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__crisis_center_component__["a" /* CrisisCenterComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__crisis_list_component__["a" /* CrisisListComponent */],
                children: [
                    {
                        path: ':id',
                        component: __WEBPACK_IMPORTED_MODULE_5__crisis_detail_component__["a" /* CrisisDetailComponent */],
                        canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__core_routing_can_deactivate_guard_service__["a" /* CanDeactivateGuard */]],
                        resolve: {
                            crisis: __WEBPACK_IMPORTED_MODULE_7__crisis_detail_resolver_service__["a" /* CrisisDetailResolver */]
                        }
                    },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__crisis_center_home_component__["a" /* CrisisCenterHomeComponent */]
                    }
                ]
            }
        ]
    }
];
var CrisisCenterRoutingModule = (function () {
    function CrisisCenterRoutingModule() {
    }
    return CrisisCenterRoutingModule;
}());
CrisisCenterRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(crisisCenterRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__crisis_detail_resolver_service__["a" /* CrisisDetailResolver */]
        ]
    })
], CrisisCenterRoutingModule);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=crisis-center-routing.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crisis_service__ = __webpack_require__(777);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisDetailResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrisisDetailResolver = (function () {
    function CrisisDetailResolver(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    CrisisDetailResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        return this.cs.getCrisis(id).then(function (crisis) {
            if (crisis) {
                return crisis;
            }
            else {
                _this.router.navigate(['/crisis-center']);
                return null;
            }
        });
    };
    return CrisisDetailResolver;
}());
CrisisDetailResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__crisis_service__["a" /* CrisisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__crisis_service__["a" /* CrisisService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CrisisDetailResolver);

var _a, _b;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=crisis-detail-resolver.service.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map