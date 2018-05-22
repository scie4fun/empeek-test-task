webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-2 app-title\">\n      <!-- Left bar with app title -->\n      <app-title></app-title>\n    </div>\n    <div class=\"col-10\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <!-- List of items to edit -->\n          <app-items-list></app-items-list>\n        </div>\n        <div class=\"col-6\">\n          <!-- Currently selected item list of comments -->\n          <app-comments-list></app-comments-list>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_title_title_component__ = __webpack_require__("../../../../../src/app/components/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_items_list_items_list_component__ = __webpack_require__("../../../../../src/app/components/items-list/items-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_comments_list_comments_list_component__ = __webpack_require__("../../../../../src/app/components/comments-list/comments-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_pwa_local_storage__ = __webpack_require__("../../../../@ngx-pwa/local-storage/local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_items_list_items_list_component__["a" /* ItemsListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_comments_list_comments_list_component__["a" /* CommentsListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_pwa_local_storage__["b" /* LocalStorageModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_local_storage_service__["a" /* LocalStorageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/comments-list/comments-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* app-comments-list component general styles */\r\n.comments-container {\r\n    padding: 20px;\r\n    width: 90%;\r\n    height: 85vh;\r\n}\r\n.comments-list {\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    height: 75%;\r\n}\r\n.input-box, .odd-box, .even-box {\r\n    width: 75px;\r\n    height: 75px;\r\n    display: block;\r\n}\r\n.input-box {\r\n    background-color: rgb(194, 189, 189);\r\n}\r\n.even-box {\r\n    background-color: rgb(226, 130, 5);\r\n}\r\n.odd-box {\r\n    background-color: rgb(90, 5, 226);\r\n}\r\n.comment-text {\r\n    width: 90%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comments-list/comments-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comments-container\">\r\n    <div class=\"display-4\"> {{ getSelectedItemCommentsTitle() }} </div>\r\n    <div class=\"comments-list mh-70\">\r\n        <!-- Currentely selected item comments list -->\r\n        <div class=\"row pt-4\" *ngFor=\"let comment of getSelectedItems(); let i = index\">\r\n            <div class=\"col-2\">\r\n                <div [class.even-box]=\"i % 2 == 0\"\r\n                     [class.odd-box]=\"i % 2 != 0\"\r\n                     class=\"odd-box mw-100 mh-100\"></div>\r\n            </div>\r\n            <div class=\"col-10 mv-90 pt-0 comment-text\">\r\n                <div>{{ comment.text }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n        <!-- FormGroup for adding new comments -->\r\n        <div class=\"row pt-3\">\r\n            <div class=\"col-2 pr-0\">\r\n                <span class=\"input-box mw-100 mh-100\"></span>\r\n            </div>\r\n            <div class=\"col-10 pl-0\">\r\n                <div class=\"input-group\">\r\n                  <textarea rows=\"4\" class=\"form-control\"\r\n                  [(ngModel)]=\"newInputItemComment\"\r\n                  (keydown.control.enter)=\"add()\"></textarea>\r\n                </div>\r\n            </div>\r\n          </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/comments-list/comments-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_comment__ = __webpack_require__("../../../../../src/app/domain/comment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsListComponent = /** @class */ (function () {
    function CommentsListComponent(localStorageService) {
        this.localStorageService = localStorageService;
    }
    CommentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localStorageService.castItems.subscribe(function (observableItems) { _this.items = observableItems; });
        this.localStorageService.castSelectedIndex.subscribe(function (observableIndex) { _this.selectedItemIndex = observableIndex; });
    };
    CommentsListComponent.prototype.add = function () {
        if (this.selectedItemIndex > -1) {
            console.log(this.newInputItemComment, new __WEBPACK_IMPORTED_MODULE_2__domain_comment__["a" /* Comment */](this.newInputItemComment));
            this.items[this.selectedItemIndex].comments.push(new __WEBPACK_IMPORTED_MODULE_2__domain_comment__["a" /* Comment */](this.newInputItemComment));
            this.localStorageService.saveAll();
        }
    };
    CommentsListComponent.prototype.getSelectedItems = function () {
        this.clearInput();
        var isExists = this.selectedItemIndex !== -1 &&
            this.items[this.selectedItemIndex];
        return isExists ? this.items[this.selectedItemIndex].comments : [];
    };
    CommentsListComponent.prototype.getSelectedItemCommentsTitle = function () {
        return this.selectedItemIndex !== -1 ? 'Comments #' + (this.selectedItemIndex + 1) : '';
    };
    CommentsListComponent.prototype.clearInput = function () {
        if (this.previouselySelectedCommentsIndex != this.selectedItemIndex) {
            this.newInputItemComment = '';
            this.previouselySelectedCommentsIndex = this.selectedItemIndex;
        }
    };
    CommentsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-comments-list',
            template: __webpack_require__("../../../../../src/app/components/comments-list/comments-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/comments-list/comments-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_local_storage_service__["a" /* LocalStorageService */]])
    ], CommentsListComponent);
    return CommentsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/items-list/items-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* app-items-list component general styles */\r\n.items-container {\r\n    padding: 20px 10px 10px 40px;\r\n    width: 100%;\r\n    height: 70vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    z-index: 10;\r\n    position: relative;\r\n}\r\n.form-group, .add, .item, .delete, .delete button {\r\n    width: 100%;\r\n}\r\n.item-default {\r\n    margin-left: -39px !important;\r\n}\r\n.item-selected {\r\n    margin-left: -40px;\r\n    border-left: 4px solid red;\r\n}\r\n.item-default, .item-selected {\r\n    padding-left: 39px !important;\r\n}\r\n.item-default, .item-selected, .delete {\r\n    padding-top: 7px !important;\r\n    padding-bottom: 8px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items-list/items-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"items-container\">\r\n    <!-- FormGroup for new items adding -->\r\n    <div class=\"form-group\">\r\n            <div class=\"display-4 pb-4\">Items</div>\r\n            <div class=\"row\">\r\n                <div class=\"col-9 pr-0\">\r\n                    <input type=\"text\" class=\"form-control\" \r\n                           placeholder=\"Type name here...\"\r\n                           [(ngModel)]=\"newInputItemTitle\"\r\n                           (keydown.control.enter)=\"add()\">\r\n                </div>\r\n                <div class=\"col-3 mw-100 pl-2\">\r\n                    <button type=\"button\" class=\"btn btn-info add\" (click)=\"add()\">Add new</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    <!-- List of items currentely existing in local storage -->\r\n    <div [class.item-default]=\"!item.isSelected\"\r\n            [class.item-selected]=\"item.isSelected\"\r\n            *ngFor=\"let item of items; let i = index\" class=\"row\" \r\n            (click)=\"setSelected(i)\">\r\n           <div class=\"col-10 item-default\">\r\n               <span class=\"h5\">{{ item.title }}</span> \r\n               <span class=\"badge badge-pill badge-info\">{{ item.comments.length }}</span></div>\r\n           <div class=\"col-2 mw-100 delete ml-4\">\r\n               <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"delete(i)\">DELETE</button>\r\n           </div>\r\n       </div>\r\n    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/items-list/items-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_item__ = __webpack_require__("../../../../../src/app/domain/item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsListComponent = /** @class */ (function () {
    function ItemsListComponent(localStorageService) {
        this.localStorageService = localStorageService;
    }
    ItemsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localStorageService.castItems.subscribe(function (observableItems) { _this.items = observableItems; });
        this.localStorageService.castSelectedIndex.subscribe(function (observableIndex) { _this.selectedItemIndex = observableIndex; });
    };
    ItemsListComponent.prototype.add = function () {
        if (this.newInputItemTitle.length > 4) {
            var newItem = new __WEBPACK_IMPORTED_MODULE_2__domain_item__["a" /* Item */](this.newInputItemTitle, []);
            this.localStorageService.save(newItem);
        }
        else {
            alert('New Item title should have not less than 4 symbols');
        }
    };
    ItemsListComponent.prototype.delete = function (index) {
        this.localStorageService.remove(index);
    };
    ItemsListComponent.prototype.setSelected = function (index) {
        this.localStorageService.setSelected(index);
    };
    ItemsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-items-list',
            template: __webpack_require__("../../../../../src/app/components/items-list/items-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items-list/items-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_local_storage_service__["a" /* LocalStorageService */]])
    ], ItemsListComponent);
    return ItemsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/title/title.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/title/title.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"display-4 text-uppercase text-white\">dairy app</div>\r\n<div class=\"text-muted\">Comment with no sense</div>"

/***/ }),

/***/ "../../../../../src/app/components/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-title',
            template: __webpack_require__("../../../../../src/app/components/title/title.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/domain/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(text) {
        this.text = text;
    }
    return Comment;
}());



