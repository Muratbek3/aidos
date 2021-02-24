function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/auth/store/actions/getCurrentUser.action */
    "./src/app/auth/store/actions/getCurrentUser.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/topBar/components/topBar/topBar.component */
    "./src/app/shared/modules/topBar/components/topBar/topBar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(store) {
        _classCallCheck(this, AppComponent);

        this.store = store;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.store.dispatch(Object(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserAction"])());
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-topbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: ' app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var src_app_shared_modules_topBar_topBar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/modules/topBar/topBar.module */
    "./src/app/shared/modules/topBar/topBar.module.ts");
    /* harmony import */


    var _shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/services/persistance.service */
    "./src/app/shared/services/persistance.service.ts");
    /* harmony import */


    var _shared_services_authinterceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/services/authinterceptor.service */
    "./src/app/shared/services/authinterceptor.service.ts");
    /* harmony import */


    var _globalFeed_globalFeed_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./globalFeed/globalFeed.module */
    "./src/app/globalFeed/globalFeed.module.ts");
    /* harmony import */


    var _yourFeed_yourFeed_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./yourFeed/yourFeed.module */
    "./src/app/yourFeed/yourFeed.module.ts");
    /* harmony import */


    var src_app_tagFeed_tagFeed_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/tagFeed/tagFeed.module */
    "./src/app/tagFeed/tagFeed.module.ts");
    /* harmony import */


    var _article_article_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./article/article.module */
    "./src/app/article/article.module.ts");
    /* harmony import */


    var _createArticle_createArticle_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./createArticle/createArticle.module */
    "./src/app/createArticle/createArticle.module.ts");
    /* harmony import */


    var src_app_editArticle_editArticle_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/app/editArticle/editArticle.module */
    "./src/app/editArticle/editArticle.module.ts");
    /* harmony import */


    var _settings_settings_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./settings/settings.module */
    "./src/app/settings/settings.module.ts");
    /* harmony import */


    var _userProfile_userProfile_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./userProfile/userProfile.module */
    "./src/app/userProfile/userProfile.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_12__["PersistanceService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _shared_services_authinterceptor_service__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({
        router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["routerReducer"]
      }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["StoreRouterConnectingModule"].forRoot(), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([]), src_app_shared_modules_topBar_topBar_module__WEBPACK_IMPORTED_MODULE_11__["TopBarModule"], _globalFeed_globalFeed_module__WEBPACK_IMPORTED_MODULE_14__["GlobalFeedModule"], _yourFeed_yourFeed_module__WEBPACK_IMPORTED_MODULE_15__["YourFeedModule"], src_app_tagFeed_tagFeed_module__WEBPACK_IMPORTED_MODULE_16__["TagFeedModule"], _createArticle_createArticle_module__WEBPACK_IMPORTED_MODULE_18__["CreateArticleModule"], _article_article_module__WEBPACK_IMPORTED_MODULE_17__["ArticleModule"], src_app_editArticle_editArticle_module__WEBPACK_IMPORTED_MODULE_19__["EditArticleModule"], _settings_settings_module__WEBPACK_IMPORTED_MODULE_20__["SettingsModule"], _userProfile_userProfile_module__WEBPACK_IMPORTED_MODULE_21__["UserProfileModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["StoreRouterConnectingModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsRootModule"], src_app_shared_modules_topBar_topBar_module__WEBPACK_IMPORTED_MODULE_11__["TopBarModule"], _globalFeed_globalFeed_module__WEBPACK_IMPORTED_MODULE_14__["GlobalFeedModule"], _yourFeed_yourFeed_module__WEBPACK_IMPORTED_MODULE_15__["YourFeedModule"], src_app_tagFeed_tagFeed_module__WEBPACK_IMPORTED_MODULE_16__["TagFeedModule"], _createArticle_createArticle_module__WEBPACK_IMPORTED_MODULE_18__["CreateArticleModule"], _article_article_module__WEBPACK_IMPORTED_MODULE_17__["ArticleModule"], src_app_editArticle_editArticle_module__WEBPACK_IMPORTED_MODULE_19__["EditArticleModule"], _settings_settings_module__WEBPACK_IMPORTED_MODULE_20__["SettingsModule"], _userProfile_userProfile_module__WEBPACK_IMPORTED_MODULE_21__["UserProfileModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({
            router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["routerReducer"]
          }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["StoreRouterConnectingModule"].forRoot(), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([]), src_app_shared_modules_topBar_topBar_module__WEBPACK_IMPORTED_MODULE_11__["TopBarModule"], _globalFeed_globalFeed_module__WEBPACK_IMPORTED_MODULE_14__["GlobalFeedModule"], _yourFeed_yourFeed_module__WEBPACK_IMPORTED_MODULE_15__["YourFeedModule"], src_app_tagFeed_tagFeed_module__WEBPACK_IMPORTED_MODULE_16__["TagFeedModule"], _createArticle_createArticle_module__WEBPACK_IMPORTED_MODULE_18__["CreateArticleModule"], _article_article_module__WEBPACK_IMPORTED_MODULE_17__["ArticleModule"], src_app_editArticle_editArticle_module__WEBPACK_IMPORTED_MODULE_19__["EditArticleModule"], _settings_settings_module__WEBPACK_IMPORTED_MODULE_20__["SettingsModule"], _userProfile_userProfile_module__WEBPACK_IMPORTED_MODULE_21__["UserProfileModule"]],
          providers: [_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_12__["PersistanceService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _shared_services_authinterceptor_service__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/article/article.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/article/article.module.ts ***!
    \*******************************************/

  /*! exports provided: ArticleModule */

  /***/
  function srcAppArticleArticleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleModule", function () {
      return ArticleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _components_article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/article/article.component */
    "./src/app/article/components/article/article.component.ts");
    /* harmony import */


    var _shared_services_article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/services/article.service */
    "./src/app/shared/services/article.service.ts");
    /* harmony import */


    var src_app_article_store_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/article/store/reducers */
    "./src/app/article/store/reducers.ts");
    /* harmony import */


    var src_app_article_store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/article/store/effects/getArticle.effect */
    "./src/app/article/store/effects/getArticle.effect.ts");
    /* harmony import */


    var src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/modules/loading/loading.module */
    "./src/app/shared/modules/loading/loading.module.ts");
    /* harmony import */


    var src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/modules/errorMessage/errorMessage.module */
    "./src/app/shared/modules/errorMessage/errorMessage.module.ts");
    /* harmony import */


    var src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/modules/tagList/tagList.module */
    "./src/app/shared/modules/tagList/tagList.module.ts");
    /* harmony import */


    var _store_effects_deleteArticle_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./store/effects/deleteArticle.effect */
    "./src/app/article/store/effects/deleteArticle.effect.ts");
    /* harmony import */


    var src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/article/services/article.service */
    "./src/app/article/services/article.service.ts");

    var routes = [{
      path: 'articles/:slug',
      component: _components_article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"]
    }];

    var ArticleModule = function ArticleModule() {
      _classCallCheck(this, ArticleModule);
    };

    ArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ArticleModule
    });
    ArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ArticleModule_Factory(t) {
        return new (t || ArticleModule)();
      },
      providers: [src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_13__["ArticleService"], _shared_services_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticleService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('article', src_app_article_store_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([src_app_article_store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_8__["GetArticleEffect"], _store_effects_deleteArticle_effect__WEBPACK_IMPORTED_MODULE_12__["DeleteArticleEffect"]]), src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_9__["LoadingModule"], src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageModule"], src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_11__["TagListModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArticleModule, {
        declarations: [_components_article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"], src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_9__["LoadingModule"], src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageModule"], src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_11__["TagListModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('article', src_app_article_store_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([src_app_article_store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_8__["GetArticleEffect"], _store_effects_deleteArticle_effect__WEBPACK_IMPORTED_MODULE_12__["DeleteArticleEffect"]]), src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_9__["LoadingModule"], src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageModule"], src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_11__["TagListModule"]],
          declarations: [_components_article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"]],
          providers: [src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_13__["ArticleService"], _shared_services_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticleService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/article/components/article/article.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/article/components/article/article.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppArticleComponentsArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/article/store/actions/getArticle.action */
    "./src/app/article/store/actions/getArticle.action.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_article_store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/article/store/selectors */
    "./src/app/article/store/selectors.ts");
    /* harmony import */


    var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth/store/selectors */
    "./src/app/auth/store/selectors.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../store/actions/deleteArticle.action */
    "./src/app/article/store/actions/deleteArticle.action.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/modules/loading/components/loading/loading.component */
    "./src/app/shared/modules/loading/components/loading/loading.component.ts");
    /* harmony import */


    var src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component */
    "./src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component.ts");
    /* harmony import */


    var _shared_modules_tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/modules/tagList/components/tagList/tagList.component */
    "./src/app/shared/modules/tagList/components/tagList/tagList.component.ts");

    var _c0 = function _c0(a1) {
      return ["/articles", a1, "edit"];
    };

    function ArticleComponent_div_2_span_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_div_2_span_11_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r27.deleteArticle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r26.article.slug));
      }
    }

    var _c1 = function _c1(a1) {
      return ["/profiles", a1];
    };

    function ArticleComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ArticleComponent_div_2_span_11_Template, 6, 3, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.article.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r22.article.author.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r22.article.author.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r22.article.author.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.article.author.username, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.article.createdAt, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx_r22.isAuthor$));
      }
    }

    function ArticleComponent_mc_loading_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-loading");
      }
    }

    function ArticleComponent_mc_error_message_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-error-message");
      }
    }

    function ArticleComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mc-tag-list", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.article.body);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx_r25.article.tagList);
      }
    }

    var ArticleComponent = /*#__PURE__*/function () {
      function ArticleComponent(store, route) {
        _classCallCheck(this, ArticleComponent);

        this.store = store;
        this.route = route;
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeValues();
          this.initializeListeners();
          this.fetchData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.articleSubscription.unsubscribe();
        }
      }, {
        key: "initializeValues",
        value: function initializeValues() {
          this.slug = this.route.snapshot.paramMap.get('slug');
          this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_article_store_selectors__WEBPACK_IMPORTED_MODULE_4__["isLoadingSelector"]));
          this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_article_store_selectors__WEBPACK_IMPORTED_MODULE_4__["errorSelector"]));
          this.isAuthor$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_article_store_selectors__WEBPACK_IMPORTED_MODULE_4__["articleSelector"])), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_5__["currentUserSelector"]))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                article = _ref2[0],
                currentUser = _ref2[1];

            if (!article || !currentUser) {
              return false;
            }

            return currentUser.username === article.author.username;
          }));
        }
      }, {
        key: "initializeListeners",
        value: function initializeListeners() {
          var _this = this;

          this.articleSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_article_store_selectors__WEBPACK_IMPORTED_MODULE_4__["articleSelector"])).subscribe(function (article) {
            _this.article = article;
          });
        }
      }, {
        key: "fetchData",
        value: function fetchData() {
          this.store.dispatch(Object(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__["getArticleAction"])({
            slug: this.slug
          }));
        }
      }, {
        key: "deleteArticle",
        value: function deleteArticle() {
          this.store.dispatch(Object(_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_7__["deleteArticleAction"])({
            slug: this.slug
          }));
        }
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
      return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
    };

    ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleComponent,
      selectors: [["mc-article"]],
      decls: 9,
      vars: 8,
      consts: [[1, "article-page"], [1, "banner"], ["class", "container", 4, "ngIf"], [1, "container", "page"], [4, "ngIf"], ["class", "row article-content", 4, "ngIf"], [1, "container"], [1, "article-meta"], [3, "routerLink"], [3, "src"], [1, "info"], [1, "date"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "routerLink"], [1, "ion-edit"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "row", "article-content"], [1, "col-xs-12"], [3, "tags"]],
      template: function ArticleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleComponent_div_2_Template, 13, 13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleComponent_mc_loading_4_Template, 1, 0, "mc-loading", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArticleComponent_mc_error_message_6_Template, 1, 0, "mc-error-message", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ArticleComponent_div_8_Template, 6, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.isLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.error$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_11__["ErrorMessageComponent"], _shared_modules_tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_12__["TagListComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-article',
          templateUrl: './article.component.html',
          styleUrls: ['./article.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/article/services/article.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/article/services/article.service.ts ***!
    \*****************************************************/

  /*! exports provided: ArticleService */

  /***/
  function srcAppArticleServicesArticleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleService", function () {
      return ArticleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ArticleService = /*#__PURE__*/function () {
      function ArticleService(http) {
        _classCallCheck(this, ArticleService);

        this.http = http;
      }

      _createClass(ArticleService, [{
        key: "deleteArticle",
        value: function deleteArticle(slug) {
          var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/articles/").concat(slug);
          return this.http["delete"](url);
        }
      }]);

      return ArticleService;
    }();

    ArticleService.ɵfac = function ArticleService_Factory(t) {
      return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArticleService,
      factory: ArticleService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/article/store/actionTypes.ts":
  /*!**********************************************!*\
    !*** ./src/app/article/store/actionTypes.ts ***!
    \**********************************************/

  /*! exports provided: ActionTypes */

  /***/
  function srcAppArticleStoreActionTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["GET_ARTICLE"] = "[Article] Get article";
      ActionTypes["GET_ARTICLE_SUCCESS"] = "[Article] Get article success";
      ActionTypes["GET_ARTICLE_FAILURE"] = "[Article] Get article failure";
      ActionTypes["DELETE_ARTICLE"] = "[Article] Delete article";
      ActionTypes["DELETE_ARTICLE_SUCCESS"] = "[Article] Delete article success";
      ActionTypes["DELETE_ARTICLE_FAILURE"] = "[Article] Delete article failure";
    })(ActionTypes || (ActionTypes = {}));
    /***/

  },

  /***/
  "./src/app/article/store/actions/deleteArticle.action.ts":
  /*!***************************************************************!*\
    !*** ./src/app/article/store/actions/deleteArticle.action.ts ***!
    \***************************************************************/

  /*! exports provided: deleteArticleAction, deleteArticleSuccessAction, deleteArticleFailureAction */

  /***/
  function srcAppArticleStoreActionsDeleteArticleActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteArticleAction", function () {
      return deleteArticleAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteArticleSuccessAction", function () {
      return deleteArticleSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteArticleFailureAction", function () {
      return deleteArticleFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actionTypes */
    "./src/app/article/store/actionTypes.ts");

    var deleteArticleAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DELETE_ARTICLE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteArticleSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DELETE_ARTICLE_SUCCESS);
    var deleteArticleFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DELETE_ARTICLE_FAILURE);
    /***/
  },

  /***/
  "./src/app/article/store/actions/getArticle.action.ts":
  /*!************************************************************!*\
    !*** ./src/app/article/store/actions/getArticle.action.ts ***!
    \************************************************************/

  /*! exports provided: getArticleAction, getArticleSuccessAction, getArticleFailureAction */

  /***/
  function srcAppArticleStoreActionsGetArticleActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getArticleAction", function () {
      return getArticleAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getArticleSuccessAction", function () {
      return getArticleSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getArticleFailureAction", function () {
      return getArticleFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actionTypes */
    "./src/app/article/store/actionTypes.ts");

    var getArticleAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_ARTICLE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getArticleSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_ARTICLE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getArticleFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_ARTICLE_FAILURE);
    /***/
  },

  /***/
  "./src/app/article/store/effects/deleteArticle.effect.ts":
  /*!***************************************************************!*\
    !*** ./src/app/article/store/effects/deleteArticle.effect.ts ***!
    \***************************************************************/

  /*! exports provided: DeleteArticleEffect */

  /***/
  function srcAppArticleStoreEffectsDeleteArticleEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteArticleEffect", function () {
      return DeleteArticleEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/article/store/actions/deleteArticle.action */
    "./src/app/article/store/actions/deleteArticle.action.ts");
    /* harmony import */


    var src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/article/services/article.service */
    "./src/app/article/services/article.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DeleteArticleEffect = function DeleteArticleEffect(actions$, articleService, router) {
      var _this2 = this;

      _classCallCheck(this, DeleteArticleEffect);

      this.actions$ = actions$;
      this.articleService = articleService;
      this.router = router;
      this.deleteArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__["deleteArticleAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref3) {
          var slug = _ref3.slug;
          return _this2.articleService.deleteArticle(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return Object(src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__["deleteArticleSuccessAction"])();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__["deleteArticleFailureAction"])());
          }));
        }));
      });
      this.redirectAfterDelete$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__["deleteArticleSuccessAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
          _this2.router.navigate(['/']);
        }));
      }, {
        dispatch: false
      });
    };

    DeleteArticleEffect.ɵfac = function DeleteArticleEffect_Factory(t) {
      return new (t || DeleteArticleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    DeleteArticleEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DeleteArticleEffect,
      factory: DeleteArticleEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteArticleEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/article/store/effects/getArticle.effect.ts":
  /*!************************************************************!*\
    !*** ./src/app/article/store/effects/getArticle.effect.ts ***!
    \************************************************************/

  /*! exports provided: GetArticleEffect */

  /***/
  function srcAppArticleStoreEffectsGetArticleEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetArticleEffect", function () {
      return GetArticleEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/getArticle.action */
    "./src/app/article/store/actions/getArticle.action.ts");
    /* harmony import */


    var src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/article.service */
    "./src/app/shared/services/article.service.ts");

    var GetArticleEffect = function GetArticleEffect(actions$, sharedArticleService) {
      var _this3 = this;

      _classCallCheck(this, GetArticleEffect);

      this.actions$ = actions$;
      this.sharedArticleService = sharedArticleService;
      this.getArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this3.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref4) {
          var slug = _ref4.slug;
          return _this3.sharedArticleService.getArticle(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (article) {
            return Object(_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleSuccessAction"])({
              article: article
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleFailureAction"])());
          }));
        }));
      });
    };

    GetArticleEffect.ɵfac = function GetArticleEffect_Factory(t) {
      return new (t || GetArticleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"]));
    };

    GetArticleEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetArticleEffect,
      factory: GetArticleEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetArticleEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/article/store/reducers.ts":
  /*!*******************************************!*\
    !*** ./src/app/article/store/reducers.ts ***!
    \*******************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppArticleStoreReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/article/store/actions/getArticle.action */
    "./src/app/article/store/actions/getArticle.action.ts");

    var initialState = {
      data: null,
      isLoading: false,
      error: null
    };
    var articleReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__["getArticleAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__["getArticleSuccessAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false,
        data: action.article
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__["getArticleFailureAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerNavigationAction"], function () {
      return initialState;
    }));

    function reducers(state, action) {
      return articleReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/article/store/selectors.ts":
  /*!********************************************!*\
    !*** ./src/app/article/store/selectors.ts ***!
    \********************************************/

  /*! exports provided: articleFeatureSelector, isLoadingSelector, errorSelector, articleSelector */

  /***/
  function srcAppArticleStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "articleFeatureSelector", function () {
      return articleFeatureSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isLoadingSelector", function () {
      return isLoadingSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "errorSelector", function () {
      return errorSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "articleSelector", function () {
      return articleSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var articleFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('article');
    var isLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(articleFeatureSelector, function (articleState) {
      return articleState.isLoading;
    });
    var errorSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(articleFeatureSelector, function (articleState) {
      return articleState.error;
    });
    var articleSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(articleFeatureSelector, function (articleState) {
      return articleState.data;
    });
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var src_app_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/components/register/register.component */
    "./src/app/auth/components/register/register.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/auth/store/reducers */
    "./src/app/auth/store/reducers.ts");
    /* harmony import */


    var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var src_app_auth_store_effects_register_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/auth/store/effects/register.effect */
    "./src/app/auth/store/effects/register.effect.ts");
    /* harmony import */


    var src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/modules/backendErrorMessages/backendErrorMessages.module */
    "./src/app/shared/modules/backendErrorMessages/backendErrorMessages.module.ts");
    /* harmony import */


    var src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/persistance.service */
    "./src/app/shared/services/persistance.service.ts");
    /* harmony import */


    var src_app_auth_store_effects_login_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/auth/store/effects/login.effect */
    "./src/app/auth/store/effects/login.effect.ts");
    /* harmony import */


    var src_app_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/auth/components/login/login.component */
    "./src/app/auth/components/login/login.component.ts");
    /* harmony import */


    var src_app_auth_store_effects_getCurrentUser_effect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/auth/store/effects/getCurrentUser.effect */
    "./src/app/auth/store/effects/getCurrentUser.effect.ts");
    /* harmony import */


    var _store_effects_updateCurrentUser_effect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./store/effects/updateCurrentUser.effect */
    "./src/app/auth/store/effects/updateCurrentUser.effect.ts");
    /* harmony import */


    var _store_effects_logout_effect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./store/effects/logout.effect */
    "./src/app/auth/store/effects/logout.effect.ts");

    var routes = [{
      path: 'register',
      component: src_app_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: 'login',
      component: src_app_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
    }];

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      providers: [src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_11__["PersistanceService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('auth', src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_auth_store_effects_register_effect__WEBPACK_IMPORTED_MODULE_9__["RegisterEffect"], src_app_auth_store_effects_login_effect__WEBPACK_IMPORTED_MODULE_12__["LoginEffect"], src_app_auth_store_effects_getCurrentUser_effect__WEBPACK_IMPORTED_MODULE_14__["GetCurrentUserEffect"], _store_effects_updateCurrentUser_effect__WEBPACK_IMPORTED_MODULE_15__["UpdateCurrentUserEffect"], _store_effects_logout_effect__WEBPACK_IMPORTED_MODULE_16__["LogoutEffect"]]), src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_10__["BackendErrorMessagesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [src_app_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], src_app_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"], src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_10__["BackendErrorMessagesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('auth', src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_auth_store_effects_register_effect__WEBPACK_IMPORTED_MODULE_9__["RegisterEffect"], src_app_auth_store_effects_login_effect__WEBPACK_IMPORTED_MODULE_12__["LoginEffect"], src_app_auth_store_effects_getCurrentUser_effect__WEBPACK_IMPORTED_MODULE_14__["GetCurrentUserEffect"], _store_effects_updateCurrentUser_effect__WEBPACK_IMPORTED_MODULE_15__["UpdateCurrentUserEffect"], _store_effects_logout_effect__WEBPACK_IMPORTED_MODULE_16__["LogoutEffect"]]), src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_10__["BackendErrorMessagesModule"]],
          declarations: [src_app_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], src_app_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]],
          providers: [src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_11__["PersistanceService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/components/login/login.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/auth/components/login/login.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth/store/selectors */
    "./src/app/auth/store/selectors.ts");
    /* harmony import */


    var src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/store/actions/login.action */
    "./src/app/auth/store/actions/login.action.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component */
    "./src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component.ts");

    function LoginComponent_mc_backend_error_messages_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-backend-error-messages", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backendErrors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r3.backendErrors$));
      }
    }

    var _c0 = function _c0() {
      return ["/register"];
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, store) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.store = store;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeForm();
          this.initializeValues();
        }
      }, {
        key: "initializeValues",
        value: function initializeValues() {
          this.isSubmitting$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_3__["isSubmittingSelector"]));
          this.backendErrors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_3__["validationErrorsSelector"]));
        }
      }, {
        key: "initializeForm",
        value: function initializeForm() {
          this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var request = {
            user: this.form.value
          };
          this.store.dispatch(Object(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__["loginAction"])({
            request: request
          }));
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["mc-login"]],
      decls: 20,
      vars: 9,
      consts: [[1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "routerLink"], [3, "backendErrors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], [3, "backendErrors"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u043E\u0439\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041D\u0443\u0436\u0435\u043D \u0430\u043A\u043A\u0430\u0443\u043D\u0442?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_mc_backend_error_messages_9_Template, 2, 3, "mc-backend-error-messages", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "fieldset", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fieldset", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0412\u043E\u0439\u0442\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.backendErrors$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 6, ctx.isSubmitting$));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_7__["BackendErrorMessagesComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/components/register/register.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/auth/components/register/register.component.ts ***!
    \****************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAuthComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth/store/actions/register.action */
    "./src/app/auth/store/actions/register.action.ts");
    /* harmony import */


    var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/store/selectors */
    "./src/app/auth/store/selectors.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component */
    "./src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component.ts");

    function RegisterComponent_mc_backend_error_messages_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-backend-error-messages", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backendErrors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.backendErrors$));
      }
    }

    var _c0 = function _c0() {
      return ["/login"];
    };

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(fb, store) {
        _classCallCheck(this, RegisterComponent);

        this.fb = fb;
        this.store = store;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeForm();
          this.initializeValues();
        }
      }, {
        key: "initializeValues",
        value: function initializeValues() {
          this.isSubmitting$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_4__["isSubmittingSelector"]));
          this.backendErrors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_4__["validationErrorsSelector"]));
        }
      }, {
        key: "initializeForm",
        value: function initializeForm() {
          console.log('initializeForm');
          this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log('submit', this.form.value, this.form.valid);
          var request = {
            user: this.form.value
          };
          this.store.dispatch(Object(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_3__["registerAction"])({
            request: request
          }));
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["mc-register"]],
      decls: 22,
      vars: 9,
      consts: [[1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "routerLink"], [3, "backendErrors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Username", "formControlName", "username", 1, "form-control", "form-control-lg"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], [3, "backendErrors"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0415\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_mc_backend_error_messages_9_Template, 2, 3, "mc-backend-error-messages", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_11_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "fieldset", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fieldset", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "fieldset", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.backendErrors$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 6, ctx.isSubmitting$));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_7__["BackendErrorMessagesComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/services/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/services/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "getUser",
        value: function getUser(response) {
          return response.user;
        }
      }, {
        key: "register",
        value: function register(data) {
          var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/users';
          return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.getUser));
        }
      }, {
        key: "login",
        value: function login(data) {
          var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/users/login';
          return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.getUser));
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/user';
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.getUser));
        }
      }, {
        key: "updateCurrentUser",
        value: function updateCurrentUser(data) {
          var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/user';
          return this.http.put(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.getUser));
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/store/actionTypes.ts":
  /*!*******************************************!*\
    !*** ./src/app/auth/store/actionTypes.ts ***!
    \*******************************************/

  /*! exports provided: ActionTypes */

  /***/
  function srcAppAuthStoreActionTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["REGISTER"] = "[Auth] Register";
      ActionTypes["REGISTER_SUCCESS"] = "[Auth] Register success";
      ActionTypes["REGISTER_FAILURE"] = "[Auth] Register failure";
      ActionTypes["LOGIN"] = "[Auth] Login";
      ActionTypes["LOGIN_SUCCESS"] = "[Auth] Login success";
      ActionTypes["LOGIN_FAILURE"] = "[Auth] Login failure";
      ActionTypes["GET_CURRENT_USER"] = "[Auth] Get current user";
      ActionTypes["GET_CURRENT_USER_SUCCESS"] = "[Auth] Get current user success";
      ActionTypes["GET_CURRENT_USER_FAILURE"] = "[Auth] Get current user failure";
      ActionTypes["UPDATE_CURRENT_USER"] = "[Auth] Update current user";
      ActionTypes["UPDATE_CURRENT_USER_SUCCESS"] = "[Auth] Update current user success";
      ActionTypes["UPDATE_CURRENT_USER_FAILURE"] = "[Auth] Update current user failure";
      ActionTypes["LOGOUT"] = "[Auth] Logout";
    })(ActionTypes || (ActionTypes = {}));
    /***/

  },

  /***/
  "./src/app/auth/store/actions/getCurrentUser.action.ts":
  /*!*************************************************************!*\
    !*** ./src/app/auth/store/actions/getCurrentUser.action.ts ***!
    \*************************************************************/

  /*! exports provided: getCurrentUserAction, getCurrentUserSuccessAction, getCurrentUserFailureAction */

  /***/
  function srcAppAuthStoreActionsGetCurrentUserActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentUserAction", function () {
      return getCurrentUserAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentUserSuccessAction", function () {
      return getCurrentUserSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentUserFailureAction", function () {
      return getCurrentUserFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/auth/store/actionTypes */
    "./src/app/auth/store/actionTypes.ts");

    var getCurrentUserAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_CURRENT_USER);
    var getCurrentUserSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_CURRENT_USER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getCurrentUserFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_CURRENT_USER_FAILURE);
    /***/
  },

  /***/
  "./src/app/auth/store/actions/login.action.ts":
  /*!****************************************************!*\
    !*** ./src/app/auth/store/actions/login.action.ts ***!
    \****************************************************/

  /*! exports provided: loginAction, loginSuccessAction, loginFailureAction */

  /***/
  function srcAppAuthStoreActionsLoginActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginAction", function () {
      return loginAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginSuccessAction", function () {
      return loginSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginFailureAction", function () {
      return loginFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/auth/store/actionTypes */
    "./src/app/auth/store/actionTypes.ts");

    var loginAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGIN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loginSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGIN_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loginFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGIN_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/auth/store/actions/register.action.ts":
  /*!*******************************************************!*\
    !*** ./src/app/auth/store/actions/register.action.ts ***!
    \*******************************************************/

  /*! exports provided: registerAction, registerSuccessAction, registerFailureAction */

  /***/
  function srcAppAuthStoreActionsRegisterActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerAction", function () {
      return registerAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerSuccessAction", function () {
      return registerSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerFailureAction", function () {
      return registerFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/auth/store/actionTypes */
    "./src/app/auth/store/actionTypes.ts");

    var registerAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].REGISTER, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var registerSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].REGISTER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var registerFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].REGISTER_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/auth/store/actions/sync.action.ts":
  /*!***************************************************!*\
    !*** ./src/app/auth/store/actions/sync.action.ts ***!
    \***************************************************/

  /*! exports provided: logoutAction */

  /***/
  function srcAppAuthStoreActionsSyncActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logoutAction", function () {
      return logoutAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actionTypes */
    "./src/app/auth/store/actionTypes.ts");

    var logoutAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGOUT);
    /***/
  },

  /***/
  "./src/app/auth/store/actions/updateCurrentUser.action.ts":
  /*!****************************************************************!*\
    !*** ./src/app/auth/store/actions/updateCurrentUser.action.ts ***!
    \****************************************************************/

  /*! exports provided: updateCurrentUserAction, updateCurrentUserSuccessAction, updateCurrentUserFailureAction */

  /***/
  function srcAppAuthStoreActionsUpdateCurrentUserActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateCurrentUserAction", function () {
      return updateCurrentUserAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateCurrentUserSuccessAction", function () {
      return updateCurrentUserSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateCurrentUserFailureAction", function () {
      return updateCurrentUserFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/auth/store/actionTypes */
    "./src/app/auth/store/actionTypes.ts");

    var updateCurrentUserAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_CURRENT_USER, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateCurrentUserSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_CURRENT_USER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateCurrentUserFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_CURRENT_USER_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/auth/store/effects/getCurrentUser.effect.ts":
  /*!*************************************************************!*\
    !*** ./src/app/auth/store/effects/getCurrentUser.effect.ts ***!
    \*************************************************************/

  /*! exports provided: GetCurrentUserEffect */

  /***/
  function srcAppAuthStoreEffectsGetCurrentUserEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetCurrentUserEffect", function () {
      return GetCurrentUserEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/store/actions/getCurrentUser.action */
    "./src/app/auth/store/actions/getCurrentUser.action.ts");
    /* harmony import */


    var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/persistance.service */
    "./src/app/shared/services/persistance.service.ts");

    var GetCurrentUserEffect = function GetCurrentUserEffect(actions$, authService, persistanceService) {
      var _this4 = this;

      _classCallCheck(this, GetCurrentUserEffect);

      this.actions$ = actions$;
      this.authService = authService;
      this.persistanceService = persistanceService;
      this.getCurrentUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this4.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["getCurrentUserAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
          var token = _this4.persistanceService.get('accessToken');

          if (!token) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["getCurrentUserFailureAction"])());
          }

          return _this4.authService.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (currentUser) {
            return Object(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["getCurrentUserSuccessAction"])({
              currentUser: currentUser
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["getCurrentUserFailureAction"])());
          }));
        }));
      });
    };

    GetCurrentUserEffect.ɵfac = function GetCurrentUserEffect_Factory(t) {
      return new (t || GetCurrentUserEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"]));
    };

    GetCurrentUserEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetCurrentUserEffect,
      factory: GetCurrentUserEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetCurrentUserEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/store/effects/login.effect.ts":
  /*!****************************************************!*\
    !*** ./src/app/auth/store/effects/login.effect.ts ***!
    \****************************************************/

  /*! exports provided: LoginEffect */

  /***/
  function srcAppAuthStoreEffectsLoginEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginEffect", function () {
      return LoginEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/store/actions/login.action */
    "./src/app/auth/store/actions/login.action.ts");
    /* harmony import */


    var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/persistance.service */
    "./src/app/shared/services/persistance.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginEffect = function LoginEffect(actions$, authService, persistanceService, router) {
      var _this5 = this;

      _classCallCheck(this, LoginEffect);

      this.actions$ = actions$;
      this.authService = authService;
      this.persistanceService = persistanceService;
      this.router = router;
      this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this5.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__["loginAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref5) {
          var request = _ref5.request;
          return _this5.authService.login(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (currentUser) {
            _this5.persistanceService.set('accessToken', currentUser.token);

            return Object(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__["loginSuccessAction"])({
              currentUser: currentUser
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__["loginFailureAction"])({
              errors: errorResponse.error.errors
            }));
          }));
        }));
      });
      this.redirectAfterSubmit$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this5.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__["loginSuccessAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
          _this5.router.navigateByUrl('/');
        }));
      }, {
        dispatch: false
      });
    };

    LoginEffect.ɵfac = function LoginEffect_Factory(t) {
      return new (t || LoginEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    LoginEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginEffect,
      factory: LoginEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/store/effects/logout.effect.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/store/effects/logout.effect.ts ***!
    \*****************************************************/

  /*! exports provided: LogoutEffect */

  /***/
  function srcAppAuthStoreEffectsLogoutEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutEffect", function () {
      return LogoutEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var src_app_auth_store_actions_sync_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/store/actions/sync.action */
    "./src/app/auth/store/actions/sync.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/persistance.service */
    "./src/app/shared/services/persistance.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LogoutEffect = function LogoutEffect(actions$, persistanceService, router) {
      var _this6 = this;

      _classCallCheck(this, LogoutEffect);

      this.actions$ = actions$;
      this.persistanceService = persistanceService;
      this.router = router;
      this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this6.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_auth_store_actions_sync_action__WEBPACK_IMPORTED_MODULE_2__["logoutAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
          _this6.persistanceService.set('accessToken', '');

          _this6.router.navigateByUrl('/');
        }));
      }, {
        dispatch: false
      });
    };

    LogoutEffect.ɵfac = function LogoutEffect_Factory(t) {
      return new (t || LogoutEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_4__["PersistanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    LogoutEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LogoutEffect,
      factory: LogoutEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_4__["PersistanceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/store/effects/register.effect.ts":
  /*!*******************************************************!*\
    !*** ./src/app/auth/store/effects/register.effect.ts ***!
    \*******************************************************/

  /*! exports provided: RegisterEffect */

  /***/
  function srcAppAuthStoreEffectsRegisterEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterEffect", function () {
      return RegisterEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_register_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/register.action */
    "./src/app/auth/store/actions/register.action.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/persistance.service */
    "./src/app/shared/services/persistance.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegisterEffect = function RegisterEffect(actions$, authService, persistanceService, router) {
      var _this7 = this;

      _classCallCheck(this, RegisterEffect);

      this.actions$ = actions$;
      this.authService = authService;
      this.persistanceService = persistanceService;
      this.router = router;
      this.register$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this7.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_register_action__WEBPACK_IMPORTED_MODULE_3__["registerAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref6) {
          var request = _ref6.request;
          return _this7.authService.register(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (currentUser) {
            _this7.persistanceService.set('accessToken', currentUser.token);

            return Object(_actions_register_action__WEBPACK_IMPORTED_MODULE_3__["registerSuccessAction"])({
              currentUser: currentUser
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_register_action__WEBPACK_IMPORTED_MODULE_3__["registerFailureAction"])({
              errors: errorResponse.error.errors
            }));
          }));
        }));
      });
      this.redirectAfterSubmit$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this7.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_register_action__WEBPACK_IMPORTED_MODULE_3__["registerSuccessAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
          _this7.router.navigateByUrl('/');
        }));
      }, {
        dispatch: false
      });
    };

    RegisterEffect.ɵfac = function RegisterEffect_Factory(t) {
      return new (t || RegisterEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    RegisterEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegisterEffect,
      factory: RegisterEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/store/effects/updateCurrentUser.effect.ts":
  /*!****************************************************************!*\
    !*** ./src/app/auth/store/effects/updateCurrentUser.effect.ts ***!
    \****************************************************************/

  /*! exports provided: UpdateCurrentUserEffect */

  /***/
  function srcAppAuthStoreEffectsUpdateCurrentUserEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateCurrentUserEffect", function () {
      return UpdateCurrentUserEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/store/actions/updateCurrentUser.action */
    "./src/app/auth/store/actions/updateCurrentUser.action.ts");
    /* harmony import */


    var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");

    var UpdateCurrentUserEffect = function UpdateCurrentUserEffect(actions$, authService) {
      var _this8 = this;

      _classCallCheck(this, UpdateCurrentUserEffect);

      this.actions$ = actions$;
      this.authService = authService;
      this.updateCurrentUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this8.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["updateCurrentUserAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref7) {
          var currentUserInput = _ref7.currentUserInput;
          return _this8.authService.updateCurrentUser(currentUserInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (currentUser) {
            return Object(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["updateCurrentUserSuccessAction"])({
              currentUser: currentUser
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["updateCurrentUserFailureAction"])({
              errors: errorResponse.error.errors
            }));
          }));
        }));
      });
    };

    UpdateCurrentUserEffect.ɵfac = function UpdateCurrentUserEffect_Factory(t) {
      return new (t || UpdateCurrentUserEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    UpdateCurrentUserEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UpdateCurrentUserEffect,
      factory: UpdateCurrentUserEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateCurrentUserEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/store/reducers.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/store/reducers.ts ***!
    \****************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppAuthStoreReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/auth/store/actions/register.action */
    "./src/app/auth/store/actions/register.action.ts");
    /* harmony import */


    var src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/store/actions/login.action */
    "./src/app/auth/store/actions/login.action.ts");
    /* harmony import */


    var src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth/store/actions/getCurrentUser.action */
    "./src/app/auth/store/actions/getCurrentUser.action.ts");
    /* harmony import */


    var _actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./actions/updateCurrentUser.action */
    "./src/app/auth/store/actions/updateCurrentUser.action.ts");
    /* harmony import */


    var _actions_sync_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./actions/sync.action */
    "./src/app/auth/store/actions/sync.action.ts");

    var initialState = {
      isSubmitting: false,
      isLoading: false,
      currentUser: null,
      validationErrors: null,
      isLoggedIn: null
    };
    var authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_1__["registerAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: true,
        validationErrors: null
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_1__["registerSuccessAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_1__["registerFailureAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: false,
        validationErrors: action.errors
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_2__["loginAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: true,
        validationErrors: null
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_2__["loginSuccessAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_2__["loginFailureAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: false,
        validationErrors: action.errors
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_3__["getCurrentUserAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_3__["getCurrentUserSuccessAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.currentUser
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_3__["getCurrentUserFailureAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false,
        isLoggedIn: false,
        currentUser: null
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["updateCurrentUserSuccessAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        currentUser: action.currentUser
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_sync_action__WEBPACK_IMPORTED_MODULE_5__["logoutAction"], function (state) {
      return Object.assign(Object.assign(Object.assign({}, state), initialState), {
        isLoggedIn: false
      });
    }));

    function reducers(state, action) {
      return authReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/auth/store/selectors.ts":
  /*!*****************************************!*\
    !*** ./src/app/auth/store/selectors.ts ***!
    \*****************************************/

  /*! exports provided: authFeatureSelector, isSubmittingSelector, validationErrorsSelector, isLoggedInSelector, isAnonymousSelector, currentUserSelector */

  /***/
  function srcAppAuthStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authFeatureSelector", function () {
      return authFeatureSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isSubmittingSelector", function () {
      return isSubmittingSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validationErrorsSelector", function () {
      return validationErrorsSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isLoggedInSelector", function () {
      return isLoggedInSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isAnonymousSelector", function () {
      return isAnonymousSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "currentUserSelector", function () {
      return currentUserSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var authFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
    var isSubmittingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeatureSelector, function (authState) {
      return authState.isSubmitting;
    });
    var validationErrorsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeatureSelector, function (authState) {
      return authState.validationErrors;
    });
    var isLoggedInSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeatureSelector, function (authState) {
      return authState.isLoggedIn;
    });
    var isAnonymousSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeatureSelector, function (authState) {
      return authState.isLoggedIn === false;
    });
    var currentUserSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeatureSelector, function (authState) {
      return authState.currentUser;
    });
    /***/
  },

  /***/
  "./src/app/createArticle/components/createArticle/createArticle.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/createArticle/components/createArticle/createArticle.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CreateArticleComponent */

  /***/
  function srcAppCreateArticleComponentsCreateArticleCreateArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateArticleComponent", function () {
      return CreateArticleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/selectors */
    "./src/app/createArticle/store/selectors.ts");
    /* harmony import */


    var _store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../store/actions/createArticle.action */
    "./src/app/createArticle/store/actions/createArticle.action.ts");
    /* harmony import */


    var _shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/modules/articleForm/components/articleForm/articleForm.component */
    "./src/app/shared/modules/articleForm/components/articleForm/articleForm.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CreateArticleComponent = /*#__PURE__*/function () {
      function CreateArticleComponent(store) {
        _classCallCheck(this, CreateArticleComponent);

        this.store = store;
        this.initialValues = {
          title: '',
          description: '',
          body: '',
          tagList: []
        };
      }

      _createClass(CreateArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isSubmitting$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["isSubmittingSelector"]));
          this.backendErrors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["validationErrorsSelector"]));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(articleInput) {
          this.store.dispatch(Object(_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_3__["createArticleAction"])({
            articleInput: articleInput
          }));
        }
      }]);

      return CreateArticleComponent;
    }();

    CreateArticleComponent.ɵfac = function CreateArticleComponent_Factory(t) {
      return new (t || CreateArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    CreateArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateArticleComponent,
      selectors: [["mc-create-article"]],
      decls: 3,
      vars: 7,
      consts: [[3, "initialValues", "isSubmitting", "errors", "articleSubmit"]],
      template: function CreateArticleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-article-form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("articleSubmit", function CreateArticleComponent_Template_mc_article_form_articleSubmit_0_listener($event) {
            return ctx.onSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialValues", ctx.initialValues)("isSubmitting", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.isSubmitting$))("errors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.backendErrors$));
        }
      },
      directives: [_shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_4__["ArticleFormComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZUFydGljbGUvY29tcG9uZW50cy9jcmVhdGVBcnRpY2xlL2NyZWF0ZUFydGljbGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-create-article',
          templateUrl: './createArticle.component.html',
          styleUrls: ['./createArticle.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/createArticle/createArticle.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/createArticle/createArticle.module.ts ***!
    \*******************************************************/

  /*! exports provided: CreateArticleModule */

  /***/
  function srcAppCreateArticleCreateArticleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateArticleModule", function () {
      return CreateArticleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_createArticle_components_createArticle_createArticle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/createArticle/components/createArticle/createArticle.component */
    "./src/app/createArticle/components/createArticle/createArticle.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/modules/articleForm/articleForm.module */
    "./src/app/shared/modules/articleForm/articleForm.module.ts");
    /* harmony import */


    var src_app_createArticle_services_createArticle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/createArticle/services/createArticle.service */
    "./src/app/createArticle/services/createArticle.service.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _store_effects_createArticle_effect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./store/effects/createArticle.effect */
    "./src/app/createArticle/store/effects/createArticle.effect.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_createArticle_store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/createArticle/store/reducers */
    "./src/app/createArticle/store/reducers.ts");

    var routes = [{
      path: 'articles/new',
      component: src_app_createArticle_components_createArticle_createArticle_component__WEBPACK_IMPORTED_MODULE_2__["CreateArticleComponent"]
    }];

    var CreateArticleModule = function CreateArticleModule() {
      _classCallCheck(this, CreateArticleModule);
    };

    CreateArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CreateArticleModule
    });
    CreateArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CreateArticleModule_Factory(t) {
        return new (t || CreateArticleModule)();
      },
      providers: [src_app_createArticle_services_createArticle_service__WEBPACK_IMPORTED_MODULE_5__["CreateArticleService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_4__["ArticleFormModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_effects_createArticle_effect__WEBPACK_IMPORTED_MODULE_7__["CreateArticleEffect"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('createArticle', src_app_createArticle_store_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateArticleModule, {
        declarations: [src_app_createArticle_components_createArticle_createArticle_component__WEBPACK_IMPORTED_MODULE_2__["CreateArticleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_4__["ArticleFormModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_4__["ArticleFormModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_effects_createArticle_effect__WEBPACK_IMPORTED_MODULE_7__["CreateArticleEffect"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('createArticle', src_app_createArticle_store_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"])],
          declarations: [src_app_createArticle_components_createArticle_createArticle_component__WEBPACK_IMPORTED_MODULE_2__["CreateArticleComponent"]],
          providers: [src_app_createArticle_services_createArticle_service__WEBPACK_IMPORTED_MODULE_5__["CreateArticleService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/createArticle/services/createArticle.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/createArticle/services/createArticle.service.ts ***!
    \*****************************************************************/

  /*! exports provided: CreateArticleService */

  /***/
  function srcAppCreateArticleServicesCreateArticleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateArticleService", function () {
      return CreateArticleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CreateArticleService = /*#__PURE__*/function () {
      function CreateArticleService(http) {
        _classCallCheck(this, CreateArticleService);

        this.http = http;
      }

      _createClass(CreateArticleService, [{
        key: "createArticle",
        value: function createArticle(articleInput) {
          var fullUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/articles';
          return this.http.post(fullUrl, articleInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.article;
          }));
        }
      }]);

      return CreateArticleService;
    }();

    CreateArticleService.ɵfac = function CreateArticleService_Factory(t) {
      return new (t || CreateArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    CreateArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CreateArticleService,
      factory: CreateArticleService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/createArticle/store/actions/createArticle.action.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/createArticle/store/actions/createArticle.action.ts ***!
    \*********************************************************************/

  /*! exports provided: createArticleAction, createArticleSuccessAction, createArticleFailureAction */

  /***/
  function srcAppCreateArticleStoreActionsCreateArticleActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createArticleAction", function () {
      return createArticleAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createArticleSuccessAction", function () {
      return createArticleSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createArticleFailureAction", function () {
      return createArticleFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actionsTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actionsTypes */
    "./src/app/createArticle/store/actionsTypes.ts");

    var createArticleAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CREATE_ARTICLE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var createArticleSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CREATE_ARTICLE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var createArticleFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CREATE_ARTICLE_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/createArticle/store/actionsTypes.ts":
  /*!*****************************************************!*\
    !*** ./src/app/createArticle/store/actionsTypes.ts ***!
    \*****************************************************/

  /*! exports provided: ActionTypes */

  /***/
  function srcAppCreateArticleStoreActionsTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["CREATE_ARTICLE"] = "[Create article] Create Article";
      ActionTypes["CREATE_ARTICLE_SUCCESS"] = "[Create article] Create Article success";
      ActionTypes["CREATE_ARTICLE_FAILURE"] = "[Create article] Create Article failure";
    })(ActionTypes || (ActionTypes = {}));
    /***/

  },

  /***/
  "./src/app/createArticle/store/effects/createArticle.effect.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/createArticle/store/effects/createArticle.effect.ts ***!
    \*********************************************************************/

  /*! exports provided: CreateArticleEffect */

  /***/
  function srcAppCreateArticleStoreEffectsCreateArticleEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateArticleEffect", function () {
      return CreateArticleEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/createArticle/store/actions/createArticle.action */
    "./src/app/createArticle/store/actions/createArticle.action.ts");
    /* harmony import */


    var _services_createArticle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/createArticle.service */
    "./src/app/createArticle/services/createArticle.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CreateArticleEffect = function CreateArticleEffect(actions$, createArticleService, router) {
      var _this9 = this;

      _classCallCheck(this, CreateArticleEffect);

      this.actions$ = actions$;
      this.createArticleService = createArticleService;
      this.router = router;
      this.createArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["createArticleAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref8) {
          var articleInput = _ref8.articleInput;
          return _this9.createArticleService.createArticle(articleInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (article) {
            return Object(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["createArticleSuccessAction"])({
              article: article
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["createArticleFailureAction"])({
              errors: errorResponse.error.errors
            }));
          }));
        }));
      });
      this.redirectAfterCreate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["createArticleSuccessAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref9) {
          var article = _ref9.article;

          _this9.router.navigate(['/articles', article.slug]);
        }));
      }, {
        dispatch: false
      });
    };

    CreateArticleEffect.ɵfac = function CreateArticleEffect_Factory(t) {
      return new (t || CreateArticleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_createArticle_service__WEBPACK_IMPORTED_MODULE_5__["CreateArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    CreateArticleEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CreateArticleEffect,
      factory: CreateArticleEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateArticleEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_createArticle_service__WEBPACK_IMPORTED_MODULE_5__["CreateArticleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/createArticle/store/reducers.ts":
  /*!*************************************************!*\
    !*** ./src/app/createArticle/store/reducers.ts ***!
    \*************************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppCreateArticleStoreReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_createArticle_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./actions/createArticle.action */
    "./src/app/createArticle/store/actions/createArticle.action.ts");

    var initialState = {
      isSubmitting: false,
      validationErrors: null
    };
    var createArticleReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_1__["createArticleAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_1__["createArticleSuccessAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_1__["createArticleFailureAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: false,
        validationErrors: action.errors
      });
    }));

    function reducers(state, action) {
      return createArticleReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/createArticle/store/selectors.ts":
  /*!**************************************************!*\
    !*** ./src/app/createArticle/store/selectors.ts ***!
    \**************************************************/

  /*! exports provided: createArticleFeatureSelector, isSubmittingSelector, validationErrorsSelector */

  /***/
  function srcAppCreateArticleStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createArticleFeatureSelector", function () {
      return createArticleFeatureSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isSubmittingSelector", function () {
      return isSubmittingSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validationErrorsSelector", function () {
      return validationErrorsSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var createArticleFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('createArticle');
    var isSubmittingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(createArticleFeatureSelector, function (createArticleState) {
      return createArticleState.isSubmitting;
    });
    var validationErrorsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(createArticleFeatureSelector, function (createArticleState) {
      return createArticleState.validationErrors;
    });
    /***/
  },

  /***/
  "./src/app/editArticle/components/editArticle/editArticle.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/editArticle/components/editArticle/editArticle.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: EditArticleComponent */

  /***/
  function srcAppEditArticleComponentsEditArticleEditArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditArticleComponent", function () {
      return EditArticleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/selectors */
    "./src/app/editArticle/store/selectors.ts");
    /* harmony import */


    var _store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../store/actions/getArticle.action */
    "./src/app/editArticle/store/actions/getArticle.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_editArticle_store_actions_updateArticle_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/editArticle/store/actions/updateArticle.action */
    "./src/app/editArticle/store/actions/updateArticle.action.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/modules/loading/components/loading/loading.component */
    "./src/app/shared/modules/loading/components/loading/loading.component.ts");
    /* harmony import */


    var _shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/modules/articleForm/components/articleForm/articleForm.component */
    "./src/app/shared/modules/articleForm/components/articleForm/articleForm.component.ts");

    function EditArticleComponent_mc_loading_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-loading");
      }
    }

    function EditArticleComponent_mc_article_form_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-article-form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("articleSubmit", function EditArticleComponent_mc_article_form_2_Template_mc_article_form_articleSubmit_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.onSubmit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r31.initialValues$))("isSubmitting", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r31.isSubmitting$))("errors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r31.backendErrors$));
      }
    }

    var EditArticleComponent = /*#__PURE__*/function () {
      function EditArticleComponent(store, route) {
        _classCallCheck(this, EditArticleComponent);

        this.store = store;
        this.route = route;
      }

      _createClass(EditArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initialValues();
          this.fetchData();
        }
      }, {
        key: "initialValues",
        value: function initialValues() {
          this.slug = this.route.snapshot.paramMap.get('slug');
          this.isSubmitting$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["isSubmittingSelector"]));
          this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["isLoadingSelector"]));
          this.backendErrors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["validationErrorsSelector"]));
          this.initialValues$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["articleSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (article) {
            return {
              title: article.title,
              description: article.description,
              body: article.body,
              tagList: article.tagList
            };
          }));
        }
      }, {
        key: "fetchData",
        value: function fetchData() {
          this.store.dispatch(Object(_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_3__["getArticleAction"])({
            slug: this.slug
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(articleInput) {
          this.store.dispatch(Object(src_app_editArticle_store_actions_updateArticle_action__WEBPACK_IMPORTED_MODULE_5__["updateArticleAction"])({
            slug: this.slug,
            articleInput: articleInput
          }));
        }
      }]);

      return EditArticleComponent;
    }();

    EditArticleComponent.ɵfac = function EditArticleComponent_Factory(t) {
      return new (t || EditArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    EditArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditArticleComponent,
      selectors: [["mc-edit-article"]],
      decls: 4,
      vars: 6,
      consts: [[4, "ngIf"], [3, "initialValues", "isSubmitting", "errors", "articleSubmit", 4, "ngIf"], [3, "initialValues", "isSubmitting", "errors", "articleSubmit"]],
      template: function EditArticleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditArticleComponent_mc_loading_0_Template, 1, 0, "mc-loading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditArticleComponent_mc_article_form_2_Template, 4, 9, "mc-article-form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.isLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.initialValues$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_9__["ArticleFormComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRBcnRpY2xlL2NvbXBvbmVudHMvZWRpdEFydGljbGUvZWRpdEFydGljbGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-edit-article',
          templateUrl: './editArticle.component.html',
          styleUrls: ['./editArticle.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/editArticle/editArticle.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/editArticle/editArticle.module.ts ***!
    \***************************************************/

  /*! exports provided: EditArticleModule */

  /***/
  function srcAppEditArticleEditArticleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditArticleModule", function () {
      return EditArticleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/articleForm/articleForm.module */
    "./src/app/shared/modules/articleForm/articleForm.module.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_editArticle_store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/editArticle/store/reducers */
    "./src/app/editArticle/store/reducers.ts");
    /* harmony import */


    var _components_editArticle_editArticle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/editArticle/editArticle.component */
    "./src/app/editArticle/components/editArticle/editArticle.component.ts");
    /* harmony import */


    var _store_effects_updateArticle_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./store/effects/updateArticle.effect */
    "./src/app/editArticle/store/effects/updateArticle.effect.ts");
    /* harmony import */


    var _store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./store/effects/getArticle.effect */
    "./src/app/editArticle/store/effects/getArticle.effect.ts");
    /* harmony import */


    var src_app_editArticle_services_editArticle_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/editArticle/services/editArticle.service */
    "./src/app/editArticle/services/editArticle.service.ts");
    /* harmony import */


    var src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/article.service */
    "./src/app/shared/services/article.service.ts");
    /* harmony import */


    var _shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../shared/modules/loading/loading.module */
    "./src/app/shared/modules/loading/loading.module.ts");

    var routes = [{
      path: 'articles/:slug/edit',
      component: _components_editArticle_editArticle_component__WEBPACK_IMPORTED_MODULE_7__["EditArticleComponent"]
    }];

    var EditArticleModule = function EditArticleModule() {
      _classCallCheck(this, EditArticleModule);
    };

    EditArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EditArticleModule
    });
    EditArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EditArticleModule_Factory(t) {
        return new (t || EditArticleModule)();
      },
      providers: [src_app_editArticle_services_editArticle_service__WEBPACK_IMPORTED_MODULE_10__["EditArticleService"], src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_11__["ArticleService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_3__["ArticleFormModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_effects_updateArticle_effect__WEBPACK_IMPORTED_MODULE_8__["UpdateArticleEffect"], _store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_9__["GetArticleEffect"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('editArticle', src_app_editArticle_store_reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"]), _shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_12__["LoadingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditArticleModule, {
        declarations: [_components_editArticle_editArticle_component__WEBPACK_IMPORTED_MODULE_7__["EditArticleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_3__["ArticleFormModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"], _shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_12__["LoadingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_3__["ArticleFormModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_effects_updateArticle_effect__WEBPACK_IMPORTED_MODULE_8__["UpdateArticleEffect"], _store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_9__["GetArticleEffect"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('editArticle', src_app_editArticle_store_reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"]), _shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_12__["LoadingModule"]],
          declarations: [_components_editArticle_editArticle_component__WEBPACK_IMPORTED_MODULE_7__["EditArticleComponent"]],
          providers: [src_app_editArticle_services_editArticle_service__WEBPACK_IMPORTED_MODULE_10__["EditArticleService"], src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_11__["ArticleService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/editArticle/services/editArticle.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/editArticle/services/editArticle.service.ts ***!
    \*************************************************************/

  /*! exports provided: EditArticleService */

  /***/
  function srcAppEditArticleServicesEditArticleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditArticleService", function () {
      return EditArticleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var EditArticleService = /*#__PURE__*/function () {
      function EditArticleService(http) {
        _classCallCheck(this, EditArticleService);

        this.http = http;
      }

      _createClass(EditArticleService, [{
        key: "updateArticle",
        value: function updateArticle(slug, articleInput) {
          var fullUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/articles/").concat(slug);
          return this.http.put(fullUrl, articleInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.article;
          }));
        }
      }]);

      return EditArticleService;
    }();

    EditArticleService.ɵfac = function EditArticleService_Factory(t) {
      return new (t || EditArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    EditArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EditArticleService,
      factory: EditArticleService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/editArticle/store/actions/getArticle.action.ts":
  /*!****************************************************************!*\
    !*** ./src/app/editArticle/store/actions/getArticle.action.ts ***!
    \****************************************************************/

  /*! exports provided: getArticleAction, getArticleSuccessAction, getArticleFailureAction */

  /***/
  function srcAppEditArticleStoreActionsGetArticleActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getArticleAction", function () {
      return getArticleAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getArticleSuccessAction", function () {
      return getArticleSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getArticleFailureAction", function () {
      return getArticleFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actionsTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actionsTypes */
    "./src/app/editArticle/store/actionsTypes.ts");

    var getArticleAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_ARTICLE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getArticleSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_ARTICLE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getArticleFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_ARTICLE_FAILURE);
    /***/
  },

  /***/
  "./src/app/editArticle/store/actions/updateArticle.action.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/editArticle/store/actions/updateArticle.action.ts ***!
    \*******************************************************************/

  /*! exports provided: updateArticleAction, updateArticleSuccessAction, updateArticleFailureAction */

  /***/
  function srcAppEditArticleStoreActionsUpdateArticleActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateArticleAction", function () {
      return updateArticleAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateArticleSuccessAction", function () {
      return updateArticleSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateArticleFailureAction", function () {
      return updateArticleFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actionsTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actionsTypes */
    "./src/app/editArticle/store/actionsTypes.ts");

    var updateArticleAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_ARTICLE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateArticleSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_ARTICLE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateArticleFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_ARTICLE_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/editArticle/store/actionsTypes.ts":
  /*!***************************************************!*\
    !*** ./src/app/editArticle/store/actionsTypes.ts ***!
    \***************************************************/

  /*! exports provided: ActionTypes */

  /***/
  function srcAppEditArticleStoreActionsTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["UPDATE_ARTICLE"] = "[Update article] Update Article";
      ActionTypes["UPDATE_ARTICLE_SUCCESS"] = "[Update article] Update Article success";
      ActionTypes["UPDATE_ARTICLE_FAILURE"] = "[Update article] Update Article failure";
      ActionTypes["GET_ARTICLE"] = "[Update article] Get Article";
      ActionTypes["GET_ARTICLE_SUCCESS"] = "[Update article] Get Article success";
      ActionTypes["GET_ARTICLE_FAILURE"] = "[Update article] Get Article failure";
    })(ActionTypes || (ActionTypes = {}));
    /***/

  },

  /***/
  "./src/app/editArticle/store/effects/getArticle.effect.ts":
  /*!****************************************************************!*\
    !*** ./src/app/editArticle/store/effects/getArticle.effect.ts ***!
    \****************************************************************/

  /*! exports provided: GetArticleEffect */

  /***/
  function srcAppEditArticleStoreEffectsGetArticleEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetArticleEffect", function () {
      return GetArticleEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/getArticle.action */
    "./src/app/editArticle/store/actions/getArticle.action.ts");
    /* harmony import */


    var src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/article.service */
    "./src/app/shared/services/article.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GetArticleEffect = function GetArticleEffect(actions$, sharedArticleService, router) {
      var _this10 = this;

      _classCallCheck(this, GetArticleEffect);

      this.actions$ = actions$;
      this.sharedArticleService = sharedArticleService;
      this.router = router;
      this.getArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this10.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref10) {
          var slug = _ref10.slug;
          return _this10.sharedArticleService.getArticle(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (article) {
            return Object(_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleSuccessAction"])({
              article: article
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleFailureAction"])());
          }));
        }));
      });
    };

    GetArticleEffect.ɵfac = function GetArticleEffect_Factory(t) {
      return new (t || GetArticleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    GetArticleEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetArticleEffect,
      factory: GetArticleEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetArticleEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/editArticle/store/effects/updateArticle.effect.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/editArticle/store/effects/updateArticle.effect.ts ***!
    \*******************************************************************/

  /*! exports provided: UpdateArticleEffect */

  /***/
  function srcAppEditArticleStoreEffectsUpdateArticleEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateArticleEffect", function () {
      return UpdateArticleEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _actions_updateArticle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/updateArticle.action */
    "./src/app/editArticle/store/actions/updateArticle.action.ts");
    /* harmony import */


    var _services_editArticle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/editArticle.service */
    "./src/app/editArticle/services/editArticle.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UpdateArticleEffect = function UpdateArticleEffect(actions$, editArticleService, router) {
      var _this11 = this;

      _classCallCheck(this, UpdateArticleEffect);

      this.actions$ = actions$;
      this.editArticleService = editArticleService;
      this.router = router;
      this.updateArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this11.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_updateArticle_action__WEBPACK_IMPORTED_MODULE_4__["updateArticleAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref11) {
          var slug = _ref11.slug,
              articleInput = _ref11.articleInput;
          return _this11.editArticleService.updateArticle(slug, articleInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (article) {
            return Object(_actions_updateArticle_action__WEBPACK_IMPORTED_MODULE_4__["updateArticleSuccessAction"])({
              article: article
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_actions_updateArticle_action__WEBPACK_IMPORTED_MODULE_4__["updateArticleFailureAction"])({
              errors: errorResponse.error.errors
            }));
          }));
        }));
      });
      this.redirectAfterUpdate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this11.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_updateArticle_action__WEBPACK_IMPORTED_MODULE_4__["updateArticleSuccessAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref12) {
          var article = _ref12.article;

          _this11.router.navigate(['/articles', article.slug]);
        }));
      }, {
        dispatch: false
      });
    };

    UpdateArticleEffect.ɵfac = function UpdateArticleEffect_Factory(t) {
      return new (t || UpdateArticleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_editArticle_service__WEBPACK_IMPORTED_MODULE_5__["EditArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    UpdateArticleEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UpdateArticleEffect,
      factory: UpdateArticleEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateArticleEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_editArticle_service__WEBPACK_IMPORTED_MODULE_5__["EditArticleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/editArticle/store/reducers.ts":
  /*!***********************************************!*\
    !*** ./src/app/editArticle/store/reducers.ts ***!
    \***********************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppEditArticleStoreReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_editArticle_store_actions_updateArticle_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/editArticle/store/actions/updateArticle.action */
    "./src/app/editArticle/store/actions/updateArticle.action.ts");
    /* harmony import */


    var src_app_editArticle_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/editArticle/store/actions/getArticle.action */
    "./src/app/editArticle/store/actions/getArticle.action.ts");

    var initialState = {
      isLoading: false,
      article: null,
      isSubmitting: false,
      validationErrors: null
    };
    var editArticleReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_editArticle_store_actions_updateArticle_action__WEBPACK_IMPORTED_MODULE_1__["updateArticleAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_editArticle_store_actions_updateArticle_action__WEBPACK_IMPORTED_MODULE_1__["updateArticleSuccessAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_editArticle_store_actions_updateArticle_action__WEBPACK_IMPORTED_MODULE_1__["updateArticleFailureAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: false,
        validationErrors: action.errors
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_editArticle_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__["getArticleAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_editArticle_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__["getArticleSuccessAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false,
        article: action.article
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_editArticle_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__["getArticleFailureAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false
      });
    }));

    function reducers(state, action) {
      return editArticleReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/editArticle/store/selectors.ts":
  /*!************************************************!*\
    !*** ./src/app/editArticle/store/selectors.ts ***!
    \************************************************/

  /*! exports provided: editArticleFeatureSelector, articleSelector, isLoadingSelector, isSubmittingSelector, validationErrorsSelector */

  /***/
  function srcAppEditArticleStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "editArticleFeatureSelector", function () {
      return editArticleFeatureSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "articleSelector", function () {
      return articleSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isLoadingSelector", function () {
      return isLoadingSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isSubmittingSelector", function () {
      return isSubmittingSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validationErrorsSelector", function () {
      return validationErrorsSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var editArticleFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('editArticle');
    var articleSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(editArticleFeatureSelector, function (editArticleState) {
      return editArticleState.article;
    });
    var isLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(editArticleFeatureSelector, function (editArticleState) {
      return editArticleState.isLoading;
    });
    var isSubmittingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(editArticleFeatureSelector, function (editArticleState) {
      return editArticleState.isSubmitting;
    });
    var validationErrorsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(editArticleFeatureSelector, function (editArticleState) {
      return editArticleState.validationErrors;
    });
    /***/
  },

  /***/
  "./src/app/globalFeed/components/globalFeed/globalFeed.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/globalFeed/components/globalFeed/globalFeed.component.ts ***!
    \**************************************************************************/

  /*! exports provided: GlobalFeedComponent */

  /***/
  function srcAppGlobalFeedComponentsGlobalFeedGlobalFeedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalFeedComponent", function () {
      return GlobalFeedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/modules/banner/components/banner/banner.component */
    "./src/app/shared/modules/banner/components/banner/banner.component.ts");
    /* harmony import */


    var src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component */
    "./src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component.ts");
    /* harmony import */


    var src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/feed/components/feed/feed.component */
    "./src/app/shared/modules/feed/components/feed/feed.component.ts");
    /* harmony import */


    var src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/components/popularTags/popularTags.component */
    "./src/app/shared/modules/popularTags/components/popularTags/popularTags.component.ts");

    var GlobalFeedComponent = function GlobalFeedComponent() {
      _classCallCheck(this, GlobalFeedComponent);

      this.apiUrl = '/articles';
    };

    GlobalFeedComponent.ɵfac = function GlobalFeedComponent_Factory(t) {
      return new (t || GlobalFeedComponent)();
    };

    GlobalFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GlobalFeedComponent,
      selectors: [["mc-global-feed"]],
      decls: 9,
      vars: 1,
      consts: [[1, "home-page"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [3, "apiUrl"], [1, "col-md-3"]],
      template: function GlobalFeedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mc-feed-toggler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mc-feed", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mc-popular-tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("apiUrl", ctx.apiUrl);
        }
      },
      directives: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__["FeedTogglerComponent"], src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"], src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_4__["PopularTagsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbEZlZWQvY29tcG9uZW50cy9nbG9iYWxGZWVkL2dsb2JhbEZlZWQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalFeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-global-feed',
          templateUrl: './globalFeed.component.html',
          styleUrls: ['./globalFeed.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/globalFeed/globalFeed.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/globalFeed/globalFeed.module.ts ***!
    \*************************************************/

  /*! exports provided: GlobalFeedModule */

  /***/
  function srcAppGlobalFeedGlobalFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalFeedModule", function () {
      return GlobalFeedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_globalFeed_components_globalFeed_globalFeed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/globalFeed/components/globalFeed/globalFeed.component */
    "./src/app/globalFeed/components/globalFeed/globalFeed.component.ts");
    /* harmony import */


    var src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/modules/feed/feed.module */
    "./src/app/shared/modules/feed/feed.module.ts");
    /* harmony import */


    var src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/modules/banner/banner.module */
    "./src/app/shared/modules/banner/banner.module.ts");
    /* harmony import */


    var _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/modules/popularTags/popularTags.module */
    "./src/app/shared/modules/popularTags/popularTags.module.ts");
    /* harmony import */


    var src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/modules/feedToggler/feedToggler.module */
    "./src/app/shared/modules/feedToggler/feedToggler.module.ts");

    var routes = [{
      path: '',
      component: src_app_globalFeed_components_globalFeed_globalFeed_component__WEBPACK_IMPORTED_MODULE_3__["GlobalFeedComponent"]
    }];

    var GlobalFeedModule = function GlobalFeedModule() {
      _classCallCheck(this, GlobalFeedModule);
    };

    GlobalFeedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GlobalFeedModule
    });
    GlobalFeedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GlobalFeedModule_Factory(t) {
        return new (t || GlobalFeedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"], _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"], src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__["FeedTogglerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlobalFeedModule, {
        declarations: [src_app_globalFeed_components_globalFeed_globalFeed_component__WEBPACK_IMPORTED_MODULE_3__["GlobalFeedComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"], _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"], src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__["FeedTogglerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalFeedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"], _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"], src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__["FeedTogglerModule"]],
          declarations: [src_app_globalFeed_components_globalFeed_globalFeed_component__WEBPACK_IMPORTED_MODULE_3__["GlobalFeedComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/settings/components/settings/settings.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/settings/components/settings/settings.component.ts ***!
    \********************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppSettingsComponentsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/store/selectors */
    "./src/app/auth/store/selectors.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../store/selectors */
    "./src/app/settings/store/selectors.ts");
    /* harmony import */


    var src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth/store/actions/updateCurrentUser.action */
    "./src/app/auth/store/actions/updateCurrentUser.action.ts");
    /* harmony import */


    var src_app_auth_store_actions_sync_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/auth/store/actions/sync.action */
    "./src/app/auth/store/actions/sync.action.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component */
    "./src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component.ts");

    function SettingsComponent_div_0_mc_backend_error_messages_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-backend-error-messages", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backendErrors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r35.backendErrors$));
      }
    }

    function SettingsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SettingsComponent_div_0_mc_backend_error_messages_6_Template, 2, 3, "mc-backend-error-messages", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_div_0_Template_form_ngSubmit_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fieldset", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fieldset", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "fieldset", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fieldset", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fieldset", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_0_Template_button_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0412\u044B\u0445\u043E\u0434 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx_r34.backendErrors$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r34.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r34.form.invalid || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 5, ctx_r34.isSubmitting$));
      }
    }

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(fb, store) {
        _classCallCheck(this, SettingsComponent);

        this.fb = fb;
        this.store = store;
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeValues();
          this.initializeListeners();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentUserSubscription.unsubscribe();
        }
      }, {
        key: "initializeValues",
        value: function initializeValues() {
          this.isSubmitting$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["isSubmittingSelector"]));
          this.backendErrors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["validationErrorsSelector"]));
        }
      }, {
        key: "initializeListeners",
        value: function initializeListeners() {
          var _this12 = this;

          this.currentUserSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__["currentUserSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe(function (currentUser) {
            _this12.currentUser = currentUser;

            _this12.initializeForm();
          });
        }
      }, {
        key: "initializeForm",
        value: function initializeForm() {
          this.form = this.fb.group({
            image: this.currentUser.image,
            username: this.currentUser.username,
            bio: this.currentUser.bio,
            email: this.currentUser.email,
            password: ''
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var currentUserInput = Object.assign(Object.assign({}, this.currentUser), this.form.value);
          this.store.dispatch(Object(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_5__["updateCurrentUserAction"])({
            currentUserInput: currentUserInput
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.store.dispatch(Object(src_app_auth_store_actions_sync_action__WEBPACK_IMPORTED_MODULE_6__["logoutAction"])());
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["mc-settings"]],
      decls: 1,
      vars: 1,
      consts: [["class", "settings-page", 4, "ngIf"], [1, "settings-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "backendErrors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "image", "placeholder", "URL of profile picture", 1, "form-control", "form-control-lg"], ["type", "text", "formControlName", "username", "placeholder", "Username", 1, "form-control", "form-control-lg"], ["type", "text", "formControlName", "bio", "placeholder", "Short bio about you", 1, "form-control", "form-control-lg"], ["type", "text", "formControlName", "email", "placeholder", "Email", 1, "form-control", "form-control-lg"], ["type", "password", "formControlName", "password", "placeholder", "New password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], ["type", "text", 1, "btn", "btn-outline-danger", 3, "click"], [3, "backendErrors"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SettingsComponent_div_0_Template, 26, 7, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_9__["BackendErrorMessagesComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-settings',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/settings/settings.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/settings/settings.module.ts ***!
    \*********************************************/

  /*! exports provided: SettingsModule */

  /***/
  function srcAppSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsModule", function () {
      return SettingsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_settings_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/settings/components/settings/settings.component */
    "./src/app/settings/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_settings_store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/settings/store/reducers */
    "./src/app/settings/store/reducers.ts");
    /* harmony import */


    var src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/modules/backendErrorMessages/backendErrorMessages.module */
    "./src/app/shared/modules/backendErrorMessages/backendErrorMessages.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var routes = [{
      path: 'settings',
      component: src_app_settings_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]
    }];

    var SettingsModule = function SettingsModule() {
      _classCallCheck(this, SettingsModule);
    };

    SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SettingsModule
    });
    SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SettingsModule_Factory(t) {
        return new (t || SettingsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('settings', src_app_settings_store_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]), src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_6__["BackendErrorMessagesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsModule, {
        declarations: [src_app_settings_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_6__["BackendErrorMessagesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('settings', src_app_settings_store_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]), src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_6__["BackendErrorMessagesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
          declarations: [src_app_settings_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/settings/store/reducers.ts":
  /*!********************************************!*\
    !*** ./src/app/settings/store/reducers.ts ***!
    \********************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppSettingsStoreReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/auth/store/actions/updateCurrentUser.action */
    "./src/app/auth/store/actions/updateCurrentUser.action.ts");

    var initialState = {
      isSubmitting: false,
      validationErrors: null
    };
    var settingsReducers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__["updateCurrentUserAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__["updateCurrentUserSuccessAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__["updateCurrentUserFailureAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isSubmitting: false,
        validationErrors: action.errors
      });
    }));

    function reducers(state, action) {
      return settingsReducers(state, action);
    }
    /***/

  },

  /***/
  "./src/app/settings/store/selectors.ts":
  /*!*********************************************!*\
    !*** ./src/app/settings/store/selectors.ts ***!
    \*********************************************/

  /*! exports provided: settingsFeatureSelector, isSubmittingSelector, validationErrorsSelector */

  /***/
  function srcAppSettingsStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "settingsFeatureSelector", function () {
      return settingsFeatureSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isSubmittingSelector", function () {
      return isSubmittingSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validationErrorsSelector", function () {
      return validationErrorsSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var settingsFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('settings');
    var isSubmittingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(settingsFeatureSelector, function (settingsState) {
      return settingsState.isSubmitting;
    });
    var validationErrorsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(settingsFeatureSelector, function (settingsState) {
      return settingsState.validationErrors;
    });
    /***/
  },

  /***/
  "./src/app/shared/modules/addToFavorites/addToFavorites.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/modules/addToFavorites/addToFavorites.module.ts ***!
    \************************************************************************/

  /*! exports provided: AddToFavoriteModule */

  /***/
  function srcAppSharedModulesAddToFavoritesAddToFavoritesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddToFavoriteModule", function () {
      return AddToFavoriteModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component */
    "./src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component.ts");
    /* harmony import */


    var src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/addToFavorites/services/addToFavorites.service */
    "./src/app/shared/modules/addToFavorites/services/addToFavorites.service.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _store_effects_addToFavorites_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store/effects/addToFavorites.effect */
    "./src/app/shared/modules/addToFavorites/store/effects/addToFavorites.effect.ts");

    var AddToFavoriteModule = function AddToFavoriteModule() {
      _classCallCheck(this, AddToFavoriteModule);
    };

    AddToFavoriteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddToFavoriteModule
    });
    AddToFavoriteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddToFavoriteModule_Factory(t) {
        return new (t || AddToFavoriteModule)();
      },
      providers: [src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_3__["AddToFavoritesService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_effects_addToFavorites_effect__WEBPACK_IMPORTED_MODULE_5__["AddToFavoritesEffect"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddToFavoriteModule, {
        declarations: [src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_2__["AddToFavoriteComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]],
        exports: [src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_2__["AddToFavoriteComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddToFavoriteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_effects_addToFavorites_effect__WEBPACK_IMPORTED_MODULE_5__["AddToFavoritesEffect"]])],
          declarations: [src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_2__["AddToFavoriteComponent"]],
          exports: [src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_2__["AddToFavoriteComponent"]],
          providers: [src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_3__["AddToFavoritesService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: AddToFavoriteComponent */

  /***/
  function srcAppSharedModulesAddToFavoritesComponentsAddToFavoritesAddToFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddToFavoriteComponent", function () {
      return AddToFavoriteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/actions/addToFavorites.action */
    "./src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a2, a3) {
      return {
        btn: true,
        "btn-sm": true,
        "btn-primary": a2,
        "btn-outline-primary": a3
      };
    };

    var AddToFavoriteComponent = /*#__PURE__*/function () {
      function AddToFavoriteComponent(store) {
        _classCallCheck(this, AddToFavoriteComponent);

        this.store = store;
      }

      _createClass(AddToFavoriteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.favoritesCount = this.favoritesCountProps;
          this.isFavorited = this.isFavoritedProps;
        }
      }, {
        key: "handleLike",
        value: function handleLike() {
          this.store.dispatch(Object(_store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_1__["addToFavoritesAction"])({
            isFavorited: this.isFavorited,
            slug: this.articleSlugProps
          }));

          if (this.isFavorited) {
            this.favoritesCount = this.favoritesCount - 1;
          } else {
            this.favoritesCount = this.favoritesCount + 1;
          }

          this.isFavorited = !this.isFavorited;
        }
      }]);

      return AddToFavoriteComponent;
    }();

    AddToFavoriteComponent.ɵfac = function AddToFavoriteComponent_Factory(t) {
      return new (t || AddToFavoriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    AddToFavoriteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddToFavoriteComponent,
      selectors: [["mc-add-to-favorites"]],
      inputs: {
        isFavoritedProps: ["isFavorited", "isFavoritedProps"],
        favoritesCountProps: ["favoritesCount", "favoritesCountProps"],
        articleSlugProps: ["articleSlug", "articleSlugProps"]
      },
      decls: 4,
      vars: 5,
      consts: [[3, "ngClass", "click"], [1, "ion-heart"]],
      template: function AddToFavoriteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddToFavoriteComponent_Template_button_click_0_listener() {
            return ctx.handleLike();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.isFavorited, !ctx.isFavorited));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 ", ctx.favoritesCount, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2FkZFRvRmF2b3JpdGVzL2NvbXBvbmVudHMvYWRkVG9GYXZvcml0ZXMvYWRkVG9GYXZvcml0ZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddToFavoriteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-add-to-favorites',
          templateUrl: './addToFavorites.component.html',
          styleUrls: ['./addToFavorites.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, {
        isFavoritedProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['isFavorited']
        }],
        favoritesCountProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['favoritesCount']
        }],
        articleSlugProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['articleSlug']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/addToFavorites/services/addToFavorites.service.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/shared/modules/addToFavorites/services/addToFavorites.service.ts ***!
    \**********************************************************************************/

  /*! exports provided: AddToFavoritesService */

  /***/
  function srcAppSharedModulesAddToFavoritesServicesAddToFavoritesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddToFavoritesService", function () {
      return AddToFavoritesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AddToFavoritesService = /*#__PURE__*/function () {
      function AddToFavoritesService(http) {
        _classCallCheck(this, AddToFavoritesService);

        this.http = http;
      }

      _createClass(AddToFavoritesService, [{
        key: "addToFavorites",
        value: function addToFavorites(slug) {
          var url = this.getUrl(slug);
          return this.http.post(url, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.getArticle));
        }
      }, {
        key: "removeFromFavorites",
        value: function removeFromFavorites(slug) {
          var url = this.getUrl(slug);
          return this.http["delete"](url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.getArticle));
        }
      }, {
        key: "getUrl",
        value: function getUrl(slug) {
          return "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/articles/").concat(slug, "/favorite");
        }
      }, {
        key: "getArticle",
        value: function getArticle(response) {
          return response.article;
        }
      }]);

      return AddToFavoritesService;
    }();

    AddToFavoritesService.ɵfac = function AddToFavoritesService_Factory(t) {
      return new (t || AddToFavoritesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AddToFavoritesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AddToFavoritesService,
      factory: AddToFavoritesService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddToFavoritesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/addToFavorites/store/actionTypes.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/modules/addToFavorites/store/actionTypes.ts ***!
    \********************************************************************/

  /*! exports provided: ActionTypes */

  /***/
  function srcAppSharedModulesAddToFavoritesStoreActionTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["ADD_TO_FAVORITES"] = "[Add to favorites] Add to favorites";
      ActionTypes["ADD_TO_FAVORITES_SUCCESS"] = "[Add to favorites] Add to favorites success";
      ActionTypes["ADD_TO_FAVORITES_FAILURE"] = "[Add to favorites] Add to favorites failure";
    })(ActionTypes || (ActionTypes = {}));
    /***/

  },

  /***/
  "./src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action.ts ***!
    \**************************************************************************************/

  /*! exports provided: addToFavoritesAction, addToFavoritesSuccessAction, addToFavoritesFailureAction */

  /***/
  function srcAppSharedModulesAddToFavoritesStoreActionsAddToFavoritesActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addToFavoritesAction", function () {
      return addToFavoritesAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addToFavoritesSuccessAction", function () {
      return addToFavoritesSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addToFavoritesFailureAction", function () {
      return addToFavoritesFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_shared_modules_addToFavorites_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/modules/addToFavorites/store/actionTypes */
    "./src/app/shared/modules/addToFavorites/store/actionTypes.ts");

    var addToFavoritesAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_addToFavorites_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ADD_TO_FAVORITES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addToFavoritesSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_addToFavorites_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ADD_TO_FAVORITES_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addToFavoritesFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_addToFavorites_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ADD_TO_FAVORITES_FAILURE);
    /***/
  },

  /***/
  "./src/app/shared/modules/addToFavorites/store/effects/addToFavorites.effect.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/modules/addToFavorites/store/effects/addToFavorites.effect.ts ***!
    \**************************************************************************************/

  /*! exports provided: AddToFavoritesEffect */

  /***/
  function srcAppSharedModulesAddToFavoritesStoreEffectsAddToFavoritesEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddToFavoritesEffect", function () {
      return AddToFavoritesEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_modules_addToFavorites_store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action */
    "./src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action.ts");
    /* harmony import */


    var src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/modules/addToFavorites/services/addToFavorites.service */
    "./src/app/shared/modules/addToFavorites/services/addToFavorites.service.ts");

    var AddToFavoritesEffect = function AddToFavoritesEffect(actions$, addToFavoritesService) {
      var _this13 = this;

      _classCallCheck(this, AddToFavoritesEffect);

      this.actions$ = actions$;
      this.addToFavoritesService = addToFavoritesService;
      this.addToFavorites$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this13.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_shared_modules_addToFavorites_store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_4__["addToFavoritesAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref13) {
          var isFavorited = _ref13.isFavorited,
              slug = _ref13.slug;
          var article$ = isFavorited ? _this13.addToFavoritesService.removeFromFavorites(slug) : _this13.addToFavoritesService.addToFavorites(slug);
          return article$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (article) {
            return Object(src_app_shared_modules_addToFavorites_store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_4__["addToFavoritesSuccessAction"])({
              article: article
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(src_app_shared_modules_addToFavorites_store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_4__["addToFavoritesFailureAction"])());
          }));
        }));
      });
    };

    AddToFavoritesEffect.ɵfac = function AddToFavoritesEffect_Factory(t) {
      return new (t || AddToFavoritesEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_5__["AddToFavoritesService"]));
    };

    AddToFavoritesEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AddToFavoritesEffect,
      factory: AddToFavoritesEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddToFavoritesEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_5__["AddToFavoritesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/articleForm/articleForm.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/modules/articleForm/articleForm.module.ts ***!
    \******************************************************************/

  /*! exports provided: ArticleFormModule */

  /***/
  function srcAppSharedModulesArticleFormArticleFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleFormModule", function () {
      return ArticleFormModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/articleForm/articleForm.component */
    "./src/app/shared/modules/articleForm/components/articleForm/articleForm.component.ts");
    /* harmony import */


    var src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/backendErrorMessages/backendErrorMessages.module */
    "./src/app/shared/modules/backendErrorMessages/backendErrorMessages.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ArticleFormModule = function ArticleFormModule() {
      _classCallCheck(this, ArticleFormModule);
    };

    ArticleFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ArticleFormModule
    });
    ArticleFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ArticleFormModule_Factory(t) {
        return new (t || ArticleFormModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_3__["BackendErrorMessagesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArticleFormModule, {
        declarations: [_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_2__["ArticleFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_3__["BackendErrorMessagesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
        exports: [_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_2__["ArticleFormComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_3__["BackendErrorMessagesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
          declarations: [_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_2__["ArticleFormComponent"]],
          exports: [_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_2__["ArticleFormComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/articleForm/components/articleForm/articleForm.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/shared/modules/articleForm/components/articleForm/articleForm.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ArticleFormComponent */

  /***/
  function srcAppSharedModulesArticleFormComponentsArticleFormArticleFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleFormComponent", function () {
      return ArticleFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component */
    "./src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component.ts");

    function ArticleFormComponent_mc_backend_error_messages_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-backend-error-messages", 12);
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backendErrors", ctx_r29.errorsProps);
      }
    }

    var ArticleFormComponent = /*#__PURE__*/function () {
      function ArticleFormComponent(fb) {
        _classCallCheck(this, ArticleFormComponent);

        this.fb = fb;
        this.articleSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ArticleFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeForm();
        }
      }, {
        key: "initializeForm",
        value: function initializeForm() {
          this.form = this.fb.group({
            title: this.initialValuesProps.title,
            description: this.initialValuesProps.description,
            body: this.initialValuesProps.body,
            tagList: this.initialValuesProps.tagList.join(' ')
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.articleSubmitEvent.emit(this.form.value);
        }
      }]);

      return ArticleFormComponent;
    }();

    ArticleFormComponent.ɵfac = function ArticleFormComponent_Factory(t) {
      return new (t || ArticleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ArticleFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleFormComponent,
      selectors: [["mc-article-form"]],
      inputs: {
        initialValuesProps: ["initialValues", "initialValuesProps"],
        isSubmittingProps: ["isSubmitting", "isSubmittingProps"],
        errorsProps: ["errors", "errorsProps"]
      },
      outputs: {
        articleSubmitEvent: "articleSubmit"
      },
      decls: 18,
      vars: 3,
      consts: [[1, "editor-page"], [1, "container", "page"], [1, "row"], [1, "col-md-10", "offset-md-1", "col-cs-12"], [3, "backendErrors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Article title", "formControlName", "title", 1, "form-control", "form-control-lg"], ["type", "text", "placeholder", "What is this article about?", "formControlName", "description", 1, "form-control", "form-control-lg"], ["rows", "8", "placeholder", "Write your article (in markdown)", "formControlName", "body", 1, "form-control", "form-control-lg"], ["type", "text", "placeholder", "Enter tags", "formControlName", "tagList", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "pull-xs-right", "btn-primary", 3, "disabled"], [3, "backendErrors"]],
      template: function ArticleFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleFormComponent_mc_backend_error_messages_4_Template, 1, 1, "mc-backend-error-messages", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ArticleFormComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fieldset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "fieldset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorsProps);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.isSubmittingProps);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_3__["BackendErrorMessagesComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2FydGljbGVGb3JtL2NvbXBvbmVudHMvYXJ0aWNsZUZvcm0vYXJ0aWNsZUZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-article-form',
          templateUrl: './articleForm.component.html',
          styleUrls: ['./articleForm.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        initialValuesProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['initialValues']
        }],
        isSubmittingProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['isSubmitting']
        }],
        errorsProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['errors']
        }],
        articleSubmitEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['articleSubmit']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/backendErrorMessages/backendErrorMessages.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/shared/modules/backendErrorMessages/backendErrorMessages.module.ts ***!
    \************************************************************************************/

  /*! exports provided: BackendErrorMessagesModule */

  /***/
  function srcAppSharedModulesBackendErrorMessagesBackendErrorMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendErrorMessagesModule", function () {
      return BackendErrorMessagesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component */
    "./src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component.ts");

    var BackendErrorMessagesModule = function BackendErrorMessagesModule() {
      _classCallCheck(this, BackendErrorMessagesModule);
    };

    BackendErrorMessagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BackendErrorMessagesModule
    });
    BackendErrorMessagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BackendErrorMessagesModule_Factory(t) {
        return new (t || BackendErrorMessagesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BackendErrorMessagesModule, {
        declarations: [src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__["BackendErrorMessagesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__["BackendErrorMessagesComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendErrorMessagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__["BackendErrorMessagesComponent"]],
          exports: [src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__["BackendErrorMessagesComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: BackendErrorMessagesComponent */

  /***/
  function srcAppSharedModulesBackendErrorMessagesComponentsBackendErrorMessagesBackendErrorMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendErrorMessagesComponent", function () {
      return BackendErrorMessagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BackendErrorMessagesComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var errorMessage_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", errorMessage_r2, " ");
      }
    }

    var BackendErrorMessagesComponent = /*#__PURE__*/function () {
      function BackendErrorMessagesComponent() {
        _classCallCheck(this, BackendErrorMessagesComponent);
      }

      _createClass(BackendErrorMessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.errorMessages = Object.keys(this.backendErrorsProps).map(function (name) {
            var messages = _this14.backendErrorsProps[name].join(' ');

            return "".concat(name, " ").concat(messages);
          });
        }
      }]);

      return BackendErrorMessagesComponent;
    }();

    BackendErrorMessagesComponent.ɵfac = function BackendErrorMessagesComponent_Factory(t) {
      return new (t || BackendErrorMessagesComponent)();
    };

    BackendErrorMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BackendErrorMessagesComponent,
      selectors: [["mc-backend-error-messages"]],
      inputs: {
        backendErrorsProps: ["backendErrors", "backendErrorsProps"]
      },
      decls: 2,
      vars: 1,
      consts: [[1, "error-messages"], [4, "ngFor", "ngForOf"]],
      template: function BackendErrorMessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BackendErrorMessagesComponent_li_1_Template, 2, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errorMessages);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2JhY2tlbmRFcnJvck1lc3NhZ2VzL2NvbXBvbmVudHMvYmFja2VuZEVycm9yTWVzc2FnZXMvYmFja2VuZEVycm9yTWVzc2FnZXMuY29tcG9uZW50cy5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendErrorMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-backend-error-messages',
          templateUrl: './backendErrorMessages.component.html',
          styleUrls: ['./backendErrorMessages.components.scss']
        }]
      }], null, {
        backendErrorsProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['backendErrors']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/banner/banner.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/modules/banner/banner.module.ts ***!
    \********************************************************/

  /*! exports provided: BannerModule */

  /***/
  function srcAppSharedModulesBannerBannerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerModule", function () {
      return BannerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/modules/banner/components/banner/banner.component */
    "./src/app/shared/modules/banner/components/banner/banner.component.ts");

    var BannerModule = function BannerModule() {
      _classCallCheck(this, BannerModule);
    };

    BannerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BannerModule
    });
    BannerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BannerModule_Factory(t) {
        return new (t || BannerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BannerModule, {
        declarations: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"]],
          exports: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/banner/components/banner/banner.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/modules/banner/components/banner/banner.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppSharedModulesBannerComponentsBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BannerComponent = function BannerComponent() {
      _classCallCheck(this, BannerComponent);
    };

    BannerComponent.ɵfac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)();
    };

    BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["mc-banner"]],
      decls: 6,
      vars: 0,
      consts: [[1, "banner"], [1, "container"]],
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SocialAidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041C\u0435\u0441\u0442\u043E \u0434\u043B\u044F \u043E\u0431\u043C\u0435\u043D\u0430 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-banner',
          templateUrl: './banner.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ErrorMessageComponent */

  /***/
  function srcAppSharedModulesErrorMessageComponentsErrorMessageErrorMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function () {
      return ErrorMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorMessageComponent = function ErrorMessageComponent() {
      _classCallCheck(this, ErrorMessageComponent);

      this.messageProps = 'Something went wrong';
    };

    ErrorMessageComponent.ɵfac = function ErrorMessageComponent_Factory(t) {
      return new (t || ErrorMessageComponent)();
    };

    ErrorMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorMessageComponent,
      selectors: [["mc-error-message"]],
      inputs: {
        messageProps: ["message", "messageProps"]
      },
      decls: 2,
      vars: 1,
      template: function ErrorMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messageProps);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-error-message',
          template: '<div>{{messageProps}}</div>'
        }]
      }], null, {
        messageProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['message']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/errorMessage/errorMessage.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/modules/errorMessage/errorMessage.module.ts ***!
    \********************************************************************/

  /*! exports provided: ErrorMessageModule */

  /***/
  function srcAppSharedModulesErrorMessageErrorMessageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorMessageModule", function () {
      return ErrorMessageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component */
    "./src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component.ts");

    var ErrorMessageModule = function ErrorMessageModule() {
      _classCallCheck(this, ErrorMessageModule);
    };

    ErrorMessageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ErrorMessageModule
    });
    ErrorMessageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ErrorMessageModule_Factory(t) {
        return new (t || ErrorMessageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErrorMessageModule, {
        declarations: [src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageComponent"]],
          exports: [src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/feed/components/feed/feed.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/modules/feed/components/feed/feed.component.ts ***!
    \***********************************************************************/

  /*! exports provided: FeedComponent */

  /***/
  function srcAppSharedModulesFeedComponentsFeedFeedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedComponent", function () {
      return FeedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! query-string */
    "./node_modules/query-string/index.js");
    /* harmony import */


    var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/feed/store/actions/getFeed.action */
    "./src/app/shared/modules/feed/store/actions/getFeed.action.ts");
    /* harmony import */


    var src_app_shared_modules_feed_store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/modules/feed/store/selectors */
    "./src/app/shared/modules/feed/store/selectors.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/modules/loading/components/loading/loading.component */
    "./src/app/shared/modules/loading/components/loading/loading.component.ts");
    /* harmony import */


    var src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component */
    "./src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component.ts");
    /* harmony import */


    var src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/modules/pagination/components/pagination/pagination.component */
    "./src/app/shared/modules/pagination/components/pagination/pagination.component.ts");
    /* harmony import */


    var src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component */
    "./src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component.ts");
    /* harmony import */


    var _tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../tagList/components/tagList/tagList.component */
    "./src/app/shared/modules/tagList/components/tagList/tagList.component.ts");

    function FeedComponent_mc_loading_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-loading");
      }
    }

    function FeedComponent_mc_error_message_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-error-message");
      }
    }

    var _c0 = function _c0(a1) {
      return ["/profiles", a1];
    };

    var _c1 = function _c1(a1) {
      return ["/articles", a1];
    };

    function FeedComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mc-add-to-favorites", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mc-tag-list", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var article_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, article_r10.author.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", article_r10.author.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, article_r10.author.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r10.author.username, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r10.createdAt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFavorited", article_r10.favorited)("articleSlug", article_r10.slug)("favoritesCount", article_r10.favoritesCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, article_r10.slug));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r10.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r10.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", article_r10.tagList);
      }
    }

    function FeedComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedComponent_div_4_div_1_Template, 19, 18, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mc-pagination", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var tmp_0_0 = null;
        var currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r8.feed$)) == null ? null : tmp_0_0.articles;
        var tmp_1_0 = null;
        var currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx_r8.feed$)) == null ? null : tmp_1_0.articlesCount;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currVal_0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", currVal_1)("limit", ctx_r8.limit)("url", ctx_r8.baseUrl)("currentPage", ctx_r8.currentPage);
      }
    }

    var FeedComponent = /*#__PURE__*/function () {
      function FeedComponent(store, router, route) {
        _classCallCheck(this, FeedComponent);

        this.store = store;
        this.router = router;
        this.route = route;
        this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].limit;
      }

      _createClass(FeedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('initialize feed', this.apiUrlProps);
          this.initializeValues();
          this.initializeListeners();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var isApiUrlChanged = !changes.apiUrlProps.firstChange && changes.apiUrlProps.currentValue !== changes.apiUrlProps.previousValue;

          if (isApiUrlChanged) {
            this.fetchFeed();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.queryParamsSubscription.unsubscribe();
        }
      }, {
        key: "initializeListeners",
        value: function initializeListeners() {
          var _this15 = this;

          this.queryParamsSubscription = this.route.queryParams.subscribe(function (params) {
            _this15.currentPage = Number(params.page || '1');
            console.log('fetchFeed');

            _this15.fetchFeed();
          });
        }
      }, {
        key: "initializeValues",
        value: function initializeValues() {
          this.feed$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_feed_store_selectors__WEBPACK_IMPORTED_MODULE_4__["feedSelector"]));
          this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_feed_store_selectors__WEBPACK_IMPORTED_MODULE_4__["errorSelector"]));
          this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_feed_store_selectors__WEBPACK_IMPORTED_MODULE_4__["isLoadingSelector"]));
          this.baseUrl = this.router.url.split('?')[0];
        }
      }, {
        key: "fetchFeed",
        value: function fetchFeed() {
          var offset = this.currentPage * this.limit - this.limit;
          var parsedUrl = Object(query_string__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(this.apiUrlProps);
          var stringifiedParams = Object(query_string__WEBPACK_IMPORTED_MODULE_2__["stringify"])(Object.assign({
            limit: this.limit,
            offset: offset
          }, parsedUrl.query));
          var apiUrlWithParams = "".concat(parsedUrl.url, "?").concat(stringifiedParams);
          this.store.dispatch(Object(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_3__["getFeedAction"])({
            url: apiUrlWithParams
          }));
        }
      }]);

      return FeedComponent;
    }();

    FeedComponent.ɵfac = function FeedComponent_Factory(t) {
      return new (t || FeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedComponent,
      selectors: [["mc-feed"]],
      inputs: {
        apiUrlProps: ["apiUrl", "apiUrlProps"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 6,
      vars: 9,
      consts: [[4, "ngIf"], ["class", "article-preview", 4, "ngFor", "ngForOf"], [3, "total", "limit", "url", "currentPage"], [1, "article-preview"], [1, "article-meta"], [3, "routerLink"], [3, "src"], [1, "info"], [1, "author", 3, "routerLink"], [1, "date"], [1, "pull-xs-right"], [3, "isFavorited", "articleSlug", "favoritesCount"], [1, "preview-link", 3, "routerLink"], [3, "tags"]],
      template: function FeedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FeedComponent_mc_loading_0_Template, 1, 0, "mc-loading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedComponent_mc_error_message_2_Template, 1, 0, "mc-error-message", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeedComponent_div_4_Template, 5, 9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.isLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.error$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.feed$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_9__["ErrorMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_11__["AddToFavoriteComponent"], _tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_12__["TagListComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2ZlZWQvY29tcG9uZW50cy9mZWVkL2ZlZWQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-feed',
          templateUrl: './feed.component.html',
          styleUrls: ['./feed.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, {
        apiUrlProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['apiUrl']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/feed/feed.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/modules/feed/feed.module.ts ***!
    \****************************************************/

  /*! exports provided: FeedModule */

  /***/
  function srcAppSharedModulesFeedFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedModule", function () {
      return FeedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/modules/feed/components/feed/feed.component */
    "./src/app/shared/modules/feed/components/feed/feed.component.ts");
    /* harmony import */


    var src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/modules/feed/services/feed.service */
    "./src/app/shared/modules/feed/services/feed.service.ts");
    /* harmony import */


    var src_app_shared_modules_feed_store_effects_getFeed_effect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/modules/feed/store/effects/getFeed.effect */
    "./src/app/shared/modules/feed/store/effects/getFeed.effect.ts");
    /* harmony import */


    var src_app_shared_modules_feed_store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/modules/feed/store/reducers */
    "./src/app/shared/modules/feed/store/reducers.ts");
    /* harmony import */


    var src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/modules/errorMessage/errorMessage.module */
    "./src/app/shared/modules/errorMessage/errorMessage.module.ts");
    /* harmony import */


    var src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/modules/loading/loading.module */
    "./src/app/shared/modules/loading/loading.module.ts");
    /* harmony import */


    var src_app_shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/modules/pagination/pagination.module */
    "./src/app/shared/modules/pagination/pagination.module.ts");
    /* harmony import */


    var _tagList_tagList_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../tagList/tagList.module */
    "./src/app/shared/modules/tagList/tagList.module.ts");
    /* harmony import */


    var _addToFavorites_addToFavorites_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../addToFavorites/addToFavorites.module */
    "./src/app/shared/modules/addToFavorites/addToFavorites.module.ts");

    var FeedModule = function FeedModule() {
      _classCallCheck(this, FeedModule);
    };

    FeedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FeedModule
    });
    FeedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FeedModule_Factory(t) {
        return new (t || FeedModule)();
      },
      providers: [src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_6__["FeedService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([src_app_shared_modules_feed_store_effects_getFeed_effect__WEBPACK_IMPORTED_MODULE_7__["GetFeedEffect"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('feed', src_app_shared_modules_feed_store_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"]), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_9__["ErrorMessageModule"], src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_10__["LoadingModule"], src_app_shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"], _tagList_tagList_module__WEBPACK_IMPORTED_MODULE_12__["TagListModule"], _addToFavorites_addToFavorites_module__WEBPACK_IMPORTED_MODULE_13__["AddToFavoriteModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeedModule, {
        declarations: [src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_9__["ErrorMessageModule"], src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_10__["LoadingModule"], src_app_shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"], _tagList_tagList_module__WEBPACK_IMPORTED_MODULE_12__["TagListModule"], _addToFavorites_addToFavorites_module__WEBPACK_IMPORTED_MODULE_13__["AddToFavoriteModule"]],
        exports: [src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([src_app_shared_modules_feed_store_effects_getFeed_effect__WEBPACK_IMPORTED_MODULE_7__["GetFeedEffect"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('feed', src_app_shared_modules_feed_store_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"]), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_9__["ErrorMessageModule"], src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_10__["LoadingModule"], src_app_shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"], _tagList_tagList_module__WEBPACK_IMPORTED_MODULE_12__["TagListModule"], _addToFavorites_addToFavorites_module__WEBPACK_IMPORTED_MODULE_13__["AddToFavoriteModule"]],
          declarations: [src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"]],
          exports: [src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"]],
          providers: [src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_6__["FeedService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/feed/services/feed.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/modules/feed/services/feed.service.ts ***!
    \**************************************************************/

  /*! exports provided: FeedService */

  /***/
  function srcAppSharedModulesFeedServicesFeedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedService", function () {
      return FeedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FeedService = /*#__PURE__*/function () {
      function FeedService(http) {
        _classCallCheck(this, FeedService);

        this.http = http;
      }

      _createClass(FeedService, [{
        key: "getFeed",
        value: function getFeed(url) {
          var fullUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + url;
          return this.http.get(fullUrl);
        }
      }]);

      return FeedService;
    }();

    FeedService.ɵfac = function FeedService_Factory(t) {
      return new (t || FeedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    FeedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FeedService,
      factory: FeedService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/feed/store/actionTypes.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/modules/feed/store/actionTypes.ts ***!
    \**********************************************************/

  /*! exports provided: ActionTypes */

  /***/
  function srcAppSharedModulesFeedStoreActionTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["GET_FEED"] = "[Feed] Get feed";
      ActionTypes["GET_FEED_SUCCESS"] = "[Feed] Get feed success";
      ActionTypes["GET_FEED_FAILURE"] = "[Feed] Get feed failure";
    })(ActionTypes || (ActionTypes = {}));
    /***/

  },

  /***/
  "./src/app/shared/modules/feed/store/actions/getFeed.action.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/modules/feed/store/actions/getFeed.action.ts ***!
    \*********************************************************************/

  /*! exports provided: getFeedAction, getFeedSuccessAction, getFeedFailureAction */

  /***/
  function srcAppSharedModulesFeedStoreActionsGetFeedActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFeedAction", function () {
      return getFeedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFeedSuccessAction", function () {
      return getFeedSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFeedFailureAction", function () {
      return getFeedFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_shared_modules_feed_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/modules/feed/store/actionTypes */
    "./src/app/shared/modules/feed/store/actionTypes.ts");

    var getFeedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_feed_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_FEED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getFeedSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_feed_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_FEED_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getFeedFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_feed_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_FEED_FAILURE);
    /***/
  },

  /***/
  "./src/app/shared/modules/feed/store/effects/getFeed.effect.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/modules/feed/store/effects/getFeed.effect.ts ***!
    \*********************************************************************/

  /*! exports provided: GetFeedEffect */

  /***/
  function srcAppSharedModulesFeedStoreEffectsGetFeedEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetFeedEffect", function () {
      return GetFeedEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/modules/feed/store/actions/getFeed.action */
    "./src/app/shared/modules/feed/store/actions/getFeed.action.ts");
    /* harmony import */


    var src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/modules/feed/services/feed.service */
    "./src/app/shared/modules/feed/services/feed.service.ts");

    var GetFeedEffect = function GetFeedEffect(actions$, feedService) {
      var _this16 = this;

      _classCallCheck(this, GetFeedEffect);

      this.actions$ = actions$;
      this.feedService = feedService;
      this.getFeed$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this16.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_4__["getFeedAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref14) {
          var url = _ref14.url;
          return _this16.feedService.getFeed(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (feed) {
            return Object(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_4__["getFeedSuccessAction"])({
              feed: feed
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_4__["getFeedFailureAction"])());
          }));
        }));
      });
    };

    GetFeedEffect.ɵfac = function GetFeedEffect_Factory(t) {
      return new (t || GetFeedEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"]));
    };

    GetFeedEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetFeedEffect,
      factory: GetFeedEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetFeedEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/feed/store/reducers.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/modules/feed/store/reducers.ts ***!
    \*******************************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppSharedModulesFeedStoreReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/modules/feed/store/actions/getFeed.action */
    "./src/app/shared/modules/feed/store/actions/getFeed.action.ts");

    var initialState = {
      data: null,
      isLoading: false,
      error: null
    };
    var feedReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_2__["getFeedAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_2__["getFeedSuccessAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false,
        data: action.feed
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_2__["getFeedFailureAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerNavigationAction"], function () {
      return initialState;
    }));

    function reducers(state, action) {
      return feedReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/shared/modules/feed/store/selectors.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/modules/feed/store/selectors.ts ***!
    \********************************************************/

  /*! exports provided: feedFeatureSelector, isLoadingSelector, errorSelector, feedSelector */

  /***/
  function srcAppSharedModulesFeedStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "feedFeatureSelector", function () {
      return feedFeatureSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isLoadingSelector", function () {
      return isLoadingSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "errorSelector", function () {
      return errorSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "feedSelector", function () {
      return feedSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var feedFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('feed');
    var isLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(feedFeatureSelector, function (feedState) {
      return feedState.isLoading;
    });
    var errorSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(feedFeatureSelector, function (feedState) {
      return feedState.error;
    });
    var feedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(feedFeatureSelector, function (feedState) {
      return feedState.data;
    });
    /***/
  },

  /***/
  "./src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: FeedTogglerComponent */

  /***/
  function srcAppSharedModulesFeedTogglerComponentsFeedTogglerFeedTogglerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedTogglerComponent", function () {
      return FeedTogglerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/store/selectors */
    "./src/app/auth/store/selectors.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/feed"];
    };

    function FeedTogglerComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u043D\u0430\u043B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1(a1) {
      return ["/tags", a1];
    };

    function FeedTogglerComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r21.tagNameProps));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.tagNameProps, " ");
      }
    }

    var _c2 = function _c2() {
      return ["/"];
    };

    var _c3 = function _c3() {
      return {
        exact: true
      };
    };

    var FeedTogglerComponent = /*#__PURE__*/function () {
      function FeedTogglerComponent(store) {
        _classCallCheck(this, FeedTogglerComponent);

        this.store = store;
      }

      _createClass(FeedTogglerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeValues();
        }
      }, {
        key: "initializeValues",
        value: function initializeValues() {
          this.isLoggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__["isLoggedInSelector"]));
        }
      }]);

      return FeedTogglerComponent;
    }();

    FeedTogglerComponent.ɵfac = function FeedTogglerComponent_Factory(t) {
      return new (t || FeedTogglerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    FeedTogglerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedTogglerComponent,
      selectors: [["mc-feed-toggler"]],
      inputs: {
        tagNameProps: ["tagName", "tagNameProps"]
      },
      decls: 8,
      vars: 8,
      consts: [[1, "feed-toggle"], [1, "nav", "nav-pills", "outline-active"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "ion-pound"]],
      template: function FeedTogglerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedTogglerComponent_li_2_Template, 3, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u043D\u0430\u043B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FeedTogglerComponent_li_7_Template, 4, 4, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.isLoggedIn$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tagNameProps);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedTogglerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-feed-toggler',
          templateUrl: './feedToggler.component.html'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, {
        tagNameProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tagName']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/feedToggler/feedToggler.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/modules/feedToggler/feedToggler.module.ts ***!
    \******************************************************************/

  /*! exports provided: FeedTogglerModule */

  /***/
  function srcAppSharedModulesFeedTogglerFeedTogglerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedTogglerModule", function () {
      return FeedTogglerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component */
    "./src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FeedTogglerModule = function FeedTogglerModule() {
      _classCallCheck(this, FeedTogglerModule);
    };

    FeedTogglerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FeedTogglerModule
    });
    FeedTogglerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FeedTogglerModule_Factory(t) {
        return new (t || FeedTogglerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeedTogglerModule, {
        declarations: [src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__["FeedTogglerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__["FeedTogglerComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedTogglerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          declarations: [src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__["FeedTogglerComponent"]],
          exports: [src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__["FeedTogglerComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/loading/components/loading/loading.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/modules/loading/components/loading/loading.component.ts ***!
    \********************************************************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppSharedModulesLoadingComponentsLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadingComponent = function LoadingComponent() {
      _classCallCheck(this, LoadingComponent);
    };

    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
      return new (t || LoadingComponent)();
    };

    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingComponent,
      selectors: [["mc-loading"]],
      decls: 2,
      vars: 0,
      template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-loading',
          template: '<div>Loading...</div>'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/loading/loading.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/modules/loading/loading.module.ts ***!
    \**********************************************************/

  /*! exports provided: LoadingModule */

  /***/
  function srcAppSharedModulesLoadingLoadingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingModule", function () {
      return LoadingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/modules/loading/components/loading/loading.component */
    "./src/app/shared/modules/loading/components/loading/loading.component.ts");

    var LoadingModule = function LoadingModule() {
      _classCallCheck(this, LoadingModule);
    };

    LoadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoadingModule
    });
    LoadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoadingModule_Factory(t) {
        return new (t || LoadingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingModule, {
        declarations: [src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]],
          exports: [src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/pagination/components/pagination/pagination.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/shared/modules/pagination/components/pagination/pagination.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PaginationComponent */

  /***/
  function srcAppSharedModulesPaginationComponentsPaginationPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
      return PaginationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/utils.service */
    "./src/app/shared/services/utils.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    var _c1 = function _c1(a0) {
      return [a0];
    };

    var _c2 = function _c2(a0) {
      return {
        page: a0
      };
    };

    function PaginationComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r12 = ctx.$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r11.currentPageProps === page_r12));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r11.urlProps))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, page_r12));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r12, " ");
      }
    }

    var PaginationComponent = /*#__PURE__*/function () {
      function PaginationComponent(utilsService) {
        _classCallCheck(this, PaginationComponent);

        this.utilsService = utilsService;
      }

      _createClass(PaginationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
          this.pages = this.utilsService.range(1, this.pagesCount);
        }
      }]);

      return PaginationComponent;
    }();

    PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
      return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]));
    };

    PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginationComponent,
      selectors: [["mc-pagination"]],
      inputs: {
        totalProps: ["total", "totalProps"],
        limitProps: ["limit", "limitProps"],
        currentPageProps: ["currentPage", "currentPageProps"],
        urlProps: ["url", "urlProps"]
      },
      decls: 2,
      vars: 1,
      consts: [[1, "pagination"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "routerLink", "queryParams"]],
      template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 3, 10, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-pagination',
          templateUrl: './pagination.component.html'
        }]
      }], function () {
        return [{
          type: src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]
        }];
      }, {
        totalProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['total']
        }],
        limitProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['limit']
        }],
        currentPageProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['currentPage']
        }],
        urlProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['url']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/pagination/pagination.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/modules/pagination/pagination.module.ts ***!
    \****************************************************************/

  /*! exports provided: PaginationModule */

  /***/
  function srcAppSharedModulesPaginationPaginationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationModule", function () {
      return PaginationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/pagination/components/pagination/pagination.component */
    "./src/app/shared/modules/pagination/components/pagination/pagination.component.ts");
    /* harmony import */


    var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/utils.service */
    "./src/app/shared/services/utils.service.ts");

    var PaginationModule = function PaginationModule() {
      _classCallCheck(this, PaginationModule);
    };

    PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PaginationModule
    });
    PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PaginationModule_Factory(t) {
        return new (t || PaginationModule)();
      },
      providers: [src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginationModule, {
        declarations: [src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          declarations: [src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
          exports: [src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
          providers: [src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/popularTags/components/popularTags/popularTags.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/shared/modules/popularTags/components/popularTags/popularTags.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: PopularTagsComponent */

  /***/
  function srcAppSharedModulesPopularTagsComponentsPopularTagsPopularTagsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopularTagsComponent", function () {
      return PopularTagsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/store/actions/getPopularTags.action */
    "./src/app/shared/modules/popularTags/store/actions/getPopularTags.action.ts");
    /* harmony import */


    var src_app_shared_modules_popularTags_store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/store/selectors */
    "./src/app/shared/modules/popularTags/store/selectors.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/modules/loading/components/loading/loading.component */
    "./src/app/shared/modules/loading/components/loading/loading.component.ts");
    /* harmony import */


    var src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component */
    "./src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function PopularTagsComponent_mc_loading_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-loading");
      }
    }

    function PopularTagsComponent_mc_error_message_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-error-message", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r16.error$));
      }
    }

    var _c0 = function _c0(a1) {
      return ["/tags", a1];
    };

    function PopularTagsComponent_div_4_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var popularTag_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, popularTag_r19));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", popularTag_r19, " ");
      }
    }

    function PopularTagsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u0442\u0435\u0433\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopularTagsComponent_div_4_a_4_Template, 2, 4, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r17.popularTags$));
      }
    }

    var PopularTagsComponent = /*#__PURE__*/function () {
      function PopularTagsComponent(store) {
        _classCallCheck(this, PopularTagsComponent);

        this.store = store;
      }

      _createClass(PopularTagsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeValues();
          this.fetchData();
        }
      }, {
        key: "initializeValues",
        value: function initializeValues() {
          this.popularTags$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_popularTags_store_selectors__WEBPACK_IMPORTED_MODULE_3__["popularTagsSelector"]));
          this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_popularTags_store_selectors__WEBPACK_IMPORTED_MODULE_3__["isLoadingSelector"]));
          this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_popularTags_store_selectors__WEBPACK_IMPORTED_MODULE_3__["errorSelector"]));
        }
      }, {
        key: "fetchData",
        value: function fetchData() {
          this.store.dispatch(Object(src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_2__["getPopularTagsAction"])());
        }
      }]);

      return PopularTagsComponent;
    }();

    PopularTagsComponent.ɵfac = function PopularTagsComponent_Factory(t) {
      return new (t || PopularTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    PopularTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopularTagsComponent,
      selectors: [["mc-popular-tags"]],
      decls: 6,
      vars: 9,
      consts: [[4, "ngIf"], [3, "message", 4, "ngIf"], ["class", "sidebar", 4, "ngIf"], [3, "message"], [1, "sidebar"], [1, "tag-list"], ["class", "tag-default tag-pill", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "tag-default", "tag-pill", 3, "routerLink"]],
      template: function PopularTagsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopularTagsComponent_mc_loading_0_Template, 1, 0, "mc-loading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopularTagsComponent_mc_error_message_2_Template, 2, 3, "mc-error-message", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopularTagsComponent_div_4_Template, 6, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.isLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.error$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.popularTags$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_6__["ErrorMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularTagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-popular-tags',
          templateUrl: './popularTags.component.html'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/popularTags/popularTags.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/modules/popularTags/popularTags.module.ts ***!
    \******************************************************************/

  /*! exports provided: PopularTagsModule */

  /***/
  function srcAppSharedModulesPopularTagsPopularTagsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopularTagsModule", function () {
      return PopularTagsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_modules_popularTags_store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/store/reducers */
    "./src/app/shared/modules/popularTags/store/reducers.ts");
    /* harmony import */


    var src_app_shared_modules_popularTags_store_effects_getPopularTags_effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/store/effects/getPopularTags.effect */
    "./src/app/shared/modules/popularTags/store/effects/getPopularTags.effect.ts");
    /* harmony import */


    var src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/components/popularTags/popularTags.component */
    "./src/app/shared/modules/popularTags/components/popularTags/popularTags.component.ts");
    /* harmony import */


    var src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/modules/loading/loading.module */
    "./src/app/shared/modules/loading/loading.module.ts");
    /* harmony import */


    var src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/modules/errorMessage/errorMessage.module */
    "./src/app/shared/modules/errorMessage/errorMessage.module.ts");
    /* harmony import */


    var src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/services/popularTags.service */
    "./src/app/shared/modules/popularTags/services/popularTags.service.ts");

    var PopularTagsModule = function PopularTagsModule() {
      _classCallCheck(this, PopularTagsModule);
    };

    PopularTagsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PopularTagsModule
    });
    PopularTagsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PopularTagsModule_Factory(t) {
        return new (t || PopularTagsModule)();
      },
      providers: [src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_10__["PopularTagsService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('popularTags', src_app_shared_modules_popularTags_store_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_shared_modules_popularTags_store_effects_getPopularTags_effect__WEBPACK_IMPORTED_MODULE_6__["GetPopularTagsEffect"]]), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__["LoadingModule"], src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_9__["ErrorMessageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopularTagsModule, {
        declarations: [src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_7__["PopularTagsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__["LoadingModule"], src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_9__["ErrorMessageModule"]],
        exports: [src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_7__["PopularTagsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularTagsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('popularTags', src_app_shared_modules_popularTags_store_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_shared_modules_popularTags_store_effects_getPopularTags_effect__WEBPACK_IMPORTED_MODULE_6__["GetPopularTagsEffect"]]), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__["LoadingModule"], src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_9__["ErrorMessageModule"]],
          declarations: [src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_7__["PopularTagsComponent"]],
          exports: [src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_7__["PopularTagsComponent"]],
          providers: [src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_10__["PopularTagsService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/popularTags/services/popularTags.service.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/modules/popularTags/services/popularTags.service.ts ***!
    \****************************************************************************/

  /*! exports provided: PopularTagsService */

  /***/
  function srcAppSharedModulesPopularTagsServicesPopularTagsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopularTagsService", function () {
      return PopularTagsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PopularTagsService = /*#__PURE__*/function () {
      function PopularTagsService(http) {
        _classCallCheck(this, PopularTagsService);

        this.http = http;
      }

      _createClass(PopularTagsService, [{
        key: "getPopularTags",
        value: function getPopularTags() {
          var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tags';
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.tags;
          }));
        }
      }]);

      return PopularTagsService;
    }();

    PopularTagsService.ɵfac = function PopularTagsService_Factory(t) {
      return new (t || PopularTagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    PopularTagsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PopularTagsService,
      factory: PopularTagsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularTagsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/popularTags/store/actionTypes.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/modules/popularTags/store/actionTypes.ts ***!
    \*****************************************************************/

  /*! exports provided: ActionTypes */

  /***/
  function srcAppSharedModulesPopularTagsStoreActionTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["GET_POPULAR_TAGS"] = "[Popular Tags] Get popular tags";
      ActionTypes["GET_POPULAR_TAGS_SUCCESS"] = "[Popular Tags] Get popular tags success";
      ActionTypes["GET_POPULAR_TAGS_FAILURE"] = "[Popular Tags] Get popular tags failure";
    })(ActionTypes || (ActionTypes = {}));
    /***/

  },

  /***/
  "./src/app/shared/modules/popularTags/store/actions/getPopularTags.action.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared/modules/popularTags/store/actions/getPopularTags.action.ts ***!
    \***********************************************************************************/

  /*! exports provided: getPopularTagsAction, getPopularTagsSuccessAction, getPopularTagsFailure */

  /***/
  function srcAppSharedModulesPopularTagsStoreActionsGetPopularTagsActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPopularTagsAction", function () {
      return getPopularTagsAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPopularTagsSuccessAction", function () {
      return getPopularTagsSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPopularTagsFailure", function () {
      return getPopularTagsFailure;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_shared_modules_popularTags_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/store/actionTypes */
    "./src/app/shared/modules/popularTags/store/actionTypes.ts");

    var getPopularTagsAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_popularTags_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_POPULAR_TAGS);
    var getPopularTagsSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_popularTags_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_POPULAR_TAGS_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getPopularTagsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_popularTags_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_POPULAR_TAGS_FAILURE);
    /***/
  },

  /***/
  "./src/app/shared/modules/popularTags/store/effects/getPopularTags.effect.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared/modules/popularTags/store/effects/getPopularTags.effect.ts ***!
    \***********************************************************************************/

  /*! exports provided: GetPopularTagsEffect */

  /***/
  function srcAppSharedModulesPopularTagsStoreEffectsGetPopularTagsEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetPopularTagsEffect", function () {
      return GetPopularTagsEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/store/actions/getPopularTags.action */
    "./src/app/shared/modules/popularTags/store/actions/getPopularTags.action.ts");
    /* harmony import */


    var src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/services/popularTags.service */
    "./src/app/shared/modules/popularTags/services/popularTags.service.ts");

    var GetPopularTagsEffect = function GetPopularTagsEffect(actions$, popularTagsService) {
      var _this17 = this;

      _classCallCheck(this, GetPopularTagsEffect);

      this.actions$ = actions$;
      this.popularTagsService = popularTagsService;
      this.getPopularTags$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this17.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_4__["getPopularTagsAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
          return _this17.popularTagsService.getPopularTags().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (popularTags) {
            return Object(src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_4__["getPopularTagsSuccessAction"])({
              popularTags: popularTags
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_4__["getPopularTagsFailure"])());
          }));
        }));
      });
    };

    GetPopularTagsEffect.ɵfac = function GetPopularTagsEffect_Factory(t) {
      return new (t || GetPopularTagsEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_5__["PopularTagsService"]));
    };

    GetPopularTagsEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetPopularTagsEffect,
      factory: GetPopularTagsEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetPopularTagsEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_5__["PopularTagsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/popularTags/store/reducers.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/modules/popularTags/store/reducers.ts ***!
    \**************************************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppSharedModulesPopularTagsStoreReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./actions/getPopularTags.action */
    "./src/app/shared/modules/popularTags/store/actions/getPopularTags.action.ts");

    var initialState = {
      data: null,
      isLoading: false,
      error: null
    };
    var popularTagsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_1__["getPopularTagsAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_1__["getPopularTagsSuccessAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false,
        data: action.popularTags
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_1__["getPopularTagsFailure"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false
      });
    }));

    function reducers(state, action) {
      return popularTagsReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/shared/modules/popularTags/store/selectors.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/modules/popularTags/store/selectors.ts ***!
    \***************************************************************/

  /*! exports provided: popularTagsFeatureSelector, popularTagsSelector, isLoadingSelector, errorSelector */

  /***/
  function srcAppSharedModulesPopularTagsStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "popularTagsFeatureSelector", function () {
      return popularTagsFeatureSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "popularTagsSelector", function () {
      return popularTagsSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isLoadingSelector", function () {
      return isLoadingSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "errorSelector", function () {
      return errorSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var popularTagsFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('popularTags');
    var popularTagsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(popularTagsFeatureSelector, function (popularTagsState) {
      return popularTagsState.data;
    });
    var isLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(popularTagsFeatureSelector, function (popularTagsState) {
      return popularTagsState.isLoading;
    });
    var errorSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(popularTagsFeatureSelector, function (popularTagsState) {
      return popularTagsState.error;
    });
    /***/
  },

  /***/
  "./src/app/shared/modules/tagList/components/tagList/tagList.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/modules/tagList/components/tagList/tagList.component.ts ***!
    \********************************************************************************/

  /*! exports provided: TagListComponent */

  /***/
  function srcAppSharedModulesTagListComponentsTagListTagListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagListComponent", function () {
      return TagListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TagListComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r14, " ");
      }
    }

    var TagListComponent = function TagListComponent() {
      _classCallCheck(this, TagListComponent);
    };

    TagListComponent.ɵfac = function TagListComponent_Factory(t) {
      return new (t || TagListComponent)();
    };

    TagListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagListComponent,
      selectors: [["mc-tag-list"]],
      inputs: {
        tagsProps: ["tags", "tagsProps"]
      },
      decls: 2,
      vars: 1,
      consts: [[1, "tag-list"], ["class", "tag-default tag-pill tag-outline", 4, "ngFor", "ngForOf"], [1, "tag-default", "tag-pill", "tag-outline"]],
      template: function TagListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagListComponent_li_1_Template, 2, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tagsProps);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-tag-list',
          templateUrl: './tagList.component.html'
        }]
      }], null, {
        tagsProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tags']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/tagList/tagList.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/modules/tagList/tagList.module.ts ***!
    \**********************************************************/

  /*! exports provided: TagListModule */

  /***/
  function srcAppSharedModulesTagListTagListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagListModule", function () {
      return TagListModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/tagList/tagList.component */
    "./src/app/shared/modules/tagList/components/tagList/tagList.component.ts");

    var TagListModule = function TagListModule() {
      _classCallCheck(this, TagListModule);
    };

    TagListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TagListModule
    });
    TagListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TagListModule_Factory(t) {
        return new (t || TagListModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TagListModule, {
        declarations: [_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_2__["TagListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_2__["TagListComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_2__["TagListComponent"]],
          exports: [_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_2__["TagListComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/topBar/components/topBar/topBar.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/modules/topBar/components/topBar/topBar.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppSharedModulesTopBarComponentsTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/store/selectors */
    "./src/app/auth/store/selectors.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/articles/new"];
    };

    var _c1 = function _c1() {
      return ["/settings"];
    };

    var _c2 = function _c2(a1) {
      return ["/profiles", a1];
    };

    function TopBarComponent_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \xA0 \u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u0441\u0442 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \xA0 \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx_r4.currentUser$).username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx_r4.currentUser$).image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, ctx_r4.currentUser$).username, " ");
      }
    }

    var _c3 = function _c3() {
      return ["/login"];
    };

    var _c4 = function _c4() {
      return ["/register"];
    };

    function TopBarComponent_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0412\u043E\u0439\u0442\u0438 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c4));
      }
    }

    var _c5 = function _c5() {
      return ["/"];
    };

    var TopBarComponent = /*#__PURE__*/function () {
      function TopBarComponent(store) {
        _classCallCheck(this, TopBarComponent);

        this.store = store;
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__["isLoggedInSelector"]));
          this.isAnonymous$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__["isAnonymousSelector"]));
          this.currentUser$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__["currentUserSelector"]));
        }
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
      return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBarComponent,
      selectors: [["mc-topbar"]],
      decls: 12,
      vars: 10,
      consts: [[1, "navbar", "navbar-light"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], [1, "nav", "navbar-nav", "pull-xs-right"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [4, "ngIf"], [1, "ion-compose"], [1, "ion-gear-a"], [1, "user-pic", 3, "src"]],
      template: function TopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " SocialAidos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0413\u043B\u0430\u0432\u043D\u0430\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TopBarComponent_ng_container_8_Template, 16, 15, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TopBarComponent_ng_container_10_Template, 7, 4, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.isLoggedIn$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, ctx.isAnonymous$));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3RvcEJhci9jb21wb25lbnRzL3RvcEJhci90b3BCYXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-topbar',
          templateUrl: './topBar.component.html',
          styleUrls: ['./topBar.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/topBar/topBar.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/modules/topBar/topBar.module.ts ***!
    \********************************************************/

  /*! exports provided: TopBarModule */

  /***/
  function srcAppSharedModulesTopBarTopBarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarModule", function () {
      return TopBarModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/topBar/components/topBar/topBar.component */
    "./src/app/shared/modules/topBar/components/topBar/topBar.component.ts");

    var TopBarModule = function TopBarModule() {
      _classCallCheck(this, TopBarModule);
    };

    TopBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TopBarModule
    });
    TopBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TopBarModule_Factory(t) {
        return new (t || TopBarModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TopBarModule, {
        declarations: [src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          declarations: [src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"]],
          exports: [src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/article.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/article.service.ts ***!
    \****************************************************/

  /*! exports provided: ArticleService */

  /***/
  function srcAppSharedServicesArticleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleService", function () {
      return ArticleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ArticleService = /*#__PURE__*/function () {
      function ArticleService(http) {
        _classCallCheck(this, ArticleService);

        this.http = http;
      }

      _createClass(ArticleService, [{
        key: "getArticle",
        value: function getArticle(slug) {
          var fullUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/articles/").concat(slug);
          return this.http.get(fullUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.article;
          }));
        }
      }]);

      return ArticleService;
    }();

    ArticleService.ɵfac = function ArticleService_Factory(t) {
      return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArticleService,
      factory: ArticleService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/authinterceptor.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/authinterceptor.service.ts ***!
    \************************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppSharedServicesAuthinterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app//shared/services/persistance.service */
    "./src/app/shared/services/persistance.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(persistanceService) {
        _classCallCheck(this, AuthInterceptor);

        this.persistanceService = persistanceService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var token = this.persistanceService.get('accessToken');
          request = request.clone({
            setHeaders: {
              Authorization: token ? "Token ".concat(token) : ''
            }
          });
          return next.handle(request);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_1__["PersistanceService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_1__["PersistanceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/persistance.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/persistance.service.ts ***!
    \********************************************************/

  /*! exports provided: PersistanceService */

  /***/
  function srcAppSharedServicesPersistanceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersistanceService", function () {
      return PersistanceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PersistanceService = /*#__PURE__*/function () {
      function PersistanceService() {
        _classCallCheck(this, PersistanceService);
      }

      _createClass(PersistanceService, [{
        key: "set",
        value: function set(key, data) {
          try {
            localStorage.setItem(key, JSON.stringify(data));
          } catch (e) {
            console.error('Error saving to localStorage', e);
          }
        }
      }, {
        key: "get",
        value: function get(key) {
          try {
            return JSON.parse(localStorage.getItem(key));
          } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
          }
        }
      }]);

      return PersistanceService;
    }();

    PersistanceService.ɵfac = function PersistanceService_Factory(t) {
      return new (t || PersistanceService)();
    };

    PersistanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PersistanceService,
      factory: PersistanceService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersistanceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/utils.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/utils.service.ts ***!
    \**************************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppSharedServicesUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UtilsService = /*#__PURE__*/function () {
      function UtilsService() {
        _classCallCheck(this, UtilsService);
      }

      _createClass(UtilsService, [{
        key: "range",
        value: function range(start, end) {
          return _toConsumableArray(Array(end).keys()).map(function (el) {
            return el + start;
          });
        }
      }]);

      return UtilsService;
    }();

    UtilsService.ɵfac = function UtilsService_Factory(t) {
      return new (t || UtilsService)();
    };

    UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilsService,
      factory: UtilsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tagFeed/components/tagFeed/tagFeed.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/tagFeed/components/tagFeed/tagFeed.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TagFeedComponent */

  /***/
  function srcAppTagFeedComponentsTagFeedTagFeedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagFeedComponent", function () {
      return TagFeedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/modules/banner/components/banner/banner.component */
    "./src/app/shared/modules/banner/components/banner/banner.component.ts");
    /* harmony import */


    var src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component */
    "./src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component.ts");
    /* harmony import */


    var src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/modules/feed/components/feed/feed.component */
    "./src/app/shared/modules/feed/components/feed/feed.component.ts");
    /* harmony import */


    var src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/components/popularTags/popularTags.component */
    "./src/app/shared/modules/popularTags/components/popularTags/popularTags.component.ts");

    var TagFeedComponent = /*#__PURE__*/function () {
      function TagFeedComponent(route) {
        _classCallCheck(this, TagFeedComponent);

        this.route = route;
      }

      _createClass(TagFeedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tagName = this.route.snapshot.paramMap.get('slug');
          this.apiUrl = "/articles?tag=".concat(this.tagName);
        }
      }]);

      return TagFeedComponent;
    }();

    TagFeedComponent.ɵfac = function TagFeedComponent_Factory(t) {
      return new (t || TagFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    TagFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagFeedComponent,
      selectors: [["mc-tag-feed"]],
      decls: 9,
      vars: 2,
      consts: [[1, "home-page"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [3, "tagName"], [3, "apiUrl"], [1, "col-md-3"]],
      template: function TagFeedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mc-feed-toggler", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mc-feed", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mc-popular-tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tagName", ctx.tagName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("apiUrl", ctx.apiUrl);
        }
      },
      directives: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_3__["FeedTogglerComponent"], src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_4__["FeedComponent"], src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_5__["PopularTagsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ0ZlZWQvY29tcG9uZW50cy90YWdGZWVkL3RhZ0ZlZWQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagFeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-tag-feed',
          templateUrl: './tagFeed.component.html',
          styleUrls: ['./tagFeed.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tagFeed/tagFeed.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/tagFeed/tagFeed.module.ts ***!
    \*******************************************/

  /*! exports provided: TagFeedModule */

  /***/
  function srcAppTagFeedTagFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagFeedModule", function () {
      return TagFeedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_tagFeed_components_tagFeed_tagFeed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/tagFeed/components/tagFeed/tagFeed.component */
    "./src/app/tagFeed/components/tagFeed/tagFeed.component.ts");
    /* harmony import */


    var src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/modules/feed/feed.module */
    "./src/app/shared/modules/feed/feed.module.ts");
    /* harmony import */


    var src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/modules/banner/banner.module */
    "./src/app/shared/modules/banner/banner.module.ts");
    /* harmony import */


    var _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/modules/popularTags/popularTags.module */
    "./src/app/shared/modules/popularTags/popularTags.module.ts");
    /* harmony import */


    var src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/modules/feedToggler/feedToggler.module */
    "./src/app/shared/modules/feedToggler/feedToggler.module.ts");

    var routes = [{
      path: 'tags/:slug',
      component: src_app_tagFeed_components_tagFeed_tagFeed_component__WEBPACK_IMPORTED_MODULE_3__["TagFeedComponent"]
    }];

    var TagFeedModule = function TagFeedModule() {
      _classCallCheck(this, TagFeedModule);
    };

    TagFeedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TagFeedModule
    });
    TagFeedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TagFeedModule_Factory(t) {
        return new (t || TagFeedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"], _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"], src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__["FeedTogglerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TagFeedModule, {
        declarations: [src_app_tagFeed_components_tagFeed_tagFeed_component__WEBPACK_IMPORTED_MODULE_3__["TagFeedComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"], _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"], src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__["FeedTogglerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagFeedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"], _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"], src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__["FeedTogglerModule"]],
          declarations: [src_app_tagFeed_components_tagFeed_tagFeed_component__WEBPACK_IMPORTED_MODULE_3__["TagFeedComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/userProfile/components/userProfile/userProfile.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/userProfile/components/userProfile/userProfile.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppUserProfileComponentsUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../store/actions/getUserProfile.action */
    "./src/app/userProfile/store/actions/getUserProfile.action.ts");
    /* harmony import */


    var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../store/selectors */
    "./src/app/userProfile/store/selectors.ts");
    /* harmony import */


    var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth/store/selectors */
    "./src/app/auth/store/selectors.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/modules/feed/components/feed/feed.component */
    "./src/app/shared/modules/feed/components/feed/feed.component.ts");

    var _c0 = function _c0() {
      return ["/settings"];
    };

    function UserProfileComponent_div_0_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1(a1) {
      return ["/profiles", a1];
    };

    var _c2 = function _c2(a1) {
      return {
        exact: true,
        __change_detection_hack__: a1
      };
    };

    var _c3 = function _c3(a1) {
      return ["/profiles", a1, "favorites"];
    };

    function UserProfileComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserProfileComponent_div_0_a_11_Template, 2, 2, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u041C\u043E\u0438 \u043F\u043E\u0441\u0442\u044B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0441\u0442\u044B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mc-feed", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r39.userProfile.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.userProfile.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.userProfile.bio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, ctx_r39.isCurrentUserProfile$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r39.userProfile.username))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx_r39.userProfile.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, ctx_r39.userProfile.username))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, ctx_r39.userProfile.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("apiUrl", ctx_r39.getApiUrl());
      }
    }

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent(store, route, router) {
        _classCallCheck(this, UserProfileComponent);

        this.store = store;
        this.route = route;
        this.router = router;
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeValues();
          this.initializeListeners();
        }
      }, {
        key: "initializeValues",
        value: function initializeValues() {
          this.slug = this.route.snapshot.paramMap.get('slug');
          this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["isLoadingSelector"]));
          this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["errorSelector"]));
          this.isCurrentUserProfile$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_5__["currentUserSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(Boolean)), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["userProfileSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(Boolean))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_ref15) {
            var _ref16 = _slicedToArray(_ref15, 2),
                currentUser = _ref16[0],
                userProfile = _ref16[1];

            return currentUser.username === userProfile.username;
          }));
        }
      }, {
        key: "getApiUrl",
        value: function getApiUrl() {
          var isFavorites = this.router.url.includes('favorites');
          return isFavorites ? "/articles?favorited=".concat(this.slug) : "/articles?author=".concat(this.slug);
        }
      }, {
        key: "initializeListeners",
        value: function initializeListeners() {
          var _this18 = this;

          this.userProfileSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["userProfileSelector"])).subscribe(function (userProfile) {
            _this18.userProfile = userProfile;
          });
          this.route.params.subscribe(function (params) {
            _this18.slug = params.slug;

            _this18.fetchUserProfile();
          });
        }
      }, {
        key: "fetchUserProfile",
        value: function fetchUserProfile() {
          this.store.dispatch(Object(_store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_3__["getUserProfileAction"])({
            slug: this.slug
          }));
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
      return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["mc-user-profile"]],
      decls: 1,
      vars: 1,
      consts: [["class", "profile-page", 4, "ngIf"], [1, "profile-page"], [1, "user-info"], [1, "container"], [1, "row"], [1, "col-xs-12", "col-md-10", "offset-md-1"], [1, "user-img", 3, "src"], ["class", "btn btn-sm btn-outline-secondary action-btn", 3, "routerLink", 4, "ngIf"], [1, "articles-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [3, "apiUrl"], [1, "btn", "btn-sm", "btn-outline-secondary", "action-btn", 3, "routerLink"]],
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserProfileComponent_div_0_Template, 25, 19, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userProfile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_9__["FeedComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJQcm9maWxlL2NvbXBvbmVudHMvdXNlclByb2ZpbGUvdXNlclByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-user-profile',
          templateUrl: './userProfile.component.html',
          styleUrls: ['./userProfile.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/userProfile/services/userProfile.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/userProfile/services/userProfile.service.ts ***!
    \*************************************************************/

  /*! exports provided: UserProfileService */

  /***/
  function srcAppUserProfileServicesUserProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileService", function () {
      return UserProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserProfileService = /*#__PURE__*/function () {
      function UserProfileService(http) {
        _classCallCheck(this, UserProfileService);

        this.http = http;
      }

      _createClass(UserProfileService, [{
        key: "getUserProfile",
        value: function getUserProfile(slug) {
          var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/profiles/").concat(slug);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.profile;
          }));
        }
      }]);

      return UserProfileService;
    }();

    UserProfileService.ɵfac = function UserProfileService_Factory(t) {
      return new (t || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    UserProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserProfileService,
      factory: UserProfileService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/userProfile/store/actionTypes.ts":
  /*!**************************************************!*\
    !*** ./src/app/userProfile/store/actionTypes.ts ***!
    \**************************************************/

  /*! exports provided: ActionTypes */

  /***/
  function srcAppUserProfileStoreActionTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["GET_USER_PROFILE"] = "[User Profile] Get user profile";
      ActionTypes["GET_USER_PROFILE_SUCCESS"] = "[User Profile] Get user profile success";
      ActionTypes["GET_USER_PROFILE_FAILURE"] = "[User Profile] Get user profile failure";
    })(ActionTypes || (ActionTypes = {}));
    /***/

  },

  /***/
  "./src/app/userProfile/store/actions/getUserProfile.action.ts":
  /*!********************************************************************!*\
    !*** ./src/app/userProfile/store/actions/getUserProfile.action.ts ***!
    \********************************************************************/

  /*! exports provided: getUserProfileAction, getUserProfileSuccessAction, getUserProfileFailureAction */

  /***/
  function srcAppUserProfileStoreActionsGetUserProfileActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUserProfileAction", function () {
      return getUserProfileAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUserProfileSuccessAction", function () {
      return getUserProfileSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUserProfileFailureAction", function () {
      return getUserProfileFailureAction;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actionTypes */
    "./src/app/userProfile/store/actionTypes.ts");

    var getUserProfileAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_USER_PROFILE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getUserProfileSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_USER_PROFILE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getUserProfileFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_USER_PROFILE_FAILURE);
    /***/
  },

  /***/
  "./src/app/userProfile/store/effects/getUserProfile.effect.ts":
  /*!********************************************************************!*\
    !*** ./src/app/userProfile/store/effects/getUserProfile.effect.ts ***!
    \********************************************************************/

  /*! exports provided: GetUserProfileEffect */

  /***/
  function srcAppUserProfileStoreEffectsGetUserProfileEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetUserProfileEffect", function () {
      return GetUserProfileEffect;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/getUserProfile.action */
    "./src/app/userProfile/store/actions/getUserProfile.action.ts");
    /* harmony import */


    var _services_userProfile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/userProfile.service */
    "./src/app/userProfile/services/userProfile.service.ts");

    var GetUserProfileEffect = function GetUserProfileEffect(actions$, userProfileService) {
      var _this19 = this;

      _classCallCheck(this, GetUserProfileEffect);

      this.actions$ = actions$;
      this.userProfileService = userProfileService;
      this.getUserProfile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this19.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_4__["getUserProfileAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref17) {
          var slug = _ref17.slug;
          return _this19.userProfileService.getUserProfile(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userProfile) {
            return Object(_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_4__["getUserProfileSuccessAction"])({
              userProfile: userProfile
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_4__["getUserProfileFailureAction"])());
          }));
        }));
      });
    };

    GetUserProfileEffect.ɵfac = function GetUserProfileEffect_Factory(t) {
      return new (t || GetUserProfileEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_userProfile_service__WEBPACK_IMPORTED_MODULE_5__["UserProfileService"]));
    };

    GetUserProfileEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetUserProfileEffect,
      factory: GetUserProfileEffect.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetUserProfileEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_userProfile_service__WEBPACK_IMPORTED_MODULE_5__["UserProfileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/userProfile/store/reducers.ts":
  /*!***********************************************!*\
    !*** ./src/app/userProfile/store/reducers.ts ***!
    \***********************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppUserProfileStoreReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./actions/getUserProfile.action */
    "./src/app/userProfile/store/actions/getUserProfile.action.ts");

    var initialState = {
      data: null,
      isLoading: false,
      error: null
    };
    var userProfileReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_1__["getUserProfileAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_1__["getUserProfileSuccessAction"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false,
        data: action.userProfile
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_1__["getUserProfileFailureAction"], function (state) {
      return Object.assign(Object.assign({}, state), {
        isLoading: false
      });
    }));

    function reducers(state, action) {
      return userProfileReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/userProfile/store/selectors.ts":
  /*!************************************************!*\
    !*** ./src/app/userProfile/store/selectors.ts ***!
    \************************************************/

  /*! exports provided: userProfileFeatureSelector, userProfileSelector, isLoadingSelector, errorSelector */

  /***/
  function srcAppUserProfileStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userProfileFeatureSelector", function () {
      return userProfileFeatureSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userProfileSelector", function () {
      return userProfileSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isLoadingSelector", function () {
      return isLoadingSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "errorSelector", function () {
      return errorSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var userProfileFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('userProfile');
    var userProfileSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(userProfileFeatureSelector, function (userProfileState) {
      return userProfileState.data;
    });
    var isLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(userProfileFeatureSelector, function (userProfileState) {
      return userProfileState.isLoading;
    });
    var errorSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(userProfileFeatureSelector, function (userProfileState) {
      return userProfileState.error;
    });
    /***/
  },

  /***/
  "./src/app/userProfile/userProfile.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/userProfile/userProfile.module.ts ***!
    \***************************************************/

  /*! exports provided: UserProfileModule */

  /***/
  function srcAppUserProfileUserProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileModule", function () {
      return UserProfileModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_userProfile_components_userProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/userProfile/components/userProfile/userProfile.component */
    "./src/app/userProfile/components/userProfile/userProfile.component.ts");
    /* harmony import */


    var _services_userProfile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/userProfile.service */
    "./src/app/userProfile/services/userProfile.service.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var src_app_userProfile_store_effects_getUserProfile_effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/userProfile/store/effects/getUserProfile.effect */
    "./src/app/userProfile/store/effects/getUserProfile.effect.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_userProfile_store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/userProfile/store/reducers */
    "./src/app/userProfile/store/reducers.ts");
    /* harmony import */


    var _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/modules/feed/feed.module */
    "./src/app/shared/modules/feed/feed.module.ts");

    var routes = [{
      path: 'profiles/:slug',
      component: src_app_userProfile_components_userProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]
    }, {
      path: 'profiles/:slug/favorites',
      component: src_app_userProfile_components_userProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]
    }];

    var UserProfileModule = function UserProfileModule() {
      _classCallCheck(this, UserProfileModule);
    };

    UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserProfileModule
    });
    UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserProfileModule_Factory(t) {
        return new (t || UserProfileModule)();
      },
      providers: [_services_userProfile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([src_app_userProfile_store_effects_getUserProfile_effect__WEBPACK_IMPORTED_MODULE_6__["GetUserProfileEffect"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('userProfile', src_app_userProfile_store_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"]), _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_9__["FeedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfileModule, {
        declarations: [src_app_userProfile_components_userProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreFeatureModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_9__["FeedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([src_app_userProfile_store_effects_getUserProfile_effect__WEBPACK_IMPORTED_MODULE_6__["GetUserProfileEffect"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('userProfile', src_app_userProfile_store_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"]), _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_9__["FeedModule"]],
          declarations: [src_app_userProfile_components_userProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]],
          providers: [_services_userProfile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/yourFeed/components/yourFeed/yourFeed.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/yourFeed/components/yourFeed/yourFeed.component.ts ***!
    \********************************************************************/

  /*! exports provided: YourFeedComponent */

  /***/
  function srcAppYourFeedComponentsYourFeedYourFeedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YourFeedComponent", function () {
      return YourFeedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/modules/banner/components/banner/banner.component */
    "./src/app/shared/modules/banner/components/banner/banner.component.ts");
    /* harmony import */


    var src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component */
    "./src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component.ts");
    /* harmony import */


    var src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/modules/feed/components/feed/feed.component */
    "./src/app/shared/modules/feed/components/feed/feed.component.ts");
    /* harmony import */


    var src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/modules/popularTags/components/popularTags/popularTags.component */
    "./src/app/shared/modules/popularTags/components/popularTags/popularTags.component.ts");

    var YourFeedComponent = function YourFeedComponent() {
      _classCallCheck(this, YourFeedComponent);

      this.apiUrl = '/articles/feed';
    };

    YourFeedComponent.ɵfac = function YourFeedComponent_Factory(t) {
      return new (t || YourFeedComponent)();
    };

    YourFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: YourFeedComponent,
      selectors: [["mc-your-feed"]],
      decls: 9,
      vars: 1,
      consts: [[1, "home-page"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [3, "apiUrl"], [1, "col-md-3"]],
      template: function YourFeedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mc-feed-toggler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mc-feed", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mc-popular-tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("apiUrl", ctx.apiUrl);
        }
      },
      directives: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__["FeedTogglerComponent"], src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"], src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_4__["PopularTagsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXJGZWVkL2NvbXBvbmVudHMveW91ckZlZWQveW91ckZlZWQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YourFeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-your-feed',
          templateUrl: './yourFeed.component.html',
          styleUrls: ['./yourFeed.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/yourFeed/yourFeed.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/yourFeed/yourFeed.module.ts ***!
    \*********************************************/

  /*! exports provided: YourFeedModule */

  /***/
  function srcAppYourFeedYourFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YourFeedModule", function () {
      return YourFeedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_yourFeed_components_yourFeed_yourFeed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/yourFeed/components/yourFeed/yourFeed.component */
    "./src/app/yourFeed/components/yourFeed/yourFeed.component.ts");
    /* harmony import */


    var src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/modules/feed/feed.module */
    "./src/app/shared/modules/feed/feed.module.ts");
    /* harmony import */


    var src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/modules/banner/banner.module */
    "./src/app/shared/modules/banner/banner.module.ts");
    /* harmony import */


    var _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/modules/popularTags/popularTags.module */
    "./src/app/shared/modules/popularTags/popularTags.module.ts");
    /* harmony import */


    var src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/modules/feedToggler/feedToggler.module */
    "./src/app/shared/modules/feedToggler/feedToggler.module.ts");

    var routes = [{
      path: 'feed',
      component: src_app_yourFeed_components_yourFeed_yourFeed_component__WEBPACK_IMPORTED_MODULE_3__["YourFeedComponent"]
    }];

    var YourFeedModule = function YourFeedModule() {
      _classCallCheck(this, YourFeedModule);
    };

    YourFeedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: YourFeedModule
    });
    YourFeedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function YourFeedModule_Factory(t) {
        return new (t || YourFeedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"], _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"], src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__["FeedTogglerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YourFeedModule, {
        declarations: [src_app_yourFeed_components_yourFeed_yourFeed_component__WEBPACK_IMPORTED_MODULE_3__["YourFeedComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"], _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"], src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__["FeedTogglerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YourFeedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"], _shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"], src_app_shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_7__["FeedTogglerModule"]],
          declarations: [src_app_yourFeed_components_yourFeed_yourFeed_component__WEBPACK_IMPORTED_MODULE_3__["YourFeedComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'https://conduit.productionready.io/api',
      limit: 10
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\vselen\Desktop\aidos\aidos\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map