/***/ }),

/***/ "../../../../../src/app/domain/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* unused harmony export defaultItems */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment__ = __webpack_require__("../../../../../src/app/domain/comment.ts");

var Item = /** @class */ (function () {
    function Item(title, comments) {
        this.title = title;
        this.comments = comments;
    }
    return Item;
}());

var defaultItems = [
    new Item('A very first Item', [
        new __WEBPACK_IMPORTED_MODULE_0__comment__["a" /* Comment */]('Hello there!'),
        new __WEBPACK_IMPORTED_MODULE_0__comment__["a" /* Comment */]("It is nice weather Today! Isn't it?"),
        new __WEBPACK_IMPORTED_MODULE_0__comment__["a" /* Comment */]("Let's go for a walk!")
    ]),
    new Item('A second default item', [
        new __WEBPACK_IMPORTED_MODULE_0__comment__["a" /* Comment */]('Wake up!'),
        new __WEBPACK_IMPORTED_MODULE_0__comment__["a" /* Comment */]('Are you ready to go?')
    ])
];


/***/ }),

/***/ "../../../../../src/app/services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_pwa_local_storage__ = __webpack_require__("../../../../@ngx-pwa/local-storage/local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(localStorage) {
        var _this = this;
        this.localStorage = localStorage;
        this.storageName = 'items';
        this.DEFAULT_SELECTED_ITEM_INDEX = -1;
        this.items = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.castItems = this.items.asObservable();
        this.selectedItemIndex = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.DEFAULT_SELECTED_ITEM_INDEX);
        this.castSelectedIndex = this.selectedItemIndex.asObservable();
        this.findAll().subscribe(function (data) {
            if (data != null && data.length) {
                for (var i in data) {
                    data[i].isSelected = false;
                }
                _this.items.next(data);
            }
        });
    }
    LocalStorageService.prototype.save = function (newItem) {
        this.items.getValue().push(newItem);
        this.saveAll();
    };
    LocalStorageService.prototype.saveAll = function () {
        this.localStorage.setItem(this.storageName, this.items.getValue()).subscribe(function () { });
    };
    LocalStorageService.prototype.findAll = function () {
        return this.localStorage.getItem(this.storageName);
    };
    LocalStorageService.prototype.remove = function (index) {
        this.items.getValue().splice(index, 1);
        this.saveAll();
    };
    LocalStorageService.prototype.removeAll = function () {
        this.localStorage.removeItemSubscribe(this.storageName);
    };
    LocalStorageService.prototype.setSelected = function (newSelectedItemIndex) {
        var itemsList = this.items.getValue();
        for (var i = 0; i < itemsList.length; ++i) {
            if (i == newSelectedItemIndex) {
                itemsList[i].isSelected = true;
                this.selectedItemIndex.next(newSelectedItemIndex);
            }
            else {
                itemsList[i].isSelected = false;
            }
        }
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_pwa_local_storage__["a" /* LocalStorage */]])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map