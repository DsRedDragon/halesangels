(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	//Modules
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var forms_1 = __webpack_require__(8);
	var primeng_1 = __webpack_require__(9);
	var angular_confirmation_popover_1 = __webpack_require__(10);
	var core_2 = __webpack_require__(11);
	var controls_1 = __webpack_require__(12);
	var overlay_play_1 = __webpack_require__(13);
	var buffering_1 = __webpack_require__(14);
	//Components
	var admin_component_1 = __webpack_require__(15);
	var app_component_1 = __webpack_require__(22);
	var archivecontainer_component_1 = __webpack_require__(27);
	var archivelist_component_1 = __webpack_require__(30);
	var archiveredirect_component_1 = __webpack_require__(32);
	var articleadminlist_component_1 = __webpack_require__(33);
	var article_component_1 = __webpack_require__(38);
	var articlecontainer_component_1 = __webpack_require__(40);
	var edit_component_1 = __webpack_require__(42);
	var articleeditredirect_component_1 = __webpack_require__(46);
	var articlelist_component_1 = __webpack_require__(47);
	var articleredirect_component_1 = __webpack_require__(49);
	var articleviewredirect_component_1 = __webpack_require__(50);
	var commentlist_component_1 = __webpack_require__(51);
	var commentadminlist_component_1 = __webpack_require__(54);
	var feedback_component_1 = __webpack_require__(56);
	var feedbacklist_component_1 = __webpack_require__(59);
	var feedbackredirect_component_1 = __webpack_require__(61);
	var footer_component_1 = __webpack_require__(62);
	var home_component_1 = __webpack_require__(64);
	var loading_indicator_1 = __webpack_require__(66);
	var navmenu_component_1 = __webpack_require__(68);
	var ngcarousel_component_1 = __webpack_require__(72);
	var privacy_component_1 = __webpack_require__(74);
	var profile_component_1 = __webpack_require__(76);
	var setting_component_1 = __webpack_require__(78);
	var userlist_component_1 = __webpack_require__(81);
	var videoplayer_component_1 = __webpack_require__(83);
	//Services
	var ng2_facebook_sdk_1 = __webpack_require__(44);
	var user_service_1 = __webpack_require__(16);
	var comment_service_1 = __webpack_require__(52);
	var article_service_1 = __webpack_require__(28);
	var image_service_1 = __webpack_require__(34);
	var setting_service_1 = __webpack_require__(20);
	//Pipes
	var yesNo_pipe_1 = __webpack_require__(85);
	var formatDate_pipe_1 = __webpack_require__(86);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            admin_component_1.AdminComponent,
	            app_component_1.AppComponent,
	            archivecontainer_component_1.ArchiveContainerComponent,
	            archivelist_component_1.ArchiveListComponent,
	            archiveredirect_component_1.ArchiveRedirectComponent,
	            articleadminlist_component_1.ArticleAdminListComponent,
	            article_component_1.ArticleComponent,
	            articlecontainer_component_1.ArticleContainerComponent,
	            edit_component_1.ArticleEditComponent,
	            articleeditredirect_component_1.ArticleEditRedirectComponent,
	            articlelist_component_1.ArticleListComponent,
	            articleredirect_component_1.ArticleRedirectComponent,
	            articleviewredirect_component_1.ArticleViewRedirectComponent,
	            yesNo_pipe_1.BooleanPipe,
	            commentlist_component_1.CommentListComponent,
	            commentadminlist_component_1.CommentAdminListComponent,
	            formatDate_pipe_1.DatePipe,
	            feedback_component_1.FeedbackComponent,
	            feedbacklist_component_1.FeedBackListComponent,
	            feedbackredirect_component_1.FeedbackRedirectComponent,
	            footer_component_1.FooterComponent,
	            home_component_1.HomeComponent,
	            navmenu_component_1.NavMenuComponent,
	            ngcarousel_component_1.NGCarouselComponent,
	            loading_indicator_1.LoadingIndicator,
	            privacy_component_1.PrivacyComponent,
	            profile_component_1.ProfileComponent,
	            setting_component_1.SettingComponent,
	            userlist_component_1.UserListComponent,
	            videoplayer_component_1.VideoPlayerComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                {
	                    path: 'article',
	                    children: [
	                        { path: 'view/:id', component: articlecontainer_component_1.ArticleContainerComponent },
	                        { path: 'edit/:id', component: edit_component_1.ArticleEditComponent },
	                        { path: 'new', component: edit_component_1.ArticleEditComponent }
	                    ]
	                },
	                { path: 'view/:id', component: articleviewredirect_component_1.ArticleViewRedirectComponent },
	                { path: 'archive', component: archivecontainer_component_1.ArchiveContainerComponent },
	                { path: 'archives', component: archiveredirect_component_1.ArchiveRedirectComponent },
	                { path: 'create', component: articleredirect_component_1.ArticleRedirectComponent },
	                { path: 'edit/:id', component: articleeditredirect_component_1.ArticleEditRedirectComponent },
	                { path: 'admin', component: admin_component_1.AdminComponent },
	                { path: 'feedback', component: feedback_component_1.FeedbackComponent },
	                { path: 'feedbackredirect', component: feedbackredirect_component_1.FeedbackRedirectComponent },
	                { path: 'profile', component: profile_component_1.ProfileComponent },
	                { path: 'privacy', component: privacy_component_1.PrivacyComponent },
	                { path: '**', redirectTo: 'home' }
	            ]),
	            primeng_1.CalendarModule,
	            ng2_bootstrap_1.CarouselModule,
	            angular_confirmation_popover_1.ConfirmationPopoverModule.forRoot({
	                focusButton: 'confirm'
	            }),
	            ng2_bootstrap_1.DatepickerModule,
	            primeng_1.DropdownModule,
	            primeng_1.EditorModule,
	            primeng_1.FileUploadModule,
	            forms_1.FormsModule,
	            primeng_1.GrowlModule,
	            ng2_bootstrap_1.ModalModule,
	            primeng_1.SharedModule,
	            ng2_bootstrap_1.TabsModule,
	            primeng_1.TooltipModule,
	            core_2.VgCoreModule,
	            controls_1.VgControlsModule,
	            overlay_play_1.VgOverlayPlayModule,
	            buffering_1.VgBufferingModule
	        ],
	        providers: [article_service_1.ArticleService,
	            comment_service_1.CommentService,
	            ng2_facebook_sdk_1.FacebookService,
	            image_service_1.ImageService,
	            setting_service_1.SettingService,
	            user_service_1.UserService
	        ]
	    })
	], AppModule);
	exports.AppModule = AppModule;
	//# sourceMappingURL=app.module.js.map

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("ng2-bootstrap/ng2-bootstrap");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("primeng/primeng");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("angular-confirmation-popover");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("videogular2/core");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("videogular2/controls");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("videogular2/overlay-play");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("videogular2/buffering");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var AdminComponent = (function () {
	    function AdminComponent(userService, router) {
	        this.userService = userService;
	        this.router = router;
	        this.isLoggedIn = false;
	    }
	    AdminComponent.prototype.ngOnDestroy = function () {
	        this.userSubscription.unsubscribe();
	        this.stateSubscription.unsubscribe();
	    };
	    AdminComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.isLoggedIn = this.userService.isLoggedIn;
	        this.user = this.userService.user;
	        this.stateSubscription = this.userService.stateChange.subscribe(function (value) {
	            _this.isLoggedIn = value;
	        });
	        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
	            _this.user = value;
	        });
	    };
	    AdminComponent.prototype.ngAfterViewInit = function () {
	        if (!this.isLoggedIn) {
	            this.loginModal.show();
	        }
	    };
	    AdminComponent.prototype.dismissLoginModal = function () {
	        this.router.navigate(['/home']);
	    };
	    return AdminComponent;
	}());
	__decorate([
	    core_1.ViewChild('loginModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], AdminComponent.prototype, "loginModal", void 0);
	AdminComponent = __decorate([
	    core_1.Component({
	        selector: 'admin',
	        template: __webpack_require__(21)
	    }),
	    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
	], AdminComponent);
	exports.AdminComponent = AdminComponent;
	//# sourceMappingURL=admin.component.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(17);
	var rxjs_1 = __webpack_require__(18);
	var router_1 = __webpack_require__(6);
	var externalData_model_1 = __webpack_require__(19);
	var setting_service_1 = __webpack_require__(20);
	var UserService = (function () {
	    function UserService(http, router, settingService) {
	        var _this = this;
	        this.http = http;
	        this.router = router;
	        this.settingService = settingService;
	        this.userInfoChanged = false;
	        this.isLoggedIn = false;
	        this.userId = 0;
	        this.stateChange = new rxjs_1.Subject();
	        this.userChange = new rxjs_1.Subject();
	        this.userObjectChange = new rxjs_1.Subject();
	        this.fbResponse = {
	            expires: 0
	        };
	        this.fbA = '';
	        this.fbS = '';
	        this.fbP = '';
	        this.settingService.getSetting(1001).subscribe(function (result) {
	            _this.fbA = result.settingValue;
	            _this.settingService.getSetting(1002).subscribe(function (result) {
	                _this.fbS = result.settingValue;
	            });
	            _this.settingService.getSetting(1003).subscribe(function (result) {
	                _this.fbP = result.settingValue;
	                hello()
	                    .init({
	                    facebook: _this.fbA
	                }, { response_type: 'code' });
	            });
	        });
	    }
	    UserService.prototype.getUser = function (externalId) {
	        return this.http.get("/api/User/GetUserViewByExternalId?externalId=" + externalId)
	            .map(function (result) { return result.json(); });
	    };
	    UserService.prototype.getApplicationUsers = function () {
	        return this.http.get('/api/User/GetApplicationUsers')
	            .map(function (result) { return result.json(); });
	    };
	    UserService.prototype.getApplicationUsersForNotifications = function () {
	        return this.http.get('/api/User/GetApplicationUsersForNotifications')
	            .map(function (result) { return result.json(); });
	    };
	    UserService.prototype.saveProfile = function (user) {
	        var _this = this;
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/User/UpdateUser?fromLogin=false', JSON.stringify(user), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); }).subscribe(function (result) {
	            _this.user = result;
	            _this.userId = result.applicationUserId;
	            _this.change();
	        });
	    };
	    UserService.prototype.logout = function () {
	        var _this = this;
	        hello('facebook').logout().then(function (result) {
	            _this.router.navigate(['/home']);
	            _this.result = new externalData_model_1.ExternalData;
	            _this.user = undefined;
	            _this.change();
	        });
	    };
	    ;
	    UserService.prototype.login = function () {
	        var _this = this;
	        hello('facebook')
	            .login({ scope: 'email,public_profile' })
	            .then(function (result) {
	            hello('facebook')
	                .api('/me', 'get')
	                .then(function (res) {
	                _this.result = res;
	                _this.saveUserDataFromExternal();
	            });
	        });
	    };
	    ;
	    UserService.prototype.checkLogin = function () {
	        var _this = this;
	        this.fbResponse = hello('facebook')
	            .getAuthResponse();
	        if (this.fbResponse != null) {
	            var date1 = new Date(this.fbResponse.expires * 1000);
	            var date2 = new Date(Date.now());
	            if (date1 > date2) {
	                hello('facebook')
	                    .api('/me', 'get')
	                    .then(function (res) {
	                    _this.result = res;
	                    _this.saveUserDataFromExternal();
	                });
	            }
	            else {
	                this.user = undefined;
	                this.isLoggedIn = false;
	                this.stateChange.next(this.isLoggedIn);
	            }
	        }
	        else {
	            this.user = undefined;
	            this.isLoggedIn = false;
	            this.stateChange.next(this.isLoggedIn);
	        }
	    };
	    ;
	    UserService.prototype.saveUserDataFromExternal = function () {
	        var _this = this;
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        this.getUser(this.result.id)
	            .subscribe(function (res) {
	            _this.myUser = res;
	            _this.myUser.emailAddress = _this.result.email;
	            _this.myUser.firstName = _this.result.first_name;
	            _this.myUser.lastName = _this.result.last_name;
	            _this.myUser.externalId = _this.result.id;
	            _this.http.post('/api/User/UpdateUser?fromLogin=true', JSON.stringify(_this.myUser), {
	                headers: headers
	            })
	                .map(function (res) { return res.json(); })
	                .subscribe(function (result) {
	                _this.user = result;
	                _this.userId = result.applicationUserId;
	                _this.change();
	            });
	        });
	    };
	    UserService.prototype.change = function () {
	        this.isLoggedIn = !this.isLoggedIn;
	        this.userObjectChange.next(this.user);
	        this.userChange.next(this.userId);
	        this.stateChange.next(this.isLoggedIn);
	    };
	    return UserService;
	}());
	UserService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http, router_1.Router, setting_service_1.SettingService])
	], UserService);
	exports.UserService = UserService;
	//# sourceMappingURL=user.service.js.map

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("rxjs");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var ExternalData = (function () {
	    function ExternalData() {
	    }
	    return ExternalData;
	}());
	ExternalData = __decorate([
	    core_1.Injectable()
	], ExternalData);
	exports.ExternalData = ExternalData;
	//# sourceMappingURL=externalData.model.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(17);
	__webpack_require__(18);
	var SettingService = (function () {
	    function SettingService(http) {
	        this.http = http;
	    }
	    SettingService.prototype.getSettings = function () {
	        return this.http.get('/api/Setting/GetSettings')
	            .map(function (result) { return result.json(); });
	    };
	    SettingService.prototype.getSetting = function (settingId) {
	        return this.http.get("/api/Setting/GetSetting?settingId=" + settingId)
	            .map(function (result) { return result.json(); });
	    };
	    SettingService.prototype.saveSettings = function (setting) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Setting/UpdateSettings', JSON.stringify(setting), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    SettingService.prototype.saveSetting = function (setting) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Setting/UpdateSetting', JSON.stringify(setting), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    return SettingService;
	}());
	SettingService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], SettingService);
	exports.SettingService = SettingService;
	//# sourceMappingURL=setting.service.js.map

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h2>Admin</h2>\r\n                </div>\r\n                <div class=\"panel-body\" *ngIf=\"!isLoggedIn || (user !== undefined && !user.isAdmin)\">\r\n                    You must be logged in and be an administrator to access this page.\r\n                </div>\r\n                <div class=\"panel-body\" *ngIf=\"isLoggedIn && user.isAdmin\">\r\n                    <tabset>\r\n                        <tab heading=\"Articles\"><article-admin-list [activeOnly]=\"true\"></article-admin-list></tab>\r\n                        <tab heading=\"Archived Articles\"><article-admin-list [activeOnly]=\"false\"></article-admin-list></tab>\r\n                        <tab heading=\"Users\"><user-list></user-list></tab>\r\n                        <tab heading=\"Comments\"><comment-admin-list></comment-admin-list></tab>\r\n                        <tab *ngIf=\"user.isSystemAdmin\" heading=\"Feedback\"><feedback-list [admin]=\"true\"></feedback-list></tab>\r\n                        <tab *ngIf=\"user.isSystemAdmin\" heading=\"Settings\"><setting></setting></tab>\r\n                    </tabset>\r\n                </div>\r\n                <div class=\"row\">\r\n                    &nbsp;\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n<div bsModal #loginModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" (onHide)=\"dismissLoginModal()\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"loginModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Error</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                You must be logged in and be an administrator to access this page.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent(viewContainerRef) {
	        // You need this small hack in order to catch application root view container ref
	        this.viewContainerRef = viewContainerRef;
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(23),
	        styles: [__webpack_require__(24)],
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef])
	], AppComponent);
	exports.AppComponent = AppComponent;
	//# sourceMappingURL=app.component.js.map

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class=\"row\">\n        <div class='col-sm-12'>\n            <nav-menu></nav-menu>\n        </div>\n    </div>\n    <div class=\"row\">&nbsp;</div>\n    <div class=\"row\">&nbsp;</div>\n    <div class=\"row\">&nbsp;</div>\n    <div class=\"row\">\n        <div class='col-sm-12 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <footer-item></footer-item>\n</div>\n"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(25);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var router_1 = __webpack_require__(6);
	var ArchiveContainerComponent = (function () {
	    function ArchiveContainerComponent(articleService, activatedRoute) {
	        this.articleService = articleService;
	        this.activatedRoute = activatedRoute;
	        this.articles = [];
	    }
	    ArchiveContainerComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.articles = [];
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.date = param['date'];
	            _this.title = param['title'];
	        });
	        if (this.date != undefined) {
	            this.articleService.getArchivesByMonth(this.date)
	                .subscribe(function (articles) {
	                _this.articles = articles;
	            });
	        }
	    };
	    return ArchiveContainerComponent;
	}());
	ArchiveContainerComponent = __decorate([
	    core_1.Component({
	        selector: 'archive-container',
	        template: __webpack_require__(29),
	        providers: [article_service_1.ArticleService]
	    }),
	    __metadata("design:paramtypes", [article_service_1.ArticleService, router_1.ActivatedRoute])
	], ArchiveContainerComponent);
	exports.ArchiveContainerComponent = ArchiveContainerComponent;
	//# sourceMappingURL=archivecontainer.component.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(17);
	__webpack_require__(18);
	var ArticleService = (function () {
	    function ArticleService(http) {
	        this.http = http;
	    }
	    ArticleService.prototype.getArticles = function () {
	        return this.http.get('/api/Article/GetArticles')
	            .map(function (result) { return result.json(); });
	    };
	    ArticleService.prototype.deleteArticle = function (articleId) {
	        return this.http.get("/api/Article/DeleteArticle?articleId=" + articleId).map(function (res) { return res.json; });
	    };
	    ArticleService.prototype.getArticlesList = function (activeOnly) {
	        return this.http.get("/api/Article/GetArticlesList?activeOnly=" + activeOnly)
	            .map(function (result) { return result.json(); });
	    };
	    ArticleService.prototype.getArticle = function (articleId) {
	        return this.http.get("/api/Article/GetArticle?articleId=" + articleId)
	            .map(function (result) { return result.json(); });
	    };
	    ArticleService.prototype.getArchiveList = function () {
	        return this.http.get("/api/Article/GetArchiveList")
	            .map(function (result) { return result.json(); });
	    };
	    ArticleService.prototype.getArchivesByMonth = function (id) {
	        return this.http.get("/api/Article/GetArchivesByMonth?start=" + id)
	            .map(function (result) { return result.json(); });
	    };
	    ArticleService.prototype.saveArticle = function (article) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Article/UpdateArticle', JSON.stringify(article), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    ArticleService.prototype.sendNotification = function (article) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Article/SendNotification', JSON.stringify(article), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    return ArticleService;
	}());
	ArticleService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], ArticleService);
	exports.ArticleService = ArticleService;
	//# sourceMappingURL=article.service.js.map

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div id=\"wrapper\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <h2>{{title}}</h2>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"row\" *ngIf=\"articles.length < 1\">\r\n                            <loading-indicator></loading-indicator>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"articles.length > 0\">\r\n                            <div *ngFor=\"let article of articles\">\r\n                                <article-item [article]=\"article\"></article-item>\r\n                                <hr />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <archive-list></archive-list>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                &nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var ArchiveListComponent = (function () {
	    function ArchiveListComponent(articleService) {
	        var _this = this;
	        this.articleService = articleService;
	        this.archives = [];
	        this.loaded = false;
	        this.articleService.getArchiveList()
	            .subscribe(function (archives) {
	            _this.archives = archives;
	            _this.loaded = true;
	        });
	    }
	    return ArchiveListComponent;
	}());
	ArchiveListComponent = __decorate([
	    core_1.Component({
	        selector: 'archive-list',
	        template: __webpack_require__(31),
	        providers: [article_service_1.ArticleService]
	    }),
	    __metadata("design:paramtypes", [article_service_1.ArticleService])
	], ArchiveListComponent);
	exports.ArchiveListComponent = ArchiveListComponent;
	//# sourceMappingURL=archivelist.component.js.map

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Archives</div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\" *ngIf=\"archives.length < 1 && !loaded\">\r\n            <loading-indicator></loading-indicator>\r\n        </div>\r\n        <div *ngIf=\"loaded && archives.length < 1\">\r\n            There are no archives\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"archives.length > 0\">\r\n            <div class=\"row\" style=\"margin-left: 10px\" *ngFor=\"let archive of archives\">\r\n                <a [routerLink]=\"['/archives', { date: archive.monthStart, title: archive.archiveName } ]\">\r\n                    {{archive.archiveName}}\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var ArchiveRedirectComponent = (function () {
	    function ArchiveRedirectComponent(router, activatedRoute) {
	        var _this = this;
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.date = param['date'];
	            _this.title = param['title'];
	        });
	        this.router.navigate(["/archive", { date: this.date, title: this.title }]);
	    }
	    return ArchiveRedirectComponent;
	}());
	ArchiveRedirectComponent = __decorate([
	    core_1.Component({
	        selector: 'archiveredirect',
	        template: '<div></div>'
	    }),
	    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
	], ArchiveRedirectComponent);
	exports.ArchiveRedirectComponent = ArchiveRedirectComponent;
	//# sourceMappingURL=archiveredirect.component.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var image_service_1 = __webpack_require__(34);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var ArticleAdminListComponent = (function () {
	    function ArticleAdminListComponent(articleService, imageService) {
	        this.articleService = articleService;
	        this.imageService = imageService;
	        this.articles = [];
	        this.activeOnly = false;
	        this.title = 'Delete Article';
	        this.message = 'Are you <b>sure</b> you want to delete this article?';
	        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
	        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
	        this.hiddenTitle = 'Show Article';
	        this.hiddenMessage = 'Are you <b>sure</b> you want to make this article visible?';
	        this.newTitle = 'Mark as Read';
	        this.newMessage = 'Are you <b>sure</b> you want to mark this item as read?';
	        this.readTitle = 'Mark as Unread';
	        this.readMessage = 'Are you <b>sure</b> you want to mark this item as unread?';
	        this.visibleTitle = 'Hide Article';
	        this.visibleMessage = 'Are you <b>sure</b> you want to hide this article?';
	        this.imagesToDelete = [];
	        this.loaded = false;
	    }
	    ArticleAdminListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.articleService.getArticlesList(this.activeOnly)
	            .subscribe(function (articles) {
	            _this.articles = articles;
	            _this.loaded = true;
	        });
	    };
	    ArticleAdminListComponent.prototype.confirmClicked = function (article) {
	        var _this = this;
	        this.imageService.deleteImages(article.articleId)
	            .subscribe(function (result) {
	            _this.imagesToDelete = result;
	            if (_this.imagesToDelete !== undefined) {
	                _this.imagesToDelete.forEach(function (x) {
	                    if (x.externalId !== null) {
	                        hello('facebook')
	                            .api("/" + x.externalId, 'delete')
	                            .then(function (result) {
	                        });
	                    }
	                    //if (x.externalAlbumId !== null) {
	                    //    hello('facebook')
	                    //        .api(`/${x.externalAlbumId}`,
	                    //        'delete')
	                    //        .then(result => {
	                    //        });
	                    //}
	                });
	            }
	            _this.articleService.deleteArticle(article.articleId).subscribe(function (result) {
	                var index = _this.articles.indexOf(article);
	                _this.articles.splice(index, 1);
	                _this.deleteModal.show();
	            });
	        });
	    };
	    ArticleAdminListComponent.prototype.showArticle = function (article) {
	        var _this = this;
	        article.visible = true;
	        article.isNew = false;
	        this.articleService.saveArticle(article)
	            .subscribe(function (result) {
	            article.isNew = true;
	            _this.articleService.sendNotification(article).subscribe(function (x) {
	                article.isNew = false;
	            });
	        });
	    };
	    ArticleAdminListComponent.prototype.hideArticle = function (article) {
	        article.visible = false;
	        this.articleService.saveArticle(article)
	            .subscribe(function (result) {
	        });
	    };
	    ArticleAdminListComponent.prototype.markRead = function (article) {
	        article.isNew = false;
	        this.articleService.saveArticle(article)
	            .subscribe(function (result) {
	        });
	    };
	    ArticleAdminListComponent.prototype.markUnRead = function (article) {
	        article.isNew = true;
	        this.articleService.saveArticle(article)
	            .subscribe(function (result) {
	        });
	    };
	    return ArticleAdminListComponent;
	}());
	__decorate([
	    core_1.ViewChild('deleteModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], ArticleAdminListComponent.prototype, "deleteModal", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], ArticleAdminListComponent.prototype, "activeOnly", void 0);
	ArticleAdminListComponent = __decorate([
	    core_1.Component({
	        selector: 'article-admin-list',
	        template: __webpack_require__(37)
	    }),
	    __metadata("design:paramtypes", [article_service_1.ArticleService, image_service_1.ImageService])
	], ArticleAdminListComponent);
	exports.ArticleAdminListComponent = ArticleAdminListComponent;
	//# sourceMappingURL=articleadminlist.component.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(17);
	var rxjs_1 = __webpack_require__(18);
	var image_model_1 = __webpack_require__(35);
	var platform_browser_1 = __webpack_require__(36);
	var setting_service_1 = __webpack_require__(20);
	var ImageService = (function () {
	    function ImageService(http, sanitizer, settingService) {
	        var _this = this;
	        this.http = http;
	        this.sanitizer = sanitizer;
	        this.settingService = settingService;
	        this.images = [];
	        this.files = [];
	        this.header = new image_model_1.Image();
	        this.imageUrl = '';
	        this.imagesToDelete = [];
	        this.imageChange = new rxjs_1.Subject();
	        this.fbA = '';
	        this.fbS = '';
	        this.fbP = '';
	        this.fbT = '';
	        this.settingService.getSetting(1001).subscribe(function (result) {
	            _this.fbA = result.settingValue;
	            _this.settingService.getSetting(1002).subscribe(function (result) {
	                _this.fbS = result.settingValue;
	            });
	            _this.settingService.getSetting(1003).subscribe(function (result) {
	                _this.fbP = result.settingValue;
	                hello()
	                    .init({
	                    facebook: _this.fbA
	                }, { scope: 'publish_pages,manage_pages,user_photos' });
	            });
	        });
	    }
	    ImageService.prototype.deleteImages = function (articleId) {
	        return this.http.get("/api/Image/GetImagesByArticleId?articleId=" + articleId)
	            .map(function (res) { return res.json(); });
	    };
	    ImageService.prototype.getImagesByArticleId = function (articleId) {
	        var _this = this;
	        this.settingService.getSetting(1004).subscribe(function (result) {
	            _this.fbT = result.settingValue;
	            return _this.http.get("/api/Image/GetImagesByArticleId?articleId=" + articleId)
	                .map(function (res) { return res.json(); }).subscribe(function (result) {
	                _this.images = result;
	                _this.change();
	                _this.images.forEach(function (x) {
	                    var now = new Date();
	                    var pastDate = new Date();
	                    if (x !== undefined) {
	                        pastDate = new Date(x.urlRetrievalDate);
	                        pastDate.setDate(pastDate.getDate() + 2);
	                    }
	                    if (pastDate < now) {
	                        if (x.externalId !== null && x.isVideo) {
	                            hello('facebook')
	                                .api("/" + x.externalId, {
	                                fields: 'source,thumbnails{uri}',
	                                token: _this.fbT
	                            })
	                                .then(function (res) {
	                                x.imageUrl = res.source;
	                                x.thumbnailUrl = res.thumbnails.data[0].uri;
	                                x.urlRetrievalDate = now;
	                                _this.updateImage(x)
	                                    .subscribe(function (r) {
	                                    var index = _this.images.indexOf(x);
	                                    _this.images.splice(index, 1, x);
	                                    _this.change();
	                                });
	                            });
	                        }
	                        else {
	                            if (x.externalId !== null && !x.isVideo) {
	                                hello('facebook')
	                                    .api("/" + x.externalId, {
	                                    fields: 'source,album',
	                                    token: _this.fbT
	                                })
	                                    .then(function (res) {
	                                    x.imageUrl = res.source;
	                                    x.externalAlbumId = res.album.id;
	                                    x.urlRetrievalDate = now;
	                                    _this.updateImage(x)
	                                        .subscribe(function (r) {
	                                        var index = _this.images.indexOf(x);
	                                        _this.images.splice(index, 1, x);
	                                        _this.change();
	                                    });
	                                });
	                            }
	                        }
	                    }
	                });
	            });
	        });
	    };
	    ImageService.prototype.sanitize = function (url) {
	        var sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(url);
	        return sanitizedUrl;
	    };
	    ImageService.prototype.onUpload = function (event, articleId) {
	        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
	            var file = _a[_i];
	            this.files.push(file);
	            var img = new image_model_1.Image();
	            img.articleId = articleId;
	            img.captionText = file.captionText;
	            img.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
	            img.thumbnailUrl = file.objectURL.changingThisBreaksApplicationSecurity;
	            if (file.type.includes('video')) {
	                img.isVideo = true;
	            }
	            else {
	                img.isVideo = false;
	            }
	            this.insertImage(img);
	        }
	        this.msgs = [];
	        this.msgs.push({ severity: 'success', summary: 'File Uploaded', detail: '' });
	    };
	    ImageService.prototype.onHeaderUpload = function (event) {
	        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
	            var file = _a[_i];
	            this.header = file;
	            this.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
	        }
	        this.headerMsgs = [];
	        this.headerMsgs.push({ severity: 'success', summary: 'File Uploaded', detail: '' });
	    };
	    ImageService.prototype.deleteImage = function (imageId) {
	        this.http.get("/api/Image/DeleteImage?imageId=" + imageId).map(function (res) { return res.json; }).subscribe(function (result) {
	        });
	    };
	    ImageService.prototype.insertImage = function (image) {
	        this.images.push(image);
	        this.images = this.images;
	    };
	    ImageService.prototype.saveImage = function (image) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Image/SaveImage', JSON.stringify(image), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    ImageService.prototype.updateImage = function (image) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Image/UpdateImage', JSON.stringify(image), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    ImageService.prototype.change = function () {
	        this.imageChange.next(this.images);
	    };
	    return ImageService;
	}());
	ImageService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http, platform_browser_1.DomSanitizer, setting_service_1.SettingService])
	], ImageService);
	exports.ImageService = ImageService;
	//# sourceMappingURL=image.service.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var Image = (function () {
	    function Image() {
	    }
	    return Image;
	}());
	Image = __decorate([
	    core_1.Injectable()
	], Image);
	exports.Image = Image;
	//# sourceMappingURL=image.model.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("@angular/platform-browser");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel\">\r\n\r\n    <div id=\"wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">&nbsp;</div>\r\n            <div class=\"row\">\r\n                <div class=\"row\" *ngIf=\"articles.length < 1 && !loaded\">\r\n                    <loading-indicator></loading-indicator>\r\n                </div>\r\n                <div *ngIf=\"articles.length < 1 && loaded\">\r\n                    There are no articles here\r\n                    <br /><br />\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <table *ngIf=\"articles.length > 0\" class=\"table table-striped table-fixed\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Un-Read</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-4 border-right\">\r\n                                <h5>Title</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-2 border-right\">\r\n                                <h5>Posted By</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-2 border-right\">\r\n                                <h5>Posted Date</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Visible</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Edit</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-1 text-center\">\r\n                                <h5>Delete</h5>\r\n                            </th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let article of articles\">\r\n                            <td class=\"col-xs-1 text-center border-right\" pTooltip=\"{{article.isNew | yesNo: 'readUnread'}}\" tooltipPosition=\"top\">\r\n                                <a *ngIf=\"!article.isNew\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"readTitle\"\r\n                                   [message]=\"readMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"markUnRead(article)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-circle-o\"></i>\r\n                                </a>\r\n                                <a *ngIf=\"article.isNew\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"newTitle\"\r\n                                   [message]=\"newMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"markRead(article)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-check-circle-o\"></i>\r\n                                </a>\r\n                            </td>\r\n                            <td class=\"col-xs-4 border-right\" pTooltip=\"{{article.title}}\" tooltipPosition=\"top\">\r\n                                {{article.title}}\r\n                            </td>\r\n                            <td class=\"col-xs-2 border-right\" pTooltip=\"{{article.authorName}}\" tooltipPosition=\"top\">\r\n                                {{article.authorName}}\r\n                            </td>\r\n                            <td class=\"col-xs-2 border-right\" pTooltip=\"{{article.postedDT | formatDate: 'MM/DD/YYYY'}}\" tooltipPosition=\"top\">\r\n                                {{article.postedDT | formatDate: 'MM/DD/YYYY'}}\r\n                            </td>\r\n                            <td class=\"col-xs-1 text-center border-right\" pTooltip=\"{{article.visible | yesNo: 'visible'}}\" tooltipPosition=\"top\">\r\n                                <a *ngIf=\"article.visible\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"visibleTitle\"\r\n                                   [message]=\"visibleMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"hideArticle(article)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-thumbs-o-up\"></i>\r\n                                </a>\r\n                                <a *ngIf=\"!article.visible\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"hiddenTitle\"\r\n                                   [message]=\"hiddenMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"showArticle(article)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-thumbs-o-down\"></i>\r\n                                </a>\r\n                            </td>\r\n                            <td class=\"col-xs-1 text-center border-right\">\r\n                                <a [routerLink]=\"['/edit/' + article.articleId]\">\r\n                                    <i class=\"fa fa-lg fa-pencil-square-o\"></i>\r\n                                </a>\r\n                            </td>\r\n                            <td class=\"col-xs-1 text-center\">\r\n                                <a role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"title\"\r\n                                   [message]=\"message\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"confirmClicked(article)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-ban\"></i>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Article Deleted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Article has been deleted successfully.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var router_1 = __webpack_require__(6);
	var ArticleComponent = (function () {
	    function ArticleComponent(articleService, activatedRoute) {
	        this.articleService = articleService;
	        this.activatedRoute = activatedRoute;
	        this.id = 0;
	    }
	    ArticleComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.id = param['id'];
	        });
	        if (this.id > 0) {
	            this.articleService.getArticle(this.id)
	                .subscribe(function (article) {
	                _this.article = article;
	            });
	        }
	    };
	    return ArticleComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], ArticleComponent.prototype, "article", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], ArticleComponent.prototype, "id", void 0);
	ArticleComponent = __decorate([
	    core_1.Component({
	        selector: 'article-item',
	        template: __webpack_require__(39)
	    }),
	    __metadata("design:paramtypes", [article_service_1.ArticleService, router_1.ActivatedRoute])
	], ArticleComponent);
	exports.ArticleComponent = ArticleComponent;
	//# sourceMappingURL=article.component.js.map

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\r\n<a [routerLink]=\"['/view/' + article.articleId]\">\r\n    <h1>{{ article.title }}</h1>\r\n</a>\r\n<iframe src=\"https://www.facebook.com/plugins/share_button.php?layout=button_count&size=small&mobile_iframe=true&appId=1000948176604630&width=74&height=20&href=http%3A%2F%2Fwww.thehalesangels.com\" width=\"74\" height=\"20\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"></iframe>\r\n<h6 class=\"text-primary\">\r\n    - Posted By: {{ article.authorName }} on {{ article.postedDT | formatDate: 'MM/DD/YYYY' }}\r\n</h6>\r\n<div [innerHTML]=\"article.articleContent\"></div>\r\n<div class=\"row\">&nbsp;</div>\r\n<ng-carousel [id]=\"article.articleId\"></ng-carousel>\r\n<div class=\"row\">&nbsp;</div>\r\n<div class=\"row\">\r\n    <comment-list [id]=\"article.articleId\" ></comment-list>\r\n</div>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var article_service_1 = __webpack_require__(28);
	var ArticleContainerComponent = (function () {
	    function ArticleContainerComponent(articleService, activatedRoute, router) {
	        this.articleService = articleService;
	        this.activatedRoute = activatedRoute;
	        this.router = router;
	        this.id = 0;
	        this.article = {};
	    }
	    ArticleContainerComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.id = param['id'];
	        });
	        if (this.id > 0) {
	            this.articleService.getArticle(this.id)
	                .subscribe(function (article) {
	                if (!article.visible) {
	                    _this.router.navigate(['/home']);
	                }
	                _this.article = article;
	            });
	        }
	    };
	    return ArticleContainerComponent;
	}());
	ArticleContainerComponent = __decorate([
	    core_1.Component({
	        selector: 'article-container',
	        template: __webpack_require__(41)
	    }),
	    __metadata("design:paramtypes", [article_service_1.ArticleService, router_1.ActivatedRoute, router_1.Router])
	], ArticleContainerComponent);
	exports.ArticleContainerComponent = ArticleContainerComponent;
	//# sourceMappingURL=articlecontainer.component.js.map

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div id=\"wrapper\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-9\">\r\n                    <article-item [article]=\"article\"></article-item>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <archive-list></archive-list>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                &nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var user_service_1 = __webpack_require__(16);
	var image_service_1 = __webpack_require__(34);
	var setting_service_1 = __webpack_require__(20);
	var rxjs_1 = __webpack_require__(18);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var image_model_1 = __webpack_require__(35);
	var articledetail_model_1 = __webpack_require__(43);
	var ng2_facebook_sdk_1 = __webpack_require__(44);
	var ArticleEditComponent = (function () {
	    function ArticleEditComponent(articleService, router, userService, fb, activatedRoute, imageService, settingService) {
	        this.articleService = articleService;
	        this.router = router;
	        this.userService = userService;
	        this.fb = fb;
	        this.activatedRoute = activatedRoute;
	        this.imageService = imageService;
	        this.settingService = settingService;
	        this.id = 0;
	        this.article = new articledetail_model_1.ArticleDetail();
	        //accessToken = '';
	        this.albumId = '';
	        this.imageCount = 0;
	        this.fbA = '';
	        this.fbS = '';
	        this.fbP = '';
	        this.fbT = '';
	        this.currentState = 'Edit';
	        this.isNew = false;
	        this.isLoggedIn = false;
	        this.images = [];
	        this.myImages = [];
	        this.imageDetails = [];
	        this.imagestoDelete = [];
	        this.notifyUsers = [];
	        this.maxDate = new Date();
	    }
	    ArticleEditComponent.prototype.ngOnDestroy = function () {
	        this.userSubscription.unsubscribe();
	        this.imageSubscription.unsubscribe();
	    };
	    ArticleEditComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.settingService.getSetting(1001).subscribe(function (result) {
	            _this.fbA = result.settingValue;
	            var fbParams = {
	                appId: _this.fbA,
	                xfbml: true,
	                version: 'v2.8'
	            };
	            _this.fb.init(fbParams);
	            hello()
	                .init({
	                facebook: _this.fbA
	            }, { scope: 'publish_pages,manage_pages,user_photos' });
	            _this.settingService.getSetting(1002).subscribe(function (result) {
	                _this.fbS = result.settingValue;
	                _this.settingService.getSetting(1003).subscribe(function (result) {
	                    _this.fbP = result.settingValue;
	                    _this.settingService.getSetting(1004)
	                        .subscribe(function (result) {
	                        _this.fbT = result.settingValue;
	                    });
	                });
	            });
	        });
	        this.isLoggedIn = this.userService.isLoggedIn;
	        this.user = this.userService.user;
	        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
	            _this.user = value;
	        });
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.id = param['id'];
	        });
	        if (this.isLoggedIn) {
	            if (this.id > 0) {
	                this.articleService.getArticle(this.id)
	                    .subscribe(function (article) {
	                    _this.article = article;
	                });
	                this.imageService.getImagesByArticleId(this.id);
	            }
	            else {
	                this.imageService.images = [];
	                this.currentState = 'New';
	                this.isNew = true;
	                this.article.authorName = this.user.firstName + ' ' + this.user.lastName;
	                this.article.postedDT = new Date();
	                this.article.applicationUserId = this.user.applicationUserId;
	                this.article.isNew = true;
	                this.article.title = '';
	                this.article.articleContent = '';
	            }
	        }
	        this.images = this.imageService.images;
	        this.imageSubscription = this.imageService.imageChange.subscribe(function (value) {
	            _this.images = value;
	            if (_this.images !== null) {
	                _this.images.forEach(function (image) {
	                    if (image.externalAlbumId !== null) {
	                        _this.albumId = image.externalAlbumId;
	                    }
	                });
	            }
	        });
	    };
	    ArticleEditComponent.prototype.ngAfterViewInit = function () {
	        if (!this.isLoggedIn) {
	            if (this.loginModal !== undefined)
	                this.loginModal.show();
	        }
	    };
	    ArticleEditComponent.prototype.dismissModal = function () {
	        this.router.navigate(["/edit/" + this.article.articleId]);
	    };
	    ArticleEditComponent.prototype.dismissLoginModal = function () {
	        this.router.navigate(['/home']);
	    };
	    ArticleEditComponent.prototype.toggleVisibility = function () {
	        this.article.visible = !this.article.visible;
	    };
	    ArticleEditComponent.prototype.toggleArchived = function () {
	        this.article.archived = !this.article.archived;
	    };
	    ArticleEditComponent.prototype.sendNotification = function () {
	        this.fb.ui({
	            method: 'feed',
	            link: "http://www.thealesangels.com/view/" + this.article.articleId,
	            quote: "The Hales Angels have updated the article called: " + this.article.title,
	            from: this.fbP
	        });
	        this.articleService.sendNotification(this.article).subscribe(function (x) {
	        });
	    };
	    ArticleEditComponent.prototype.deleteImage = function (image) {
	        this.imagestoDelete.push(image);
	        var index2 = this.imageService.images.indexOf(image);
	        this.imageService.images.splice(index2, 1);
	        var index = this.myImages.indexOf(image);
	        this.myImages.splice(index, 1);
	        var index1 = this.imageService.files.indexOf(image);
	        this.imageService.files.splice(index1, 1);
	    };
	    ArticleEditComponent.prototype.saveProfile = function (form) {
	        var _this = this;
	        this.savingModal.show();
	        if (form.imagesToDelete !== undefined) {
	            form.imagesToDelete.forEach(function (x) {
	                if (x.imageId > 0) {
	                    hello('facebook')
	                        .api("/" + x.externalId, 'delete')
	                        .then(function (result) {
	                    });
	                    _this.imageService.deleteImage(x.imageId);
	                }
	            });
	        }
	        hello('facebook').login({ scope: 'publish_pages,manage_pages,user_photos' });
	        this.article.title = form.title;
	        this.article.archived = form.archived;
	        this.article.articleContent = form.articleContent;
	        this.article.visible = form.visible;
	        this.myImages = form.images;
	        this.albumId = form.albumId;
	        this.imageDetails = form.imageDetails;
	        this.imagestoDelete = form.imagestoDelete;
	        this.articleService.saveArticle(this.article)
	            .subscribe(function (res) {
	            _this.article = res;
	            _this.imageDetails.forEach(function (x) {
	                if (x.imageId !== undefined) {
	                    _this.imageService.updateImage(x)
	                        .subscribe(function (r) {
	                    });
	                }
	            });
	        });
	        var res = rxjs_1.Observable.create(function (obs) {
	            if (form.images.length > 0) {
	                if (form.albumId === '') {
	                    hello('facebook')
	                        .api("/" + _this.fbP + "/albums", 'post', {
	                        name: form.title,
	                        token: _this.fbT
	                    })
	                        .then(function (result) {
	                        _this.albumId = result.id;
	                        obs.next(_this.albumId);
	                        obs.complete();
	                    });
	                }
	                else {
	                    _this.albumId = form.albumId;
	                    obs.next(_this.albumId);
	                    obs.complete();
	                }
	            }
	            else {
	                obs.next(_this.albumId);
	                obs.complete();
	            }
	        });
	        res.subscribe(function (x) {
	            var count = 0;
	            if (_this.myImages.length > 0) {
	                var r = rxjs_1.Observable.create(function (observer) {
	                    for (var i = 0; i < _this.myImages.length; i++) {
	                        _this.currentImage = _this.myImages[i];
	                        if (_this.currentImage.type.includes('video')) {
	                            hello('facebook')
	                                .api("/" + _this.fbP + "/videos", 'post', {
	                                file: _this.currentImage,
	                                token: _this.fbT
	                            })
	                                .then(function (result) {
	                                hello('facebook')
	                                    .api("/" + result.id, {
	                                    "fields": 'source'
	                                })
	                                    .then(function (res) {
	                                    var img = new image_model_1.Image();
	                                    img.articleId = _this.article.articleId;
	                                    img.captionText = _this.currentImage.captionText;
	                                    img.externalAlbumId = _this.albumId;
	                                    img.imageUrl = res.source;
	                                    img.externalId = res.id;
	                                    img.isVideo = true;
	                                    _this.imageService.saveImage(img)
	                                        .subscribe(function (resu) {
	                                        count++;
	                                        if (count >= _this.myImages.length) {
	                                            observer.next(count);
	                                            observer.complete();
	                                        }
	                                    });
	                                });
	                            });
	                        }
	                        else {
	                            hello('facebook')
	                                .api("/" + _this.albumId + "/photos", 'post', {
	                                file: _this.currentImage,
	                                token: _this.fbT
	                            })
	                                .then(function (result) {
	                                hello('facebook')
	                                    .api("/" + result.id, {
	                                    "fields": 'source'
	                                })
	                                    .then(function (res) {
	                                    var img = new image_model_1.Image();
	                                    img.articleId = _this.article.articleId;
	                                    img.captionText = _this.currentImage.captionText;
	                                    img.externalAlbumId = _this.albumId;
	                                    img.externalId = res.id;
	                                    img.imageUrl = res.source;
	                                    img.isVideo = false;
	                                    _this.imageService.saveImage(img)
	                                        .subscribe(function (resu) {
	                                        count++;
	                                        if (count >= _this.myImages.length) {
	                                            observer.next(count);
	                                            observer.complete();
	                                        }
	                                    });
	                                });
	                            });
	                        }
	                    }
	                });
	                r.subscribe(function (result) {
	                    _this.imageService.images = _this.imageDetails;
	                    _this.imageService.files = [];
	                    _this.imagestoDelete = [];
	                    _this.savingModal.hide();
	                    _this.articleModal.show();
	                    if (_this.article.isNew && _this.article.visible) {
	                        _this.fb.ui({
	                            method: 'feed',
	                            link: "http://www.thehalesangels.com/view/" + _this.article.articleId,
	                            quote: "The Hales Angels have added the article called: " + _this.article.title,
	                            from: _this.fbP
	                        });
	                        _this.articleService.sendNotification(_this.article)
	                            .subscribe(function (x) {
	                        });
	                    }
	                });
	            }
	            else {
	                _this.imageService.images = _this.imageDetails;
	                _this.imageService.files = [];
	                _this.imagestoDelete = [];
	                _this.savingModal.hide();
	                _this.articleModal.show();
	                if (_this.article.isNew && _this.article.visible) {
	                    _this.fb.ui({
	                        method: 'feed',
	                        link: "http://www.thehalesangels.com/view/" + _this.article.articleId,
	                        quote: "The Hales Angels have added the article called: " + _this.article.title,
	                        from: _this.fbP
	                    });
	                    _this.articleService.sendNotification(_this.article)
	                        .subscribe(function (x) {
	                    });
	                }
	            }
	        });
	        return false;
	    };
	    return ArticleEditComponent;
	}());
	__decorate([
	    core_1.ViewChild('articleModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], ArticleEditComponent.prototype, "articleModal", void 0);
	__decorate([
	    core_1.ViewChild('savingModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], ArticleEditComponent.prototype, "savingModal", void 0);
	__decorate([
	    core_1.ViewChild('loginModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], ArticleEditComponent.prototype, "loginModal", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], ArticleEditComponent.prototype, "id", void 0);
	ArticleEditComponent = __decorate([
	    core_1.Component({
	        selector: 'article-edit',
	        template: __webpack_require__(45)
	    }),
	    __metadata("design:paramtypes", [article_service_1.ArticleService, router_1.Router, user_service_1.UserService, ng2_facebook_sdk_1.FacebookService, router_1.ActivatedRoute, image_service_1.ImageService, setting_service_1.SettingService])
	], ArticleEditComponent);
	exports.ArticleEditComponent = ArticleEditComponent;
	//# sourceMappingURL=edit.component.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var ArticleDetail = (function () {
	    function ArticleDetail() {
	    }
	    return ArticleDetail;
	}());
	ArticleDetail = __decorate([
	    core_1.Injectable()
	], ArticleDetail);
	exports.ArticleDetail = ArticleDetail;
	//# sourceMappingURL=articledetail.model.js.map

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("ng2-facebook-sdk");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\" *ngIf=\"!isLoggedIn\">\r\n                You must be logged in and be an administrator to access this page.\r\n            </div>\r\n            <div class=\"panel panel-default\" *ngIf=\"isLoggedIn\">\r\n                <div class=\"panel-heading\">\r\n                    <h2>{{currentState}} Article</h2>\r\n                    <button class=\"btn btn-primary\" (click)=\"titleModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Edit Title</button>\r\n                    <button class=\"btn btn-primary\" (click)=\"contentModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Edit Content</button>\r\n                    <button class=\"btn btn-primary\" (click)=\"imageModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Add Images/Videos</button>\r\n                    <button [disabled]=\"imageService.images !== null && imageService.images.length < 1\" class=\"btn btn-primary\" (click)=\"captionModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Edit Images/Videos</button>\r\n                    <button class=\"btn btn-primary\" (click)=\"dateModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Change Date</button>\r\n                    <button *ngIf=\"!article.visible\" class=\"btn btn-primary\" (click)=\"toggleVisibility()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Make Visible</button>\r\n                    <button *ngIf=\"article.visible\" class=\"btn btn-primary\" (click)=\"toggleVisibility()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Make Hidden</button>\r\n                    <button *ngIf=\"!article.archived\" class=\"btn btn-primary\" (click)=\"toggleArchived()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Archive</button>\r\n                    <button *ngIf=\"article.archived\" class=\"btn btn-primary\" (click)=\"toggleArchived()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Un-Archive</button>\r\n                    <button class=\"btn btn-success\" [disabled]=\"!form.form.valid\" (click)=\"form.ngSubmit.emit()\"><span class=\"glyphicon glyphicon-save\"></span> Save Changes</button>\r\n                    <button *ngIf=\"article.visible && !article.isNew\" class=\"btn btn-primary\" (click)=\"sendNotification()\"><i class=\"fa fa-bullhorn\"></i>&nbsp;Notify Users of Change</button>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form #form=\"ngForm\" (ngSubmit)=\"saveProfile(form.value); form.reset()\" enctype=\"multipart/form-data\">\r\n\r\n                        <input type=\"hidden\" name=\"title\" [(ngModel)]=\"article.title\" required />\r\n                        <input type=\"hidden\" name=\"articleContent\" [(ngModel)]=\"article.articleContent\" required />\r\n                        <input type=\"hidden\" name=\"visible\" [(ngModel)]=\"article.visible\" />\r\n                        <input type=\"hidden\" name=\"archived\" [(ngModel)]=\"article.archived\" />\r\n                        <input type=\"hidden\" name=\"images\" [(ngModel)]=\"imageService.files\" />\r\n                        <input type=\"hidden\" name=\"imageDetails\" [(ngModel)]=\"imageService.images\" />\r\n                        <input type=\"hidden\" name=\"albumId\" [(ngModel)]=\"albumId\" />\r\n                        <input type=\"hidden\" name=\"imagesToDelete\" [(ngModel)]=\"imagestoDelete\" />\r\n                        <input type=\"hidden\" name=\"applicationUserId\" [(ngModel)]=\"article.applicationUserId\" />\r\n                        <input type=\"hidden\" name=\"isNew\" [(ngModel)]=\"article.isNew\" />\r\n\r\n                        <div *ngIf=\"article.title === undefined || article.title === ''\" class=\"alert alert-danger\">Title Required</div>\r\n                        <h1>{{ article.title }}</h1>\r\n                        <h6 class=\"text-primary\">\r\n                            - Posted By: {{ article.authorName }} on {{ article.postedDT | formatDate: 'MM/DD/YYYY': !isNew }}\r\n                        </h6>\r\n                        <div *ngIf=\"article.articleContent === undefined || article.articleContent === ''\" class=\"alert alert-danger\">Content Required</div>\r\n                        <div [innerHTML]=\"article.articleContent\"></div>\r\n                        <div class=\"row\">&nbsp;</div>\r\n                        <div class=\"row\" *ngIf=\"imageService.images !== null && imageService.images.length > 0\">\r\n\r\n                            <carousel [interval]=\"5000\" [noWrap]=\"false\">\r\n                                <slide *ngFor=\"let image of imageService.images\" [active]=\"image.isActive\">\r\n\r\n                                    <div *ngIf=\"!image.isVideo\">\r\n                                        <img [src]=\"imageService.sanitize(image.imageUrl)\" class=\"fluid center-block\" height=\"400\">\r\n                                    </div>\r\n                                    <div *ngIf=\"image.isVideo\">\r\n                                        <video-player [image]=\"image\"></video-player>\r\n                                    </div>\r\n                                    <div class=\"carousel-caption alert\" style=\"bottom: -60px\">\r\n                                        <p>{{image.captionText}}</p>\r\n                                    </div>\r\n                                    <div class=\"alert\">\r\n                                        <p>&nbsp;</p>\r\n                                    </div>\r\n                                </slide>\r\n                            </carousel>\r\n                        </div>\r\n                        <div class=\"row\">&nbsp;</div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            &nbsp;\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #loginModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" (onHide)=\"dismissLoginModal()\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"loginModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Error</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                You must be logged in and be an administrator to access this page.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #articleModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" (onHide)=\"dismissModal()\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"articleModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Changes Saved Successfully</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Changes to article have been saved successfully. Video uploads may take several minutes to process on facebook, and become active on the article.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #savingModal=\"bs-modal\" class=\"modal fade\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Saving Changes</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Changes are being saved. Please wait for the save process to complete.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #titleModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"titleModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Edit Title</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <input type=\"text\" [(ngModel)]=\"article.title\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #dateModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dateModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Change Posted Date</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"margin: 0px -6px;\">\r\n                <datepicker [(ngModel)]=\"article.postedDT\" [maxDate]=\"maxDate\" [showWeeks]=\"false\"></datepicker>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #contentModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"contentModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Edit Content</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p-editor [(ngModel)]=\"article.articleContent\" [style]=\"{'height':'320px'}\"></p-editor>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #imageModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"imageModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Add Images</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p-growl [value]=\"imageService.msgs\"></p-growl>\r\n\r\n                <p-fileUpload name=\"demo[]\" url=\"/image/onUpload\" (onUpload)=\"imageService.onUpload($event, article.articleId)\"\r\n                              multiple=\"multiple\" accept=\"image/*,video/*\" maxFileSize=\"100000000\">\r\n                    <template let-file pTemplate=\"file\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-4\" *ngIf=\"!file.type.includes('video')\">\r\n                                <img [src]=\"imageService.sanitize(file.objectURL.changingThisBreaksApplicationSecurity)\" height=\"75\">\r\n                            </div>\r\n                            <div class=\"col-xs-4\" *ngIf=\"file.type.includes('video')\">\r\n                                <img src=\"/css/video-player.jpg\" height=\"75\">\r\n                            </div>\r\n                            <div class=\"col-xs-4\">\r\n                                {{file.size}} bytes\r\n                            </div>\r\n                            <div class=\"col-xs-3\">\r\n                                Caption:<br /> <input type=\"text\" [(ngModel)]=\"file.captionText\" />\r\n                            </div>\r\n                        </div>\r\n                        <br />\r\n                    </template> \r\n                    <template pTemplate type=\"content\">\r\n                        <p *ngIf=\"imageService.files !== undefined && imageService.files.length\">Uploaded and Ready to Submit:</p>\r\n                        <div *ngIf=\"imageService.files !== undefined && imageService.files.length\" style=\"max-height: 400px; overflow-y: auto\">\r\n                            <div *ngFor=\"let file of imageService.files\" style=\"width: 98%\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\" *ngIf=\"!file.type.includes('video')\">\r\n                                        <img [src]=\"imageService.sanitize(file.objectURL.changingThisBreaksApplicationSecurity)\" height=\"75\">\r\n                                    </div>\r\n                                    <div class=\"col-xs-4\" *ngIf=\"file.type.includes('video')\">\r\n                                        <img src=\"/css/video-player.jpg\" height=\"75\">\r\n                                    </div>\r\n                                    <div class=\"col-xs-4\">\r\n                                        {{file.size}} bytes\r\n                                    </div>\r\n                                    <div class=\"col-xs-3\">\r\n                                        Caption:<br/> <input type=\"text\" [(ngModel)]=\"file.captionText\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                            </div>\r\n                        </div>\r\n                    </template>\r\n                </p-fileUpload>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #captionModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"captionModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Edit Images</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div *ngIf=\"imageService.images !== undefined && imageService.images.length\" style=\"max-height: 400px; overflow-y: auto\">\r\n                    <div *ngFor=\"let image of imageService.images\" style=\"width: 98%\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-4\" *ngIf=\"!image.isVideo\">\r\n                                <img [src]=\"imageService.sanitize(image.imageUrl)\" height=\"75\">\r\n                            </div>\r\n                            <div class=\"col-xs-4\" *ngIf=\"image.isVideo && image.thumbnailUrl !== undefined && !image.thumbnailUrl.includes('blob')\">\r\n                                <img [src]=\"imageService.sanitize(image.thumbnailUrl)\" height=\"75\">\r\n                            </div>\r\n                            <div class=\"col-xs-4\" *ngIf=\"image.isVideo && image.thumbnailUrl !== undefined && image.thumbnailUrl.includes('blob')\">\r\n                                <img src=\"/css/video-player.jpg\" height=\"75\">\r\n                            </div>\r\n                            <div class=\"col-xs-5\">\r\n                                Caption: <input type=\"text\" [(ngModel)]=\"image.captionText\" />\r\n                            </div>\r\n                            <div class=\"col-xs-2\">\r\n                                <button class=\"btn btn-danger\" (click)=\"deleteImage(image)\"><i class=\"fa fa-lg fa-ban\"></i> Delete</button>\r\n                            </div>\r\n                        </div>\r\n                        <br />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var ArticleEditRedirectComponent = (function () {
	    function ArticleEditRedirectComponent(router, activatedRoute) {
	        var _this = this;
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.id = param['id'];
	        });
	        this.router.navigate(["/article/edit/" + this.id]);
	    }
	    return ArticleEditRedirectComponent;
	}());
	ArticleEditRedirectComponent = __decorate([
	    core_1.Component({
	        selector: 'articleeditredirect',
	        template: '<div></div>'
	    }),
	    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
	], ArticleEditRedirectComponent);
	exports.ArticleEditRedirectComponent = ArticleEditRedirectComponent;
	//# sourceMappingURL=articleeditredirect.component.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var ArticleListComponent = (function () {
	    function ArticleListComponent(articleService) {
	        var _this = this;
	        this.articleService = articleService;
	        this.articles = [];
	        this.articleService.getArticles()
	            .subscribe(function (articles) {
	            _this.articles = articles;
	        });
	    }
	    return ArticleListComponent;
	}());
	ArticleListComponent = __decorate([
	    core_1.Component({
	        selector: 'article-list',
	        template: __webpack_require__(48),
	        providers: [article_service_1.ArticleService]
	    }),
	    __metadata("design:paramtypes", [article_service_1.ArticleService])
	], ArticleListComponent);
	exports.ArticleListComponent = ArticleListComponent;
	//# sourceMappingURL=articlelist.component.js.map

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "    \r\n<div class=\"col-sm-12\">\r\n    <div class=\"row\" *ngIf=\"articles.length < 1\">\r\n        <loading-indicator></loading-indicator>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"articles.length > 0\">\r\n        <div class=\"row\" *ngFor=\"let article of articles\">\r\n            <article-item [article]=\"article\"></article-item>\r\n            <hr />\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var ArticleRedirectComponent = (function () {
	    function ArticleRedirectComponent(router) {
	        this.router = router;
	        this.router.navigate(['/article/new']);
	    }
	    return ArticleRedirectComponent;
	}());
	ArticleRedirectComponent = __decorate([
	    core_1.Component({
	        selector: 'articleredirect',
	        template: '<div></div>'
	    }),
	    __metadata("design:paramtypes", [router_1.Router])
	], ArticleRedirectComponent);
	exports.ArticleRedirectComponent = ArticleRedirectComponent;
	//# sourceMappingURL=articleredirect.component.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var ArticleViewRedirectComponent = (function () {
	    function ArticleViewRedirectComponent(router, activatedRoute) {
	        var _this = this;
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.id = param['id'];
	        });
	        debugger;
	        this.router.navigate(["/article/view/" + this.id]);
	    }
	    return ArticleViewRedirectComponent;
	}());
	ArticleViewRedirectComponent = __decorate([
	    core_1.Component({
	        selector: 'articleviewredirect',
	        template: '<div></div>'
	    }),
	    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
	], ArticleViewRedirectComponent);
	exports.ArticleViewRedirectComponent = ArticleViewRedirectComponent;
	//# sourceMappingURL=articleviewredirect.component.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var comment_service_1 = __webpack_require__(52);
	var user_service_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var CommentListComponent = (function () {
	    function CommentListComponent(commentService, activatedRoute, userService) {
	        this.commentService = commentService;
	        this.activatedRoute = activatedRoute;
	        this.userService = userService;
	        this.comments = [];
	        this.id = 0;
	        this.isLoggedIn = false;
	        this.comment = {
	            message: 'You must be logged in to comment',
	            articleId: 0,
	            applicationUserId: 0,
	            isAdmin: false
	        };
	    }
	    CommentListComponent.prototype.saveComment = function (form) {
	        var _this = this;
	        this.comment.message = form.message;
	        this.commentService.saveComment(this.comment).subscribe(function (result) {
	            if (result.approved) {
	                _this.commentModal.show();
	            }
	            else {
	                _this.commentNoAdminModal.show();
	            }
	            _this.commentService.getComments(result.articleId).subscribe(function (result) {
	                _this.comments = result;
	                _this.comment.message = 'Enter Comment';
	            });
	        });
	        return false;
	    };
	    CommentListComponent.prototype.ngOnDestroy = function () {
	        this.subscription.unsubscribe();
	        this.userSubscription.unsubscribe();
	    };
	    CommentListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this.id === 0 || this.id == undefined) {
	            this.activatedRoute.params.subscribe(function (param) {
	                _this.id = param['id'];
	            });
	        }
	        this.isLoggedIn = this.userService.isLoggedIn;
	        this.comment.articleId = this.id;
	        if (this.userService.user != undefined) {
	            this.comment.applicationUserId = this.userService.user.applicationUserId;
	            this.comment.isAdmin = this.userService.user.isAdmin;
	        }
	        if (this.id > 0) {
	            this.commentService.getComments(this.id)
	                .subscribe(function (comment) {
	                _this.comments = comment;
	            });
	        }
	        if (this.isLoggedIn) {
	            this.comment.message = 'Enter Comment';
	        }
	        this.subscription = this.userService.stateChange.subscribe(function (value) {
	            _this.isLoggedIn = value;
	            _this.comment.message = 'Enter Comment';
	        });
	        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
	            _this.comment.applicationUserId = value.applicationUserId;
	            _this.comment.isAdmin = value.isAdmin;
	        });
	    };
	    return CommentListComponent;
	}());
	__decorate([
	    core_1.ViewChild('commentNoAdminModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], CommentListComponent.prototype, "commentNoAdminModal", void 0);
	__decorate([
	    core_1.ViewChild('commentModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], CommentListComponent.prototype, "commentModal", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], CommentListComponent.prototype, "id", void 0);
	CommentListComponent = __decorate([
	    core_1.Component({
	        selector: 'comment-list',
	        template: __webpack_require__(53),
	        providers: [comment_service_1.CommentService]
	    }),
	    __metadata("design:paramtypes", [comment_service_1.CommentService, router_1.ActivatedRoute, user_service_1.UserService])
	], CommentListComponent);
	exports.CommentListComponent = CommentListComponent;
	//# sourceMappingURL=commentlist.component.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(17);
	__webpack_require__(18);
	var CommentService = (function () {
	    function CommentService(http) {
	        this.http = http;
	    }
	    CommentService.prototype.getComments = function (articleId) {
	        return this.http.get("/api/Comment/GetComments?articleId=" + articleId)
	            .map(function (result) { return result.json(); });
	    };
	    CommentService.prototype.getCommentsAdmin = function () {
	        return this.http.get('/api/Comment/GetCommentsAdmin')
	            .map(function (result) { return result.json(); });
	    };
	    CommentService.prototype.getSuggestionViews = function (userId) {
	        return this.http.get("/api/Comment/GetSuggestionViews?userId=" + userId)
	            .map(function (result) { return result.json(); });
	    };
	    CommentService.prototype.saveComment = function (comment) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Comment/SaveComment', JSON.stringify(comment), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    CommentService.prototype.updateComment = function (comment) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Comment/UpdateComment', JSON.stringify(comment), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    CommentService.prototype.deleteComment = function (commentId) {
	        return this.http.get("/api/Comment/DeleteComment?commentId=" + commentId).map(function (res) { return res.json; });
	    };
	    CommentService.prototype.updateSuggestion = function (feedback) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Comment/UpdateSuggestion', JSON.stringify(feedback), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    CommentService.prototype.deleteSuggestion = function (feedbackId) {
	        return this.http.get("/api/Comment/DeleteSuggestion?suggestionId=" + feedbackId).map(function (res) { return res.json; });
	    };
	    CommentService.prototype.getSuggestionTypes = function () {
	        return this.http.get('/api/Comment/GetSuggestionTypes').map(function (res) { return res.json(); });
	    };
	    CommentService.prototype.insertFeedback = function (feedback) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Comment/InsertSuggestion', JSON.stringify(feedback), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    return CommentService;
	}());
	CommentService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], CommentService);
	exports.CommentService = CommentService;
	//# sourceMappingURL=comment.service.js.map

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h5 class=\"text-primary\">\r\n            Comments:\r\n        </h5>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"comments.length < 1\" style=\"margin-left: 10px\">\r\n    <div class=\"col-sm-12\">\r\n        <h6>\r\n            No Comments have been posted yet\r\n        </h6>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"comments.length > 0\" style=\"max-height: 300px; overflow: auto; border: 1px solid #121416\">\r\n    <div class=\"col-sm-12\" *ngFor=\"let comment of comments\">\r\n        <h6>\r\n            Posted By: {{ comment.applicationUser.firstName }} {{comment.applicationUser.lastName}} on {{ comment.commentDt | formatDate: 'MM/DD/YYYY hh:mm A' }}\r\n        </h6>\r\n        <div style=\"margin-left: 10px\">\r\n            {{comment.commentText}}\r\n        </div>\r\n        <hr />\r\n    </div>\r\n</div>\r\n<div class=\"row\">&nbsp;</div>\r\n<div class=\"col-sm-12\">\r\n    Leave a Comment:\r\n</div>\r\n\r\n<form #form=\"ngForm\" (ngSubmit)=\"saveComment(form.value); form.reset()\">\r\n    <div class=\"col-sm-12 form-group\">\r\n        <textarea [disabled]=\"!isLoggedIn\" placeholder=\"{{comment.message}}\" name=\"message\" ngModel required cols=\"50\" rows=\"3\" style=\"width: 100%\"></textarea>\r\n    </div>\r\n    <div class=\"col-sm-12 form-group\">\r\n        <div class=\"col-sm-2\">\r\n            <button class=\"btn btn-primary\" [disabled]=\"!isLoggedIn\" type=\"submit\">\r\n                <span class=\"glyphicon glyphicon-save\"></span> Submit\r\n            </button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<div bsModal #commentNoAdminModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"commentNoAdminModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Comment Submitted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Your Comment has been submitted. After it has been approved it will show up on this post.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #commentModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"commentModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Comment Submitted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Your Comment has been submitted. It should show on the article now.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var comment_service_1 = __webpack_require__(52);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var CommentAdminListComponent = (function () {
	    function CommentAdminListComponent(commentService) {
	        this.commentService = commentService;
	        this.comments = [];
	        this.commentsLoaded = false;
	        this.title = 'Delete Comment';
	        this.message = 'Are you <b>sure</b> you want to delete this comment?';
	        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
	        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
	        this.newTitle = 'Mark as Read';
	        this.newMessage = 'Are you <b>sure</b> you want to mark this item as read?';
	        this.readTitle = 'Mark as Unread';
	        this.readMessage = 'Are you <b>sure</b> you want to mark this item as unread?';
	        this.unApproveTitle = 'Approve Comment';
	        this.unApproveMessage = 'Are you <b>sure</b> you want to approve this comment?';
	        this.approveTitle = 'Un-Approve Comment';
	        this.approveMessage = 'Are you <b>sure</b> you want to un-approve this comment?';
	    }
	    CommentAdminListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.commentService.getCommentsAdmin()
	            .subscribe(function (comments) {
	            _this.comments = comments;
	            _this.commentsLoaded = true;
	        });
	    };
	    CommentAdminListComponent.prototype.confirmClicked = function (comment) {
	        var _this = this;
	        this.commentService.deleteComment(comment.commentId).subscribe(function (result) {
	            var index = _this.comments.indexOf(comment);
	            _this.comments.splice(index, 1);
	            _this.deleteModal.show();
	        });
	    };
	    CommentAdminListComponent.prototype.approveComment = function (comment) {
	        comment.approved = true;
	        comment.isNew = false;
	        this.commentService.updateComment(comment)
	            .subscribe(function (result) {
	        });
	    };
	    CommentAdminListComponent.prototype.unApproveComment = function (comment) {
	        comment.approved = false;
	        this.commentService.updateComment(comment)
	            .subscribe(function (result) {
	        });
	    };
	    CommentAdminListComponent.prototype.markRead = function (comment) {
	        comment.isNew = false;
	        this.commentService.updateComment(comment)
	            .subscribe(function (result) {
	        });
	    };
	    CommentAdminListComponent.prototype.markUnRead = function (comment) {
	        comment.isNew = true;
	        this.commentService.updateComment(comment)
	            .subscribe(function (result) {
	        });
	    };
	    return CommentAdminListComponent;
	}());
	__decorate([
	    core_1.ViewChild('deleteModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], CommentAdminListComponent.prototype, "deleteModal", void 0);
	CommentAdminListComponent = __decorate([
	    core_1.Component({
	        selector: 'comment-admin-list',
	        template: __webpack_require__(55)
	    }),
	    __metadata("design:paramtypes", [comment_service_1.CommentService])
	], CommentAdminListComponent);
	exports.CommentAdminListComponent = CommentAdminListComponent;
	//# sourceMappingURL=commentadminlist.component.js.map

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel\">\r\n\r\n    <div id=\"wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">&nbsp;</div>\r\n            <div class=\"row\">\r\n                <div class=\"row\" *ngIf=\"comments.length < 1 && !commentsLoaded\">\r\n                    <loading-indicator></loading-indicator>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"comments.length < 1 && commentsLoaded\">\r\n                    <div class=\"col-xs-12\">\r\n                        There are no comments\r\n                        <br /><br />\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <table *ngIf=\"comments.length > 0\" class=\"table table-striped table-fixed\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Un-Read</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-2 border-right\">\r\n                                <h5>Article</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-3 border-right\">\r\n                                <h5>Comment</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-2 border-right\">\r\n                                <h5>Comment By</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-2 border-right\">\r\n                                <h5>Comment Date</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Approved</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Delete</h5>\r\n                            </th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let comment of comments\">\r\n                            <td class=\"col-xs-1 text-center border-right\" pTooltip=\"{{comment.isNew | yesNo: 'readUnread'}}\" tooltipPosition=\"top\">\r\n                                <a *ngIf=\"!comment.isNew\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"readTitle\"\r\n                                   [message]=\"readMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"markUnRead(comment)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-circle-o\"></i>\r\n                                </a>\r\n                                <a *ngIf=\"comment.isNew\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"newTitle\"\r\n                                   [message]=\"newMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"markRead(comment)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-check-circle-o\"></i>\r\n                                </a>\r\n                            </td>\r\n                            <td class=\"col-xs-2 border-right\" pTooltip=\"{{comment.article.title}}\" tooltipPosition=\"top\" style=\"overflow: hidden\">\r\n                                {{comment.article.title}}\r\n                            </td>\r\n                            <td class=\"col-xs-3 border-right\" pTooltip=\"{{comment.commentText}}\" tooltipPosition=\"top\" style=\"overflow: hidden\">\r\n                                {{comment.commentText}}\r\n                            </td>\r\n                            <td class=\"col-xs-2 border-right\" pTooltip=\"{{comment.applicationUser.firstName}} {{comment.applicationUser.lastName}}\" tooltipPosition=\"top\" style=\"overflow: hidden\">\r\n                                {{comment.applicationUser.firstName}} {{comment.applicationUser.lastName}}\r\n                            </td>\r\n                            <td class=\"col-xs-2 border-right\" pTooltip=\"{{comment.commentDt | formatDate: 'MM/DD/YYYY hh:mm A'}}\" tooltipPosition=\"top\">\r\n                                {{comment.commentDt | formatDate: 'MM/DD/YYYY hh:mm A'}}\r\n                            </td>\r\n                            <td class=\"col-xs-1 text-center border-right\" pTooltip=\"{{comment.approved | yesNo: 'approved' }}\" tooltipPosition=\"top\">\r\n                                <a *ngIf=\"comment.approved\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"approveTitle\"\r\n                                   [message]=\"approveMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"unApproveComment(comment)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-thumbs-o-up\"></i>\r\n                                </a>\r\n                                <a *ngIf=\"!comment.approved\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"unApproveTitle\"\r\n                                   [message]=\"unApproveMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"approveComment(comment)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-thumbs-o-down\"></i>\r\n                                </a>\r\n                            </td>\r\n                            <td class=\"col-xs-1 text-center border-right\">\r\n                                <a role=\"button\" title=\"Delete\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"title\"\r\n                                   [message]=\"message\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"confirmClicked(comment)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-ban\"></i>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Comment Deleted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Comment has been deleted successfully.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var comment_service_1 = __webpack_require__(52);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var suggestion_model_1 = __webpack_require__(57);
	var FeedbackComponent = (function () {
	    function FeedbackComponent(userService, router, commentService) {
	        this.userService = userService;
	        this.router = router;
	        this.commentService = commentService;
	        this.isLoggedIn = false;
	        this.suggestion = new suggestion_model_1.Suggestion();
	    }
	    FeedbackComponent.prototype.ngOnDestroy = function () {
	        this.userSubscription.unsubscribe();
	    };
	    FeedbackComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.isLoggedIn = this.userService.isLoggedIn;
	        this.user = this.userService.user;
	        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
	            _this.user = value;
	        });
	        if (this.isLoggedIn) {
	            this.commentService.getSuggestionTypes()
	                .subscribe(function (res) {
	                _this.types = [];
	                res.forEach(function (result) {
	                    _this.types.push({ label: result.value, value: result.listEnumId });
	                });
	            });
	            this.suggestion.typeId = 0;
	        }
	    };
	    FeedbackComponent.prototype.ngAfterViewChecked = function () {
	        if (!this.isLoggedIn) {
	            if (this.loginModal !== undefined)
	                this.loginModal.show();
	        }
	    };
	    FeedbackComponent.prototype.dismissLoginModal = function () {
	        this.router.navigate(['/home']);
	    };
	    FeedbackComponent.prototype.saveFeedback = function (form) {
	        var _this = this;
	        this.suggestion.applicationUserId = this.user.applicationUserId;
	        this.suggestion.typeId = form.typeId;
	        this.suggestion.value = form.feedback;
	        this.commentService.insertFeedback(this.suggestion).subscribe(function (res) {
	            _this.feedbackModal.show();
	        });
	        return false;
	    };
	    FeedbackComponent.prototype.dismissModal = function () {
	        this.router.navigate(['/feedbackredirect']);
	    };
	    return FeedbackComponent;
	}());
	__decorate([
	    core_1.ViewChild('feedbackModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], FeedbackComponent.prototype, "feedbackModal", void 0);
	__decorate([
	    core_1.ViewChild('loginModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], FeedbackComponent.prototype, "loginModal", void 0);
	FeedbackComponent = __decorate([
	    core_1.Component({
	        selector: 'profile',
	        template: __webpack_require__(58)
	    }),
	    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, comment_service_1.CommentService])
	], FeedbackComponent);
	exports.FeedbackComponent = FeedbackComponent;
	//# sourceMappingURL=feedback.component.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var Suggestion = (function () {
	    function Suggestion() {
	    }
	    return Suggestion;
	}());
	Suggestion = __decorate([
	    core_1.Injectable()
	], Suggestion);
	exports.Suggestion = Suggestion;
	//# sourceMappingURL=suggestion.model.js.map

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h2>Feedback</h2>\r\n                </div>\r\n                <div class=\"panel-body\" *ngIf=\"!isLoggedIn\">\r\n                    You must be logged in to access this page.\r\n                </div>\r\n                <div class=\"panel-body\" *ngIf=\"isLoggedIn\">\r\n                    <form #form=\"ngForm\" (ngSubmit)=\"saveFeedback(form.value); form.reset()\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Name:</h4>\r\n                            </div>\r\n                            <div *ngIf=\"user !== undefined\" class=\"col-sm-9\">\r\n                                <h4>{{user.firstName}} {{user.lastName}}</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Type:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <select [(ngModel)]=\"suggestion.typeId\" name=\"typeId\" class=\"form-control\" required>\r\n                                    <option *ngFor=\"let type of types\" value=\"{{type.value}}\">\r\n                                        {{type.label}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Feedback:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-5\">\r\n                                <h4><input type=\"text\" name=\"feedback\" [(ngModel)]=\"suggestion.value\" class=\"form-control\" required /></h4>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"btn btn-primary\" type=\"submit\">\r\n                            <span class=\"fa fa-lg fa-save\"></span> Submit Feedback\r\n                        </button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            &nbsp;\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"isLoggedIn\">\r\n            <feedback-list [admin]=\"false\"></feedback-list>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #feedbackModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" (onHide)=\"dismissModal()\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"feedbackModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Feedback Submitted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Your feedback has been submitted. Thank you for your feedback.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #loginModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" (onHide)=\"dismissLoginModal()\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"loginModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Error</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                You must be logged in to access this page. Please login.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var comment_service_1 = __webpack_require__(52);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var user_service_1 = __webpack_require__(16);
	var FeedBackListComponent = (function () {
	    function FeedBackListComponent(commentService, userService) {
	        this.commentService = commentService;
	        this.userService = userService;
	        this.suggestions = [];
	        this.suggestionLoaded = true;
	        this.title = 'Delete Feedback';
	        this.message = 'Are you <b>sure</b> you want to delete this feedback?';
	        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
	        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
	        this.progressTitle = 'Mark In progress';
	        this.progressMessage = 'Are you <b>sure</b> you want to mark this as In Progress?';
	        this.completeTitle = 'Mark As Complete';
	        this.completeMessage = 'Are you <b>sure</b> you want to mark this as Complete?';
	        this.isLoggedIn = false;
	        this.userId = 0;
	    }
	    FeedBackListComponent.prototype.ngOnDestroy = function () {
	        this.userSubscription.unsubscribe();
	    };
	    FeedBackListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.isLoggedIn = this.userService.isLoggedIn;
	        this.user = this.userService.user;
	        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
	            _this.user = value;
	        });
	        if (!this.admin) {
	            this.userId = this.user.applicationUserId;
	        }
	        this.refresh();
	    };
	    FeedBackListComponent.prototype.confirmClicked = function (feedback) {
	        var _this = this;
	        this.commentService.deleteSuggestion(feedback.suggestionId).subscribe(function (result) {
	            var index = _this.suggestions.indexOf(feedback);
	            _this.suggestions.splice(index, 1);
	            _this.suggestionLoaded = true;
	            _this.deleteModal.show();
	        });
	    };
	    FeedBackListComponent.prototype.markInProgress = function (feedback) {
	        var _this = this;
	        feedback.statusId = 6;
	        this.commentService.updateSuggestion(feedback)
	            .subscribe(function (result) {
	            var index = _this.suggestions.indexOf(feedback);
	            _this.suggestions.splice(index, 1, result);
	            _this.refresh();
	        });
	    };
	    FeedBackListComponent.prototype.markComplete = function (feedback) {
	        var _this = this;
	        feedback.statusId = 8;
	        this.commentService.updateSuggestion(feedback)
	            .subscribe(function (result) {
	            var index = _this.suggestions.indexOf(feedback);
	            _this.suggestions.splice(index, 1, result);
	            _this.refresh();
	        });
	    };
	    FeedBackListComponent.prototype.refresh = function () {
	        var _this = this;
	        this.commentService.getSuggestionViews(this.userId)
	            .subscribe(function (feedback) {
	            _this.suggestions = feedback;
	            _this.suggestionLoaded = true;
	        });
	    };
	    return FeedBackListComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], FeedBackListComponent.prototype, "admin", void 0);
	__decorate([
	    core_1.ViewChild('deleteModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], FeedBackListComponent.prototype, "deleteModal", void 0);
	FeedBackListComponent = __decorate([
	    core_1.Component({
	        selector: 'feedback-list',
	        template: __webpack_require__(60)
	    }),
	    __metadata("design:paramtypes", [comment_service_1.CommentService, user_service_1.UserService])
	], FeedBackListComponent);
	exports.FeedBackListComponent = FeedBackListComponent;
	//# sourceMappingURL=feedbacklist.component.js.map

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel\">\r\n\r\n    <div id=\"wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">&nbsp;</div>\r\n            <div class=\"row\">\r\n                <div class=\"row\" *ngIf=\"suggestions.length < 1 && !suggestionLoaded\">\r\n                    <loading-indicator></loading-indicator>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"suggestions.length < 1 && suggestionLoaded\">\r\n                    <div class=\"col-xs-12\">\r\n                        There is no feedback\r\n                        <br /><br />\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <table *ngIf=\"suggestions.length > 0\" class=\"table table-striped table-fixed\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"col-xs-1 text-center border-right\">\r\n                                    <h5>Status</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-3 border-right\" *ngIf=\"admin\">\r\n                                    <h5>Feedback</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-4 border-right\" *ngIf=\"!admin\">\r\n                                    <h5>Feedback</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Feedback By</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Feedback Date</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Resolution Date</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-1 text-center border-right\">\r\n                                    <h5>Type</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-1 text-center border-right\" *ngIf=\"admin\">\r\n                                    <h5>Delete</h5>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let suggestion of suggestions\">\r\n                                <td class=\"col-xs-1 text-center border-right\" pTooltip=\"{{suggestion.statusName}}\" tooltipPosition=\"top\">\r\n                                    <a *ngIf=\"suggestion.statusId === 5 && admin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"progressTitle\"\r\n                                       [message]=\"progressMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"markInProgress(suggestion)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-battery-empty\"></i>\r\n                                    </a>\r\n                                    <span *ngIf=\"suggestion.statusId === 5 && !admin\"><i class=\"fa fa-lg fa-battery-empty\"></i></span>\r\n                                    <span *ngIf=\"suggestion.statusId === 6 && !admin\"><i class=\"fa fa-lg fa-battery-half\"></i></span>\r\n                                    <a *ngIf=\"suggestion.statusId === 6 && admin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"completeTitle\"\r\n                                       [message]=\"completeMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"markComplete(suggestion)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-battery-half\"></i>\r\n                                    </a>\r\n                                    <span *ngIf=\"suggestion.statusId === 8\"><i class=\"fa fa-lg fa-battery-full\"></i></span>\r\n                                </td>\r\n                                <td class=\"col-xs-3 border-right\" *ngIf=\"admin\" pTooltip=\"{{suggestion.value}}\" tooltipPosition=\"top\" style=\"overflow: hidden; white-space:nowrap;\">\r\n                                    {{suggestion.value}}\r\n                                </td>\r\n                                <td class=\"col-xs-4 border-right\" *ngIf=\"!admin\" pTooltip=\"{{suggestion.value}}\" tooltipPosition=\"top\" style=\"overflow: hidden; white-space:nowrap;\">\r\n                                    {{suggestion.value}}\r\n                                </td>\r\n                                <td class=\"col-xs-2 border-right\" pTooltip=\"{{suggestion.authorName}}\" tooltipPosition=\"top\" style=\"overflow: hidden\">\r\n                                    {{suggestion.authorName}}\r\n                                </td>\r\n                                <td class=\"col-xs-2 border-right\" pTooltip=\"{{suggestion.createdDT | formatDate: 'MM/DD/YYYY hh:mm A'}}\" tooltipPosition=\"top\">\r\n                                    {{suggestion.createdDT | formatDate: 'MM/DD/YYYY hh:mm A'}}\r\n                                </td>\r\n                                <td *ngIf=\"suggestion.resolutionDT === undefined\" class=\"col-xs-2 border-right\">\r\n                                    &nbsp;\r\n                                </td>\r\n                                <td *ngIf=\"suggestion.resolutionDT !== undefined\" class=\"col-xs-2 border-right\" pTooltip=\"{{suggestion.resolutionDT | formatDate: 'MM/DD/YYYY hh:mm A'}}\" tooltipPosition=\"top\">\r\n                                    {{suggestion.resolutionDT | formatDate: 'MM/DD/YYYY hh:mm A'}}\r\n                                </td>\r\n                                <td class=\"col-xs-1 border-right\" pTooltip=\"{{suggestion.typeName}}\" tooltipPosition=\"top\">\r\n                                    {{suggestion.typeName}}\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center border-right\" *ngIf=\"admin\">\r\n                                    <a role=\"button\" title=\"Delete\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"title\"\r\n                                       [message]=\"message\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"confirmClicked(suggestion)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-ban\"></i>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Feedback Deleted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Feedback has been deleted successfully.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var FeedbackRedirectComponent = (function () {
	    function FeedbackRedirectComponent(router) {
	        this.router = router;
	        this.router.navigate(['/feedback']);
	    }
	    return FeedbackRedirectComponent;
	}());
	FeedbackRedirectComponent = __decorate([
	    core_1.Component({
	        selector: 'feedbackredirect',
	        template: '<div></div>'
	    }),
	    __metadata("design:paramtypes", [router_1.Router])
	], FeedbackRedirectComponent);
	exports.FeedbackRedirectComponent = FeedbackRedirectComponent;
	//# sourceMappingURL=feedbackredirect.component.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var FooterComponent = (function () {
	    function FooterComponent() {
	        this.year = '';
	        this.build = '';
	        var today = new Date();
	        this.year = today.getFullYear().toString();
	        this.build = '2017.01.13.03';
	    }
	    return FooterComponent;
	}());
	FooterComponent = __decorate([
	    core_1.Component({
	        selector: 'footer-item',
	        template: __webpack_require__(63)
	    }),
	    __metadata("design:paramtypes", [])
	], FooterComponent);
	exports.FooterComponent = FooterComponent;
	//# sourceMappingURL=footer.component.js.map

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n<div class=\"text-center\">\r\n    <hr />\r\n    <a [routerLink]=\"['/privacy']\">Privacy Policy</a> - <i class=\"fa fa-copyright\"></i> {{year}} Dragonmir Development - {{build}}\r\n</div>\r\n<div class=\"row\">\r\n    &nbsp;\r\n</div>"

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var setting_service_1 = __webpack_require__(20);
	var HomeComponent = (function () {
	    function HomeComponent(settingService) {
	        var _this = this;
	        this.settingService = settingService;
	        this.imageUrl = '';
	        this.settingService.getSetting(1)
	            .subscribe(function (x) {
	            _this.imageUrl = x.settingValue;
	        });
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(65)
	    }),
	    __metadata("design:paramtypes", [setting_service_1.SettingService])
	], HomeComponent);
	exports.HomeComponent = HomeComponent;
	//# sourceMappingURL=home.component.js.map

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div id=\"wrapper\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"siteHeader\">\r\n                    <img src=\"{{imageUrl}}\" height=\"375\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-9\">\r\n                    <article-list></article-list>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <archive-list></archive-list>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                &nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var LoadingIndicator = (function () {
	    function LoadingIndicator() {
	    }
	    return LoadingIndicator;
	}());
	LoadingIndicator = __decorate([
	    core_1.Component({
	        selector: 'loading-indicator',
	        template: __webpack_require__(67),
	    })
	], LoadingIndicator);
	exports.LoadingIndicator = LoadingIndicator;
	//# sourceMappingURL=loading-indicator.js.map

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"circle\"></div>\r\n<div class=\"circle1\"></div>"

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var NavMenuComponent = (function () {
	    function NavMenuComponent(userService) {
	        this.userService = userService;
	    }
	    NavMenuComponent.prototype.ngOnInit = function () {
	        this.userService.checkLogin();
	    };
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(69),
	        styles: [__webpack_require__(70)]
	    }),
	    __metadata("design:paramtypes", [user_service_1.UserService])
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;
	//# sourceMappingURL=navmenu.component.js.map

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" style=\"border-bottom: 1px solid white\" role=\"navigation\">\r\n    <div class='navbar-header'>\r\n        <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n            <span class='sr-only'>Toggle navigation</span>\r\n            <span class='icon-bar'></span>\r\n            <span class='icon-bar'></span>\r\n            <span class='icon-bar'></span>\r\n        </button>\r\n        <a class='navbar-brand' [routerLink]=\"['/home']\">The Hales Angels</a>\r\n    </div>\r\n    <div class='navbar-collapse collapse navbar-right'>\r\n        <ul class='nav navbar-nav'>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['/home']\">\r\n                    <span class='fa fa-lg fa-home'></span> Home\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"userService.isLoggedIn && userService.user != null && userService.user.isAdmin\">\r\n                <a [routerLink]=\"['/create']\">\r\n                    <span class='fa fa-file-text-o'></span> Submit\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"userService.isLoggedIn\">\r\n                <a [routerLink]=\"['/feedback']\">\r\n                    <span class='fa fa-lg fa-commenting'></span> Feedback\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"userService.isLoggedIn && userService.user != null && userService.user.isAdmin\">\r\n                <a [routerLink]=\"['/admin']\">\r\n                    <span class='fa fa-lg fa-empire'></span> Admin\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"userService.isLoggedIn\">\r\n                <a [routerLink]=\"['/profile']\">\r\n                    <span class='fa fa-user-o'></span> Profile - {{userService.user.firstName}}\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"userService.isLoggedIn\" style=\"cursor: pointer\">\r\n                <a (click)=\"userService.logout()\">\r\n                    <span class='fa fa-lg fa-facebook-official'></span> Logout\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"!userService.isLoggedIn\" style=\"cursor: pointer\">\r\n                <a (click)=\"userService.login()\">\r\n                    <span class='fa fa-lg fa-facebook-official'></span> Login\r\n                </a>\r\n            </li>\r\n            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(71);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n\n", ""]);
	
	// exports


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var image_service_1 = __webpack_require__(34);
	var router_1 = __webpack_require__(6);
	var NGCarouselComponent = (function () {
	    function NGCarouselComponent(imageService, activatedRoute) {
	        this.imageService = imageService;
	        this.activatedRoute = activatedRoute;
	        this.images = [];
	        this.id = 0;
	        this.imagesLoaded = false;
	    }
	    NGCarouselComponent.prototype.ngOnDestroy = function () {
	        this.imageSubscription.unsubscribe();
	    };
	    NGCarouselComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this.id == undefined) {
	            this.activatedRoute.params.subscribe(function (param) {
	                _this.id = param['id'];
	            });
	        }
	        if (this.id > 0) {
	            this.imageService.getImagesByArticleId(this.id);
	            this.imagesLoaded = true;
	        }
	        this.images = this.imageService.images;
	        this.imageSubscription = this.imageService.imageChange.subscribe(function (value) {
	            _this.images = value;
	            _this.imagesLoaded = true;
	        });
	    };
	    return NGCarouselComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], NGCarouselComponent.prototype, "id", void 0);
	NGCarouselComponent = __decorate([
	    core_1.Component({
	        selector: 'ng-carousel',
	        template: __webpack_require__(73),
	        providers: [image_service_1.ImageService]
	    }),
	    __metadata("design:paramtypes", [image_service_1.ImageService, router_1.ActivatedRoute])
	], NGCarouselComponent);
	exports.NGCarouselComponent = NGCarouselComponent;
	//# sourceMappingURL=ngcarousel.component.js.map

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\" *ngIf=\"imagesLoaded == false\">\r\n    <loading-indicator></loading-indicator>\r\n</div>\r\n<div class=\"row\" *ngIf=\"imageService.images.length > 0\">\r\n    <carousel [interval]=\"5000\" [noWrap]=\"false\">\r\n        <slide *ngFor=\"let image of imageService.images\" [active]=\"image.isActive\">\r\n            \r\n            <div *ngIf=\"!image.isVideo\">\r\n                <img [src]=\"imageService.sanitize(image.imageUrl)\" class=\"fluid center-block\" height=\"400\">    \r\n            </div>\r\n            <div *ngIf=\"image.isVideo\">\r\n                <video-player [image]=\"image\"></video-player>\r\n            </div>\r\n            <div class=\"carousel-caption alert\" style=\"bottom: -60px\">\r\n                <p>{{image.captionText}}</p>\r\n            </div>\r\n            <div class=\"alert\">\r\n                <p>&nbsp;</p>\r\n            </div>\r\n        </slide>\r\n    </carousel>\r\n</div>\r\n"

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var PrivacyComponent = (function () {
	    function PrivacyComponent() {
	    }
	    return PrivacyComponent;
	}());
	PrivacyComponent = __decorate([
	    core_1.Component({
	        selector: 'privacy',
	        template: __webpack_require__(75)
	    })
	], PrivacyComponent);
	exports.PrivacyComponent = PrivacyComponent;
	//# sourceMappingURL=privacy.component.js.map

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <span>\r\n                    <p class=\"ql-align-center\"><strong>Privacy Policy</strong></p><p><br></p><p>Protecting your private information is our priority. This Statement of Privacy applies to the http://www.thehalesangels.com and Dragonmir Development and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Dragonmir Development include http://www.thehalesangels.com, The Hales Angels, http://www.thehalesangels.com and http://mglayton.dragonmirdev.com. The Dragonmir Development website is a news and information site. By using the Dragonmir Development website, you consent to the data practices described in this statement.</p><p><br></p><p><strong>Collection of your Personal Information</strong></p><p>Dragonmir Development may collect personally identifiable information, such as your name. We may gather additional personal or non-personal information in the future.</p><p><br></p><p>Information about your computer hardware and software may be automatically collected by Dragonmir Development. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Dragonmir Development website.</p><p><br></p><p>Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through Dragonmir Development's public message boards, this information may be collected and used by others.</p><p><br></p><p>Dragonmir Development encourages you to review the privacy statements of websites you choose to link to from Dragonmir Development so that you can understand how those websites collect, use and share your information. Dragonmir Development is not responsible for the privacy statements or other content on websites outside of the Dragonmir Development website.</p><p><br></p><p><strong>Use of your Personal Information </strong></p><p>Dragonmir Development collects and uses your personal information to operate its website(s) and deliver the services you have requested.</p><p><br></p><p>Dragonmir Development may also use your personally identifiable information to inform you of other products or services available from Dragonmir Development and its affiliates. Dragonmir Development may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered.</p><p><br></p><p>Dragonmir Development does not sell, rent or lease its customer lists to third parties.</p><p><br></p><p>Dragonmir Development may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Dragonmir Development, and they are required to maintain the confidentiality of your information.</p><p><br></p><p>Dragonmir Development will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Dragonmir Development or the site; (b) protect and defend the rights or property of Dragonmir Development; and, (c) act under exigent circumstances to protect the personal safety of users of Dragonmir Development, or the public.</p><p><br></p><p><strong>Security of your Personal Information</strong></p><p><br></p><p><br></p><p>Dragonmir Development secures your personal information from unauthorized access, use or disclosure.</p><p><br></p><p><br></p><p><strong>Children Under Thirteen</strong></p><p>Dragonmir Development does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</p><p><br></p><p><strong>Disconnecting your Dragonmir Development Account from Third Party Websites</strong></p><p>You will be able to connect your Dragonmir Development account to third party accounts. BY CONNECTING YOUR DRAGONMIR DEVELOPMENT ACCOUNT TO YOUR THIRD PARTY ACCOUNT, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING TO THE CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS (IN ACCORDANCE WITH YOUR PRIVACY SETTINGS ON THOSE THIRD PARTY SITES). IF YOU DO NOT WANT INFORMATION ABOUT YOU, INCLUDING PERSONALLY IDENTIFYING INFORMATION, TO BE SHARED INTHIS MANNER, DO NOT USE THE THIS FEATURE. You may disconnect your account from a third party account at any time. Users can deny access to my site from their Facebook account..</p><p><br></p><p><strong>Opt-Out &amp; Unsubscribe</strong></p><p>We respect your privacy and give you an opportunity to opt-out of receiving announcements of certain information. Users may opt-out of receiving any or all communications from Dragonmir Development by changing your preference form your profile.</p><p><br></p><p><strong>Changes to this Statement</strong></p><p>Dragonmir Development will occasionally update this Statement of Privacy to reflect company and customer feedback. Dragonmir Development encourages you to periodically review this Statement to be informed of how Dragonmir Development is protecting your information.</p><p><br></p><p>Effective as of December 14, 2016</p>\r\n                </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            &nbsp;\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var ProfileComponent = (function () {
	    function ProfileComponent(userService, router) {
	        this.userService = userService;
	        this.router = router;
	        this.isLoggedIn = false;
	    }
	    ProfileComponent.prototype.ngOnDestroy = function () {
	        this.userSubscription.unsubscribe();
	    };
	    ProfileComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.isLoggedIn = this.userService.isLoggedIn;
	        this.user = this.userService.user;
	        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
	            _this.user = value;
	        });
	    };
	    ProfileComponent.prototype.ngAfterViewInit = function () {
	        if (!this.isLoggedIn) {
	            if (this.loginModal !== undefined)
	                this.loginModal.show();
	        }
	    };
	    ProfileComponent.prototype.dismissLoginModal = function () {
	        this.router.navigate(['/home']);
	    };
	    ProfileComponent.prototype.saveProfile = function (form) {
	        var _this = this;
	        this.user.receiveNotifications = form.notifications;
	        this.userService.saveProfile(this.user).constructor(function (res) {
	            _this.user = res;
	            _this.profileModal.show();
	        });
	        return false;
	    };
	    return ProfileComponent;
	}());
	__decorate([
	    core_1.ViewChild('profileModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], ProfileComponent.prototype, "profileModal", void 0);
	__decorate([
	    core_1.ViewChild('loginModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], ProfileComponent.prototype, "loginModal", void 0);
	ProfileComponent = __decorate([
	    core_1.Component({
	        selector: 'profile',
	        template: __webpack_require__(77)
	    }),
	    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
	], ProfileComponent);
	exports.ProfileComponent = ProfileComponent;
	//# sourceMappingURL=profile.component.js.map

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\"><h2>Profile</h2>\r\n                </div>\r\n                <div class=\"panel-body\" *ngIf=\"!isLoggedIn\">\r\n                    You must be logged in to access this page.\r\n                </div>\r\n                <div class=\"panel-body\" *ngIf=\"isLoggedIn\">\r\n                    <form #form=\"ngForm\" (ngSubmit)=\"saveProfile(form.value); form.reset()\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>First Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                                <h4>{{user.firstName}}</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Last Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                                <h4>{{user.lastName}}</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Email:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                                <h4>{{user.emailAddress}}</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Last Logged In:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                                <h4>{{user.lastLoggedInDt | formatDate: 'MM/DD/YYYY hh:mm A' }}</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>External Login Type:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                                <h4>{{user.externalType}}</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Receive Notifications:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-1\">\r\n                                <h4>{{user.receiveNotifications | yesNo: 'yesNo'}}</h4>\r\n                            </div>\r\n                            <div col-sm-8>\r\n                                <h4><input type=\"checkbox\" name=\"notifications\" [(ngModel)]=\"user.receiveNotifications\" /></h4>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"btn btn-primary\" type=\"submit\">\r\n                            <span class=\"glyphicon glyphicon-save\"></span> Save Changes\r\n                        </button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            &nbsp;\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #profileModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"profileModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Changes Saved Successfully</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Changes to your profile have been saved successfully.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #loginModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" (onHide)=\"dismissLoginModal()\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"loginModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Error</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                You must be logged in to access this page. Please login.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var image_service_1 = __webpack_require__(34);
	var setting_service_1 = __webpack_require__(20);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var setting_model_1 = __webpack_require__(79);
	var SettingComponent = (function () {
	    function SettingComponent(settingService, imageService, router) {
	        this.settingService = settingService;
	        this.imageService = imageService;
	        this.router = router;
	        this.headerSetting = {};
	        this.codeSetting = {};
	        this.setting = new setting_model_1.Setting();
	        this.accessToken = '';
	        this.imageId = 0;
	        this.fbA = '';
	        this.fbS = '';
	        this.fbP = '';
	    }
	    SettingComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.settingService.getSetting(1001).subscribe(function (result) {
	            _this.fbA = result.settingValue;
	        });
	        this.settingService.getSetting(1002).subscribe(function (result) {
	            _this.fbS = result.settingValue;
	        });
	        this.settingService.getSetting(1003).subscribe(function (result) {
	            _this.fbP = result.settingValue;
	        });
	        hello()
	            .init({
	            facebook: this.fbA
	        }, { scope: 'publish_pages,manage_pages,user_photos' });
	        hello('facebook')
	            .api('/me/accounts', 'get')
	            .then(function (res) {
	            for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
	                var page = _a[_i];
	                if (page.id === _this.fbP) {
	                    _this.accessToken = page.access_token;
	                }
	            }
	        });
	        this.settingService.getSettings()
	            .subscribe(function (x) {
	            _this.headerSetting = x[0], _this.codeSetting = x[1];
	        });
	    };
	    SettingComponent.prototype.saveProfile = function (form) {
	        var _this = this;
	        this.setting.headerId = form.headerId;
	        this.setting.codeId = form.codeId;
	        this.setting.code = form.code;
	        hello('facebook').login({ scope: 'publish_pages,manage_pages,user_photos' });
	        hello('facebook')
	            .api('/1601317313510622/photos', 'post', {
	            file: form.image,
	            token: this.accessToken
	        })
	            .then(function (result) {
	            _this.imageId = result.id;
	            hello('facebook')
	                .api('thehalesangelspage/albums', {
	                "fields": 'photos{source}'
	            })
	                .then(function (res) {
	                res.data.forEach(function (x) {
	                    if (x.id === '1601317313510622') {
	                        x.photos.data.forEach(function (y) {
	                            if (y.id === _this.imageId) {
	                                _this.setting.image = y.source;
	                                _this.settingService.saveSettings(_this.setting)
	                                    .subscribe(function (res) {
	                                    _this.profileModal.show();
	                                });
	                            }
	                        });
	                    }
	                });
	            });
	        });
	        return false;
	    };
	    return SettingComponent;
	}());
	__decorate([
	    core_1.ViewChild('profileModal'),
	    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
	], SettingComponent.prototype, "profileModal", void 0);
	SettingComponent = __decorate([
	    core_1.Component({
	        selector: 'setting',
	        template: __webpack_require__(80)
	    }),
	    __metadata("design:paramtypes", [setting_service_1.SettingService, image_service_1.ImageService, router_1.Router])
	], SettingComponent);
	exports.SettingComponent = SettingComponent;
	//# sourceMappingURL=setting.component.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var Setting = (function () {
	    function Setting() {
	    }
	    return Setting;
	}());
	Setting = __decorate([
	    core_1.Injectable()
	], Setting);
	exports.Setting = Setting;
	//# sourceMappingURL=setting.model.js.map

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel\">\r\n    <div id=\"wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"row\">&nbsp;</div>\r\n                <div class=\"panel panel-default\">\r\n\r\n                    <div class=\"panel-body\">\r\n                        <form #form=\"ngForm\" (ngSubmit)=\"saveProfile(form.value);\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <h4>Header Image:</h4> <button type=\"button\" class=\"btn btn-primary\" (click)=\"imageModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Update Image</button>\r\n\r\n                                    <input type=\"hidden\" name=\"image\" [(ngModel)]=\"imageService.header\"/>\r\n                                    <input type=\"hidden\" name=\"headerId\" [(ngModel)]=\"headerSetting.settingId\" />\r\n                                    <input type=\"hidden\" name=\"codeId\" [(ngModel)]=\"codeSetting.settingId\" />\r\n                                </div>\r\n                                <div class=\"col-sm-9\">\r\n                                    <div *ngIf=\"imageService.imageUrl === ''\">\r\n                                        <img src=\"{{headerSetting.settingValue}}\" height=\"200\" />\r\n                                    </div>\r\n                                    <div *ngIf=\"imageService.imageUrl !== ''\">\r\n                                        <img [src]=\"imageService.sanitize(imageService.imageUrl)\" height=\"200\"/>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">&nbsp;</div>\r\n                            <!--<div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <h4>Code:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-5\">\r\n                                    <input class=\"form-control\" type=\"text\" name=\"code\" [(ngModel)]=\"codeSetting.settingValue\" />\r\n                                </div>\r\n                            </div>-->\r\n                            <button class=\"btn btn-primary\" type=\"submit\">\r\n                                <span class=\"glyphicon glyphicon-save\"></span> Save Changes\r\n                            </button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                &nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div bsModal #profileModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"profileModal.hide()\">\r\n                        <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Changes Saved Successfully</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Changes to the settings have been saved successfully.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n    <div bsModal #imageModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"imageModal.hide()\">\r\n                        <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Update Image</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p-growl [value]=\"imageService.headerMsgs\"></p-growl>\r\n\r\n                    <p-fileUpload name=\"demo[]\" url=\"~/upload\" (onUpload)=\"imageService.onHeaderUpload($event)\"\r\n                                   accept=\"image/*\" auto=\"auto\" maxFileSize=\"4000000\">\r\n                    </p-fileUpload>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var UserListComponent = (function () {
	    function UserListComponent(userService) {
	        this.userService = userService;
	        this.users = [];
	        this.isSystemAdmin = false;
	        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
	        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
	        this.unApproveTitle = 'Make Admin';
	        this.unApproveMessage = 'Are you <b>sure</b> you want to make this user an Admin?';
	        this.approveTitle = 'Remove Admin';
	        this.approveMessage = 'Are you <b>sure</b> you want to remove this users admin permissions?';
	        this.unApproveSysTitle = 'Make System Admin';
	        this.unApproveSysMessage = 'Are you <b>sure</b> you want to make this user a System Admin?';
	        this.approveSysTitle = 'Remove System Admin';
	        this.approveSysMessage = 'Are you <b>sure</b> you want to remove this users system admin permissions?';
	    }
	    UserListComponent.prototype.ngOnDestroy = function () {
	        this.userSubscription.unsubscribe();
	    };
	    UserListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.userService.getApplicationUsers()
	            .subscribe(function (users) {
	            _this.users = users;
	        });
	        this.myUser = this.userService.user;
	        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
	            _this.myUser = value;
	            _this.isSystemAdmin = value.isSystemAdmin;
	        });
	    };
	    UserListComponent.prototype.approveUser = function (user) {
	        user.isAdmin = true;
	        this.userService.saveProfile(user);
	    };
	    UserListComponent.prototype.unApproveUser = function (user) {
	        user.isAdmin = false;
	        this.userService.saveProfile(user);
	    };
	    UserListComponent.prototype.approveSysUser = function (user) {
	        user.isSystemAdmin = true;
	        this.userService.saveProfile(user);
	    };
	    UserListComponent.prototype.unApproveSysUser = function (user) {
	        user.isSystemAdmin = false;
	        this.userService.saveProfile(user);
	    };
	    return UserListComponent;
	}());
	UserListComponent = __decorate([
	    core_1.Component({
	        selector: 'user-list',
	        template: __webpack_require__(82)
	    }),
	    __metadata("design:paramtypes", [user_service_1.UserService])
	], UserListComponent);
	exports.UserListComponent = UserListComponent;
	//# sourceMappingURL=userlist.component.js.map

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel\">\r\n\r\n    <div id=\"wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">&nbsp;</div>\r\n            <div class=\"row\">\r\n                <div class=\"row\" *ngIf=\"users.length < 1\">\r\n                    <loading-indicator></loading-indicator>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <table *ngIf=\"users.length > 0\" class=\"table table-striped table-fixed\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"col-xs-3 border-right\">\r\n                                    <h5>Name</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-3 border-right\">\r\n                                    <h5>Email Address</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-3 border-right\">\r\n                                    <h5>Last Logged In</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-1 text-center border-right\">\r\n                                    <h5>Admin</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-1 text-center border-right\">\r\n                                    <h5>Sys Admin</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-1 text-center\">\r\n                                    <h5>Notify?</h5>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of users\">\r\n                                <td class=\"col-xs-3 border-right\">\r\n                                    {{user.firstName}} {{user.lastName}}\r\n                                </td>\r\n                                <td class=\"col-xs-3 border-right\">\r\n                                    {{user.emailAddress}}\r\n                                </td>\r\n                                <td class=\"col-xs-3 border-right\">\r\n                                    {{user.lastLoggedInDt | formatDate: 'MM/DD/YYYY hh:mm A'}}\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center border-right\" pTooltip=\"{{user.isAdmin | yesNo: 'admin' }}\" tooltipPosition=\"top\" *ngIf=\"myUser.isSystemAdmin\">\r\n                                    <a *ngIf=\"user.isAdmin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"approveTitle\"\r\n                                       [message]=\"approveMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"unApproveUser(user)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-rebel\"></i>\r\n                                    </a>\r\n                                    <a *ngIf=\"!user.isAdmin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"unApproveTitle\"\r\n                                       [message]=\"unApproveMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"approveUser(user)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-empire\"></i>\r\n                                    </a>\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center border-right\" *ngIf=\"!myUser.isSystemAdmin\" pTooltip=\"{{user.isAdmin | yesNo: 'admin' }}\" tooltipPosition=\"top\">\r\n                                    <span *ngIf=\"user.isAdmin\"><i class=\"fa fa-lg fa-rebel\"></i></span>\r\n                                    <span *ngIf=\"!user.isAdmin\"><i class=\"fa fa-lg fa-empire\"></i></span>\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center border-right\" *ngIf=\"!myUser.isSystemAdmin\" pTooltip=\"{{user.isSystemAdmin | yesNo: 'sysAdmin' }}\" tooltipPosition=\"top\">\r\n                                    <span *ngIf=\"user.isSystemAdmin\"><i class=\"fa fa-lg fa-rebel\"></i></span>\r\n                                    <span *ngIf=\"!user.isSystemAdmin\"><i class=\"fa fa-lg fa-empire\"></i></span>\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center border-right\" pTooltip=\"{{user.isSystemAdmin | yesNo: 'sysAdmin' }}\" tooltipPosition=\"top\" *ngIf=\"myUser.isSystemAdmin\">\r\n                                    <a *ngIf=\"user.isSystemAdmin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"approveSysTitle\"\r\n                                       [message]=\"approveSysMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"unApproveSysUser(user)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-rebel\"></i>\r\n                                    </a>\r\n                                    <a *ngIf=\"!user.isSystemAdmin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"unApproveSysTitle\"\r\n                                       [message]=\"unApproveSysMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"approveSysUser(user)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-empire\"></i>\r\n                                    </a>\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center\" pTooltip=\"{{user.receiveNotifications | yesNo: 'notification' }}\" tooltipPosition=\"top\">\r\n                                    <span *ngIf=\"user.receiveNotifications\"><i class=\"fa fa-lg fa-rebel\"></i></span>\r\n                                    <span *ngIf=\"!user.receiveNotifications\"><i class=\"fa fa-lg fa-empire\"></i></span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var image_service_1 = __webpack_require__(34);
	var VideoPlayerComponent = (function () {
	    function VideoPlayerComponent(imageService) {
	        this.imageService = imageService;
	        this.sources = [];
	    }
	    VideoPlayerComponent.prototype.ngOnInit = function () {
	        this.sources.push(this.image);
	    };
	    return VideoPlayerComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], VideoPlayerComponent.prototype, "image", void 0);
	VideoPlayerComponent = __decorate([
	    core_1.Component({
	        selector: 'video-player',
	        template: __webpack_require__(84)
	    }),
	    __metadata("design:paramtypes", [image_service_1.ImageService])
	], VideoPlayerComponent);
	exports.VideoPlayerComponent = VideoPlayerComponent;
	//# sourceMappingURL=videoplayer.component.js.map

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<vg-player style=\"width: 50%; height: 400px\" class=\"fluid center-block\">\r\n    <vg-overlay-play></vg-overlay-play>\r\n    <vg-buffering></vg-buffering>\r\n\r\n    <vg-scrub-bar>\r\n        <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\r\n        <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\r\n    </vg-scrub-bar>\r\n\r\n    <vg-controls>\r\n        <vg-play-pause></vg-play-pause>\r\n        <vg-playback-button></vg-playback-button>\r\n\r\n        <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n        <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\r\n\r\n        <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\r\n        <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n        <vg-mute></vg-mute>\r\n    </vg-controls>\r\n\r\n    <video vgMedia #media id=\"singleVideo\" preload=\"auto\" crossorigin class=\"fluid center-block\">\r\n        <source *ngFor=\"let video of sources\" [src]=\"imageService.sanitize(video.imageUrl)\" type=\"video/mp4\">\r\n    </video>\r\n</vg-player>"

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var BooleanPipe = (function () {
	    function BooleanPipe() {
	    }
	    BooleanPipe.prototype.transform = function (boolean, type) {
	        var result = '';
	        if (type === 'yesNo') {
	            result = boolean ? 'Yes' : 'No';
	        }
	        if (type === 'approved') {
	            result = boolean ? 'Approved' : 'Un-Approved';
	        }
	        if (type === 'readUnread') {
	            result = boolean ? 'Unread' : 'Read';
	        }
	        if (type === 'visible') {
	            result = boolean ? 'Visible' : 'Hidden';
	        }
	        if (type === 'admin') {
	            result = boolean ? 'Admin' : 'Non-Admin';
	        }
	        if (type === 'sysAdmin') {
	            result = boolean ? 'System Admin' : 'Non-System Admin';
	        }
	        if (type === 'notification') {
	            result = boolean ? 'Gets Notified' : 'Does not get Notified';
	        }
	        return result;
	    };
	    return BooleanPipe;
	}());
	BooleanPipe = __decorate([
	    core_1.Pipe({
	        name: 'yesNo'
	    })
	], BooleanPipe);
	exports.BooleanPipe = BooleanPipe;
	//# sourceMappingURL=yesNo.pipe.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var moment = __webpack_require__(87);
	var DatePipe = (function () {
	    function DatePipe() {
	    }
	    DatePipe.prototype.transform = function (date, args, transform) {
	        if (transform === void 0) { transform = true; }
	        var d = new Date(date);
	        if (transform) {
	            d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
	            return moment(d).format(args);
	        }
	        else {
	            return moment(d).format(args);
	        }
	    };
	    return DatePipe;
	}());
	DatePipe = __decorate([
	    core_1.Pipe({
	        name: 'formatDate'
	    })
	], DatePipe);
	exports.DatePipe = DatePipe;
	//# sourceMappingURL=formatDate.pipe.js.map

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWFmZDY0YzRmMWY0NGM3NTk3MWIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lbmcvcHJpbWVuZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXItY29uZmlybWF0aW9uLXBvcG92ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2aWRlb2d1bGFyMi9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmlkZW9ndWxhcjIvY29udHJvbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2aWRlb2d1bGFyMi9vdmVybGF5LXBsYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2aWRlb2d1bGFyMi9idWZmZXJpbmdcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvdXNlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvZXh0ZXJuYWxEYXRhLm1vZGVsLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJjaGl2ZS9hcmNoaXZlY29udGFpbmVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2FydGljbGUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJjaGl2ZS9hcmNoaXZlY29udGFpbmVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmVsaXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJjaGl2ZS9hcmNoaXZlbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJjaGl2ZS9hcmNoaXZlcmVkaXJlY3QuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVhZG1pbmxpc3QuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvaW1hZ2Uuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL21vZGVscy9pbWFnZS5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWFkbWlubGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVjb250YWluZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVjb250YWluZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvZWRpdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvYXJ0aWNsZWRldGFpbC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZzItZmFjZWJvb2stc2RrXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlZWRpdHJlZGlyZWN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZXJlZGlyZWN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xldmlld3JlZGlyZWN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50bGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9jb21tZW50LnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudGxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudGFkbWlubGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudGFkbWlubGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbW9kZWxzL3N1Z2dlc3Rpb24ubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFja2xpc3QuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFja2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRiYWNrL2ZlZWRiYWNrcmVkaXJlY3QuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmctaW5kaWNhdG9yLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmctaW5kaWNhdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25nY2Fyb3VzZWwvbmdjYXJvdXNlbC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25nY2Fyb3VzZWwvbmdjYXJvdXNlbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvc2V0dGluZy5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91c2VyL3VzZXJsaXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdXNlci91c2VybGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmlkZW8vdmlkZW9wbGF5ZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92aWRlby92aWRlb3BsYXllci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3BpcGVzL3llc05vLnBpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9waXBlcy9mb3JtYXREYXRlLnBpcGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLHFCQUFPLENBQThCLENBQUM7QUFDdEMscUJBQU8sQ0FBUyxDQUFDO0FBQ2pCLGtDQUErQixDQUFlLENBQUM7QUFDL0MsZ0RBQW9DLENBQW9CLENBQUM7QUFDekQsd0NBQTBCLENBQWtCLENBQUM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07U0FDL0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbEMsSUFBSSxFQUFFLDJCQUEyQjthQUNqQyxVQUFVLEVBQUU7aUJBQ1IsT0FBTyxFQUFFLEdBQUc7aUJBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2lCQUN0QixTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3hCLE9BQU8sRUFBRSxLQUFLO2lCQUNkLDZGQUE2RjtpQkFDN0YsNkRBQTZEO2lCQUM3RCxRQUFRLEVBQUUs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Q0FBZ0Msby9EQUFvL0QsZ0NBQWdDLHFhQUFxYSx5Q0FBeUMsaVpBQWlaLHlDQUF5QyxxK0RBQXErRCxvREFBb0Qsc2dCOzs7Ozs7QUNBNzNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrRDs7Ozs7O0FDbENBLGlEQUFnRCwwa0JBQTBrQixtZ0I7Ozs7OztBQ0ExbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsdUM7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsa0JBQWtCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsNEM7Ozs7OztBQy9CQSxvQyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVhZmQ2NGM0ZjFmNDRjNzU5NzFiIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxhcHA+PC9hcHA+PC9ib2R5PjwvaHRtbD4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbi8vTW9kdWxlc1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBhbmd1bGFyMl91bml2ZXJzYWxfMSA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XHJcbnZhciBuZzJfYm9vdHN0cmFwXzEgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcclxudmFyIHByaW1lbmdfMSA9IHJlcXVpcmUoXCJwcmltZW5nL3ByaW1lbmdcIik7XHJcbnZhciBhbmd1bGFyX2NvbmZpcm1hdGlvbl9wb3BvdmVyXzEgPSByZXF1aXJlKFwiYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3ZlclwiKTtcclxudmFyIGNvcmVfMiA9IHJlcXVpcmUoXCJ2aWRlb2d1bGFyMi9jb3JlXCIpO1xyXG52YXIgY29udHJvbHNfMSA9IHJlcXVpcmUoXCJ2aWRlb2d1bGFyMi9jb250cm9sc1wiKTtcclxudmFyIG92ZXJsYXlfcGxheV8xID0gcmVxdWlyZShcInZpZGVvZ3VsYXIyL292ZXJsYXktcGxheVwiKTtcclxudmFyIGJ1ZmZlcmluZ18xID0gcmVxdWlyZShcInZpZGVvZ3VsYXIyL2J1ZmZlcmluZ1wiKTtcclxuLy9Db21wb25lbnRzXHJcbnZhciBhZG1pbl9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50XCIpO1xyXG52YXIgYXBwX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudFwiKTtcclxudmFyIGFyY2hpdmVjb250YWluZXJfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZWNvbnRhaW5lci5jb21wb25lbnRcIik7XHJcbnZhciBhcmNoaXZlbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYXJjaGl2ZS9hcmNoaXZlbGlzdC5jb21wb25lbnRcIik7XHJcbnZhciBhcmNoaXZlcmVkaXJlY3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZXJlZGlyZWN0LmNvbXBvbmVudFwiKTtcclxudmFyIGFydGljbGVhZG1pbmxpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWFkbWlubGlzdC5jb21wb25lbnRcIik7XHJcbnZhciBhcnRpY2xlX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50XCIpO1xyXG52YXIgYXJ0aWNsZWNvbnRhaW5lcl9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlY29udGFpbmVyLmNvbXBvbmVudFwiKTtcclxudmFyIGVkaXRfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2FydGljbGUvZWRpdC5jb21wb25lbnRcIik7XHJcbnZhciBhcnRpY2xlZWRpdHJlZGlyZWN0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVlZGl0cmVkaXJlY3QuY29tcG9uZW50XCIpO1xyXG52YXIgYXJ0aWNsZWxpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWxpc3QuY29tcG9uZW50XCIpO1xyXG52YXIgYXJ0aWNsZXJlZGlyZWN0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVyZWRpcmVjdC5jb21wb25lbnRcIik7XHJcbnZhciBhcnRpY2xldmlld3JlZGlyZWN0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGV2aWV3cmVkaXJlY3QuY29tcG9uZW50XCIpO1xyXG52YXIgY29tbWVudGxpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudGxpc3QuY29tcG9uZW50XCIpO1xyXG52YXIgY29tbWVudGFkbWlubGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50YWRtaW5saXN0LmNvbXBvbmVudFwiKTtcclxudmFyIGZlZWRiYWNrX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnRcIik7XHJcbnZhciBmZWVkYmFja2xpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2ZlZWRiYWNrL2ZlZWRiYWNrbGlzdC5jb21wb25lbnRcIik7XHJcbnZhciBmZWVkYmFja3JlZGlyZWN0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFja3JlZGlyZWN0LmNvbXBvbmVudFwiKTtcclxudmFyIGZvb3Rlcl9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIik7XHJcbnZhciBob21lX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50XCIpO1xyXG52YXIgbG9hZGluZ19pbmRpY2F0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLWluZGljYXRvclwiKTtcclxudmFyIG5hdm1lbnVfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnRcIik7XHJcbnZhciBuZ2Nhcm91c2VsX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9uZ2Nhcm91c2VsL25nY2Fyb3VzZWwuY29tcG9uZW50XCIpO1xyXG52YXIgcHJpdmFjeV9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudFwiKTtcclxudmFyIHByb2ZpbGVfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIik7XHJcbnZhciBzZXR0aW5nX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50XCIpO1xyXG52YXIgdXNlcmxpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3VzZXIvdXNlcmxpc3QuY29tcG9uZW50XCIpO1xyXG52YXIgdmlkZW9wbGF5ZXJfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3ZpZGVvL3ZpZGVvcGxheWVyLmNvbXBvbmVudFwiKTtcclxuLy9TZXJ2aWNlc1xyXG52YXIgbmcyX2ZhY2Vib29rX3Nka18xID0gcmVxdWlyZShcIm5nMi1mYWNlYm9vay1zZGtcIik7XHJcbnZhciB1c2VyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiKTtcclxudmFyIGNvbW1lbnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvY29tbWVudC5zZXJ2aWNlXCIpO1xyXG52YXIgYXJ0aWNsZV9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9hcnRpY2xlLnNlcnZpY2VcIik7XHJcbnZhciBpbWFnZV9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlXCIpO1xyXG52YXIgc2V0dGluZ19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2VcIik7XHJcbi8vUGlwZXNcclxudmFyIHllc05vX3BpcGVfMSA9IHJlcXVpcmUoXCIuL3BpcGVzL3llc05vLnBpcGVcIik7XHJcbnZhciBmb3JtYXREYXRlX3BpcGVfMSA9IHJlcXVpcmUoXCIuL3BpcGVzL2Zvcm1hdERhdGUucGlwZVwiKTtcclxudmFyIEFwcE1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcHBNb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBwTW9kdWxlO1xyXG59KCkpO1xyXG5BcHBNb2R1bGUgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgYm9vdHN0cmFwOiBbYXBwX2NvbXBvbmVudF8xLkFwcENvbXBvbmVudF0sXHJcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgIGFkbWluX2NvbXBvbmVudF8xLkFkbWluQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBhcHBfY29tcG9uZW50XzEuQXBwQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBhcmNoaXZlY29udGFpbmVyX2NvbXBvbmVudF8xLkFyY2hpdmVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGFyY2hpdmVsaXN0X2NvbXBvbmVudF8xLkFyY2hpdmVMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBhcmNoaXZlcmVkaXJlY3RfY29tcG9uZW50XzEuQXJjaGl2ZVJlZGlyZWN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBhcnRpY2xlYWRtaW5saXN0X2NvbXBvbmVudF8xLkFydGljbGVBZG1pbkxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGFydGljbGVfY29tcG9uZW50XzEuQXJ0aWNsZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgYXJ0aWNsZWNvbnRhaW5lcl9jb21wb25lbnRfMS5BcnRpY2xlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBlZGl0X2NvbXBvbmVudF8xLkFydGljbGVFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBhcnRpY2xlZWRpdHJlZGlyZWN0X2NvbXBvbmVudF8xLkFydGljbGVFZGl0UmVkaXJlY3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGFydGljbGVsaXN0X2NvbXBvbmVudF8xLkFydGljbGVMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBhcnRpY2xlcmVkaXJlY3RfY29tcG9uZW50XzEuQXJ0aWNsZVJlZGlyZWN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBhcnRpY2xldmlld3JlZGlyZWN0X2NvbXBvbmVudF8xLkFydGljbGVWaWV3UmVkaXJlY3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgIHllc05vX3BpcGVfMS5Cb29sZWFuUGlwZSxcclxuICAgICAgICAgICAgY29tbWVudGxpc3RfY29tcG9uZW50XzEuQ29tbWVudExpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGNvbW1lbnRhZG1pbmxpc3RfY29tcG9uZW50XzEuQ29tbWVudEFkbWluTGlzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgZm9ybWF0RGF0ZV9waXBlXzEuRGF0ZVBpcGUsXHJcbiAgICAgICAgICAgIGZlZWRiYWNrX2NvbXBvbmVudF8xLkZlZWRiYWNrQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBmZWVkYmFja2xpc3RfY29tcG9uZW50XzEuRmVlZEJhY2tMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBmZWVkYmFja3JlZGlyZWN0X2NvbXBvbmVudF8xLkZlZWRiYWNrUmVkaXJlY3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGZvb3Rlcl9jb21wb25lbnRfMS5Gb290ZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGhvbWVfY29tcG9uZW50XzEuSG9tZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgbmF2bWVudV9jb21wb25lbnRfMS5OYXZNZW51Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBuZ2Nhcm91c2VsX2NvbXBvbmVudF8xLk5HQ2Fyb3VzZWxDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGxvYWRpbmdfaW5kaWNhdG9yXzEuTG9hZGluZ0luZGljYXRvcixcclxuICAgICAgICAgICAgcHJpdmFjeV9jb21wb25lbnRfMS5Qcml2YWN5Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBwcm9maWxlX2NvbXBvbmVudF8xLlByb2ZpbGVDb21wb25lbnQsXHJcbiAgICAgICAgICAgIHNldHRpbmdfY29tcG9uZW50XzEuU2V0dGluZ0NvbXBvbmVudCxcclxuICAgICAgICAgICAgdXNlcmxpc3RfY29tcG9uZW50XzEuVXNlckxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgIHZpZGVvcGxheWVyX2NvbXBvbmVudF8xLlZpZGVvUGxheWVyQ29tcG9uZW50XHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgICAgIGFuZ3VsYXIyX3VuaXZlcnNhbF8xLlVuaXZlcnNhbE1vZHVsZSxcclxuICAgICAgICAgICAgcm91dGVyXzEuUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogaG9tZV9jb21wb25lbnRfMS5Ib21lQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FydGljbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ3ZpZXcvOmlkJywgY29tcG9uZW50OiBhcnRpY2xlY29udGFpbmVyX2NvbXBvbmVudF8xLkFydGljbGVDb250YWluZXJDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnZWRpdC86aWQnLCBjb21wb25lbnQ6IGVkaXRfY29tcG9uZW50XzEuQXJ0aWNsZUVkaXRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnbmV3JywgY29tcG9uZW50OiBlZGl0X2NvbXBvbmVudF8xLkFydGljbGVFZGl0Q29tcG9uZW50IH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAndmlldy86aWQnLCBjb21wb25lbnQ6IGFydGljbGV2aWV3cmVkaXJlY3RfY29tcG9uZW50XzEuQXJ0aWNsZVZpZXdSZWRpcmVjdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnYXJjaGl2ZScsIGNvbXBvbmVudDogYXJjaGl2ZWNvbnRhaW5lcl9jb21wb25lbnRfMS5BcmNoaXZlQ29udGFpbmVyQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICdhcmNoaXZlcycsIGNvbXBvbmVudDogYXJjaGl2ZXJlZGlyZWN0X2NvbXBvbmVudF8xLkFyY2hpdmVSZWRpcmVjdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnY3JlYXRlJywgY29tcG9uZW50OiBhcnRpY2xlcmVkaXJlY3RfY29tcG9uZW50XzEuQXJ0aWNsZVJlZGlyZWN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICdlZGl0LzppZCcsIGNvbXBvbmVudDogYXJ0aWNsZWVkaXRyZWRpcmVjdF9jb21wb25lbnRfMS5BcnRpY2xlRWRpdFJlZGlyZWN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICdhZG1pbicsIGNvbXBvbmVudDogYWRtaW5fY29tcG9uZW50XzEuQWRtaW5Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJ2ZlZWRiYWNrJywgY29tcG9uZW50OiBmZWVkYmFja19jb21wb25lbnRfMS5GZWVkYmFja0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnZmVlZGJhY2tyZWRpcmVjdCcsIGNvbXBvbmVudDogZmVlZGJhY2tyZWRpcmVjdF9jb21wb25lbnRfMS5GZWVkYmFja1JlZGlyZWN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICdwcm9maWxlJywgY29tcG9uZW50OiBwcm9maWxlX2NvbXBvbmVudF8xLlByb2ZpbGVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJ3ByaXZhY3knLCBjb21wb25lbnQ6IHByaXZhY3lfY29tcG9uZW50XzEuUHJpdmFjeUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgcHJpbWVuZ18xLkNhbGVuZGFyTW9kdWxlLFxyXG4gICAgICAgICAgICBuZzJfYm9vdHN0cmFwXzEuQ2Fyb3VzZWxNb2R1bGUsXHJcbiAgICAgICAgICAgIGFuZ3VsYXJfY29uZmlybWF0aW9uX3BvcG92ZXJfMS5Db25maXJtYXRpb25Qb3BvdmVyTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgICAgICAgZm9jdXNCdXR0b246ICdjb25maXJtJ1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmcyX2Jvb3RzdHJhcF8xLkRhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICAgICAgICAgIHByaW1lbmdfMS5Ecm9wZG93bk1vZHVsZSxcclxuICAgICAgICAgICAgcHJpbWVuZ18xLkVkaXRvck1vZHVsZSxcclxuICAgICAgICAgICAgcHJpbWVuZ18xLkZpbGVVcGxvYWRNb2R1bGUsXHJcbiAgICAgICAgICAgIGZvcm1zXzEuRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgICAgIHByaW1lbmdfMS5Hcm93bE1vZHVsZSxcclxuICAgICAgICAgICAgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsTW9kdWxlLFxyXG4gICAgICAgICAgICBwcmltZW5nXzEuU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgICAgICBuZzJfYm9vdHN0cmFwXzEuVGFic01vZHVsZSxcclxuICAgICAgICAgICAgcHJpbWVuZ18xLlRvb2x0aXBNb2R1bGUsXHJcbiAgICAgICAgICAgIGNvcmVfMi5WZ0NvcmVNb2R1bGUsXHJcbiAgICAgICAgICAgIGNvbnRyb2xzXzEuVmdDb250cm9sc01vZHVsZSxcclxuICAgICAgICAgICAgb3ZlcmxheV9wbGF5XzEuVmdPdmVybGF5UGxheU1vZHVsZSxcclxuICAgICAgICAgICAgYnVmZmVyaW5nXzEuVmdCdWZmZXJpbmdNb2R1bGVcclxuICAgICAgICBdLFxyXG4gICAgICAgIHByb3ZpZGVyczogW2FydGljbGVfc2VydmljZV8xLkFydGljbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICBjb21tZW50X3NlcnZpY2VfMS5Db21tZW50U2VydmljZSxcclxuICAgICAgICAgICAgbmcyX2ZhY2Vib29rX3Nka18xLkZhY2Vib29rU2VydmljZSxcclxuICAgICAgICAgICAgaW1hZ2Vfc2VydmljZV8xLkltYWdlU2VydmljZSxcclxuICAgICAgICAgICAgc2V0dGluZ19zZXJ2aWNlXzEuU2V0dGluZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgIHVzZXJfc2VydmljZV8xLlVzZXJTZXJ2aWNlXHJcbiAgICAgICAgXVxyXG4gICAgfSlcclxuXSwgQXBwTW9kdWxlKTtcclxuZXhwb3J0cy5BcHBNb2R1bGUgPSBBcHBNb2R1bGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5tb2R1bGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lbmcvcHJpbWVuZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByaW1lbmcvcHJpbWVuZ1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXItY29uZmlybWF0aW9uLXBvcG92ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZpZGVvZ3VsYXIyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2aWRlb2d1bGFyMi9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZpZGVvZ3VsYXIyL2NvbnRyb2xzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmlkZW9ndWxhcjIvY29udHJvbHNcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmlkZW9ndWxhcjIvb3ZlcmxheS1wbGF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmlkZW9ndWxhcjIvb3ZlcmxheS1wbGF5XCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZpZGVvZ3VsYXIyL2J1ZmZlcmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZpZGVvZ3VsYXIyL2J1ZmZlcmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHVzZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIG5nMl9ib290c3RyYXBfMSA9IHJlcXVpcmUoXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIik7XHJcbnZhciBBZG1pbkNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBZG1pbkNvbXBvbmVudCh1c2VyU2VydmljZSwgcm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgQWRtaW5Db21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0aGlzLnVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW47XHJcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy51c2VyU2VydmljZS51c2VyO1xyXG4gICAgICAgIHRoaXMuc3RhdGVTdWJzY3JpcHRpb24gPSB0aGlzLnVzZXJTZXJ2aWNlLnN0YXRlQ2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgX3RoaXMuaXNMb2dnZWRJbiA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbiA9IHRoaXMudXNlclNlcnZpY2UudXNlck9iamVjdENoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnVzZXIgPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvbXBvbmVudC5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5Nb2RhbC5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEFkbWluQ29tcG9uZW50LnByb3RvdHlwZS5kaXNtaXNzTG9naW5Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBZG1pbkNvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuVmlld0NoaWxkKCdsb2dpbk1vZGFsJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsRGlyZWN0aXZlKVxyXG5dLCBBZG1pbkNvbXBvbmVudC5wcm90b3R5cGUsIFwibG9naW5Nb2RhbFwiLCB2b2lkIDApO1xyXG5BZG1pbkNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhZG1pbicsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYWRtaW4uY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3VzZXJfc2VydmljZV8xLlVzZXJTZXJ2aWNlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG5dLCBBZG1pbkNvbXBvbmVudCk7XHJcbmV4cG9ydHMuQWRtaW5Db21wb25lbnQgPSBBZG1pbkNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRtaW4uY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBodHRwXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcclxudmFyIHJ4anNfMSA9IHJlcXVpcmUoXCJyeGpzXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgZXh0ZXJuYWxEYXRhX21vZGVsXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL2V4dGVybmFsRGF0YS5tb2RlbFwiKTtcclxudmFyIHNldHRpbmdfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL3NlcnZpY2VzL3NldHRpbmcuc2VydmljZVwiKTtcclxudmFyIFVzZXJTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVzZXJTZXJ2aWNlKGh0dHAsIHJvdXRlciwgc2V0dGluZ1NlcnZpY2UpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZSA9IHNldHRpbmdTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMudXNlckluZm9DaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2UgPSBuZXcgcnhqc18xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLnVzZXJDaGFuZ2UgPSBuZXcgcnhqc18xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLnVzZXJPYmplY3RDaGFuZ2UgPSBuZXcgcnhqc18xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLmZiUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgIGV4cGlyZXM6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmJBID0gJyc7XHJcbiAgICAgICAgdGhpcy5mYlMgPSAnJztcclxuICAgICAgICB0aGlzLmZiUCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDAxKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBfdGhpcy5mYkEgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICBfdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKDEwMDIpLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5mYlMgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDAzKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZmJQID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGhlbGxvKClcclxuICAgICAgICAgICAgICAgICAgICAuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZWJvb2s6IF90aGlzLmZiQVxyXG4gICAgICAgICAgICAgICAgfSwgeyByZXNwb25zZV90eXBlOiAnY29kZScgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgVXNlclNlcnZpY2UucHJvdG90eXBlLmdldFVzZXIgPSBmdW5jdGlvbiAoZXh0ZXJuYWxJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiL2FwaS9Vc2VyL0dldFVzZXJWaWV3QnlFeHRlcm5hbElkP2V4dGVybmFsSWQ9XCIgKyBleHRlcm5hbElkKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdC5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFVzZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRBcHBsaWNhdGlvblVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL1VzZXIvR2V0QXBwbGljYXRpb25Vc2VycycpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0Lmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgVXNlclNlcnZpY2UucHJvdG90eXBlLmdldEFwcGxpY2F0aW9uVXNlcnNGb3JOb3RpZmljYXRpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL1VzZXIvR2V0QXBwbGljYXRpb25Vc2Vyc0Zvck5vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdC5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFVzZXJTZXJ2aWNlLnByb3RvdHlwZS5zYXZlUHJvZmlsZSA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9Vc2VyL1VwZGF0ZVVzZXI/ZnJvbUxvZ2luPWZhbHNlJywgSlNPTi5zdHJpbmdpZnkodXNlciksIHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgX3RoaXMudXNlciA9IHJlc3VsdDtcclxuICAgICAgICAgICAgX3RoaXMudXNlcklkID0gcmVzdWx0LmFwcGxpY2F0aW9uVXNlcklkO1xyXG4gICAgICAgICAgICBfdGhpcy5jaGFuZ2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVc2VyU2VydmljZS5wcm90b3R5cGUubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaGVsbG8oJ2ZhY2Vib29rJykubG9nb3V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgICAgICAgICBfdGhpcy5yZXN1bHQgPSBuZXcgZXh0ZXJuYWxEYXRhX21vZGVsXzEuRXh0ZXJuYWxEYXRhO1xyXG4gICAgICAgICAgICBfdGhpcy51c2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBfdGhpcy5jaGFuZ2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBVc2VyU2VydmljZS5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBoZWxsbygnZmFjZWJvb2snKVxyXG4gICAgICAgICAgICAubG9naW4oeyBzY29wZTogJ2VtYWlsLHB1YmxpY19wcm9maWxlJyB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAuYXBpKCcvbWUnLCAnZ2V0JylcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlc3VsdCA9IHJlcztcclxuICAgICAgICAgICAgICAgIF90aGlzLnNhdmVVc2VyRGF0YUZyb21FeHRlcm5hbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBVc2VyU2VydmljZS5wcm90b3R5cGUuY2hlY2tMb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZmJSZXNwb25zZSA9IGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgIC5nZXRBdXRoUmVzcG9uc2UoKTtcclxuICAgICAgICBpZiAodGhpcy5mYlJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUxID0gbmV3IERhdGUodGhpcy5mYlJlc3BvbnNlLmV4cGlyZXMgKiAxMDAwKTtcclxuICAgICAgICAgICAgdmFyIGRhdGUyID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRlMSA+IGRhdGUyKSB7XHJcbiAgICAgICAgICAgICAgICBoZWxsbygnZmFjZWJvb2snKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcGkoJy9tZScsICdnZXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXN1bHQgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2F2ZVVzZXJEYXRhRnJvbUV4dGVybmFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZS5uZXh0KHRoaXMuaXNMb2dnZWRJbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2UubmV4dCh0aGlzLmlzTG9nZ2VkSW4pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBVc2VyU2VydmljZS5wcm90b3R5cGUuc2F2ZVVzZXJEYXRhRnJvbUV4dGVybmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICB0aGlzLmdldFVzZXIodGhpcy5yZXN1bHQuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5teVVzZXIgPSByZXM7XHJcbiAgICAgICAgICAgIF90aGlzLm15VXNlci5lbWFpbEFkZHJlc3MgPSBfdGhpcy5yZXN1bHQuZW1haWw7XHJcbiAgICAgICAgICAgIF90aGlzLm15VXNlci5maXJzdE5hbWUgPSBfdGhpcy5yZXN1bHQuZmlyc3RfbmFtZTtcclxuICAgICAgICAgICAgX3RoaXMubXlVc2VyLmxhc3ROYW1lID0gX3RoaXMucmVzdWx0Lmxhc3RfbmFtZTtcclxuICAgICAgICAgICAgX3RoaXMubXlVc2VyLmV4dGVybmFsSWQgPSBfdGhpcy5yZXN1bHQuaWQ7XHJcbiAgICAgICAgICAgIF90aGlzLmh0dHAucG9zdCgnL2FwaS9Vc2VyL1VwZGF0ZVVzZXI/ZnJvbUxvZ2luPXRydWUnLCBKU09OLnN0cmluZ2lmeShfdGhpcy5teVVzZXIpLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVzZXIgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51c2VySWQgPSByZXN1bHQuYXBwbGljYXRpb25Vc2VySWQ7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXNlclNlcnZpY2UucHJvdG90eXBlLmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSAhdGhpcy5pc0xvZ2dlZEluO1xyXG4gICAgICAgIHRoaXMudXNlck9iamVjdENoYW5nZS5uZXh0KHRoaXMudXNlcik7XHJcbiAgICAgICAgdGhpcy51c2VyQ2hhbmdlLm5leHQodGhpcy51c2VySWQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2UubmV4dCh0aGlzLmlzTG9nZ2VkSW4pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBVc2VyU2VydmljZTtcclxufSgpKTtcclxuVXNlclNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbmplY3RhYmxlKCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2h0dHBfMS5IdHRwLCByb3V0ZXJfMS5Sb3V0ZXIsIHNldHRpbmdfc2VydmljZV8xLlNldHRpbmdTZXJ2aWNlXSlcclxuXSwgVXNlclNlcnZpY2UpO1xyXG5leHBvcnRzLlVzZXJTZXJ2aWNlID0gVXNlclNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZXIuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvdXNlci5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqc1wiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgRXh0ZXJuYWxEYXRhID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV4dGVybmFsRGF0YSgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBFeHRlcm5hbERhdGE7XHJcbn0oKSk7XHJcbkV4dGVybmFsRGF0YSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkluamVjdGFibGUoKVxyXG5dLCBFeHRlcm5hbERhdGEpO1xyXG5leHBvcnRzLkV4dGVybmFsRGF0YSA9IEV4dGVybmFsRGF0YTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXh0ZXJuYWxEYXRhLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvZXh0ZXJuYWxEYXRhLm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xyXG5yZXF1aXJlKFwicnhqc1wiKTtcclxudmFyIFNldHRpbmdTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNldHRpbmdTZXJ2aWNlKGh0dHApIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgfVxyXG4gICAgU2V0dGluZ1NlcnZpY2UucHJvdG90eXBlLmdldFNldHRpbmdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL1NldHRpbmcvR2V0U2V0dGluZ3MnKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdC5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFNldHRpbmdTZXJ2aWNlLnByb3RvdHlwZS5nZXRTZXR0aW5nID0gZnVuY3Rpb24gKHNldHRpbmdJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiL2FwaS9TZXR0aW5nL0dldFNldHRpbmc/c2V0dGluZ0lkPVwiICsgc2V0dGluZ0lkKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdC5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFNldHRpbmdTZXJ2aWNlLnByb3RvdHlwZS5zYXZlU2V0dGluZ3MgPSBmdW5jdGlvbiAoc2V0dGluZykge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL1NldHRpbmcvVXBkYXRlU2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeShzZXR0aW5nKSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBTZXR0aW5nU2VydmljZS5wcm90b3R5cGUuc2F2ZVNldHRpbmcgPSBmdW5jdGlvbiAoc2V0dGluZykge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL1NldHRpbmcvVXBkYXRlU2V0dGluZycsIEpTT04uc3RyaW5naWZ5KHNldHRpbmcpLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZXR0aW5nU2VydmljZTtcclxufSgpKTtcclxuU2V0dGluZ1NlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbmplY3RhYmxlKCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2h0dHBfMS5IdHRwXSlcclxuXSwgU2V0dGluZ1NlcnZpY2UpO1xyXG5leHBvcnRzLlNldHRpbmdTZXJ2aWNlID0gU2V0dGluZ1NlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNldHRpbmcuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMj5BZG1pbjwvaDI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiAqbmdJZj1cXFwiIWlzTG9nZ2VkSW4gfHwgKHVzZXIgIT09IHVuZGVmaW5lZCAmJiAhdXNlci5pc0FkbWluKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBZb3UgbXVzdCBiZSBsb2dnZWQgaW4gYW5kIGJlIGFuIGFkbWluaXN0cmF0b3IgdG8gYWNjZXNzIHRoaXMgcGFnZS5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiICpuZ0lmPVxcXCJpc0xvZ2dlZEluICYmIHVzZXIuaXNBZG1pblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGFic2V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWIgaGVhZGluZz1cXFwiQXJ0aWNsZXNcXFwiPjxhcnRpY2xlLWFkbWluLWxpc3QgW2FjdGl2ZU9ubHldPVxcXCJ0cnVlXFxcIj48L2FydGljbGUtYWRtaW4tbGlzdD48L3RhYj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFiIGhlYWRpbmc9XFxcIkFyY2hpdmVkIEFydGljbGVzXFxcIj48YXJ0aWNsZS1hZG1pbi1saXN0IFthY3RpdmVPbmx5XT1cXFwiZmFsc2VcXFwiPjwvYXJ0aWNsZS1hZG1pbi1saXN0PjwvdGFiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWIgaGVhZGluZz1cXFwiVXNlcnNcXFwiPjx1c2VyLWxpc3Q+PC91c2VyLWxpc3Q+PC90YWI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYiBoZWFkaW5nPVxcXCJDb21tZW50c1xcXCI+PGNvbW1lbnQtYWRtaW4tbGlzdD48L2NvbW1lbnQtYWRtaW4tbGlzdD48L3RhYj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFiICpuZ0lmPVxcXCJ1c2VyLmlzU3lzdGVtQWRtaW5cXFwiIGhlYWRpbmc9XFxcIkZlZWRiYWNrXFxcIj48ZmVlZGJhY2stbGlzdCBbYWRtaW5dPVxcXCJ0cnVlXFxcIj48L2ZlZWRiYWNrLWxpc3Q+PC90YWI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYiAqbmdJZj1cXFwidXNlci5pc1N5c3RlbUFkbWluXFxcIiBoZWFkaW5nPVxcXCJTZXR0aW5nc1xcXCI+PHNldHRpbmc+PC9zZXR0aW5nPjwvdGFiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJzZXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbiAgICBcXHJcXG48ZGl2IGJzTW9kYWwgI2xvZ2luTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIChvbkhpZGUpPVxcXCJkaXNtaXNzTG9naW5Nb2RhbCgpXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwibG9naW5Nb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FcnJvcjwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFlvdSBtdXN0IGJlIGxvZ2dlZCBpbiBhbmQgYmUgYW4gYWRtaW5pc3RyYXRvciB0byBhY2Nlc3MgdGhpcyBwYWdlLlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgQXBwQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcENvbXBvbmVudCh2aWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICAgICAgLy8gWW91IG5lZWQgdGhpcyBzbWFsbCBoYWNrIGluIG9yZGVyIHRvIGNhdGNoIGFwcGxpY2F0aW9uIHJvb3QgdmlldyBjb250YWluZXIgcmVmXHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmlld0NvbnRhaW5lclJlZjtcclxuICAgIH1cclxuICAgIHJldHVybiBBcHBDb21wb25lbnQ7XHJcbn0oKSk7XHJcbkFwcENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbY29yZV8xLlZpZXdDb250YWluZXJSZWZdKVxyXG5dLCBBcHBDb21wb25lbnQpO1xyXG5leHBvcnRzLkFwcENvbXBvbmVudCA9IEFwcENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMTInPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiZuYnNwOzwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiZuYnNwOzwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiZuYnNwOzwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTEyIGJvZHktY29udGVudCc+XFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8Zm9vdGVyLWl0ZW0+PC9mb290ZXItaXRlbT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgYXJ0aWNsZV9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvYXJ0aWNsZS5zZXJ2aWNlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgQXJjaGl2ZUNvbnRhaW5lckNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcmNoaXZlQ29udGFpbmVyQ29tcG9uZW50KGFydGljbGVTZXJ2aWNlLCBhY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2UgPSBhcnRpY2xlU2VydmljZTtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlID0gYWN0aXZhdGVkUm91dGU7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgQXJjaGl2ZUNvbnRhaW5lckNvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmFydGljbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbSkge1xyXG4gICAgICAgICAgICBfdGhpcy5kYXRlID0gcGFyYW1bJ2RhdGUnXTtcclxuICAgICAgICAgICAgX3RoaXMudGl0bGUgPSBwYXJhbVsndGl0bGUnXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5kYXRlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLmdldEFyY2hpdmVzQnlNb250aCh0aGlzLmRhdGUpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChhcnRpY2xlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYXJ0aWNsZXMgPSBhcnRpY2xlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBcmNoaXZlQ29udGFpbmVyQ29tcG9uZW50O1xyXG59KCkpO1xyXG5BcmNoaXZlQ29udGFpbmVyQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FyY2hpdmUtY29udGFpbmVyJyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcmNoaXZlY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgcHJvdmlkZXJzOiBbYXJ0aWNsZV9zZXJ2aWNlXzEuQXJ0aWNsZVNlcnZpY2VdXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbYXJ0aWNsZV9zZXJ2aWNlXzEuQXJ0aWNsZVNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlXSlcclxuXSwgQXJjaGl2ZUNvbnRhaW5lckNvbXBvbmVudCk7XHJcbmV4cG9ydHMuQXJjaGl2ZUNvbnRhaW5lckNvbXBvbmVudCA9IEFyY2hpdmVDb250YWluZXJDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyY2hpdmVjb250YWluZXIuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZWNvbnRhaW5lci5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgaHR0cF8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XHJcbnJlcXVpcmUoXCJyeGpzXCIpO1xyXG52YXIgQXJ0aWNsZVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXJ0aWNsZVNlcnZpY2UoaHR0cCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICB9XHJcbiAgICBBcnRpY2xlU2VydmljZS5wcm90b3R5cGUuZ2V0QXJ0aWNsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvQXJ0aWNsZS9HZXRBcnRpY2xlcycpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0Lmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQXJ0aWNsZVNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZUFydGljbGUgPSBmdW5jdGlvbiAoYXJ0aWNsZUlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvYXBpL0FydGljbGUvRGVsZXRlQXJ0aWNsZT9hcnRpY2xlSWQ9XCIgKyBhcnRpY2xlSWQpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbjsgfSk7XHJcbiAgICB9O1xyXG4gICAgQXJ0aWNsZVNlcnZpY2UucHJvdG90eXBlLmdldEFydGljbGVzTGlzdCA9IGZ1bmN0aW9uIChhY3RpdmVPbmx5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvYXBpL0FydGljbGUvR2V0QXJ0aWNsZXNMaXN0P2FjdGl2ZU9ubHk9XCIgKyBhY3RpdmVPbmx5KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdC5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIEFydGljbGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRBcnRpY2xlID0gZnVuY3Rpb24gKGFydGljbGVJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiL2FwaS9BcnRpY2xlL0dldEFydGljbGU/YXJ0aWNsZUlkPVwiICsgYXJ0aWNsZUlkKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdC5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIEFydGljbGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRBcmNoaXZlTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi9hcGkvQXJ0aWNsZS9HZXRBcmNoaXZlTGlzdFwiKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdC5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIEFydGljbGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRBcmNoaXZlc0J5TW9udGggPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi9hcGkvQXJ0aWNsZS9HZXRBcmNoaXZlc0J5TW9udGg/c3RhcnQ9XCIgKyBpZClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiByZXN1bHQuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBBcnRpY2xlU2VydmljZS5wcm90b3R5cGUuc2F2ZUFydGljbGUgPSBmdW5jdGlvbiAoYXJ0aWNsZSkge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL0FydGljbGUvVXBkYXRlQXJ0aWNsZScsIEpTT04uc3RyaW5naWZ5KGFydGljbGUpLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIEFydGljbGVTZXJ2aWNlLnByb3RvdHlwZS5zZW5kTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gKGFydGljbGUpIHtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9BcnRpY2xlL1NlbmROb3RpZmljYXRpb24nLCBKU09OLnN0cmluZ2lmeShhcnRpY2xlKSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXJ0aWNsZVNlcnZpY2U7XHJcbn0oKSk7XHJcbkFydGljbGVTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtodHRwXzEuSHR0cF0pXHJcbl0sIEFydGljbGVTZXJ2aWNlKTtcclxuZXhwb3J0cy5BcnRpY2xlU2VydmljZSA9IEFydGljbGVTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnRpY2xlLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2FydGljbGUuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbiAgICA8ZGl2IGlkPVxcXCJ3cmFwcGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgyPnt7dGl0bGV9fTwvaDI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJhcnRpY2xlcy5sZW5ndGggPCAxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxvYWRpbmctaW5kaWNhdG9yPjwvbG9hZGluZy1pbmRpY2F0b3I+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiYXJ0aWNsZXMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgYXJ0aWNsZSBvZiBhcnRpY2xlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZS1pdGVtIFthcnRpY2xlXT1cXFwiYXJ0aWNsZVxcXCI+PC9hcnRpY2xlLWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFyY2hpdmUtbGlzdD48L2FyY2hpdmUtbGlzdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZWNvbnRhaW5lci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBhcnRpY2xlX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9hcnRpY2xlLnNlcnZpY2VcIik7XHJcbnZhciBBcmNoaXZlTGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcmNoaXZlTGlzdENvbXBvbmVudChhcnRpY2xlU2VydmljZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZSA9IGFydGljbGVTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuYXJjaGl2ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2UuZ2V0QXJjaGl2ZUxpc3QoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChhcmNoaXZlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5hcmNoaXZlcyA9IGFyY2hpdmVzO1xyXG4gICAgICAgICAgICBfdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFyY2hpdmVMaXN0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5BcmNoaXZlTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcmNoaXZlLWxpc3QnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FyY2hpdmVsaXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgcHJvdmlkZXJzOiBbYXJ0aWNsZV9zZXJ2aWNlXzEuQXJ0aWNsZVNlcnZpY2VdXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbYXJ0aWNsZV9zZXJ2aWNlXzEuQXJ0aWNsZVNlcnZpY2VdKVxyXG5dLCBBcmNoaXZlTGlzdENvbXBvbmVudCk7XHJcbmV4cG9ydHMuQXJjaGl2ZUxpc3RDb21wb25lbnQgPSBBcmNoaXZlTGlzdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJjaGl2ZWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZWxpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPkFyY2hpdmVzPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiYXJjaGl2ZXMubGVuZ3RoIDwgMSAmJiAhbG9hZGVkXFxcIj5cXHJcXG4gICAgICAgICAgICA8bG9hZGluZy1pbmRpY2F0b3I+PC9sb2FkaW5nLWluZGljYXRvcj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwibG9hZGVkICYmIGFyY2hpdmVzLmxlbmd0aCA8IDFcXFwiPlxcclxcbiAgICAgICAgICAgIFRoZXJlIGFyZSBubyBhcmNoaXZlc1xcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJhcmNoaXZlcy5sZW5ndGggPiAwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDogMTBweFxcXCIgKm5nRm9yPVxcXCJsZXQgYXJjaGl2ZSBvZiBhcmNoaXZlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvYXJjaGl2ZXMnLCB7IGRhdGU6IGFyY2hpdmUubW9udGhTdGFydCwgdGl0bGU6IGFyY2hpdmUuYXJjaGl2ZU5hbWUgfSBdXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7YXJjaGl2ZS5hcmNoaXZlTmFtZX19XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgQXJjaGl2ZVJlZGlyZWN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFyY2hpdmVSZWRpcmVjdENvbXBvbmVudChyb3V0ZXIsIGFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlID0gYWN0aXZhdGVkUm91dGU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbSkge1xyXG4gICAgICAgICAgICBfdGhpcy5kYXRlID0gcGFyYW1bJ2RhdGUnXTtcclxuICAgICAgICAgICAgX3RoaXMudGl0bGUgPSBwYXJhbVsndGl0bGUnXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYXJjaGl2ZVwiLCB7IGRhdGU6IHRoaXMuZGF0ZSwgdGl0bGU6IHRoaXMudGl0bGUgfV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFyY2hpdmVSZWRpcmVjdENvbXBvbmVudDtcclxufSgpKTtcclxuQXJjaGl2ZVJlZGlyZWN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FyY2hpdmVyZWRpcmVjdCcsXHJcbiAgICAgICAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2PidcclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtyb3V0ZXJfMS5Sb3V0ZXIsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlXSlcclxuXSwgQXJjaGl2ZVJlZGlyZWN0Q29tcG9uZW50KTtcclxuZXhwb3J0cy5BcmNoaXZlUmVkaXJlY3RDb21wb25lbnQgPSBBcmNoaXZlUmVkaXJlY3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyY2hpdmVyZWRpcmVjdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJjaGl2ZS9hcmNoaXZlcmVkaXJlY3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGFydGljbGVfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL2FydGljbGUuc2VydmljZVwiKTtcclxudmFyIGltYWdlX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlXCIpO1xyXG52YXIgbmcyX2Jvb3RzdHJhcF8xID0gcmVxdWlyZShcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiKTtcclxudmFyIEFydGljbGVBZG1pbkxpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXJ0aWNsZUFkbWluTGlzdENvbXBvbmVudChhcnRpY2xlU2VydmljZSwgaW1hZ2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZSA9IGFydGljbGVTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlID0gaW1hZ2VTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmFjdGl2ZU9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gJ0RlbGV0ZSBBcnRpY2xlJztcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnQXJlIHlvdSA8Yj5zdXJlPC9iPiB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBhcnRpY2xlPyc7XHJcbiAgICAgICAgdGhpcy5jb25maXJtVGV4dCA9ICc8aSBjbGFzcz1cImZhIGZhLWxnIGZhLXRodW1icy1vLXVwXCI+PC9pPiZuYnNwO1llcyc7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxUZXh0ID0gJzxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtdGh1bWJzLW8tZG93blwiPjwvaT4mbmJzcDtObyc7XHJcbiAgICAgICAgdGhpcy5oaWRkZW5UaXRsZSA9ICdTaG93IEFydGljbGUnO1xyXG4gICAgICAgIHRoaXMuaGlkZGVuTWVzc2FnZSA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIG1ha2UgdGhpcyBhcnRpY2xlIHZpc2libGU/JztcclxuICAgICAgICB0aGlzLm5ld1RpdGxlID0gJ01hcmsgYXMgUmVhZCc7XHJcbiAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gbWFyayB0aGlzIGl0ZW0gYXMgcmVhZD8nO1xyXG4gICAgICAgIHRoaXMucmVhZFRpdGxlID0gJ01hcmsgYXMgVW5yZWFkJztcclxuICAgICAgICB0aGlzLnJlYWRNZXNzYWdlID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gbWFyayB0aGlzIGl0ZW0gYXMgdW5yZWFkPyc7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlVGl0bGUgPSAnSGlkZSBBcnRpY2xlJztcclxuICAgICAgICB0aGlzLnZpc2libGVNZXNzYWdlID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gaGlkZSB0aGlzIGFydGljbGU/JztcclxuICAgICAgICB0aGlzLmltYWdlc1RvRGVsZXRlID0gW107XHJcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIEFydGljbGVBZG1pbkxpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5nZXRBcnRpY2xlc0xpc3QodGhpcy5hY3RpdmVPbmx5KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChhcnRpY2xlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5hcnRpY2xlcyA9IGFydGljbGVzO1xyXG4gICAgICAgICAgICBfdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFydGljbGVBZG1pbkxpc3RDb21wb25lbnQucHJvdG90eXBlLmNvbmZpcm1DbGlja2VkID0gZnVuY3Rpb24gKGFydGljbGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRlbGV0ZUltYWdlcyhhcnRpY2xlLmFydGljbGVJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIF90aGlzLmltYWdlc1RvRGVsZXRlID0gcmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaW1hZ2VzVG9EZWxldGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW1hZ2VzVG9EZWxldGUuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4LmV4dGVybmFsSWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVsbG8oJ2ZhY2Vib29rJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcGkoXCIvXCIgKyB4LmV4dGVybmFsSWQsICdkZWxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoeC5leHRlcm5hbEFsYnVtSWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBoZWxsbygnZmFjZWJvb2snKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAuYXBpKGAvJHt4LmV4dGVybmFsQWxidW1JZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAnZGVsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5hcnRpY2xlU2VydmljZS5kZWxldGVBcnRpY2xlKGFydGljbGUuYXJ0aWNsZUlkKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gX3RoaXMuYXJ0aWNsZXMuaW5kZXhPZihhcnRpY2xlKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmFydGljbGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kZWxldGVNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFydGljbGVBZG1pbkxpc3RDb21wb25lbnQucHJvdG90eXBlLnNob3dBcnRpY2xlID0gZnVuY3Rpb24gKGFydGljbGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGFydGljbGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgYXJ0aWNsZS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2Uuc2F2ZUFydGljbGUoYXJ0aWNsZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGFydGljbGUuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICBfdGhpcy5hcnRpY2xlU2VydmljZS5zZW5kTm90aWZpY2F0aW9uKGFydGljbGUpLnN1YnNjcmliZShmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBcnRpY2xlQWRtaW5MaXN0Q29tcG9uZW50LnByb3RvdHlwZS5oaWRlQXJ0aWNsZSA9IGZ1bmN0aW9uIChhcnRpY2xlKSB7XHJcbiAgICAgICAgYXJ0aWNsZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5zYXZlQXJ0aWNsZShhcnRpY2xlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBcnRpY2xlQWRtaW5MaXN0Q29tcG9uZW50LnByb3RvdHlwZS5tYXJrUmVhZCA9IGZ1bmN0aW9uIChhcnRpY2xlKSB7XHJcbiAgICAgICAgYXJ0aWNsZS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2Uuc2F2ZUFydGljbGUoYXJ0aWNsZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQXJ0aWNsZUFkbWluTGlzdENvbXBvbmVudC5wcm90b3R5cGUubWFya1VuUmVhZCA9IGZ1bmN0aW9uIChhcnRpY2xlKSB7XHJcbiAgICAgICAgYXJ0aWNsZS5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5zYXZlQXJ0aWNsZShhcnRpY2xlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXJ0aWNsZUFkbWluTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuVmlld0NoaWxkKCdkZWxldGVNb2RhbCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuXSwgQXJ0aWNsZUFkbWluTGlzdENvbXBvbmVudC5wcm90b3R5cGUsIFwiZGVsZXRlTW9kYWxcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIEFydGljbGVBZG1pbkxpc3RDb21wb25lbnQucHJvdG90eXBlLCBcImFjdGl2ZU9ubHlcIiwgdm9pZCAwKTtcclxuQXJ0aWNsZUFkbWluTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcnRpY2xlLWFkbWluLWxpc3QnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FydGljbGVhZG1pbmxpc3QuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2FydGljbGVfc2VydmljZV8xLkFydGljbGVTZXJ2aWNlLCBpbWFnZV9zZXJ2aWNlXzEuSW1hZ2VTZXJ2aWNlXSlcclxuXSwgQXJ0aWNsZUFkbWluTGlzdENvbXBvbmVudCk7XHJcbmV4cG9ydHMuQXJ0aWNsZUFkbWluTGlzdENvbXBvbmVudCA9IEFydGljbGVBZG1pbkxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFydGljbGVhZG1pbmxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWFkbWlubGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgaHR0cF8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XHJcbnZhciByeGpzXzEgPSByZXF1aXJlKFwicnhqc1wiKTtcclxudmFyIGltYWdlX21vZGVsXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL2ltYWdlLm1vZGVsXCIpO1xyXG52YXIgcGxhdGZvcm1fYnJvd3Nlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XHJcbnZhciBzZXR0aW5nX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2VcIik7XHJcbnZhciBJbWFnZVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW1hZ2VTZXJ2aWNlKGh0dHAsIHNhbml0aXplciwgc2V0dGluZ1NlcnZpY2UpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5zYW5pdGl6ZXIgPSBzYW5pdGl6ZXI7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZSA9IHNldHRpbmdTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IGltYWdlX21vZGVsXzEuSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltYWdlVXJsID0gJyc7XHJcbiAgICAgICAgdGhpcy5pbWFnZXNUb0RlbGV0ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VDaGFuZ2UgPSBuZXcgcnhqc18xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLmZiQSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZmJTID0gJyc7XHJcbiAgICAgICAgdGhpcy5mYlAgPSAnJztcclxuICAgICAgICB0aGlzLmZiVCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDAxKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBfdGhpcy5mYkEgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICBfdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKDEwMDIpLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5mYlMgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDAzKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZmJQID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGhlbGxvKClcclxuICAgICAgICAgICAgICAgICAgICAuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZWJvb2s6IF90aGlzLmZiQVxyXG4gICAgICAgICAgICAgICAgfSwgeyBzY29wZTogJ3B1Ymxpc2hfcGFnZXMsbWFuYWdlX3BhZ2VzLHVzZXJfcGhvdG9zJyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBJbWFnZVNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZUltYWdlcyA9IGZ1bmN0aW9uIChhcnRpY2xlSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi9hcGkvSW1hZ2UvR2V0SW1hZ2VzQnlBcnRpY2xlSWQ/YXJ0aWNsZUlkPVwiICsgYXJ0aWNsZUlkKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIEltYWdlU2VydmljZS5wcm90b3R5cGUuZ2V0SW1hZ2VzQnlBcnRpY2xlSWQgPSBmdW5jdGlvbiAoYXJ0aWNsZUlkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwNCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgX3RoaXMuZmJUID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmh0dHAuZ2V0KFwiL2FwaS9JbWFnZS9HZXRJbWFnZXNCeUFydGljbGVJZD9hcnRpY2xlSWQ9XCIgKyBhcnRpY2xlSWQpXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pbWFnZXMgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3REYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3REYXRlID0gbmV3IERhdGUoeC51cmxSZXRyaWV2YWxEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzdERhdGUuc2V0RGF0ZShwYXN0RGF0ZS5nZXREYXRlKCkgKyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3REYXRlIDwgbm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4LmV4dGVybmFsSWQgIT09IG51bGwgJiYgeC5pc1ZpZGVvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxsbygnZmFjZWJvb2snKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcGkoXCIvXCIgKyB4LmV4dGVybmFsSWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6ICdzb3VyY2UsdGh1bWJuYWlsc3t1cml9JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogX3RoaXMuZmJUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmltYWdlVXJsID0gcmVzLnNvdXJjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnRodW1ibmFpbFVybCA9IHJlcy50aHVtYm5haWxzLmRhdGFbMF0udXJpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudXJsUmV0cmlldmFsRGF0ZSA9IG5vdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVJbWFnZSh4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IF90aGlzLmltYWdlcy5pbmRleE9mKHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbWFnZXMuc3BsaWNlKGluZGV4LCAxLCB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4LmV4dGVybmFsSWQgIT09IG51bGwgJiYgIXguaXNWaWRlbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcGkoXCIvXCIgKyB4LmV4dGVybmFsSWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiAnc291cmNlLGFsYnVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IF90aGlzLmZiVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5pbWFnZVVybCA9IHJlcy5zb3VyY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguZXh0ZXJuYWxBbGJ1bUlkID0gcmVzLmFsYnVtLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnVybFJldHJpZXZhbERhdGUgPSBub3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZUltYWdlKHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBfdGhpcy5pbWFnZXMuaW5kZXhPZih4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmltYWdlcy5zcGxpY2UoaW5kZXgsIDEsIHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEltYWdlU2VydmljZS5wcm90b3R5cGUuc2FuaXRpemUgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdmFyIHNhbml0aXplZFVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodXJsKTtcclxuICAgICAgICByZXR1cm4gc2FuaXRpemVkVXJsO1xyXG4gICAgfTtcclxuICAgIEltYWdlU2VydmljZS5wcm90b3R5cGUub25VcGxvYWQgPSBmdW5jdGlvbiAoZXZlbnQsIGFydGljbGVJZCkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBldmVudC5maWxlczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGZpbGUgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXMucHVzaChmaWxlKTtcclxuICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBpbWFnZV9tb2RlbF8xLkltYWdlKCk7XHJcbiAgICAgICAgICAgIGltZy5hcnRpY2xlSWQgPSBhcnRpY2xlSWQ7XHJcbiAgICAgICAgICAgIGltZy5jYXB0aW9uVGV4dCA9IGZpbGUuY2FwdGlvblRleHQ7XHJcbiAgICAgICAgICAgIGltZy5pbWFnZVVybCA9IGZpbGUub2JqZWN0VVJMLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHk7XHJcbiAgICAgICAgICAgIGltZy50aHVtYm5haWxVcmwgPSBmaWxlLm9iamVjdFVSTC5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5O1xyXG4gICAgICAgICAgICBpZiAoZmlsZS50eXBlLmluY2x1ZGVzKCd2aWRlbycpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWcuaXNWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbWcuaXNWaWRlbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0SW1hZ2UoaW1nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ3N1Y2Nlc3MnLCBzdW1tYXJ5OiAnRmlsZSBVcGxvYWRlZCcsIGRldGFpbDogJycgfSk7XHJcbiAgICB9O1xyXG4gICAgSW1hZ2VTZXJ2aWNlLnByb3RvdHlwZS5vbkhlYWRlclVwbG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBldmVudC5maWxlczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGZpbGUgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gZmlsZTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IGZpbGUub2JqZWN0VVJMLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGVhZGVyTXNncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyTXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdzdWNjZXNzJywgc3VtbWFyeTogJ0ZpbGUgVXBsb2FkZWQnLCBkZXRhaWw6ICcnIH0pO1xyXG4gICAgfTtcclxuICAgIEltYWdlU2VydmljZS5wcm90b3R5cGUuZGVsZXRlSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2VJZCkge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoXCIvYXBpL0ltYWdlL0RlbGV0ZUltYWdlP2ltYWdlSWQ9XCIgKyBpbWFnZUlkKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb247IH0pLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSW1hZ2VTZXJ2aWNlLnByb3RvdHlwZS5pbnNlcnRJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gdGhpcy5pbWFnZXM7XHJcbiAgICB9O1xyXG4gICAgSW1hZ2VTZXJ2aWNlLnByb3RvdHlwZS5zYXZlSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9JbWFnZS9TYXZlSW1hZ2UnLCBKU09OLnN0cmluZ2lmeShpbWFnZSksIHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgSW1hZ2VTZXJ2aWNlLnByb3RvdHlwZS51cGRhdGVJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZSkge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL0ltYWdlL1VwZGF0ZUltYWdlJywgSlNPTi5zdHJpbmdpZnkoaW1hZ2UpLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIEltYWdlU2VydmljZS5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VDaGFuZ2UubmV4dCh0aGlzLmltYWdlcyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEltYWdlU2VydmljZTtcclxufSgpKTtcclxuSW1hZ2VTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtodHRwXzEuSHR0cCwgcGxhdGZvcm1fYnJvd3Nlcl8xLkRvbVNhbml0aXplciwgc2V0dGluZ19zZXJ2aWNlXzEuU2V0dGluZ1NlcnZpY2VdKVxyXG5dLCBJbWFnZVNlcnZpY2UpO1xyXG5leHBvcnRzLkltYWdlU2VydmljZSA9IEltYWdlU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2Uuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvaW1hZ2Uuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIEltYWdlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEltYWdlKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEltYWdlO1xyXG59KCkpO1xyXG5JbWFnZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkluamVjdGFibGUoKVxyXG5dLCBJbWFnZSk7XHJcbmV4cG9ydHMuSW1hZ2UgPSBJbWFnZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL21vZGVscy9pbWFnZS5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiYXJ0aWNsZXMubGVuZ3RoIDwgMSAmJiAhbG9hZGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsb2FkaW5nLWluZGljYXRvcj48L2xvYWRpbmctaW5kaWNhdG9yPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiYXJ0aWNsZXMubGVuZ3RoIDwgMSAmJiBsb2FkZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVGhlcmUgYXJlIG5vIGFydGljbGVzIGhlcmVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgKm5nSWY9XFxcImFydGljbGVzLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWZpeGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+VW4tUmVhZDwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTQgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5UaXRsZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Qb3N0ZWQgQnk8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UG9zdGVkIERhdGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+VmlzaWJsZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5FZGl0PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RGVsZXRlPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBhcnRpY2xlIG9mIGFydGljbGVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlciBib3JkZXItcmlnaHRcXFwiIHBUb29sdGlwPVxcXCJ7e2FydGljbGUuaXNOZXcgfCB5ZXNObzogJ3JlYWRVbnJlYWQnfX1cXFwiIHRvb2x0aXBQb3NpdGlvbj1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCIhYXJ0aWNsZS5pc05ld1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdsQ29uZmlybWF0aW9uUG9wb3ZlclxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwicmVhZFRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJyZWFkTWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwibWFya1VuUmVhZChhcnRpY2xlKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1jaXJjbGUtb1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcImFydGljbGUuaXNOZXdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XFxcIm5ld1RpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJuZXdNZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsVGV4dF09XFxcImNhbmNlbFRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJtYXJrUmVhZChhcnRpY2xlKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1jaGVjay1jaXJjbGUtb1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy00IGJvcmRlci1yaWdodFxcXCIgcFRvb2x0aXA9XFxcInt7YXJ0aWNsZS50aXRsZX19XFxcIiB0b29sdGlwUG9zaXRpb249XFxcInRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2FydGljbGUudGl0bGV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCIgcFRvb2x0aXA9XFxcInt7YXJ0aWNsZS5hdXRob3JOYW1lfX1cXFwiIHRvb2x0aXBQb3NpdGlvbj1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7YXJ0aWNsZS5hdXRob3JOYW1lfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiIHBUb29sdGlwPVxcXCJ7e2FydGljbGUucG9zdGVkRFQgfCBmb3JtYXREYXRlOiAnTU0vREQvWVlZWSd9fVxcXCIgdG9vbHRpcFBvc2l0aW9uPVxcXCJ0b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3thcnRpY2xlLnBvc3RlZERUIHwgZm9ybWF0RGF0ZTogJ01NL0REL1lZWVknfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlciBib3JkZXItcmlnaHRcXFwiIHBUb29sdGlwPVxcXCJ7e2FydGljbGUudmlzaWJsZSB8IHllc05vOiAndmlzaWJsZSd9fVxcXCIgdG9vbHRpcFBvc2l0aW9uPVxcXCJ0b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcImFydGljbGUudmlzaWJsZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdsQ29uZmlybWF0aW9uUG9wb3ZlclxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwidmlzaWJsZVRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJ2aXNpYmxlTWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwiaGlkZUFydGljbGUoYXJ0aWNsZSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVHlwZT1cXFwiZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVHlwZT1cXFwiZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtdGh1bWJzLW8tdXBcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCIhYXJ0aWNsZS52aXNpYmxlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJoaWRkZW5UaXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwiaGlkZGVuTWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwic2hvd0FydGljbGUoYXJ0aWNsZSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVHlwZT1cXFwiZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVHlwZT1cXFwiZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtdGh1bWJzLW8tZG93blxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2VkaXQvJyArIGFydGljbGUuYXJ0aWNsZUlkXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLXBlbmNpbC1zcXVhcmUtb1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XFxcInRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJtZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsVGV4dF09XFxcImNhbmNlbFRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJjb25maXJtQ2xpY2tlZChhcnRpY2xlKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1iYW5cXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGJzTW9kYWwgI2RlbGV0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlTW9kYWwuaGlkZSgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+QXJ0aWNsZSBEZWxldGVkPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgQXJ0aWNsZSBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseS5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWFkbWlubGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBhcnRpY2xlX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9hcnRpY2xlLnNlcnZpY2VcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBBcnRpY2xlQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFydGljbGVDb21wb25lbnQoYXJ0aWNsZVNlcnZpY2UsIGFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZSA9IGFydGljbGVTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUgPSBhY3RpdmF0ZWRSb3V0ZTtcclxuICAgICAgICB0aGlzLmlkID0gMDtcclxuICAgIH1cclxuICAgIEFydGljbGVDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pZCA9IHBhcmFtWydpZCddO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLmdldEFydGljbGUodGhpcy5pZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGFydGljbGUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmFydGljbGUgPSBhcnRpY2xlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFydGljbGVDb21wb25lbnQ7XHJcbn0oKSk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLklucHV0KCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBBcnRpY2xlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhcnRpY2xlXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLklucHV0KCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBBcnRpY2xlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xyXG5BcnRpY2xlQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FydGljbGUtaXRlbScsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXJ0aWNsZS5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbYXJ0aWNsZV9zZXJ2aWNlXzEuQXJ0aWNsZVNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlXSlcclxuXSwgQXJ0aWNsZUNvbXBvbmVudCk7XHJcbmV4cG9ydHMuQXJ0aWNsZUNvbXBvbmVudCA9IEFydGljbGVDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFydGljbGUuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48YSBbcm91dGVyTGlua109XFxcIlsnL3ZpZXcvJyArIGFydGljbGUuYXJ0aWNsZUlkXVxcXCI+XFxyXFxuICAgIDxoMT57eyBhcnRpY2xlLnRpdGxlIH19PC9oMT5cXHJcXG48L2E+XFxyXFxuPGlmcmFtZSBzcmM9XFxcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wbHVnaW5zL3NoYXJlX2J1dHRvbi5waHA/bGF5b3V0PWJ1dHRvbl9jb3VudCZzaXplPXNtYWxsJm1vYmlsZV9pZnJhbWU9dHJ1ZSZhcHBJZD0xMDAwOTQ4MTc2NjA0NjMwJndpZHRoPTc0JmhlaWdodD0yMCZocmVmPWh0dHAlM0ElMkYlMkZ3d3cudGhlaGFsZXNhbmdlbHMuY29tXFxcIiB3aWR0aD1cXFwiNzRcXFwiIGhlaWdodD1cXFwiMjBcXFwiIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtvdmVyZmxvdzpoaWRkZW5cXFwiIHNjcm9sbGluZz1cXFwibm9cXFwiIGZyYW1lYm9yZGVyPVxcXCIwXFxcIiBhbGxvd1RyYW5zcGFyZW5jeT1cXFwidHJ1ZVxcXCI+PC9pZnJhbWU+XFxyXFxuPGg2IGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPlxcclxcbiAgICAtIFBvc3RlZCBCeToge3sgYXJ0aWNsZS5hdXRob3JOYW1lIH19IG9uIHt7IGFydGljbGUucG9zdGVkRFQgfCBmb3JtYXREYXRlOiAnTU0vREQvWVlZWScgfX1cXHJcXG48L2g2PlxcclxcbjxkaXYgW2lubmVySFRNTF09XFxcImFydGljbGUuYXJ0aWNsZUNvbnRlbnRcXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuPG5nLWNhcm91c2VsIFtpZF09XFxcImFydGljbGUuYXJ0aWNsZUlkXFxcIj48L25nLWNhcm91c2VsPlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGNvbW1lbnQtbGlzdCBbaWRdPVxcXCJhcnRpY2xlLmFydGljbGVJZFxcXCIgPjwvY29tbWVudC1saXN0PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIGFydGljbGVfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL2FydGljbGUuc2VydmljZVwiKTtcclxudmFyIEFydGljbGVDb250YWluZXJDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXJ0aWNsZUNvbnRhaW5lckNvbXBvbmVudChhcnRpY2xlU2VydmljZSwgYWN0aXZhdGVkUm91dGUsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2UgPSBhcnRpY2xlU2VydmljZTtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlID0gYWN0aXZhdGVkUm91dGU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5pZCA9IDA7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlID0ge307XHJcbiAgICB9XHJcbiAgICBBcnRpY2xlQ29udGFpbmVyQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW0pIHtcclxuICAgICAgICAgICAgX3RoaXMuaWQgPSBwYXJhbVsnaWQnXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5nZXRBcnRpY2xlKHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChhcnRpY2xlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFydGljbGUudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuYXJ0aWNsZSA9IGFydGljbGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQXJ0aWNsZUNvbnRhaW5lckNvbXBvbmVudDtcclxufSgpKTtcclxuQXJ0aWNsZUNvbnRhaW5lckNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcnRpY2xlLWNvbnRhaW5lcicsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXJ0aWNsZWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbYXJ0aWNsZV9zZXJ2aWNlXzEuQXJ0aWNsZVNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG5dLCBBcnRpY2xlQ29udGFpbmVyQ29tcG9uZW50KTtcclxuZXhwb3J0cy5BcnRpY2xlQ29udGFpbmVyQ29tcG9uZW50ID0gQXJ0aWNsZUNvbnRhaW5lckNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJ0aWNsZWNvbnRhaW5lci5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlY29udGFpbmVyLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbiAgICA8ZGl2IGlkPVxcXCJ3cmFwcGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGUtaXRlbSBbYXJ0aWNsZV09XFxcImFydGljbGVcXFwiPjwvYXJ0aWNsZS1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJjaGl2ZS1saXN0PjwvYXJjaGl2ZS1saXN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICZuYnNwO1xcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlY29udGFpbmVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGFydGljbGVfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL2FydGljbGUuc2VydmljZVwiKTtcclxudmFyIHVzZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiKTtcclxudmFyIGltYWdlX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlXCIpO1xyXG52YXIgc2V0dGluZ19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlXCIpO1xyXG52YXIgcnhqc18xID0gcmVxdWlyZShcInJ4anNcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBuZzJfYm9vdHN0cmFwXzEgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xyXG52YXIgaW1hZ2VfbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9tb2RlbHMvaW1hZ2UubW9kZWxcIik7XHJcbnZhciBhcnRpY2xlZGV0YWlsX21vZGVsXzEgPSByZXF1aXJlKFwiLi4vLi4vbW9kZWxzL2FydGljbGVkZXRhaWwubW9kZWxcIik7XHJcbnZhciBuZzJfZmFjZWJvb2tfc2RrXzEgPSByZXF1aXJlKFwibmcyLWZhY2Vib29rLXNka1wiKTtcclxudmFyIEFydGljbGVFZGl0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFydGljbGVFZGl0Q29tcG9uZW50KGFydGljbGVTZXJ2aWNlLCByb3V0ZXIsIHVzZXJTZXJ2aWNlLCBmYiwgYWN0aXZhdGVkUm91dGUsIGltYWdlU2VydmljZSwgc2V0dGluZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlID0gYXJ0aWNsZVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuZmIgPSBmYjtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlID0gYWN0aXZhdGVkUm91dGU7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UgPSBpbWFnZVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZSA9IHNldHRpbmdTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuaWQgPSAwO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZSA9IG5ldyBhcnRpY2xlZGV0YWlsX21vZGVsXzEuQXJ0aWNsZURldGFpbCgpO1xyXG4gICAgICAgIC8vYWNjZXNzVG9rZW4gPSAnJztcclxuICAgICAgICB0aGlzLmFsYnVtSWQgPSAnJztcclxuICAgICAgICB0aGlzLmltYWdlQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuZmJBID0gJyc7XHJcbiAgICAgICAgdGhpcy5mYlMgPSAnJztcclxuICAgICAgICB0aGlzLmZiUCA9ICcnO1xyXG4gICAgICAgIHRoaXMuZmJUID0gJyc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSAnRWRpdCc7XHJcbiAgICAgICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5teUltYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VEZXRhaWxzID0gW107XHJcbiAgICAgICAgdGhpcy5pbWFnZXN0b0RlbGV0ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMubm90aWZ5VXNlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLm1heERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgQXJ0aWNsZUVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBBcnRpY2xlRWRpdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwMSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgX3RoaXMuZmJBID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIGZiUGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgYXBwSWQ6IF90aGlzLmZiQSxcclxuICAgICAgICAgICAgICAgIHhmYm1sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogJ3YyLjgnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIF90aGlzLmZiLmluaXQoZmJQYXJhbXMpO1xyXG4gICAgICAgICAgICBoZWxsbygpXHJcbiAgICAgICAgICAgICAgICAuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICBmYWNlYm9vazogX3RoaXMuZmJBXHJcbiAgICAgICAgICAgIH0sIHsgc2NvcGU6ICdwdWJsaXNoX3BhZ2VzLG1hbmFnZV9wYWdlcyx1c2VyX3Bob3RvcycgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwMikuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmZiUyA9IHJlc3VsdC5zZXR0aW5nVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKDEwMDMpLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmJQID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKDEwMDQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5mYlQgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRoaXMudXNlclNlcnZpY2UuaXNMb2dnZWRJbjtcclxuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLnVzZXJTZXJ2aWNlLnVzZXI7XHJcbiAgICAgICAgdGhpcy51c2VyU3Vic2NyaXB0aW9uID0gdGhpcy51c2VyU2VydmljZS51c2VyT2JqZWN0Q2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgX3RoaXMudXNlciA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW0pIHtcclxuICAgICAgICAgICAgX3RoaXMuaWQgPSBwYXJhbVsnaWQnXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5nZXRBcnRpY2xlKHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoYXJ0aWNsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFydGljbGUgPSBhcnRpY2xlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5nZXRJbWFnZXNCeUFydGljbGVJZCh0aGlzLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmltYWdlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSAnTmV3JztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlLmF1dGhvck5hbWUgPSB0aGlzLnVzZXIuZmlyc3ROYW1lICsgJyAnICsgdGhpcy51c2VyLmxhc3ROYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlLnBvc3RlZERUID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5hcHBsaWNhdGlvblVzZXJJZCA9IHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJJZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUudGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5hcnRpY2xlQ29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gdGhpcy5pbWFnZVNlcnZpY2UuaW1hZ2VzO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmltYWdlU2VydmljZS5pbWFnZUNoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmltYWdlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaW1hZ2VzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2UuZXh0ZXJuYWxBbGJ1bUlkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFsYnVtSWQgPSBpbWFnZS5leHRlcm5hbEFsYnVtSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBcnRpY2xlRWRpdENvbXBvbmVudC5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luTW9kYWwgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5Nb2RhbC5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEFydGljbGVFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5kaXNtaXNzTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2VkaXQvXCIgKyB0aGlzLmFydGljbGUuYXJ0aWNsZUlkXSk7XHJcbiAgICB9O1xyXG4gICAgQXJ0aWNsZUVkaXRDb21wb25lbnQucHJvdG90eXBlLmRpc21pc3NMb2dpbk1vZGFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgICB9O1xyXG4gICAgQXJ0aWNsZUVkaXRDb21wb25lbnQucHJvdG90eXBlLnRvZ2dsZVZpc2liaWxpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlLnZpc2libGUgPSAhdGhpcy5hcnRpY2xlLnZpc2libGU7XHJcbiAgICB9O1xyXG4gICAgQXJ0aWNsZUVkaXRDb21wb25lbnQucHJvdG90eXBlLnRvZ2dsZUFyY2hpdmVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZS5hcmNoaXZlZCA9ICF0aGlzLmFydGljbGUuYXJjaGl2ZWQ7XHJcbiAgICB9O1xyXG4gICAgQXJ0aWNsZUVkaXRDb21wb25lbnQucHJvdG90eXBlLnNlbmROb3RpZmljYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5mYi51aSh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2ZlZWQnLFxyXG4gICAgICAgICAgICBsaW5rOiBcImh0dHA6Ly93d3cudGhlYWxlc2FuZ2Vscy5jb20vdmlldy9cIiArIHRoaXMuYXJ0aWNsZS5hcnRpY2xlSWQsXHJcbiAgICAgICAgICAgIHF1b3RlOiBcIlRoZSBIYWxlcyBBbmdlbHMgaGF2ZSB1cGRhdGVkIHRoZSBhcnRpY2xlIGNhbGxlZDogXCIgKyB0aGlzLmFydGljbGUudGl0bGUsXHJcbiAgICAgICAgICAgIGZyb206IHRoaXMuZmJQXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5zZW5kTm90aWZpY2F0aW9uKHRoaXMuYXJ0aWNsZSkuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQXJ0aWNsZUVkaXRDb21wb25lbnQucHJvdG90eXBlLmRlbGV0ZUltYWdlID0gZnVuY3Rpb24gKGltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZXN0b0RlbGV0ZS5wdXNoKGltYWdlKTtcclxuICAgICAgICB2YXIgaW5kZXgyID0gdGhpcy5pbWFnZVNlcnZpY2UuaW1hZ2VzLmluZGV4T2YoaW1hZ2UpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmltYWdlcy5zcGxpY2UoaW5kZXgyLCAxKTtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLm15SW1hZ2VzLmluZGV4T2YoaW1hZ2UpO1xyXG4gICAgICAgIHRoaXMubXlJbWFnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB2YXIgaW5kZXgxID0gdGhpcy5pbWFnZVNlcnZpY2UuZmlsZXMuaW5kZXhPZihpbWFnZSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZmlsZXMuc3BsaWNlKGluZGV4MSwgMSk7XHJcbiAgICB9O1xyXG4gICAgQXJ0aWNsZUVkaXRDb21wb25lbnQucHJvdG90eXBlLnNhdmVQcm9maWxlID0gZnVuY3Rpb24gKGZvcm0pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nTW9kYWwuc2hvdygpO1xyXG4gICAgICAgIGlmIChmb3JtLmltYWdlc1RvRGVsZXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9ybS5pbWFnZXNUb0RlbGV0ZS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeC5pbWFnZUlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcGkoXCIvXCIgKyB4LmV4dGVybmFsSWQsICdkZWxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW1hZ2VTZXJ2aWNlLmRlbGV0ZUltYWdlKHguaW1hZ2VJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoZWxsbygnZmFjZWJvb2snKS5sb2dpbih7IHNjb3BlOiAncHVibGlzaF9wYWdlcyxtYW5hZ2VfcGFnZXMsdXNlcl9waG90b3MnIH0pO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZS50aXRsZSA9IGZvcm0udGl0bGU7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlLmFyY2hpdmVkID0gZm9ybS5hcmNoaXZlZDtcclxuICAgICAgICB0aGlzLmFydGljbGUuYXJ0aWNsZUNvbnRlbnQgPSBmb3JtLmFydGljbGVDb250ZW50O1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZS52aXNpYmxlID0gZm9ybS52aXNpYmxlO1xyXG4gICAgICAgIHRoaXMubXlJbWFnZXMgPSBmb3JtLmltYWdlcztcclxuICAgICAgICB0aGlzLmFsYnVtSWQgPSBmb3JtLmFsYnVtSWQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZURldGFpbHMgPSBmb3JtLmltYWdlRGV0YWlscztcclxuICAgICAgICB0aGlzLmltYWdlc3RvRGVsZXRlID0gZm9ybS5pbWFnZXN0b0RlbGV0ZTtcclxuICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLnNhdmVBcnRpY2xlKHRoaXMuYXJ0aWNsZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmFydGljbGUgPSByZXM7XHJcbiAgICAgICAgICAgIF90aGlzLmltYWdlRGV0YWlscy5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeC5pbWFnZUlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbWFnZVNlcnZpY2UudXBkYXRlSW1hZ2UoeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcmVzID0gcnhqc18xLk9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnMpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm0uaW1hZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtLmFsYnVtSWQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVsbG8oJ2ZhY2Vib29rJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwaShcIi9cIiArIF90aGlzLmZiUCArIFwiL2FsYnVtc1wiLCAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZm9ybS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IF90aGlzLmZiVFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWxidW1JZCA9IHJlc3VsdC5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzLm5leHQoX3RoaXMuYWxidW1JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9icy5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWxidW1JZCA9IGZvcm0uYWxidW1JZDtcclxuICAgICAgICAgICAgICAgICAgICBvYnMubmV4dChfdGhpcy5hbGJ1bUlkKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnMuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9icy5uZXh0KF90aGlzLmFsYnVtSWQpO1xyXG4gICAgICAgICAgICAgICAgb2JzLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5teUltYWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IHJ4anNfMS5PYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLm15SW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRJbWFnZSA9IF90aGlzLm15SW1hZ2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY3VycmVudEltYWdlLnR5cGUuaW5jbHVkZXMoJ3ZpZGVvJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwaShcIi9cIiArIF90aGlzLmZiUCArIFwiL3ZpZGVvc1wiLCAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBfdGhpcy5jdXJyZW50SW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IF90aGlzLmZiVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVsbG8oJ2ZhY2Vib29rJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwaShcIi9cIiArIHJlc3VsdC5pZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiAnc291cmNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBpbWFnZV9tb2RlbF8xLkltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5hcnRpY2xlSWQgPSBfdGhpcy5hcnRpY2xlLmFydGljbGVJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNhcHRpb25UZXh0ID0gX3RoaXMuY3VycmVudEltYWdlLmNhcHRpb25UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuZXh0ZXJuYWxBbGJ1bUlkID0gX3RoaXMuYWxidW1JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmltYWdlVXJsID0gcmVzLnNvdXJjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmV4dGVybmFsSWQgPSByZXMuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5pc1ZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW1hZ2VTZXJ2aWNlLnNhdmVJbWFnZShpbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IF90aGlzLm15SW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxsbygnZmFjZWJvb2snKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcGkoXCIvXCIgKyBfdGhpcy5hbGJ1bUlkICsgXCIvcGhvdG9zXCIsICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IF90aGlzLmN1cnJlbnRJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogX3RoaXMuZmJUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxsbygnZmFjZWJvb2snKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBpKFwiL1wiICsgcmVzdWx0LmlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6ICdzb3VyY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IGltYWdlX21vZGVsXzEuSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmFydGljbGVJZCA9IF90aGlzLmFydGljbGUuYXJ0aWNsZUlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuY2FwdGlvblRleHQgPSBfdGhpcy5jdXJyZW50SW1hZ2UuY2FwdGlvblRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5leHRlcm5hbEFsYnVtSWQgPSBfdGhpcy5hbGJ1bUlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuZXh0ZXJuYWxJZCA9IHJlcy5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmltYWdlVXJsID0gcmVzLnNvdXJjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmlzVmlkZW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW1hZ2VTZXJ2aWNlLnNhdmVJbWFnZShpbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IF90aGlzLm15SW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHIuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbWFnZVNlcnZpY2UuaW1hZ2VzID0gX3RoaXMuaW1hZ2VEZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmltYWdlU2VydmljZS5maWxlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmltYWdlc3RvRGVsZXRlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2F2aW5nTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFydGljbGVNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmFydGljbGUuaXNOZXcgJiYgX3RoaXMuYXJ0aWNsZS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmZiLnVpKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ2ZlZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogXCJodHRwOi8vd3d3LnRoZWhhbGVzYW5nZWxzLmNvbS92aWV3L1wiICsgX3RoaXMuYXJ0aWNsZS5hcnRpY2xlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogXCJUaGUgSGFsZXMgQW5nZWxzIGhhdmUgYWRkZWQgdGhlIGFydGljbGUgY2FsbGVkOiBcIiArIF90aGlzLmFydGljbGUudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBfdGhpcy5mYlBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFydGljbGVTZXJ2aWNlLnNlbmROb3RpZmljYXRpb24oX3RoaXMuYXJ0aWNsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pbWFnZVNlcnZpY2UuaW1hZ2VzID0gX3RoaXMuaW1hZ2VEZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW1hZ2VTZXJ2aWNlLmZpbGVzID0gW107XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pbWFnZXN0b0RlbGV0ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2F2aW5nTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYXJ0aWNsZU1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hcnRpY2xlLmlzTmV3ICYmIF90aGlzLmFydGljbGUudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZiLnVpKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnZmVlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDovL3d3dy50aGVoYWxlc2FuZ2Vscy5jb20vdmlldy9cIiArIF90aGlzLmFydGljbGUuYXJ0aWNsZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogXCJUaGUgSGFsZXMgQW5nZWxzIGhhdmUgYWRkZWQgdGhlIGFydGljbGUgY2FsbGVkOiBcIiArIF90aGlzLmFydGljbGUudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IF90aGlzLmZiUFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFydGljbGVTZXJ2aWNlLnNlbmROb3RpZmljYXRpb24oX3RoaXMuYXJ0aWNsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBcnRpY2xlRWRpdENvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuVmlld0NoaWxkKCdhcnRpY2xlTW9kYWwnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBuZzJfYm9vdHN0cmFwXzEuTW9kYWxEaXJlY3RpdmUpXHJcbl0sIEFydGljbGVFZGl0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhcnRpY2xlTW9kYWxcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuVmlld0NoaWxkKCdzYXZpbmdNb2RhbCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuXSwgQXJ0aWNsZUVkaXRDb21wb25lbnQucHJvdG90eXBlLCBcInNhdmluZ01vZGFsXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLlZpZXdDaGlsZCgnbG9naW5Nb2RhbCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuXSwgQXJ0aWNsZUVkaXRDb21wb25lbnQucHJvdG90eXBlLCBcImxvZ2luTW9kYWxcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIEFydGljbGVFZGl0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xyXG5BcnRpY2xlRWRpdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcnRpY2xlLWVkaXQnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2VkaXQuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2FydGljbGVfc2VydmljZV8xLkFydGljbGVTZXJ2aWNlLCByb3V0ZXJfMS5Sb3V0ZXIsIHVzZXJfc2VydmljZV8xLlVzZXJTZXJ2aWNlLCBuZzJfZmFjZWJvb2tfc2RrXzEuRmFjZWJvb2tTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgaW1hZ2Vfc2VydmljZV8xLkltYWdlU2VydmljZSwgc2V0dGluZ19zZXJ2aWNlXzEuU2V0dGluZ1NlcnZpY2VdKVxyXG5dLCBBcnRpY2xlRWRpdENvbXBvbmVudCk7XHJcbmV4cG9ydHMuQXJ0aWNsZUVkaXRDb21wb25lbnQgPSBBcnRpY2xlRWRpdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWRpdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9lZGl0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIEFydGljbGVEZXRhaWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXJ0aWNsZURldGFpbCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBBcnRpY2xlRGV0YWlsO1xyXG59KCkpO1xyXG5BcnRpY2xlRGV0YWlsID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5qZWN0YWJsZSgpXHJcbl0sIEFydGljbGVEZXRhaWwpO1xyXG5leHBvcnRzLkFydGljbGVEZXRhaWwgPSBBcnRpY2xlRGV0YWlsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnRpY2xlZGV0YWlsLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvYXJ0aWNsZWRldGFpbC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmcyLWZhY2Vib29rLXNka1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5nMi1mYWNlYm9vay1zZGtcIlxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIiAqbmdJZj1cXFwiIWlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICBZb3UgbXVzdCBiZSBsb2dnZWQgaW4gYW5kIGJlIGFuIGFkbWluaXN0cmF0b3IgdG8gYWNjZXNzIHRoaXMgcGFnZS5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIiAqbmdJZj1cXFwiaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7Y3VycmVudFN0YXRlfX0gQXJ0aWNsZTwvaDI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInRpdGxlTW9kYWwuc2hvdygpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXFxcIj48L2k+Jm5ic3A7RWRpdCBUaXRsZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJjb250ZW50TW9kYWwuc2hvdygpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXFxcIj48L2k+Jm5ic3A7RWRpdCBDb250ZW50PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcImltYWdlTW9kYWwuc2hvdygpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXFxcIj48L2k+Jm5ic3A7QWRkIEltYWdlcy9WaWRlb3M8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwiaW1hZ2VTZXJ2aWNlLmltYWdlcyAhPT0gbnVsbCAmJiBpbWFnZVNlcnZpY2UuaW1hZ2VzLmxlbmd0aCA8IDFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcImNhcHRpb25Nb2RhbC5zaG93KClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cXFwiPjwvaT4mbmJzcDtFZGl0IEltYWdlcy9WaWRlb3M8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiZGF0ZU1vZGFsLnNob3coKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBlbmNpbC1zcXVhcmUtb1xcXCI+PC9pPiZuYnNwO0NoYW5nZSBEYXRlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCIhYXJ0aWNsZS52aXNpYmxlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVWaXNpYmlsaXR5KClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cXFwiPjwvaT4mbmJzcDtNYWtlIFZpc2libGU8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcImFydGljbGUudmlzaWJsZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVmlzaWJpbGl0eSgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXFxcIj48L2k+Jm5ic3A7TWFrZSBIaWRkZW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcIiFhcnRpY2xlLmFyY2hpdmVkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVBcmNoaXZlZCgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXFxcIj48L2k+Jm5ic3A7QXJjaGl2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwiYXJ0aWNsZS5hcmNoaXZlZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlQXJjaGl2ZWQoKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBlbmNpbC1zcXVhcmUtb1xcXCI+PC9pPiZuYnNwO1VuLUFyY2hpdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW2Rpc2FibGVkXT1cXFwiIWZvcm0uZm9ybS52YWxpZFxcXCIgKGNsaWNrKT1cXFwiZm9ybS5uZ1N1Ym1pdC5lbWl0KClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNhdmVcXFwiPjwvc3Bhbj4gU2F2ZSBDaGFuZ2VzPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJhcnRpY2xlLnZpc2libGUgJiYgIWFydGljbGUuaXNOZXdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNlbmROb3RpZmljYXRpb24oKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWJ1bGxob3JuXFxcIj48L2k+Jm5ic3A7Tm90aWZ5IFVzZXJzIG9mIENoYW5nZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJzYXZlUHJvZmlsZShmb3JtLnZhbHVlKTsgZm9ybS5yZXNldCgpXFxcIiBlbmN0eXBlPVxcXCJtdWx0aXBhcnQvZm9ybS1kYXRhXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgWyhuZ01vZGVsKV09XFxcImFydGljbGUudGl0bGVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgbmFtZT1cXFwiYXJ0aWNsZUNvbnRlbnRcXFwiIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLmFydGljbGVDb250ZW50XFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcInZpc2libGVcXFwiIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLnZpc2libGVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgbmFtZT1cXFwiYXJjaGl2ZWRcXFwiIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLmFyY2hpdmVkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImltYWdlc1xcXCIgWyhuZ01vZGVsKV09XFxcImltYWdlU2VydmljZS5maWxlc1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBuYW1lPVxcXCJpbWFnZURldGFpbHNcXFwiIFsobmdNb2RlbCldPVxcXCJpbWFnZVNlcnZpY2UuaW1hZ2VzXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImFsYnVtSWRcXFwiIFsobmdNb2RlbCldPVxcXCJhbGJ1bUlkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImltYWdlc1RvRGVsZXRlXFxcIiBbKG5nTW9kZWwpXT1cXFwiaW1hZ2VzdG9EZWxldGVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgbmFtZT1cXFwiYXBwbGljYXRpb25Vc2VySWRcXFwiIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLmFwcGxpY2F0aW9uVXNlcklkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImlzTmV3XFxcIiBbKG5nTW9kZWwpXT1cXFwiYXJ0aWNsZS5pc05ld1xcXCIgLz5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJhcnRpY2xlLnRpdGxlID09PSB1bmRlZmluZWQgfHwgYXJ0aWNsZS50aXRsZSA9PT0gJydcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlRpdGxlIFJlcXVpcmVkPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt7IGFydGljbGUudGl0bGUgfX08L2gxPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBQb3N0ZWQgQnk6IHt7IGFydGljbGUuYXV0aG9yTmFtZSB9fSBvbiB7eyBhcnRpY2xlLnBvc3RlZERUIHwgZm9ybWF0RGF0ZTogJ01NL0REL1lZWVknOiAhaXNOZXcgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImFydGljbGUuYXJ0aWNsZUNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCBhcnRpY2xlLmFydGljbGVDb250ZW50ID09PSAnJ1xcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+Q29udGVudCBSZXF1aXJlZDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XFxcImFydGljbGUuYXJ0aWNsZUNvbnRlbnRcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiaW1hZ2VTZXJ2aWNlLmltYWdlcyAhPT0gbnVsbCAmJiBpbWFnZVNlcnZpY2UuaW1hZ2VzLmxlbmd0aCA+IDBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2Fyb3VzZWwgW2ludGVydmFsXT1cXFwiNTAwMFxcXCIgW25vV3JhcF09XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbGlkZSAqbmdGb3I9XFxcImxldCBpbWFnZSBvZiBpbWFnZVNlcnZpY2UuaW1hZ2VzXFxcIiBbYWN0aXZlXT1cXFwiaW1hZ2UuaXNBY3RpdmVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiFpbWFnZS5pc1ZpZGVvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwiaW1hZ2VTZXJ2aWNlLnNhbml0aXplKGltYWdlLmltYWdlVXJsKVxcXCIgY2xhc3M9XFxcImZsdWlkIGNlbnRlci1ibG9ja1xcXCIgaGVpZ2h0PVxcXCI0MDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImltYWdlLmlzVmlkZW9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8tcGxheWVyIFtpbWFnZV09XFxcImltYWdlXFxcIj48L3ZpZGVvLXBsYXllcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1jYXB0aW9uIGFsZXJ0XFxcIiBzdHlsZT1cXFwiYm90dG9tOiAtNjBweFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7aW1hZ2UuY2FwdGlvblRleHR9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiZuYnNwOzwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xpZGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY2Fyb3VzZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj4mbmJzcDs8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNsb2dpbk1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiAob25IaWRlKT1cXFwiZGlzbWlzc0xvZ2luTW9kYWwoKVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImxvZ2luTW9kYWwuaGlkZSgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RXJyb3I8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBZb3UgbXVzdCBiZSBsb2dnZWQgaW4gYW5kIGJlIGFuIGFkbWluaXN0cmF0b3IgdG8gYWNjZXNzIHRoaXMgcGFnZS5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGJzTW9kYWwgI2FydGljbGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgKG9uSGlkZSk9XFxcImRpc21pc3NNb2RhbCgpXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiYXJ0aWNsZU1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNoYW5nZXMgU2F2ZWQgU3VjY2Vzc2Z1bGx5PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgQ2hhbmdlcyB0byBhcnRpY2xlIGhhdmUgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkuIFZpZGVvIHVwbG9hZHMgbWF5IHRha2Ugc2V2ZXJhbCBtaW51dGVzIHRvIHByb2Nlc3Mgb24gZmFjZWJvb2ssIGFuZCBiZWNvbWUgYWN0aXZlIG9uIHRoZSBhcnRpY2xlLlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjc2F2aW5nTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+U2F2aW5nIENoYW5nZXM8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBDaGFuZ2VzIGFyZSBiZWluZyBzYXZlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBzYXZlIHByb2Nlc3MgdG8gY29tcGxldGUuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICN0aXRsZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwidGl0bGVNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FZGl0IFRpdGxlPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLnRpdGxlXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjZGF0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiZGF0ZU1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNoYW5nZSBQb3N0ZWQgRGF0ZTwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCIgc3R5bGU9XFxcIm1hcmdpbjogMHB4IC02cHg7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgWyhuZ01vZGVsKV09XFxcImFydGljbGUucG9zdGVkRFRcXFwiIFttYXhEYXRlXT1cXFwibWF4RGF0ZVxcXCIgW3Nob3dXZWVrc109XFxcImZhbHNlXFxcIj48L2RhdGVwaWNrZXI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNjb250ZW50TW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJjb250ZW50TW9kYWwuaGlkZSgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBDb250ZW50PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHAtZWRpdG9yIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLmFydGljbGVDb250ZW50XFxcIiBbc3R5bGVdPVxcXCJ7J2hlaWdodCc6JzMyMHB4J31cXFwiPjwvcC1lZGl0b3I+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNpbWFnZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaW1hZ2VNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5BZGQgSW1hZ2VzPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHAtZ3Jvd2wgW3ZhbHVlXT1cXFwiaW1hZ2VTZXJ2aWNlLm1zZ3NcXFwiPjwvcC1ncm93bD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPHAtZmlsZVVwbG9hZCBuYW1lPVxcXCJkZW1vW11cXFwiIHVybD1cXFwiL2ltYWdlL29uVXBsb2FkXFxcIiAob25VcGxvYWQpPVxcXCJpbWFnZVNlcnZpY2Uub25VcGxvYWQoJGV2ZW50LCBhcnRpY2xlLmFydGljbGVJZClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9XFxcIm11bHRpcGxlXFxcIiBhY2NlcHQ9XFxcImltYWdlLyosdmlkZW8vKlxcXCIgbWF4RmlsZVNpemU9XFxcIjEwMDAwMDAwMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgbGV0LWZpbGUgcFRlbXBsYXRlPVxcXCJmaWxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNFxcXCIgKm5nSWY9XFxcIiFmaWxlLnR5cGUuaW5jbHVkZXMoJ3ZpZGVvJylcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwiaW1hZ2VTZXJ2aWNlLnNhbml0aXplKGZpbGUub2JqZWN0VVJMLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHkpXFxcIiBoZWlnaHQ9XFxcIjc1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy00XFxcIiAqbmdJZj1cXFwiZmlsZS50eXBlLmluY2x1ZGVzKCd2aWRlbycpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvY3NzL3ZpZGVvLXBsYXllci5qcGdcXFwiIGhlaWdodD1cXFwiNzVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWxlLnNpemV9fSBieXRlc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbjo8YnIgLz4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJmaWxlLmNhcHRpb25UZXh0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+IFxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHBUZW1wbGF0ZSB0eXBlPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cXFwiaW1hZ2VTZXJ2aWNlLmZpbGVzICE9PSB1bmRlZmluZWQgJiYgaW1hZ2VTZXJ2aWNlLmZpbGVzLmxlbmd0aFxcXCI+VXBsb2FkZWQgYW5kIFJlYWR5IHRvIFN1Ym1pdDo8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiaW1hZ2VTZXJ2aWNlLmZpbGVzICE9PSB1bmRlZmluZWQgJiYgaW1hZ2VTZXJ2aWNlLmZpbGVzLmxlbmd0aFxcXCIgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDQwMHB4OyBvdmVyZmxvdy15OiBhdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBmaWxlIG9mIGltYWdlU2VydmljZS5maWxlc1xcXCIgc3R5bGU9XFxcIndpZHRoOiA5OCVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNFxcXCIgKm5nSWY9XFxcIiFmaWxlLnR5cGUuaW5jbHVkZXMoJ3ZpZGVvJylcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJpbWFnZVNlcnZpY2Uuc2FuaXRpemUoZmlsZS5vYmplY3RVUkwuY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eSlcXFwiIGhlaWdodD1cXFwiNzVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy00XFxcIiAqbmdJZj1cXFwiZmlsZS50eXBlLmluY2x1ZGVzKCd2aWRlbycpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9jc3MvdmlkZW8tcGxheWVyLmpwZ1xcXCIgaGVpZ2h0PVxcXCI3NVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpbGUuc2l6ZX19IGJ5dGVzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uOjxici8+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZmlsZS5jYXB0aW9uVGV4dFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDwvcC1maWxlVXBsb2FkPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjY2FwdGlvbk1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiY2FwdGlvbk1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVkaXQgSW1hZ2VzPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiaW1hZ2VTZXJ2aWNlLmltYWdlcyAhPT0gdW5kZWZpbmVkICYmIGltYWdlU2VydmljZS5pbWFnZXMubGVuZ3RoXFxcIiBzdHlsZT1cXFwibWF4LWhlaWdodDogNDAwcHg7IG92ZXJmbG93LXk6IGF1dG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBpbWFnZSBvZiBpbWFnZVNlcnZpY2UuaW1hZ2VzXFxcIiBzdHlsZT1cXFwid2lkdGg6IDk4JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiICpuZ0lmPVxcXCIhaW1hZ2UuaXNWaWRlb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJpbWFnZVNlcnZpY2Uuc2FuaXRpemUoaW1hZ2UuaW1hZ2VVcmwpXFxcIiBoZWlnaHQ9XFxcIjc1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy00XFxcIiAqbmdJZj1cXFwiaW1hZ2UuaXNWaWRlbyAmJiBpbWFnZS50aHVtYm5haWxVcmwgIT09IHVuZGVmaW5lZCAmJiAhaW1hZ2UudGh1bWJuYWlsVXJsLmluY2x1ZGVzKCdibG9iJylcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwiaW1hZ2VTZXJ2aWNlLnNhbml0aXplKGltYWdlLnRodW1ibmFpbFVybClcXFwiIGhlaWdodD1cXFwiNzVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiICpuZ0lmPVxcXCJpbWFnZS5pc1ZpZGVvICYmIGltYWdlLnRodW1ibmFpbFVybCAhPT0gdW5kZWZpbmVkICYmIGltYWdlLnRodW1ibmFpbFVybC5pbmNsdWRlcygnYmxvYicpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvY3NzL3ZpZGVvLXBsYXllci5qcGdcXFwiIGhlaWdodD1cXFwiNzVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbjogPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJpbWFnZS5jYXB0aW9uVGV4dFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJkZWxldGVJbWFnZShpbWFnZSlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1iYW5cXFwiPjwvaT4gRGVsZXRlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9lZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIEFydGljbGVFZGl0UmVkaXJlY3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXJ0aWNsZUVkaXRSZWRpcmVjdENvbXBvbmVudChyb3V0ZXIsIGFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlID0gYWN0aXZhdGVkUm91dGU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pZCA9IHBhcmFtWydpZCddO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hcnRpY2xlL2VkaXQvXCIgKyB0aGlzLmlkXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXJ0aWNsZUVkaXRSZWRpcmVjdENvbXBvbmVudDtcclxufSgpKTtcclxuQXJ0aWNsZUVkaXRSZWRpcmVjdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcnRpY2xlZWRpdHJlZGlyZWN0JyxcclxuICAgICAgICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3JvdXRlcl8xLlJvdXRlciwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGVdKVxyXG5dLCBBcnRpY2xlRWRpdFJlZGlyZWN0Q29tcG9uZW50KTtcclxuZXhwb3J0cy5BcnRpY2xlRWRpdFJlZGlyZWN0Q29tcG9uZW50ID0gQXJ0aWNsZUVkaXRSZWRpcmVjdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJ0aWNsZWVkaXRyZWRpcmVjdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlZWRpdHJlZGlyZWN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBhcnRpY2xlX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9hcnRpY2xlLnNlcnZpY2VcIik7XHJcbnZhciBBcnRpY2xlTGlzdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcnRpY2xlTGlzdENvbXBvbmVudChhcnRpY2xlU2VydmljZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZSA9IGFydGljbGVTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLmdldEFydGljbGVzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoYXJ0aWNsZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMuYXJ0aWNsZXMgPSBhcnRpY2xlcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBBcnRpY2xlTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuQXJ0aWNsZUxpc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXJ0aWNsZS1saXN0JyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcnRpY2xlbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgIHByb3ZpZGVyczogW2FydGljbGVfc2VydmljZV8xLkFydGljbGVTZXJ2aWNlXVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2FydGljbGVfc2VydmljZV8xLkFydGljbGVTZXJ2aWNlXSlcclxuXSwgQXJ0aWNsZUxpc3RDb21wb25lbnQpO1xyXG5leHBvcnRzLkFydGljbGVMaXN0Q29tcG9uZW50ID0gQXJ0aWNsZUxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFydGljbGVsaXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVsaXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiAgICBcXHJcXG48ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJhcnRpY2xlcy5sZW5ndGggPCAxXFxcIj5cXHJcXG4gICAgICAgIDxsb2FkaW5nLWluZGljYXRvcj48L2xvYWRpbmctaW5kaWNhdG9yPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiYXJ0aWNsZXMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0Zvcj1cXFwibGV0IGFydGljbGUgb2YgYXJ0aWNsZXNcXFwiPlxcclxcbiAgICAgICAgICAgIDxhcnRpY2xlLWl0ZW0gW2FydGljbGVdPVxcXCJhcnRpY2xlXFxcIj48L2FydGljbGUtaXRlbT5cXHJcXG4gICAgICAgICAgICA8aHIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgQXJ0aWNsZVJlZGlyZWN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFydGljbGVSZWRpcmVjdENvbXBvbmVudChyb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcnRpY2xlL25ldyddKTtcclxuICAgIH1cclxuICAgIHJldHVybiBBcnRpY2xlUmVkaXJlY3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbkFydGljbGVSZWRpcmVjdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcnRpY2xlcmVkaXJlY3QnLFxyXG4gICAgICAgIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbcm91dGVyXzEuUm91dGVyXSlcclxuXSwgQXJ0aWNsZVJlZGlyZWN0Q29tcG9uZW50KTtcclxuZXhwb3J0cy5BcnRpY2xlUmVkaXJlY3RDb21wb25lbnQgPSBBcnRpY2xlUmVkaXJlY3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFydGljbGVyZWRpcmVjdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlcmVkaXJlY3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIEFydGljbGVWaWV3UmVkaXJlY3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXJ0aWNsZVZpZXdSZWRpcmVjdENvbXBvbmVudChyb3V0ZXIsIGFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlID0gYWN0aXZhdGVkUm91dGU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pZCA9IHBhcmFtWydpZCddO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hcnRpY2xlL3ZpZXcvXCIgKyB0aGlzLmlkXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXJ0aWNsZVZpZXdSZWRpcmVjdENvbXBvbmVudDtcclxufSgpKTtcclxuQXJ0aWNsZVZpZXdSZWRpcmVjdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcnRpY2xldmlld3JlZGlyZWN0JyxcclxuICAgICAgICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3JvdXRlcl8xLlJvdXRlciwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGVdKVxyXG5dLCBBcnRpY2xlVmlld1JlZGlyZWN0Q29tcG9uZW50KTtcclxuZXhwb3J0cy5BcnRpY2xlVmlld1JlZGlyZWN0Q29tcG9uZW50ID0gQXJ0aWNsZVZpZXdSZWRpcmVjdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJ0aWNsZXZpZXdyZWRpcmVjdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xldmlld3JlZGlyZWN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBjb21tZW50X3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9jb21tZW50LnNlcnZpY2VcIik7XHJcbnZhciB1c2VyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBuZzJfYm9vdHN0cmFwXzEgPSByZXF1aXJlKFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCIpO1xyXG52YXIgQ29tbWVudExpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29tbWVudExpc3RDb21wb25lbnQoY29tbWVudFNlcnZpY2UsIGFjdGl2YXRlZFJvdXRlLCB1c2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UgPSBjb21tZW50U2VydmljZTtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlID0gYWN0aXZhdGVkUm91dGU7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmlkID0gMDtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdZb3UgbXVzdCBiZSBsb2dnZWQgaW4gdG8gY29tbWVudCcsXHJcbiAgICAgICAgICAgIGFydGljbGVJZDogMCxcclxuICAgICAgICAgICAgYXBwbGljYXRpb25Vc2VySWQ6IDAsXHJcbiAgICAgICAgICAgIGlzQWRtaW46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIENvbW1lbnRMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5zYXZlQ29tbWVudCA9IGZ1bmN0aW9uIChmb3JtKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbW1lbnQubWVzc2FnZSA9IGZvcm0ubWVzc2FnZTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlLnNhdmVDb21tZW50KHRoaXMuY29tbWVudCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5hcHByb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY29tbWVudE1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNvbW1lbnROb0FkbWluTW9kYWwuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmNvbW1lbnRTZXJ2aWNlLmdldENvbW1lbnRzKHJlc3VsdC5hcnRpY2xlSWQpLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jb21tZW50cyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNvbW1lbnQubWVzc2FnZSA9ICdFbnRlciBDb21tZW50JztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIENvbW1lbnRMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICAgIENvbW1lbnRMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSAwIHx8IHRoaXMuaWQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShmdW5jdGlvbiAocGFyYW0pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmlkID0gcGFyYW1bJ2lkJ107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0aGlzLnVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW47XHJcbiAgICAgICAgdGhpcy5jb21tZW50LmFydGljbGVJZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlclNlcnZpY2UudXNlciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50LmFwcGxpY2F0aW9uVXNlcklkID0gdGhpcy51c2VyU2VydmljZS51c2VyLmFwcGxpY2F0aW9uVXNlcklkO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnQuaXNBZG1pbiA9IHRoaXMudXNlclNlcnZpY2UudXNlci5pc0FkbWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50U2VydmljZS5nZXRDb21tZW50cyh0aGlzLmlkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY29tbWVudHMgPSBjb21tZW50O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnQubWVzc2FnZSA9ICdFbnRlciBDb21tZW50JztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnVzZXJTZXJ2aWNlLnN0YXRlQ2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgX3RoaXMuaXNMb2dnZWRJbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICBfdGhpcy5jb21tZW50Lm1lc3NhZ2UgPSAnRW50ZXIgQ29tbWVudCc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51c2VyU3Vic2NyaXB0aW9uID0gdGhpcy51c2VyU2VydmljZS51c2VyT2JqZWN0Q2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgX3RoaXMuY29tbWVudC5hcHBsaWNhdGlvblVzZXJJZCA9IHZhbHVlLmFwcGxpY2F0aW9uVXNlcklkO1xyXG4gICAgICAgICAgICBfdGhpcy5jb21tZW50LmlzQWRtaW4gPSB2YWx1ZS5pc0FkbWluO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21tZW50TGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuVmlld0NoaWxkKCdjb21tZW50Tm9BZG1pbk1vZGFsJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsRGlyZWN0aXZlKVxyXG5dLCBDb21tZW50TGlzdENvbXBvbmVudC5wcm90b3R5cGUsIFwiY29tbWVudE5vQWRtaW5Nb2RhbFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5WaWV3Q2hpbGQoJ2NvbW1lbnRNb2RhbCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuXSwgQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLCBcImNvbW1lbnRNb2RhbFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwgQ29tbWVudExpc3RDb21wb25lbnQucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XHJcbkNvbW1lbnRMaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2NvbW1lbnQtbGlzdCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY29tbWVudGxpc3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICBwcm92aWRlcnM6IFtjb21tZW50X3NlcnZpY2VfMS5Db21tZW50U2VydmljZV1cclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtjb21tZW50X3NlcnZpY2VfMS5Db21tZW50U2VydmljZSwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGUsIHVzZXJfc2VydmljZV8xLlVzZXJTZXJ2aWNlXSlcclxuXSwgQ29tbWVudExpc3RDb21wb25lbnQpO1xyXG5leHBvcnRzLkNvbW1lbnRMaXN0Q29tcG9uZW50ID0gQ29tbWVudExpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1lbnRsaXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnRsaXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBodHRwXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcclxucmVxdWlyZShcInJ4anNcIik7XHJcbnZhciBDb21tZW50U2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb21tZW50U2VydmljZShodHRwKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgIH1cclxuICAgIENvbW1lbnRTZXJ2aWNlLnByb3RvdHlwZS5nZXRDb21tZW50cyA9IGZ1bmN0aW9uIChhcnRpY2xlSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi9hcGkvQ29tbWVudC9HZXRDb21tZW50cz9hcnRpY2xlSWQ9XCIgKyBhcnRpY2xlSWQpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0Lmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29tbWVudFNlcnZpY2UucHJvdG90eXBlLmdldENvbW1lbnRzQWRtaW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvQ29tbWVudC9HZXRDb21tZW50c0FkbWluJylcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiByZXN1bHQuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBDb21tZW50U2VydmljZS5wcm90b3R5cGUuZ2V0U3VnZ2VzdGlvblZpZXdzID0gZnVuY3Rpb24gKHVzZXJJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiL2FwaS9Db21tZW50L0dldFN1Z2dlc3Rpb25WaWV3cz91c2VySWQ9XCIgKyB1c2VySWQpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0Lmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29tbWVudFNlcnZpY2UucHJvdG90eXBlLnNhdmVDb21tZW50ID0gZnVuY3Rpb24gKGNvbW1lbnQpIHtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9Db21tZW50L1NhdmVDb21tZW50JywgSlNPTi5zdHJpbmdpZnkoY29tbWVudCksIHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29tbWVudFNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZUNvbW1lbnQgPSBmdW5jdGlvbiAoY29tbWVudCkge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL0NvbW1lbnQvVXBkYXRlQ29tbWVudCcsIEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIENvbW1lbnRTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVDb21tZW50ID0gZnVuY3Rpb24gKGNvbW1lbnRJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiL2FwaS9Db21tZW50L0RlbGV0ZUNvbW1lbnQ/Y29tbWVudElkPVwiICsgY29tbWVudElkKS5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb247IH0pO1xyXG4gICAgfTtcclxuICAgIENvbW1lbnRTZXJ2aWNlLnByb3RvdHlwZS51cGRhdGVTdWdnZXN0aW9uID0gZnVuY3Rpb24gKGZlZWRiYWNrKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvQ29tbWVudC9VcGRhdGVTdWdnZXN0aW9uJywgSlNPTi5zdHJpbmdpZnkoZmVlZGJhY2spLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIENvbW1lbnRTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVTdWdnZXN0aW9uID0gZnVuY3Rpb24gKGZlZWRiYWNrSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi9hcGkvQ29tbWVudC9EZWxldGVTdWdnZXN0aW9uP3N1Z2dlc3Rpb25JZD1cIiArIGZlZWRiYWNrSWQpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbjsgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29tbWVudFNlcnZpY2UucHJvdG90eXBlLmdldFN1Z2dlc3Rpb25UeXBlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS9Db21tZW50L0dldFN1Z2dlc3Rpb25UeXBlcycpLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBDb21tZW50U2VydmljZS5wcm90b3R5cGUuaW5zZXJ0RmVlZGJhY2sgPSBmdW5jdGlvbiAoZmVlZGJhY2spIHtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9Db21tZW50L0luc2VydFN1Z2dlc3Rpb24nLCBKU09OLnN0cmluZ2lmeShmZWVkYmFjayksIHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbW1lbnRTZXJ2aWNlO1xyXG59KCkpO1xyXG5Db21tZW50U2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkluamVjdGFibGUoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbaHR0cF8xLkh0dHBdKVxyXG5dLCBDb21tZW50U2VydmljZSk7XHJcbmV4cG9ydHMuQ29tbWVudFNlcnZpY2UgPSBDb21tZW50U2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWVudC5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9jb21tZW50LnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgPGg1IGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgIENvbW1lbnRzOlxcclxcbiAgICAgICAgPC9oNT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiY29tbWVudHMubGVuZ3RoIDwgMVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiAxMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgIDxoNj5cXHJcXG4gICAgICAgICAgICBObyBDb21tZW50cyBoYXZlIGJlZW4gcG9zdGVkIHlldFxcclxcbiAgICAgICAgPC9oNj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiAqbmdJZj1cXFwiY29tbWVudHMubGVuZ3RoID4gMFxcXCIgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDMwMHB4OyBvdmVyZmxvdzogYXV0bzsgYm9yZGVyOiAxcHggc29saWQgIzEyMTQxNlxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCIgKm5nRm9yPVxcXCJsZXQgY29tbWVudCBvZiBjb21tZW50c1xcXCI+XFxyXFxuICAgICAgICA8aDY+XFxyXFxuICAgICAgICAgICAgUG9zdGVkIEJ5OiB7eyBjb21tZW50LmFwcGxpY2F0aW9uVXNlci5maXJzdE5hbWUgfX0ge3tjb21tZW50LmFwcGxpY2F0aW9uVXNlci5sYXN0TmFtZX19IG9uIHt7IGNvbW1lbnQuY29tbWVudER0IHwgZm9ybWF0RGF0ZTogJ01NL0REL1lZWVkgaGg6bW0gQScgfX1cXHJcXG4gICAgICAgIDwvaDY+XFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tbGVmdDogMTBweFxcXCI+XFxyXFxuICAgICAgICAgICAge3tjb21tZW50LmNvbW1lbnRUZXh0fX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGhyIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgTGVhdmUgYSBDb21tZW50OlxcclxcbjwvZGl2Plxcclxcblxcclxcbjxmb3JtICNmb3JtPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInNhdmVDb21tZW50KGZvcm0udmFsdWUpOyBmb3JtLnJlc2V0KClcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgW2Rpc2FibGVkXT1cXFwiIWlzTG9nZ2VkSW5cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2NvbW1lbnQubWVzc2FnZX19XFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBuZ01vZGVsIHJlcXVpcmVkIGNvbHM9XFxcIjUwXFxcIiByb3dzPVxcXCIzXFxcIiBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBbZGlzYWJsZWRdPVxcXCIhaXNMb2dnZWRJblxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2F2ZVxcXCI+PC9zcGFuPiBTdWJtaXRcXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNjb21tZW50Tm9BZG1pbk1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiY29tbWVudE5vQWRtaW5Nb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Db21tZW50IFN1Ym1pdHRlZDwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFlvdXIgQ29tbWVudCBoYXMgYmVlbiBzdWJtaXR0ZWQuIEFmdGVyIGl0IGhhcyBiZWVuIGFwcHJvdmVkIGl0IHdpbGwgc2hvdyB1cCBvbiB0aGlzIHBvc3QuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNjb21tZW50TW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJjb21tZW50TW9kYWwuaGlkZSgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q29tbWVudCBTdWJtaXR0ZWQ8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBZb3VyIENvbW1lbnQgaGFzIGJlZW4gc3VibWl0dGVkLiBJdCBzaG91bGQgc2hvdyBvbiB0aGUgYXJ0aWNsZSBub3cuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnRsaXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGNvbW1lbnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL2NvbW1lbnQuc2VydmljZVwiKTtcclxudmFyIG5nMl9ib290c3RyYXBfMSA9IHJlcXVpcmUoXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIik7XHJcbnZhciBDb21tZW50QWRtaW5MaXN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbW1lbnRBZG1pbkxpc3RDb21wb25lbnQoY29tbWVudFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlID0gY29tbWVudFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29tbWVudHNMb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gJ0RlbGV0ZSBDb21tZW50JztcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnQXJlIHlvdSA8Yj5zdXJlPC9iPiB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb21tZW50Pyc7XHJcbiAgICAgICAgdGhpcy5jb25maXJtVGV4dCA9ICc8aSBjbGFzcz1cImZhIGZhLWxnIGZhLXRodW1icy1vLXVwXCI+PC9pPiZuYnNwO1llcyc7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxUZXh0ID0gJzxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtdGh1bWJzLW8tZG93blwiPjwvaT4mbmJzcDtObyc7XHJcbiAgICAgICAgdGhpcy5uZXdUaXRsZSA9ICdNYXJrIGFzIFJlYWQnO1xyXG4gICAgICAgIHRoaXMubmV3TWVzc2FnZSA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIG1hcmsgdGhpcyBpdGVtIGFzIHJlYWQ/JztcclxuICAgICAgICB0aGlzLnJlYWRUaXRsZSA9ICdNYXJrIGFzIFVucmVhZCc7XHJcbiAgICAgICAgdGhpcy5yZWFkTWVzc2FnZSA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIG1hcmsgdGhpcyBpdGVtIGFzIHVucmVhZD8nO1xyXG4gICAgICAgIHRoaXMudW5BcHByb3ZlVGl0bGUgPSAnQXBwcm92ZSBDb21tZW50JztcclxuICAgICAgICB0aGlzLnVuQXBwcm92ZU1lc3NhZ2UgPSAnQXJlIHlvdSA8Yj5zdXJlPC9iPiB5b3Ugd2FudCB0byBhcHByb3ZlIHRoaXMgY29tbWVudD8nO1xyXG4gICAgICAgIHRoaXMuYXBwcm92ZVRpdGxlID0gJ1VuLUFwcHJvdmUgQ29tbWVudCc7XHJcbiAgICAgICAgdGhpcy5hcHByb3ZlTWVzc2FnZSA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIHVuLWFwcHJvdmUgdGhpcyBjb21tZW50Pyc7XHJcbiAgICB9XHJcbiAgICBDb21tZW50QWRtaW5MaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UuZ2V0Q29tbWVudHNBZG1pbigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGNvbW1lbnRzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgICAgICAgICAgIF90aGlzLmNvbW1lbnRzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDb21tZW50QWRtaW5MaXN0Q29tcG9uZW50LnByb3RvdHlwZS5jb25maXJtQ2xpY2tlZCA9IGZ1bmN0aW9uIChjb21tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlLmRlbGV0ZUNvbW1lbnQoY29tbWVudC5jb21tZW50SWQpLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IF90aGlzLmNvbW1lbnRzLmluZGV4T2YoY29tbWVudCk7XHJcbiAgICAgICAgICAgIF90aGlzLmNvbW1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIF90aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDb21tZW50QWRtaW5MaXN0Q29tcG9uZW50LnByb3RvdHlwZS5hcHByb3ZlQ29tbWVudCA9IGZ1bmN0aW9uIChjb21tZW50KSB7XHJcbiAgICAgICAgY29tbWVudC5hcHByb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgY29tbWVudC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UudXBkYXRlQ29tbWVudChjb21tZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDb21tZW50QWRtaW5MaXN0Q29tcG9uZW50LnByb3RvdHlwZS51bkFwcHJvdmVDb21tZW50ID0gZnVuY3Rpb24gKGNvbW1lbnQpIHtcclxuICAgICAgICBjb21tZW50LmFwcHJvdmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb21tZW50U2VydmljZS51cGRhdGVDb21tZW50KGNvbW1lbnQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIENvbW1lbnRBZG1pbkxpc3RDb21wb25lbnQucHJvdG90eXBlLm1hcmtSZWFkID0gZnVuY3Rpb24gKGNvbW1lbnQpIHtcclxuICAgICAgICBjb21tZW50LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb21tZW50U2VydmljZS51cGRhdGVDb21tZW50KGNvbW1lbnQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIENvbW1lbnRBZG1pbkxpc3RDb21wb25lbnQucHJvdG90eXBlLm1hcmtVblJlYWQgPSBmdW5jdGlvbiAoY29tbWVudCkge1xyXG4gICAgICAgIGNvbW1lbnQuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UudXBkYXRlQ29tbWVudChjb21tZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29tbWVudEFkbWluTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuVmlld0NoaWxkKCdkZWxldGVNb2RhbCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuXSwgQ29tbWVudEFkbWluTGlzdENvbXBvbmVudC5wcm90b3R5cGUsIFwiZGVsZXRlTW9kYWxcIiwgdm9pZCAwKTtcclxuQ29tbWVudEFkbWluTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdjb21tZW50LWFkbWluLWxpc3QnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NvbW1lbnRhZG1pbmxpc3QuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2NvbW1lbnRfc2VydmljZV8xLkNvbW1lbnRTZXJ2aWNlXSlcclxuXSwgQ29tbWVudEFkbWluTGlzdENvbXBvbmVudCk7XHJcbmV4cG9ydHMuQ29tbWVudEFkbWluTGlzdENvbXBvbmVudCA9IENvbW1lbnRBZG1pbkxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1lbnRhZG1pbmxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudGFkbWlubGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxyXFxuXFxyXFxuICAgIDxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiZuYnNwOzwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcImNvbW1lbnRzLmxlbmd0aCA8IDEgJiYgIWNvbW1lbnRzTG9hZGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsb2FkaW5nLWluZGljYXRvcj48L2xvYWRpbmctaW5kaWNhdG9yPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiY29tbWVudHMubGVuZ3RoIDwgMSAmJiBjb21tZW50c0xvYWRlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZXJlIGFyZSBubyBjb21tZW50c1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSAqbmdJZj1cXFwiY29tbWVudHMubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZml4ZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Vbi1SZWFkPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkFydGljbGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q29tbWVudDwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Db21tZW50IEJ5PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNvbW1lbnQgRGF0ZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5BcHByb3ZlZDwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5EZWxldGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGNvbW1lbnQgb2YgY29tbWVudHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCIgcFRvb2x0aXA9XFxcInt7Y29tbWVudC5pc05ldyB8IHllc05vOiAncmVhZFVucmVhZCd9fVxcXCIgdG9vbHRpcFBvc2l0aW9uPVxcXCJ0b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcIiFjb21tZW50LmlzTmV3XFxcIiByb2xlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJyZWFkVGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZV09XFxcInJlYWRNZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsVGV4dF09XFxcImNhbmNlbFRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJtYXJrVW5SZWFkKGNvbW1lbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblR5cGU9XFxcImRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXBwZW5kVG9Cb2R5XT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWNpcmNsZS1vXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiY29tbWVudC5pc05ld1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdsQ29uZmlybWF0aW9uUG9wb3ZlclxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwibmV3VGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZV09XFxcIm5ld01lc3NhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlybVRleHRdPVxcXCJjb25maXJtVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5jZWxUZXh0XT1cXFwiY2FuY2VsVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVxcXCJwbGFjZW1lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uZmlybSk9XFxcIm1hcmtSZWFkKGNvbW1lbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblR5cGU9XFxcImRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXBwZW5kVG9Cb2R5XT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWNoZWNrLWNpcmNsZS1vXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIiBwVG9vbHRpcD1cXFwie3tjb21tZW50LmFydGljbGUudGl0bGV9fVxcXCIgdG9vbHRpcFBvc2l0aW9uPVxcXCJ0b3BcXFwiIHN0eWxlPVxcXCJvdmVyZmxvdzogaGlkZGVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y29tbWVudC5hcnRpY2xlLnRpdGxlfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiIHBUb29sdGlwPVxcXCJ7e2NvbW1lbnQuY29tbWVudFRleHR9fVxcXCIgdG9vbHRpcFBvc2l0aW9uPVxcXCJ0b3BcXFwiIHN0eWxlPVxcXCJvdmVyZmxvdzogaGlkZGVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y29tbWVudC5jb21tZW50VGV4dH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIiBwVG9vbHRpcD1cXFwie3tjb21tZW50LmFwcGxpY2F0aW9uVXNlci5maXJzdE5hbWV9fSB7e2NvbW1lbnQuYXBwbGljYXRpb25Vc2VyLmxhc3ROYW1lfX1cXFwiIHRvb2x0aXBQb3NpdGlvbj1cXFwidG9wXFxcIiBzdHlsZT1cXFwib3ZlcmZsb3c6IGhpZGRlblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NvbW1lbnQuYXBwbGljYXRpb25Vc2VyLmZpcnN0TmFtZX19IHt7Y29tbWVudC5hcHBsaWNhdGlvblVzZXIubGFzdE5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCIgcFRvb2x0aXA9XFxcInt7Y29tbWVudC5jb21tZW50RHQgfCBmb3JtYXREYXRlOiAnTU0vREQvWVlZWSBoaDptbSBBJ319XFxcIiB0b29sdGlwUG9zaXRpb249XFxcInRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NvbW1lbnQuY29tbWVudER0IHwgZm9ybWF0RGF0ZTogJ01NL0REL1lZWVkgaGg6bW0gQSd9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCIgcFRvb2x0aXA9XFxcInt7Y29tbWVudC5hcHByb3ZlZCB8IHllc05vOiAnYXBwcm92ZWQnIH19XFxcIiB0b29sdGlwUG9zaXRpb249XFxcInRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiY29tbWVudC5hcHByb3ZlZFxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdsQ29uZmlybWF0aW9uUG9wb3ZlclxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwiYXBwcm92ZVRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJhcHByb3ZlTWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwidW5BcHByb3ZlQ29tbWVudChjb21tZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS10aHVtYnMtby11cFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcIiFjb21tZW50LmFwcHJvdmVkXFxcIiByb2xlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJ1bkFwcHJvdmVUaXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwidW5BcHByb3ZlTWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwiYXBwcm92ZUNvbW1lbnQoY29tbWVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVHlwZT1cXFwiZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVHlwZT1cXFwiZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtdGh1bWJzLW8tZG93blxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVxcXCJidXR0b25cXFwiIHRpdGxlPVxcXCJEZWxldGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJ0aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwibWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwiY29uZmlybUNsaWNrZWQoY29tbWVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVHlwZT1cXFwiZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVHlwZT1cXFwiZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtYmFuXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNkZWxldGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImRlbGV0ZU1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNvbW1lbnQgRGVsZXRlZDwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIENvbW1lbnQgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnRhZG1pbmxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgdXNlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCIpO1xyXG52YXIgY29tbWVudF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvY29tbWVudC5zZXJ2aWNlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgbmcyX2Jvb3RzdHJhcF8xID0gcmVxdWlyZShcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiKTtcclxudmFyIHN1Z2dlc3Rpb25fbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9tb2RlbHMvc3VnZ2VzdGlvbi5tb2RlbFwiKTtcclxudmFyIEZlZWRiYWNrQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZlZWRiYWNrQ29tcG9uZW50KHVzZXJTZXJ2aWNlLCByb3V0ZXIsIGNvbW1lbnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UgPSBjb21tZW50U2VydmljZTtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN1Z2dlc3Rpb24gPSBuZXcgc3VnZ2VzdGlvbl9tb2RlbF8xLlN1Z2dlc3Rpb24oKTtcclxuICAgIH1cclxuICAgIEZlZWRiYWNrQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBGZWVkYmFja0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0aGlzLnVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW47XHJcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy51c2VyU2VydmljZS51c2VyO1xyXG4gICAgICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbiA9IHRoaXMudXNlclNlcnZpY2UudXNlck9iamVjdENoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnVzZXIgPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UuZ2V0U3VnZ2VzdGlvblR5cGVzKClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudHlwZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHJlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50eXBlcy5wdXNoKHsgbGFiZWw6IHJlc3VsdC52YWx1ZSwgdmFsdWU6IHJlc3VsdC5saXN0RW51bUlkIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb24udHlwZUlkID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRmVlZGJhY2tDb21wb25lbnQucHJvdG90eXBlLm5nQWZ0ZXJWaWV3Q2hlY2tlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dpbk1vZGFsICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luTW9kYWwuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBGZWVkYmFja0NvbXBvbmVudC5wcm90b3R5cGUuZGlzbWlzc0xvZ2luTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICAgIH07XHJcbiAgICBGZWVkYmFja0NvbXBvbmVudC5wcm90b3R5cGUuc2F2ZUZlZWRiYWNrID0gZnVuY3Rpb24gKGZvcm0pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbi5hcHBsaWNhdGlvblVzZXJJZCA9IHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJJZDtcclxuICAgICAgICB0aGlzLnN1Z2dlc3Rpb24udHlwZUlkID0gZm9ybS50eXBlSWQ7XHJcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uLnZhbHVlID0gZm9ybS5mZWVkYmFjaztcclxuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlLmluc2VydEZlZWRiYWNrKHRoaXMuc3VnZ2VzdGlvbikuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMuZmVlZGJhY2tNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEZlZWRiYWNrQ29tcG9uZW50LnByb3RvdHlwZS5kaXNtaXNzTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZmVlZGJhY2tyZWRpcmVjdCddKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmVlZGJhY2tDb21wb25lbnQ7XHJcbn0oKSk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLlZpZXdDaGlsZCgnZmVlZGJhY2tNb2RhbCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuXSwgRmVlZGJhY2tDb21wb25lbnQucHJvdG90eXBlLCBcImZlZWRiYWNrTW9kYWxcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuVmlld0NoaWxkKCdsb2dpbk1vZGFsJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsRGlyZWN0aXZlKVxyXG5dLCBGZWVkYmFja0NvbXBvbmVudC5wcm90b3R5cGUsIFwibG9naW5Nb2RhbFwiLCB2b2lkIDApO1xyXG5GZWVkYmFja0NvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdwcm9maWxlJyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mZWVkYmFjay5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdXNlcl9zZXJ2aWNlXzEuVXNlclNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlciwgY29tbWVudF9zZXJ2aWNlXzEuQ29tbWVudFNlcnZpY2VdKVxyXG5dLCBGZWVkYmFja0NvbXBvbmVudCk7XHJcbmV4cG9ydHMuRmVlZGJhY2tDb21wb25lbnQgPSBGZWVkYmFja0NvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmVlZGJhY2suY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIFN1Z2dlc3Rpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3VnZ2VzdGlvbigpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBTdWdnZXN0aW9uO1xyXG59KCkpO1xyXG5TdWdnZXN0aW9uID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5qZWN0YWJsZSgpXHJcbl0sIFN1Z2dlc3Rpb24pO1xyXG5leHBvcnRzLlN1Z2dlc3Rpb24gPSBTdWdnZXN0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWdnZXN0aW9uLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvc3VnZ2VzdGlvbi5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDI+RmVlZGJhY2s8L2gyPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgKm5nSWY9XFxcIiFpc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFlvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBhY2Nlc3MgdGhpcyBwYWdlLlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgKm5nSWY9XFxcImlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gI2Zvcm09XFxcIm5nRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwic2F2ZUZlZWRiYWNrKGZvcm0udmFsdWUpOyBmb3JtLnJlc2V0KClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5OYW1lOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJ1c2VyICE9PSB1bmRlZmluZWRcXFwiIGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3t1c2VyLmZpcnN0TmFtZX19IHt7dXNlci5sYXN0TmFtZX19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlR5cGU6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XFxcInN1Z2dlc3Rpb24udHlwZUlkXFxcIiBuYW1lPVxcXCJ0eXBlSWRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgdHlwZSBvZiB0eXBlc1xcXCIgdmFsdWU9XFxcInt7dHlwZS52YWx1ZX19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0eXBlLmxhYmVsfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RmVlZGJhY2s6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZmVlZGJhY2tcXFwiIFsobmdNb2RlbCldPVxcXCJzdWdnZXN0aW9uLnZhbHVlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZCAvPjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWxnIGZhLXNhdmVcXFwiPjwvc3Bhbj4gU3VibWl0IEZlZWRiYWNrXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICZuYnNwO1xcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJpc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZmVlZGJhY2stbGlzdCBbYWRtaW5dPVxcXCJmYWxzZVxcXCI+PC9mZWVkYmFjay1saXN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjZmVlZGJhY2tNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgKG9uSGlkZSk9XFxcImRpc21pc3NNb2RhbCgpXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiZmVlZGJhY2tNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5GZWVkYmFjayBTdWJtaXR0ZWQ8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBZb3VyIGZlZWRiYWNrIGhhcyBiZWVuIHN1Ym1pdHRlZC4gVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrLlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjbG9naW5Nb2RhbD1cXFwiYnMtbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgKG9uSGlkZSk9XFxcImRpc21pc3NMb2dpbk1vZGFsKClcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJsb2dpbk1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVycm9yPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgWW91IG11c3QgYmUgbG9nZ2VkIGluIHRvIGFjY2VzcyB0aGlzIHBhZ2UuIFBsZWFzZSBsb2dpbi5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGNvbW1lbnRfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL2NvbW1lbnQuc2VydmljZVwiKTtcclxudmFyIG5nMl9ib290c3RyYXBfMSA9IHJlcXVpcmUoXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIik7XHJcbnZhciB1c2VyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIik7XHJcbnZhciBGZWVkQmFja0xpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRmVlZEJhY2tMaXN0Q29tcG9uZW50KGNvbW1lbnRTZXJ2aWNlLCB1c2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UgPSBjb21tZW50U2VydmljZTtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbkxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9ICdEZWxldGUgRmVlZGJhY2snO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGZlZWRiYWNrPyc7XHJcbiAgICAgICAgdGhpcy5jb25maXJtVGV4dCA9ICc8aSBjbGFzcz1cImZhIGZhLWxnIGZhLXRodW1icy1vLXVwXCI+PC9pPiZuYnNwO1llcyc7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxUZXh0ID0gJzxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtdGh1bWJzLW8tZG93blwiPjwvaT4mbmJzcDtObyc7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RpdGxlID0gJ01hcmsgSW4gcHJvZ3Jlc3MnO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NNZXNzYWdlID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gbWFyayB0aGlzIGFzIEluIFByb2dyZXNzPyc7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZVRpdGxlID0gJ01hcmsgQXMgQ29tcGxldGUnO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVNZXNzYWdlID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gbWFyayB0aGlzIGFzIENvbXBsZXRlPyc7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSAwO1xyXG4gICAgfVxyXG4gICAgRmVlZEJhY2tMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBGZWVkQmFja0xpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdGhpcy51c2VyU2VydmljZS5pc0xvZ2dlZEluO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMudXNlclNlcnZpY2UudXNlcjtcclxuICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24gPSB0aGlzLnVzZXJTZXJ2aWNlLnVzZXJPYmplY3RDaGFuZ2Uuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBfdGhpcy51c2VyID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFkbWluKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklkID0gdGhpcy51c2VyLmFwcGxpY2F0aW9uVXNlcklkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH07XHJcbiAgICBGZWVkQmFja0xpc3RDb21wb25lbnQucHJvdG90eXBlLmNvbmZpcm1DbGlja2VkID0gZnVuY3Rpb24gKGZlZWRiYWNrKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlLmRlbGV0ZVN1Z2dlc3Rpb24oZmVlZGJhY2suc3VnZ2VzdGlvbklkKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBfdGhpcy5zdWdnZXN0aW9ucy5pbmRleE9mKGZlZWRiYWNrKTtcclxuICAgICAgICAgICAgX3RoaXMuc3VnZ2VzdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgX3RoaXMuc3VnZ2VzdGlvbkxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIF90aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBGZWVkQmFja0xpc3RDb21wb25lbnQucHJvdG90eXBlLm1hcmtJblByb2dyZXNzID0gZnVuY3Rpb24gKGZlZWRiYWNrKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBmZWVkYmFjay5zdGF0dXNJZCA9IDY7XHJcbiAgICAgICAgdGhpcy5jb21tZW50U2VydmljZS51cGRhdGVTdWdnZXN0aW9uKGZlZWRiYWNrKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gX3RoaXMuc3VnZ2VzdGlvbnMuaW5kZXhPZihmZWVkYmFjayk7XHJcbiAgICAgICAgICAgIF90aGlzLnN1Z2dlc3Rpb25zLnNwbGljZShpbmRleCwgMSwgcmVzdWx0KTtcclxuICAgICAgICAgICAgX3RoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEZlZWRCYWNrTGlzdENvbXBvbmVudC5wcm90b3R5cGUubWFya0NvbXBsZXRlID0gZnVuY3Rpb24gKGZlZWRiYWNrKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBmZWVkYmFjay5zdGF0dXNJZCA9IDg7XHJcbiAgICAgICAgdGhpcy5jb21tZW50U2VydmljZS51cGRhdGVTdWdnZXN0aW9uKGZlZWRiYWNrKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gX3RoaXMuc3VnZ2VzdGlvbnMuaW5kZXhPZihmZWVkYmFjayk7XHJcbiAgICAgICAgICAgIF90aGlzLnN1Z2dlc3Rpb25zLnNwbGljZShpbmRleCwgMSwgcmVzdWx0KTtcclxuICAgICAgICAgICAgX3RoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEZlZWRCYWNrTGlzdENvbXBvbmVudC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UuZ2V0U3VnZ2VzdGlvblZpZXdzKHRoaXMudXNlcklkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChmZWVkYmFjaykge1xyXG4gICAgICAgICAgICBfdGhpcy5zdWdnZXN0aW9ucyA9IGZlZWRiYWNrO1xyXG4gICAgICAgICAgICBfdGhpcy5zdWdnZXN0aW9uTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmVlZEJhY2tMaXN0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXHJcbl0sIEZlZWRCYWNrTGlzdENvbXBvbmVudC5wcm90b3R5cGUsIFwiYWRtaW5cIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuVmlld0NoaWxkKCdkZWxldGVNb2RhbCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIG5nMl9ib290c3RyYXBfMS5Nb2RhbERpcmVjdGl2ZSlcclxuXSwgRmVlZEJhY2tMaXN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJkZWxldGVNb2RhbFwiLCB2b2lkIDApO1xyXG5GZWVkQmFja0xpc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnZmVlZGJhY2stbGlzdCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmVlZGJhY2tsaXN0LmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtjb21tZW50X3NlcnZpY2VfMS5Db21tZW50U2VydmljZSwgdXNlcl9zZXJ2aWNlXzEuVXNlclNlcnZpY2VdKVxyXG5dLCBGZWVkQmFja0xpc3RDb21wb25lbnQpO1xyXG5leHBvcnRzLkZlZWRCYWNrTGlzdENvbXBvbmVudCA9IEZlZWRCYWNrTGlzdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmVlZGJhY2tsaXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFja2xpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGlkPVxcXCJ3cmFwcGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj4mbmJzcDs8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJzdWdnZXN0aW9ucy5sZW5ndGggPCAxICYmICFzdWdnZXN0aW9uTG9hZGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsb2FkaW5nLWluZGljYXRvcj48L2xvYWRpbmctaW5kaWNhdG9yPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwic3VnZ2VzdGlvbnMubGVuZ3RoIDwgMSAmJiBzdWdnZXN0aW9uTG9hZGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmUgaXMgbm8gZmVlZGJhY2tcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgKm5nSWY9XFxcInN1Z2dlc3Rpb25zLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWZpeGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+U3RhdHVzPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCIgKm5nSWY9XFxcImFkbWluXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmVlZGJhY2s8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTQgYm9yZGVyLXJpZ2h0XFxcIiAqbmdJZj1cXFwiIWFkbWluXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmVlZGJhY2s8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmVlZGJhY2sgQnk8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmVlZGJhY2sgRGF0ZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5SZXNvbHV0aW9uIERhdGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+VHlwZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlciBib3JkZXItcmlnaHRcXFwiICpuZ0lmPVxcXCJhZG1pblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkRlbGV0ZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgc3VnZ2VzdGlvbiBvZiBzdWdnZXN0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCIgcFRvb2x0aXA9XFxcInt7c3VnZ2VzdGlvbi5zdGF0dXNOYW1lfX1cXFwiIHRvb2x0aXBQb3NpdGlvbj1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwic3VnZ2VzdGlvbi5zdGF0dXNJZCA9PT0gNSAmJiBhZG1pblxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJwcm9ncmVzc1RpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwicHJvZ3Jlc3NNZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5jZWxUZXh0XT1cXFwiY2FuY2VsVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwibWFya0luUHJvZ3Jlc3Moc3VnZ2VzdGlvbilcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWJhdHRlcnktZW1wdHlcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInN1Z2dlc3Rpb24uc3RhdHVzSWQgPT09IDUgJiYgIWFkbWluXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtYmF0dGVyeS1lbXB0eVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwic3VnZ2VzdGlvbi5zdGF0dXNJZCA9PT0gNiAmJiAhYWRtaW5cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1iYXR0ZXJ5LWhhbGZcXFwiPjwvaT48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInN1Z2dlc3Rpb24uc3RhdHVzSWQgPT09IDYgJiYgYWRtaW5cXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwiY29tcGxldGVUaXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZV09XFxcImNvbXBsZXRlTWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlybVRleHRdPVxcXCJjb25maXJtVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsVGV4dF09XFxcImNhbmNlbFRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uZmlybSk9XFxcIm1hcmtDb21wbGV0ZShzdWdnZXN0aW9uKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVHlwZT1cXFwiZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblR5cGU9XFxcImRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtYmF0dGVyeS1oYWxmXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJzdWdnZXN0aW9uLnN0YXR1c0lkID09PSA4XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtYmF0dGVyeS1mdWxsXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTMgYm9yZGVyLXJpZ2h0XFxcIiAqbmdJZj1cXFwiYWRtaW5cXFwiIHBUb29sdGlwPVxcXCJ7e3N1Z2dlc3Rpb24udmFsdWV9fVxcXCIgdG9vbHRpcFBvc2l0aW9uPVxcXCJ0b3BcXFwiIHN0eWxlPVxcXCJvdmVyZmxvdzogaGlkZGVuOyB3aGl0ZS1zcGFjZTpub3dyYXA7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N1Z2dlc3Rpb24udmFsdWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTQgYm9yZGVyLXJpZ2h0XFxcIiAqbmdJZj1cXFwiIWFkbWluXFxcIiBwVG9vbHRpcD1cXFwie3tzdWdnZXN0aW9uLnZhbHVlfX1cXFwiIHRvb2x0aXBQb3NpdGlvbj1cXFwidG9wXFxcIiBzdHlsZT1cXFwib3ZlcmZsb3c6IGhpZGRlbjsgd2hpdGUtc3BhY2U6bm93cmFwO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdWdnZXN0aW9uLnZhbHVlfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCIgcFRvb2x0aXA9XFxcInt7c3VnZ2VzdGlvbi5hdXRob3JOYW1lfX1cXFwiIHRvb2x0aXBQb3NpdGlvbj1cXFwidG9wXFxcIiBzdHlsZT1cXFwib3ZlcmZsb3c6IGhpZGRlblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdWdnZXN0aW9uLmF1dGhvck5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIiBwVG9vbHRpcD1cXFwie3tzdWdnZXN0aW9uLmNyZWF0ZWREVCB8IGZvcm1hdERhdGU6ICdNTS9ERC9ZWVlZIGhoOm1tIEEnfX1cXFwiIHRvb2x0aXBQb3NpdGlvbj1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N1Z2dlc3Rpb24uY3JlYXRlZERUIHwgZm9ybWF0RGF0ZTogJ01NL0REL1lZWVkgaGg6bW0gQSd9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cXFwic3VnZ2VzdGlvbi5yZXNvbHV0aW9uRFQgPT09IHVuZGVmaW5lZFxcXCIgY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVxcXCJzdWdnZXN0aW9uLnJlc29sdXRpb25EVCAhPT0gdW5kZWZpbmVkXFxcIiBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIiBwVG9vbHRpcD1cXFwie3tzdWdnZXN0aW9uLnJlc29sdXRpb25EVCB8IGZvcm1hdERhdGU6ICdNTS9ERC9ZWVlZIGhoOm1tIEEnfX1cXFwiIHRvb2x0aXBQb3NpdGlvbj1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N1Z2dlc3Rpb24ucmVzb2x1dGlvbkRUIHwgZm9ybWF0RGF0ZTogJ01NL0REL1lZWVkgaGg6bW0gQSd9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgYm9yZGVyLXJpZ2h0XFxcIiBwVG9vbHRpcD1cXFwie3tzdWdnZXN0aW9uLnR5cGVOYW1lfX1cXFwiIHRvb2x0aXBQb3NpdGlvbj1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N1Z2dlc3Rpb24udHlwZU5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIiAqbmdJZj1cXFwiYWRtaW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XFxcImJ1dHRvblxcXCIgdGl0bGU9XFxcIkRlbGV0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwidGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJtZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5jZWxUZXh0XT1cXFwiY2FuY2VsVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwiY29uZmlybUNsaWNrZWQoc3VnZ2VzdGlvbilcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWJhblxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjZGVsZXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJkZWxldGVNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5GZWVkYmFjayBEZWxldGVkPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgRmVlZGJhY2sgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFja2xpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgRmVlZGJhY2tSZWRpcmVjdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGZWVkYmFja1JlZGlyZWN0Q29tcG9uZW50KHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2ZlZWRiYWNrJ10pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZlZWRiYWNrUmVkaXJlY3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbkZlZWRiYWNrUmVkaXJlY3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnZmVlZGJhY2tyZWRpcmVjdCcsXHJcbiAgICAgICAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2PidcclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtyb3V0ZXJfMS5Sb3V0ZXJdKVxyXG5dLCBGZWVkYmFja1JlZGlyZWN0Q29tcG9uZW50KTtcclxuZXhwb3J0cy5GZWVkYmFja1JlZGlyZWN0Q29tcG9uZW50ID0gRmVlZGJhY2tSZWRpcmVjdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmVlZGJhY2tyZWRpcmVjdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJhY2svZmVlZGJhY2tyZWRpcmVjdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgRm9vdGVyQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZvb3RlckNvbXBvbmVudCgpIHtcclxuICAgICAgICB0aGlzLnllYXIgPSAnJztcclxuICAgICAgICB0aGlzLmJ1aWxkID0gJyc7XHJcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5idWlsZCA9ICcyMDE3LjAxLjEzLjAzJztcclxuICAgIH1cclxuICAgIHJldHVybiBGb290ZXJDb21wb25lbnQ7XHJcbn0oKSk7XHJcbkZvb3RlckNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdmb290ZXItaXRlbScsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZm9vdGVyLmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxyXG5dLCBGb290ZXJDb21wb25lbnQpO1xyXG5leHBvcnRzLkZvb3RlckNvbXBvbmVudCA9IEZvb3RlckNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9vdGVyLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgPGhyIC8+XFxyXFxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcHJpdmFjeSddXFxcIj5Qcml2YWN5IFBvbGljeTwvYT4gLSA8aSBjbGFzcz1cXFwiZmEgZmEtY29weXJpZ2h0XFxcIj48L2k+IHt7eWVhcn19IERyYWdvbm1pciBEZXZlbG9wbWVudCAtIHt7YnVpbGR9fVxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICZuYnNwO1xcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBzZXR0aW5nX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2VcIik7XHJcbnZhciBIb21lQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEhvbWVDb21wb25lbnQoc2V0dGluZ1NlcnZpY2UpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UgPSBzZXR0aW5nU2VydmljZTtcclxuICAgICAgICB0aGlzLmltYWdlVXJsID0gJyc7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKDEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW1hZ2VVcmwgPSB4LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBIb21lQ29tcG9uZW50O1xyXG59KCkpO1xyXG5Ib21lQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3NldHRpbmdfc2VydmljZV8xLlNldHRpbmdTZXJ2aWNlXSlcclxuXSwgSG9tZUNvbXBvbmVudCk7XHJcbmV4cG9ydHMuSG9tZUNvbXBvbmVudCA9IEhvbWVDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvbWUuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG4gICAgPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpdGVIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcInt7aW1hZ2VVcmx9fVxcXCIgaGVpZ2h0PVxcXCIzNzVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlLWxpc3Q+PC9hcnRpY2xlLWxpc3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcmNoaXZlLWxpc3Q+PC9hcmNoaXZlLWxpc3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBMb2FkaW5nSW5kaWNhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExvYWRpbmdJbmRpY2F0b3IoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTG9hZGluZ0luZGljYXRvcjtcclxufSgpKTtcclxuTG9hZGluZ0luZGljYXRvciA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdsb2FkaW5nLWluZGljYXRvcicsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbG9hZGluZy1pbmRpY2F0b3IuaHRtbCcpLFxyXG4gICAgfSlcclxuXSwgTG9hZGluZ0luZGljYXRvcik7XHJcbmV4cG9ydHMuTG9hZGluZ0luZGljYXRvciA9IExvYWRpbmdJbmRpY2F0b3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvYWRpbmctaW5kaWNhdG9yLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy1pbmRpY2F0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48ZGl2IGNsYXNzPVxcXCJjaXJjbGVcXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNpcmNsZTFcXFwiPjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLWluZGljYXRvci5odG1sXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHVzZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiKTtcclxudmFyIE5hdk1lbnVDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmF2TWVudUNvbXBvbmVudCh1c2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UgPSB1c2VyU2VydmljZTtcclxuICAgIH1cclxuICAgIE5hdk1lbnVDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuY2hlY2tMb2dpbigpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBOYXZNZW51Q29tcG9uZW50O1xyXG59KCkpO1xyXG5OYXZNZW51Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt1c2VyX3NlcnZpY2VfMS5Vc2VyU2VydmljZV0pXHJcbl0sIE5hdk1lbnVDb21wb25lbnQpO1xyXG5leHBvcnRzLk5hdk1lbnVDb21wb25lbnQgPSBOYXZNZW51Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uYXZtZW51LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcXFwiIHN0eWxlPVxcXCJib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVcXFwiIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+VGhlIEhhbGVzIEFuZ2VsczwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBuYXZiYXItcmlnaHQnPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxyXFxuICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLWxnIGZhLWhvbWUnPjwvc3Bhbj4gSG9tZVxcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiICpuZ0lmPVxcXCJ1c2VyU2VydmljZS5pc0xvZ2dlZEluICYmIHVzZXJTZXJ2aWNlLnVzZXIgIT0gbnVsbCAmJiB1c2VyU2VydmljZS51c2VyLmlzQWRtaW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2NyZWF0ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1maWxlLXRleHQtbyc+PC9zcGFuPiBTdWJtaXRcXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIiAqbmdJZj1cXFwidXNlclNlcnZpY2UuaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvZmVlZGJhY2snXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtbGcgZmEtY29tbWVudGluZyc+PC9zcGFuPiBGZWVkYmFja1xcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiICpuZ0lmPVxcXCJ1c2VyU2VydmljZS5pc0xvZ2dlZEluICYmIHVzZXJTZXJ2aWNlLnVzZXIgIT0gbnVsbCAmJiB1c2VyU2VydmljZS51c2VyLmlzQWRtaW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2FkbWluJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLWxnIGZhLWVtcGlyZSc+PC9zcGFuPiBBZG1pblxcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiICpuZ0lmPVxcXCJ1c2VyU2VydmljZS5pc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9wcm9maWxlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXVzZXItbyc+PC9zcGFuPiBQcm9maWxlIC0ge3t1c2VyU2VydmljZS51c2VyLmZpcnN0TmFtZX19XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCIgKm5nSWY9XFxcInVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW5cXFwiIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJ1c2VyU2VydmljZS5sb2dvdXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtbGcgZmEtZmFjZWJvb2stb2ZmaWNpYWwnPjwvc3Bhbj4gTG9nb3V0XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCIgKm5nSWY9XFxcIiF1c2VyU2VydmljZS5pc0xvZ2dlZEluXFxcIiBzdHlsZT1cXFwiY3Vyc29yOiBwb2ludGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwidXNlclNlcnZpY2UubG9naW4oKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtbGcgZmEtZmFjZWJvb2stb2ZmaWNpYWwnPjwvc3Bhbj4gTG9naW5cXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L25hdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBpbWFnZV9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvaW1hZ2Uuc2VydmljZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIE5HQ2Fyb3VzZWxDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTkdDYXJvdXNlbENvbXBvbmVudChpbWFnZVNlcnZpY2UsIGFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UgPSBpbWFnZVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZSA9IGFjdGl2YXRlZFJvdXRlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5pZCA9IDA7XHJcbiAgICAgICAgdGhpcy5pbWFnZXNMb2FkZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIE5HQ2Fyb3VzZWxDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICBOR0Nhcm91c2VsQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pZCA9IHBhcmFtWydpZCddO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmdldEltYWdlc0J5QXJ0aWNsZUlkKHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gdGhpcy5pbWFnZVNlcnZpY2UuaW1hZ2VzO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmltYWdlU2VydmljZS5pbWFnZUNoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmltYWdlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICBfdGhpcy5pbWFnZXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBOR0Nhcm91c2VsQ29tcG9uZW50O1xyXG59KCkpO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbnB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwgTkdDYXJvdXNlbENvbXBvbmVudC5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcclxuTkdDYXJvdXNlbENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICduZy1jYXJvdXNlbCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmdjYXJvdXNlbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgIHByb3ZpZGVyczogW2ltYWdlX3NlcnZpY2VfMS5JbWFnZVNlcnZpY2VdXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbaW1hZ2Vfc2VydmljZV8xLkltYWdlU2VydmljZSwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGVdKVxyXG5dLCBOR0Nhcm91c2VsQ29tcG9uZW50KTtcclxuZXhwb3J0cy5OR0Nhcm91c2VsQ29tcG9uZW50ID0gTkdDYXJvdXNlbENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmdjYXJvdXNlbC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmdjYXJvdXNlbC9uZ2Nhcm91c2VsLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcImltYWdlc0xvYWRlZCA9PSBmYWxzZVxcXCI+XFxyXFxuICAgIDxsb2FkaW5nLWluZGljYXRvcj48L2xvYWRpbmctaW5kaWNhdG9yPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcImltYWdlU2VydmljZS5pbWFnZXMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgIDxjYXJvdXNlbCBbaW50ZXJ2YWxdPVxcXCI1MDAwXFxcIiBbbm9XcmFwXT1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgPHNsaWRlICpuZ0Zvcj1cXFwibGV0IGltYWdlIG9mIGltYWdlU2VydmljZS5pbWFnZXNcXFwiIFthY3RpdmVdPVxcXCJpbWFnZS5pc0FjdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiIWltYWdlLmlzVmlkZW9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJpbWFnZVNlcnZpY2Uuc2FuaXRpemUoaW1hZ2UuaW1hZ2VVcmwpXFxcIiBjbGFzcz1cXFwiZmx1aWQgY2VudGVyLWJsb2NrXFxcIiBoZWlnaHQ9XFxcIjQwMFxcXCI+ICAgIFxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImltYWdlLmlzVmlkZW9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dmlkZW8tcGxheWVyIFtpbWFnZV09XFxcImltYWdlXFxcIj48L3ZpZGVvLXBsYXllcj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1jYXB0aW9uIGFsZXJ0XFxcIiBzdHlsZT1cXFwiYm90dG9tOiAtNjBweFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwPnt7aW1hZ2UuY2FwdGlvblRleHR9fTwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwPiZuYnNwOzwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvc2xpZGU+XFxyXFxuICAgIDwvY2Fyb3VzZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uZ2Nhcm91c2VsL25nY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBQcml2YWN5Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFByaXZhY3lDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJpdmFjeUNvbXBvbmVudDtcclxufSgpKTtcclxuUHJpdmFjeUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdwcml2YWN5JyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9wcml2YWN5LmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pXHJcbl0sIFByaXZhY3lDb21wb25lbnQpO1xyXG5leHBvcnRzLlByaXZhY3lDb21wb25lbnQgPSBQcml2YWN5Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcml2YWN5LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuXFxyXFxuPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInFsLWFsaWduLWNlbnRlclxcXCI+PHN0cm9uZz5Qcml2YWN5IFBvbGljeTwvc3Ryb25nPjwvcD48cD48YnI+PC9wPjxwPlByb3RlY3RpbmcgeW91ciBwcml2YXRlIGluZm9ybWF0aW9uIGlzIG91ciBwcmlvcml0eS4gVGhpcyBTdGF0ZW1lbnQgb2YgUHJpdmFjeSBhcHBsaWVzIHRvIHRoZSBodHRwOi8vd3d3LnRoZWhhbGVzYW5nZWxzLmNvbSBhbmQgRHJhZ29ubWlyIERldmVsb3BtZW50IGFuZCBnb3Zlcm5zIGRhdGEgY29sbGVjdGlvbiBhbmQgdXNhZ2UuIEZvciB0aGUgcHVycG9zZXMgb2YgdGhpcyBQcml2YWN5IFBvbGljeSwgdW5sZXNzIG90aGVyd2lzZSBub3RlZCwgYWxsIHJlZmVyZW5jZXMgdG8gRHJhZ29ubWlyIERldmVsb3BtZW50IGluY2x1ZGUgaHR0cDovL3d3dy50aGVoYWxlc2FuZ2Vscy5jb20sIFRoZSBIYWxlcyBBbmdlbHMsIGh0dHA6Ly93d3cudGhlaGFsZXNhbmdlbHMuY29tIGFuZCBodHRwOi8vbWdsYXl0b24uZHJhZ29ubWlyZGV2LmNvbS4gVGhlIERyYWdvbm1pciBEZXZlbG9wbWVudCB3ZWJzaXRlIGlzIGEgbmV3cyBhbmQgaW5mb3JtYXRpb24gc2l0ZS4gQnkgdXNpbmcgdGhlIERyYWdvbm1pciBEZXZlbG9wbWVudCB3ZWJzaXRlLCB5b3UgY29uc2VudCB0byB0aGUgZGF0YSBwcmFjdGljZXMgZGVzY3JpYmVkIGluIHRoaXMgc3RhdGVtZW50LjwvcD48cD48YnI+PC9wPjxwPjxzdHJvbmc+Q29sbGVjdGlvbiBvZiB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uPC9zdHJvbmc+PC9wPjxwPkRyYWdvbm1pciBEZXZlbG9wbWVudCBtYXkgY29sbGVjdCBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiwgc3VjaCBhcyB5b3VyIG5hbWUuIFdlIG1heSBnYXRoZXIgYWRkaXRpb25hbCBwZXJzb25hbCBvciBub24tcGVyc29uYWwgaW5mb3JtYXRpb24gaW4gdGhlIGZ1dHVyZS48L3A+PHA+PGJyPjwvcD48cD5JbmZvcm1hdGlvbiBhYm91dCB5b3VyIGNvbXB1dGVyIGhhcmR3YXJlIGFuZCBzb2Z0d2FyZSBtYXkgYmUgYXV0b21hdGljYWxseSBjb2xsZWN0ZWQgYnkgRHJhZ29ubWlyIERldmVsb3BtZW50LiBUaGlzIGluZm9ybWF0aW9uIGNhbiBpbmNsdWRlOiB5b3VyIElQIGFkZHJlc3MsIGJyb3dzZXIgdHlwZSwgZG9tYWluIG5hbWVzLCBhY2Nlc3MgdGltZXMgYW5kIHJlZmVycmluZyB3ZWJzaXRlIGFkZHJlc3Nlcy4gVGhpcyBpbmZvcm1hdGlvbiBpcyB1c2VkIGZvciB0aGUgb3BlcmF0aW9uIG9mIHRoZSBzZXJ2aWNlLCB0byBtYWludGFpbiBxdWFsaXR5IG9mIHRoZSBzZXJ2aWNlLCBhbmQgdG8gcHJvdmlkZSBnZW5lcmFsIHN0YXRpc3RpY3MgcmVnYXJkaW5nIHVzZSBvZiB0aGUgRHJhZ29ubWlyIERldmVsb3BtZW50IHdlYnNpdGUuPC9wPjxwPjxicj48L3A+PHA+UGxlYXNlIGtlZXAgaW4gbWluZCB0aGF0IGlmIHlvdSBkaXJlY3RseSBkaXNjbG9zZSBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBvciBwZXJzb25hbGx5IHNlbnNpdGl2ZSBkYXRhIHRocm91Z2ggRHJhZ29ubWlyIERldmVsb3BtZW50J3MgcHVibGljIG1lc3NhZ2UgYm9hcmRzLCB0aGlzIGluZm9ybWF0aW9uIG1heSBiZSBjb2xsZWN0ZWQgYW5kIHVzZWQgYnkgb3RoZXJzLjwvcD48cD48YnI+PC9wPjxwPkRyYWdvbm1pciBEZXZlbG9wbWVudCBlbmNvdXJhZ2VzIHlvdSB0byByZXZpZXcgdGhlIHByaXZhY3kgc3RhdGVtZW50cyBvZiB3ZWJzaXRlcyB5b3UgY2hvb3NlIHRvIGxpbmsgdG8gZnJvbSBEcmFnb25taXIgRGV2ZWxvcG1lbnQgc28gdGhhdCB5b3UgY2FuIHVuZGVyc3RhbmQgaG93IHRob3NlIHdlYnNpdGVzIGNvbGxlY3QsIHVzZSBhbmQgc2hhcmUgeW91ciBpbmZvcm1hdGlvbi4gRHJhZ29ubWlyIERldmVsb3BtZW50IGlzIG5vdCByZXNwb25zaWJsZSBmb3IgdGhlIHByaXZhY3kgc3RhdGVtZW50cyBvciBvdGhlciBjb250ZW50IG9uIHdlYnNpdGVzIG91dHNpZGUgb2YgdGhlIERyYWdvbm1pciBEZXZlbG9wbWVudCB3ZWJzaXRlLjwvcD48cD48YnI+PC9wPjxwPjxzdHJvbmc+VXNlIG9mIHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24gPC9zdHJvbmc+PC9wPjxwPkRyYWdvbm1pciBEZXZlbG9wbWVudCBjb2xsZWN0cyBhbmQgdXNlcyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvIG9wZXJhdGUgaXRzIHdlYnNpdGUocykgYW5kIGRlbGl2ZXIgdGhlIHNlcnZpY2VzIHlvdSBoYXZlIHJlcXVlc3RlZC48L3A+PHA+PGJyPjwvcD48cD5EcmFnb25taXIgRGV2ZWxvcG1lbnQgbWF5IGFsc28gdXNlIHlvdXIgcGVyc29uYWxseSBpZGVudGlmaWFibGUgaW5mb3JtYXRpb24gdG8gaW5mb3JtIHlvdSBvZiBvdGhlciBwcm9kdWN0cyBvciBzZXJ2aWNlcyBhdmFpbGFibGUgZnJvbSBEcmFnb25taXIgRGV2ZWxvcG1lbnQgYW5kIGl0cyBhZmZpbGlhdGVzLiBEcmFnb25taXIgRGV2ZWxvcG1lbnQgbWF5IGFsc28gY29udGFjdCB5b3UgdmlhIHN1cnZleXMgdG8gY29uZHVjdCByZXNlYXJjaCBhYm91dCB5b3VyIG9waW5pb24gb2YgY3VycmVudCBzZXJ2aWNlcyBvciBvZiBwb3RlbnRpYWwgbmV3IHNlcnZpY2VzIHRoYXQgbWF5IGJlIG9mZmVyZWQuPC9wPjxwPjxicj48L3A+PHA+RHJhZ29ubWlyIERldmVsb3BtZW50IGRvZXMgbm90IHNlbGwsIHJlbnQgb3IgbGVhc2UgaXRzIGN1c3RvbWVyIGxpc3RzIHRvIHRoaXJkIHBhcnRpZXMuPC9wPjxwPjxicj48L3A+PHA+RHJhZ29ubWlyIERldmVsb3BtZW50IG1heSBzaGFyZSBkYXRhIHdpdGggdHJ1c3RlZCBwYXJ0bmVycyB0byBoZWxwIHBlcmZvcm0gc3RhdGlzdGljYWwgYW5hbHlzaXMsIHNlbmQgeW91IGVtYWlsIG9yIHBvc3RhbCBtYWlsLCBwcm92aWRlIGN1c3RvbWVyIHN1cHBvcnQsIG9yIGFycmFuZ2UgZm9yIGRlbGl2ZXJpZXMuIEFsbCBzdWNoIHRoaXJkIHBhcnRpZXMgYXJlIHByb2hpYml0ZWQgZnJvbSB1c2luZyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGV4Y2VwdCB0byBwcm92aWRlIHRoZXNlIHNlcnZpY2VzIHRvIERyYWdvbm1pciBEZXZlbG9wbWVudCwgYW5kIHRoZXkgYXJlIHJlcXVpcmVkIHRvIG1haW50YWluIHRoZSBjb25maWRlbnRpYWxpdHkgb2YgeW91ciBpbmZvcm1hdGlvbi48L3A+PHA+PGJyPjwvcD48cD5EcmFnb25taXIgRGV2ZWxvcG1lbnQgd2lsbCBkaXNjbG9zZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLCB3aXRob3V0IG5vdGljZSwgb25seSBpZiByZXF1aXJlZCB0byBkbyBzbyBieSBsYXcgb3IgaW4gdGhlIGdvb2QgZmFpdGggYmVsaWVmIHRoYXQgc3VjaCBhY3Rpb24gaXMgbmVjZXNzYXJ5IHRvOiAoYSkgY29uZm9ybSB0byB0aGUgZWRpY3RzIG9mIHRoZSBsYXcgb3IgY29tcGx5IHdpdGggbGVnYWwgcHJvY2VzcyBzZXJ2ZWQgb24gRHJhZ29ubWlyIERldmVsb3BtZW50IG9yIHRoZSBzaXRlOyAoYikgcHJvdGVjdCBhbmQgZGVmZW5kIHRoZSByaWdodHMgb3IgcHJvcGVydHkgb2YgRHJhZ29ubWlyIERldmVsb3BtZW50OyBhbmQsIChjKSBhY3QgdW5kZXIgZXhpZ2VudCBjaXJjdW1zdGFuY2VzIHRvIHByb3RlY3QgdGhlIHBlcnNvbmFsIHNhZmV0eSBvZiB1c2VycyBvZiBEcmFnb25taXIgRGV2ZWxvcG1lbnQsIG9yIHRoZSBwdWJsaWMuPC9wPjxwPjxicj48L3A+PHA+PHN0cm9uZz5TZWN1cml0eSBvZiB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uPC9zdHJvbmc+PC9wPjxwPjxicj48L3A+PHA+PGJyPjwvcD48cD5EcmFnb25taXIgRGV2ZWxvcG1lbnQgc2VjdXJlcyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gdW5hdXRob3JpemVkIGFjY2VzcywgdXNlIG9yIGRpc2Nsb3N1cmUuPC9wPjxwPjxicj48L3A+PHA+PGJyPjwvcD48cD48c3Ryb25nPkNoaWxkcmVuIFVuZGVyIFRoaXJ0ZWVuPC9zdHJvbmc+PC9wPjxwPkRyYWdvbm1pciBEZXZlbG9wbWVudCBkb2VzIG5vdCBrbm93aW5nbHkgY29sbGVjdCBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuIHVuZGVyIHRoZSBhZ2Ugb2YgdGhpcnRlZW4uIElmIHlvdSBhcmUgdW5kZXIgdGhlIGFnZSBvZiB0aGlydGVlbiwgeW91IG11c3QgYXNrIHlvdXIgcGFyZW50IG9yIGd1YXJkaWFuIGZvciBwZXJtaXNzaW9uIHRvIHVzZSB0aGlzIHdlYnNpdGUuPC9wPjxwPjxicj48L3A+PHA+PHN0cm9uZz5EaXNjb25uZWN0aW5nIHlvdXIgRHJhZ29ubWlyIERldmVsb3BtZW50IEFjY291bnQgZnJvbSBUaGlyZCBQYXJ0eSBXZWJzaXRlczwvc3Ryb25nPjwvcD48cD5Zb3Ugd2lsbCBiZSBhYmxlIHRvIGNvbm5lY3QgeW91ciBEcmFnb25taXIgRGV2ZWxvcG1lbnQgYWNjb3VudCB0byB0aGlyZCBwYXJ0eSBhY2NvdW50cy4gQlkgQ09OTkVDVElORyBZT1VSIERSQUdPTk1JUiBERVZFTE9QTUVOVCBBQ0NPVU5UIFRPIFlPVVIgVEhJUkQgUEFSVFkgQUNDT1VOVCwgWU9VIEFDS05PV0xFREdFIEFORCBBR1JFRSBUSEFUIFlPVSBBUkUgQ09OU0VOVElORyBUTyBUSEUgQ09OVElOVU9VUyBSRUxFQVNFIE9GIElORk9STUFUSU9OIEFCT1VUIFlPVSBUTyBPVEhFUlMgKElOIEFDQ09SREFOQ0UgV0lUSCBZT1VSIFBSSVZBQ1kgU0VUVElOR1MgT04gVEhPU0UgVEhJUkQgUEFSVFkgU0lURVMpLiBJRiBZT1UgRE8gTk9UIFdBTlQgSU5GT1JNQVRJT04gQUJPVVQgWU9VLCBJTkNMVURJTkcgUEVSU09OQUxMWSBJREVOVElGWUlORyBJTkZPUk1BVElPTiwgVE8gQkUgU0hBUkVEIElOVEhJUyBNQU5ORVIsIERPIE5PVCBVU0UgVEhFIFRISVMgRkVBVFVSRS4gWW91IG1heSBkaXNjb25uZWN0IHlvdXIgYWNjb3VudCBmcm9tIGEgdGhpcmQgcGFydHkgYWNjb3VudCBhdCBhbnkgdGltZS4gVXNlcnMgY2FuIGRlbnkgYWNjZXNzIHRvIG15IHNpdGUgZnJvbSB0aGVpciBGYWNlYm9vayBhY2NvdW50Li48L3A+PHA+PGJyPjwvcD48cD48c3Ryb25nPk9wdC1PdXQgJmFtcDsgVW5zdWJzY3JpYmU8L3N0cm9uZz48L3A+PHA+V2UgcmVzcGVjdCB5b3VyIHByaXZhY3kgYW5kIGdpdmUgeW91IGFuIG9wcG9ydHVuaXR5IHRvIG9wdC1vdXQgb2YgcmVjZWl2aW5nIGFubm91bmNlbWVudHMgb2YgY2VydGFpbiBpbmZvcm1hdGlvbi4gVXNlcnMgbWF5IG9wdC1vdXQgb2YgcmVjZWl2aW5nIGFueSBvciBhbGwgY29tbXVuaWNhdGlvbnMgZnJvbSBEcmFnb25taXIgRGV2ZWxvcG1lbnQgYnkgY2hhbmdpbmcgeW91ciBwcmVmZXJlbmNlIGZvcm0geW91ciBwcm9maWxlLjwvcD48cD48YnI+PC9wPjxwPjxzdHJvbmc+Q2hhbmdlcyB0byB0aGlzIFN0YXRlbWVudDwvc3Ryb25nPjwvcD48cD5EcmFnb25taXIgRGV2ZWxvcG1lbnQgd2lsbCBvY2Nhc2lvbmFsbHkgdXBkYXRlIHRoaXMgU3RhdGVtZW50IG9mIFByaXZhY3kgdG8gcmVmbGVjdCBjb21wYW55IGFuZCBjdXN0b21lciBmZWVkYmFjay4gRHJhZ29ubWlyIERldmVsb3BtZW50IGVuY291cmFnZXMgeW91IHRvIHBlcmlvZGljYWxseSByZXZpZXcgdGhpcyBTdGF0ZW1lbnQgdG8gYmUgaW5mb3JtZWQgb2YgaG93IERyYWdvbm1pciBEZXZlbG9wbWVudCBpcyBwcm90ZWN0aW5nIHlvdXIgaW5mb3JtYXRpb24uPC9wPjxwPjxicj48L3A+PHA+RWZmZWN0aXZlIGFzIG9mIERlY2VtYmVyIDE0LCAyMDE2PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgdXNlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgbmcyX2Jvb3RzdHJhcF8xID0gcmVxdWlyZShcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiKTtcclxudmFyIFByb2ZpbGVDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUHJvZmlsZUNvbXBvbmVudCh1c2VyU2VydmljZSwgcm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgUHJvZmlsZUNvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgUHJvZmlsZUNvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0aGlzLnVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW47XHJcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy51c2VyU2VydmljZS51c2VyO1xyXG4gICAgICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbiA9IHRoaXMudXNlclNlcnZpY2UudXNlck9iamVjdENoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnVzZXIgPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQcm9maWxlQ29tcG9uZW50LnByb3RvdHlwZS5uZ0FmdGVyVmlld0luaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9naW5Nb2RhbCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbk1vZGFsLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUHJvZmlsZUNvbXBvbmVudC5wcm90b3R5cGUuZGlzbWlzc0xvZ2luTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICAgIH07XHJcbiAgICBQcm9maWxlQ29tcG9uZW50LnByb3RvdHlwZS5zYXZlUHJvZmlsZSA9IGZ1bmN0aW9uIChmb3JtKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnVzZXIucmVjZWl2ZU5vdGlmaWNhdGlvbnMgPSBmb3JtLm5vdGlmaWNhdGlvbnM7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5zYXZlUHJvZmlsZSh0aGlzLnVzZXIpLmNvbnN0cnVjdG9yKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMudXNlciA9IHJlcztcclxuICAgICAgICAgICAgX3RoaXMucHJvZmlsZU1vZGFsLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFByb2ZpbGVDb21wb25lbnQ7XHJcbn0oKSk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLlZpZXdDaGlsZCgncHJvZmlsZU1vZGFsJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsRGlyZWN0aXZlKVxyXG5dLCBQcm9maWxlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJwcm9maWxlTW9kYWxcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuVmlld0NoaWxkKCdsb2dpbk1vZGFsJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgbmcyX2Jvb3RzdHJhcF8xLk1vZGFsRGlyZWN0aXZlKVxyXG5dLCBQcm9maWxlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJsb2dpbk1vZGFsXCIsIHZvaWQgMCk7XHJcblByb2ZpbGVDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAncHJvZmlsZScsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdXNlcl9zZXJ2aWNlXzEuVXNlclNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlcl0pXHJcbl0sIFByb2ZpbGVDb21wb25lbnQpO1xyXG5leHBvcnRzLlByb2ZpbGVDb21wb25lbnQgPSBQcm9maWxlQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9maWxlLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj48aDI+UHJvZmlsZTwvaDI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiAqbmdJZj1cXFwiIWlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgWW91IG11c3QgYmUgbG9nZ2VkIGluIHRvIGFjY2VzcyB0aGlzIHBhZ2UuXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiAqbmdJZj1cXFwiaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJzYXZlUHJvZmlsZShmb3JtLnZhbHVlKTsgZm9ybS5yZXNldCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Rmlyc3QgTmFtZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7dXNlci5maXJzdE5hbWV9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5MYXN0IE5hbWU6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e3VzZXIubGFzdE5hbWV9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5FbWFpbDo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7dXNlci5lbWFpbEFkZHJlc3N9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5MYXN0IExvZ2dlZCBJbjo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7dXNlci5sYXN0TG9nZ2VkSW5EdCB8IGZvcm1hdERhdGU6ICdNTS9ERC9ZWVlZIGhoOm1tIEEnIH19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkV4dGVybmFsIExvZ2luIFR5cGU6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e3VzZXIuZXh0ZXJuYWxUeXBlfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UmVjZWl2ZSBOb3RpZmljYXRpb25zOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3t1c2VyLnJlY2VpdmVOb3RpZmljYXRpb25zIHwgeWVzTm86ICd5ZXNObyd9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNvbC1zbS04PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwibm90aWZpY2F0aW9uc1xcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIucmVjZWl2ZU5vdGlmaWNhdGlvbnNcXFwiIC8+PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zYXZlXFxcIj48L3NwYW4+IFNhdmUgQ2hhbmdlc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAmbmJzcDtcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGJzTW9kYWwgI3Byb2ZpbGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcInByb2ZpbGVNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5DaGFuZ2VzIFNhdmVkIFN1Y2Nlc3NmdWxseTwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIENoYW5nZXMgdG8geW91ciBwcm9maWxlIGhhdmUgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNsb2dpbk1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiAob25IaWRlKT1cXFwiZGlzbWlzc0xvZ2luTW9kYWwoKVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImxvZ2luTW9kYWwuaGlkZSgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RXJyb3I8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBZb3UgbXVzdCBiZSBsb2dnZWQgaW4gdG8gYWNjZXNzIHRoaXMgcGFnZS4gUGxlYXNlIGxvZ2luLlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGltYWdlX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlXCIpO1xyXG52YXIgc2V0dGluZ19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgbmcyX2Jvb3RzdHJhcF8xID0gcmVxdWlyZShcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiKTtcclxudmFyIHNldHRpbmdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9tb2RlbHMvc2V0dGluZy5tb2RlbFwiKTtcclxudmFyIFNldHRpbmdDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2V0dGluZ0NvbXBvbmVudChzZXR0aW5nU2VydmljZSwgaW1hZ2VTZXJ2aWNlLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlID0gc2V0dGluZ1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UgPSBpbWFnZVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJTZXR0aW5nID0ge307XHJcbiAgICAgICAgdGhpcy5jb2RlU2V0dGluZyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc2V0dGluZyA9IG5ldyBzZXR0aW5nX21vZGVsXzEuU2V0dGluZygpO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSAnJztcclxuICAgICAgICB0aGlzLmltYWdlSWQgPSAwO1xyXG4gICAgICAgIHRoaXMuZmJBID0gJyc7XHJcbiAgICAgICAgdGhpcy5mYlMgPSAnJztcclxuICAgICAgICB0aGlzLmZiUCA9ICcnO1xyXG4gICAgfVxyXG4gICAgU2V0dGluZ0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwMSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgX3RoaXMuZmJBID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwMikuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgX3RoaXMuZmJTID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwMykuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgX3RoaXMuZmJQID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBoZWxsbygpXHJcbiAgICAgICAgICAgIC5pbml0KHtcclxuICAgICAgICAgICAgZmFjZWJvb2s6IHRoaXMuZmJBXHJcbiAgICAgICAgfSwgeyBzY29wZTogJ3B1Ymxpc2hfcGFnZXMsbWFuYWdlX3BhZ2VzLHVzZXJfcGhvdG9zJyB9KTtcclxuICAgICAgICBoZWxsbygnZmFjZWJvb2snKVxyXG4gICAgICAgICAgICAuYXBpKCcvbWUvYWNjb3VudHMnLCAnZ2V0JylcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gcmVzLmRhdGE7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFnZSA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlkID09PSBfdGhpcy5mYlApIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hY2Nlc3NUb2tlbiA9IHBhZ2UuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5ncygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgX3RoaXMuaGVhZGVyU2V0dGluZyA9IHhbMF0sIF90aGlzLmNvZGVTZXR0aW5nID0geFsxXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTZXR0aW5nQ29tcG9uZW50LnByb3RvdHlwZS5zYXZlUHJvZmlsZSA9IGZ1bmN0aW9uIChmb3JtKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnNldHRpbmcuaGVhZGVySWQgPSBmb3JtLmhlYWRlcklkO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZy5jb2RlSWQgPSBmb3JtLmNvZGVJZDtcclxuICAgICAgICB0aGlzLnNldHRpbmcuY29kZSA9IGZvcm0uY29kZTtcclxuICAgICAgICBoZWxsbygnZmFjZWJvb2snKS5sb2dpbih7IHNjb3BlOiAncHVibGlzaF9wYWdlcyxtYW5hZ2VfcGFnZXMsdXNlcl9waG90b3MnIH0pO1xyXG4gICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgIC5hcGkoJy8xNjAxMzE3MzEzNTEwNjIyL3Bob3RvcycsICdwb3N0Jywge1xyXG4gICAgICAgICAgICBmaWxlOiBmb3JtLmltYWdlLFxyXG4gICAgICAgICAgICB0b2tlbjogdGhpcy5hY2Nlc3NUb2tlblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW1hZ2VJZCA9IHJlc3VsdC5pZDtcclxuICAgICAgICAgICAgaGVsbG8oJ2ZhY2Vib29rJylcclxuICAgICAgICAgICAgICAgIC5hcGkoJ3RoZWhhbGVzYW5nZWxzcGFnZS9hbGJ1bXMnLCB7XHJcbiAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiAncGhvdG9ze3NvdXJjZX0nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHguaWQgPT09ICcxNjAxMzE3MzEzNTEwNjIyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LnBob3Rvcy5kYXRhLmZvckVhY2goZnVuY3Rpb24gKHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5LmlkID09PSBfdGhpcy5pbWFnZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0dGluZy5pbWFnZSA9IHkuc291cmNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldHRpbmdTZXJ2aWNlLnNhdmVTZXR0aW5ncyhfdGhpcy5zZXR0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJvZmlsZU1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2V0dGluZ0NvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuVmlld0NoaWxkKCdwcm9maWxlTW9kYWwnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBuZzJfYm9vdHN0cmFwXzEuTW9kYWxEaXJlY3RpdmUpXHJcbl0sIFNldHRpbmdDb21wb25lbnQucHJvdG90eXBlLCBcInByb2ZpbGVNb2RhbFwiLCB2b2lkIDApO1xyXG5TZXR0aW5nQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ3NldHRpbmcnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NldHRpbmcuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3NldHRpbmdfc2VydmljZV8xLlNldHRpbmdTZXJ2aWNlLCBpbWFnZV9zZXJ2aWNlXzEuSW1hZ2VTZXJ2aWNlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG5dLCBTZXR0aW5nQ29tcG9uZW50KTtcclxuZXhwb3J0cy5TZXR0aW5nQ29tcG9uZW50ID0gU2V0dGluZ0NvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2V0dGluZy5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIFNldHRpbmcgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2V0dGluZygpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBTZXR0aW5nO1xyXG59KCkpO1xyXG5TZXR0aW5nID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5qZWN0YWJsZSgpXHJcbl0sIFNldHRpbmcpO1xyXG5leHBvcnRzLlNldHRpbmcgPSBTZXR0aW5nO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXR0aW5nLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvc2V0dGluZy5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXHJcXG4gICAgPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gI2Zvcm09XFxcIm5nRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwic2F2ZVByb2ZpbGUoZm9ybS52YWx1ZSk7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SGVhZGVyIEltYWdlOjwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJpbWFnZU1vZGFsLnNob3coKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBlbmNpbC1zcXVhcmUtb1xcXCI+PC9pPiZuYnNwO1VwZGF0ZSBJbWFnZTwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImltYWdlXFxcIiBbKG5nTW9kZWwpXT1cXFwiaW1hZ2VTZXJ2aWNlLmhlYWRlclxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImhlYWRlcklkXFxcIiBbKG5nTW9kZWwpXT1cXFwiaGVhZGVyU2V0dGluZy5zZXR0aW5nSWRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgbmFtZT1cXFwiY29kZUlkXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29kZVNldHRpbmcuc2V0dGluZ0lkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiaW1hZ2VTZXJ2aWNlLmltYWdlVXJsID09PSAnJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJ7e2hlYWRlclNldHRpbmcuc2V0dGluZ1ZhbHVlfX1cXFwiIGhlaWdodD1cXFwiMjAwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImltYWdlU2VydmljZS5pbWFnZVVybCAhPT0gJydcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJpbWFnZVNlcnZpY2Uuc2FuaXRpemUoaW1hZ2VTZXJ2aWNlLmltYWdlVXJsKVxcXCIgaGVpZ2h0PVxcXCIyMDBcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj4mbmJzcDs8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNvZGU6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjb2RlXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29kZVNldHRpbmcuc2V0dGluZ1ZhbHVlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zYXZlXFxcIj48L3NwYW4+IFNhdmUgQ2hhbmdlc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgYnNNb2RhbCAjcHJvZmlsZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcInByb2ZpbGVNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5DaGFuZ2VzIFNhdmVkIFN1Y2Nlc3NmdWxseTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIENoYW5nZXMgdG8gdGhlIHNldHRpbmdzIGhhdmUgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkuXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGJzTW9kYWwgI2ltYWdlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaW1hZ2VNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5VcGRhdGUgSW1hZ2U8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cC1ncm93bCBbdmFsdWVdPVxcXCJpbWFnZVNlcnZpY2UuaGVhZGVyTXNnc1xcXCI+PC9wLWdyb3dsPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAtZmlsZVVwbG9hZCBuYW1lPVxcXCJkZW1vW11cXFwiIHVybD1cXFwifi91cGxvYWRcXFwiIChvblVwbG9hZCk9XFxcImltYWdlU2VydmljZS5vbkhlYWRlclVwbG9hZCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVxcXCJpbWFnZS8qXFxcIiBhdXRvPVxcXCJhdXRvXFxcIiBtYXhGaWxlU2l6ZT1cXFwiNDAwMDAwMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3AtZmlsZVVwbG9hZD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgdXNlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCIpO1xyXG52YXIgVXNlckxpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVXNlckxpc3RDb21wb25lbnQodXNlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy51c2VycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNTeXN0ZW1BZG1pbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29uZmlybVRleHQgPSAnPGkgY2xhc3M9XCJmYSBmYS1sZyBmYS10aHVtYnMtby11cFwiPjwvaT4mbmJzcDtZZXMnO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsVGV4dCA9ICc8aSBjbGFzcz1cImZhIGZhLWxnIGZhLXRodW1icy1vLWRvd25cIj48L2k+Jm5ic3A7Tm8nO1xyXG4gICAgICAgIHRoaXMudW5BcHByb3ZlVGl0bGUgPSAnTWFrZSBBZG1pbic7XHJcbiAgICAgICAgdGhpcy51bkFwcHJvdmVNZXNzYWdlID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gbWFrZSB0aGlzIHVzZXIgYW4gQWRtaW4/JztcclxuICAgICAgICB0aGlzLmFwcHJvdmVUaXRsZSA9ICdSZW1vdmUgQWRtaW4nO1xyXG4gICAgICAgIHRoaXMuYXBwcm92ZU1lc3NhZ2UgPSAnQXJlIHlvdSA8Yj5zdXJlPC9iPiB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyB1c2VycyBhZG1pbiBwZXJtaXNzaW9ucz8nO1xyXG4gICAgICAgIHRoaXMudW5BcHByb3ZlU3lzVGl0bGUgPSAnTWFrZSBTeXN0ZW0gQWRtaW4nO1xyXG4gICAgICAgIHRoaXMudW5BcHByb3ZlU3lzTWVzc2FnZSA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIG1ha2UgdGhpcyB1c2VyIGEgU3lzdGVtIEFkbWluPyc7XHJcbiAgICAgICAgdGhpcy5hcHByb3ZlU3lzVGl0bGUgPSAnUmVtb3ZlIFN5c3RlbSBBZG1pbic7XHJcbiAgICAgICAgdGhpcy5hcHByb3ZlU3lzTWVzc2FnZSA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIHVzZXJzIHN5c3RlbSBhZG1pbiBwZXJtaXNzaW9ucz8nO1xyXG4gICAgfVxyXG4gICAgVXNlckxpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfTtcclxuICAgIFVzZXJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0QXBwbGljYXRpb25Vc2VycygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHVzZXJzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnVzZXJzID0gdXNlcnM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5teVVzZXIgPSB0aGlzLnVzZXJTZXJ2aWNlLnVzZXI7XHJcbiAgICAgICAgdGhpcy51c2VyU3Vic2NyaXB0aW9uID0gdGhpcy51c2VyU2VydmljZS51c2VyT2JqZWN0Q2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgX3RoaXMubXlVc2VyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIF90aGlzLmlzU3lzdGVtQWRtaW4gPSB2YWx1ZS5pc1N5c3RlbUFkbWluO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVzZXJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5hcHByb3ZlVXNlciA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICAgICAgdXNlci5pc0FkbWluID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnNhdmVQcm9maWxlKHVzZXIpO1xyXG4gICAgfTtcclxuICAgIFVzZXJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS51bkFwcHJvdmVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICB1c2VyLmlzQWRtaW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnNhdmVQcm9maWxlKHVzZXIpO1xyXG4gICAgfTtcclxuICAgIFVzZXJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5hcHByb3ZlU3lzVXNlciA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICAgICAgdXNlci5pc1N5c3RlbUFkbWluID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnNhdmVQcm9maWxlKHVzZXIpO1xyXG4gICAgfTtcclxuICAgIFVzZXJMaXN0Q29tcG9uZW50LnByb3RvdHlwZS51bkFwcHJvdmVTeXNVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICB1c2VyLmlzU3lzdGVtQWRtaW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnNhdmVQcm9maWxlKHVzZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBVc2VyTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuVXNlckxpc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAndXNlci1saXN0JyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi91c2VybGlzdC5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdXNlcl9zZXJ2aWNlXzEuVXNlclNlcnZpY2VdKVxyXG5dLCBVc2VyTGlzdENvbXBvbmVudCk7XHJcbmV4cG9ydHMuVXNlckxpc3RDb21wb25lbnQgPSBVc2VyTGlzdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlcmxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlcmxpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGlkPVxcXCJ3cmFwcGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj4mbmJzcDs8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2Vycy5sZW5ndGggPCAxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsb2FkaW5nLWluZGljYXRvcj48L2xvYWRpbmctaW5kaWNhdG9yPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgKm5nSWY9XFxcInVzZXJzLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWZpeGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTMgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TmFtZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5FbWFpbCBBZGRyZXNzPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pkxhc3QgTG9nZ2VkIEluPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkFkbWluPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlN5cyBBZG1pbjwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk5vdGlmeT88L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHVzZXIgb2YgdXNlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dXNlci5maXJzdE5hbWV9fSB7e3VzZXIubGFzdE5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTMgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3VzZXIuZW1haWxBZGRyZXNzfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t1c2VyLmxhc3RMb2dnZWRJbkR0IHwgZm9ybWF0RGF0ZTogJ01NL0REL1lZWVkgaGg6bW0gQSd9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIiBwVG9vbHRpcD1cXFwie3t1c2VyLmlzQWRtaW4gfCB5ZXNObzogJ2FkbWluJyB9fVxcXCIgdG9vbHRpcFBvc2l0aW9uPVxcXCJ0b3BcXFwiICpuZ0lmPVxcXCJteVVzZXIuaXNTeXN0ZW1BZG1pblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInVzZXIuaXNBZG1pblxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJhcHByb3ZlVGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJhcHByb3ZlTWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlybVRleHRdPVxcXCJjb25maXJtVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsVGV4dF09XFxcImNhbmNlbFRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uZmlybSk9XFxcInVuQXBwcm92ZVVzZXIodXNlcilcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLXJlYmVsXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCIhdXNlci5pc0FkbWluXFxcIiByb2xlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdsQ29uZmlybWF0aW9uUG9wb3ZlclxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XFxcInVuQXBwcm92ZVRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwidW5BcHByb3ZlTWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlybVRleHRdPVxcXCJjb25maXJtVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsVGV4dF09XFxcImNhbmNlbFRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uZmlybSk9XFxcImFwcHJvdmVVc2VyKHVzZXIpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVHlwZT1cXFwiZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXBwZW5kVG9Cb2R5XT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1lbXBpcmVcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlciBib3JkZXItcmlnaHRcXFwiICpuZ0lmPVxcXCIhbXlVc2VyLmlzU3lzdGVtQWRtaW5cXFwiIHBUb29sdGlwPVxcXCJ7e3VzZXIuaXNBZG1pbiB8IHllc05vOiAnYWRtaW4nIH19XFxcIiB0b29sdGlwUG9zaXRpb249XFxcInRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInVzZXIuaXNBZG1pblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLXJlYmVsXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCIhdXNlci5pc0FkbWluXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtZW1waXJlXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIiAqbmdJZj1cXFwiIW15VXNlci5pc1N5c3RlbUFkbWluXFxcIiBwVG9vbHRpcD1cXFwie3t1c2VyLmlzU3lzdGVtQWRtaW4gfCB5ZXNObzogJ3N5c0FkbWluJyB9fVxcXCIgdG9vbHRpcFBvc2l0aW9uPVxcXCJ0b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJ1c2VyLmlzU3lzdGVtQWRtaW5cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1yZWJlbFxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwiIXVzZXIuaXNTeXN0ZW1BZG1pblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWVtcGlyZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCIgcFRvb2x0aXA9XFxcInt7dXNlci5pc1N5c3RlbUFkbWluIHwgeWVzTm86ICdzeXNBZG1pbicgfX1cXFwiIHRvb2x0aXBQb3NpdGlvbj1cXFwidG9wXFxcIiAqbmdJZj1cXFwibXlVc2VyLmlzU3lzdGVtQWRtaW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCJ1c2VyLmlzU3lzdGVtQWRtaW5cXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwiYXBwcm92ZVN5c1RpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwiYXBwcm92ZVN5c01lc3NhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVxcXCJwbGFjZW1lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJ1bkFwcHJvdmVTeXNVc2VyKHVzZXIpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVHlwZT1cXFwiZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXBwZW5kVG9Cb2R5XT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1yZWJlbFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiIXVzZXIuaXNTeXN0ZW1BZG1pblxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJ1bkFwcHJvdmVTeXNUaXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZV09XFxcInVuQXBwcm92ZVN5c01lc3NhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVxcXCJwbGFjZW1lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJhcHByb3ZlU3lzVXNlcih1c2VyKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVHlwZT1cXFwiZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblR5cGU9XFxcImRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtZW1waXJlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXJcXFwiIHBUb29sdGlwPVxcXCJ7e3VzZXIucmVjZWl2ZU5vdGlmaWNhdGlvbnMgfCB5ZXNObzogJ25vdGlmaWNhdGlvbicgfX1cXFwiIHRvb2x0aXBQb3NpdGlvbj1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwidXNlci5yZWNlaXZlTm90aWZpY2F0aW9uc1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLXJlYmVsXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCIhdXNlci5yZWNlaXZlTm90aWZpY2F0aW9uc1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWVtcGlyZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdXNlci91c2VybGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBpbWFnZV9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vc2VydmljZXMvaW1hZ2Uuc2VydmljZVwiKTtcclxudmFyIFZpZGVvUGxheWVyQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZpZGVvUGxheWVyQ29tcG9uZW50KGltYWdlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlID0gaW1hZ2VTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuc291cmNlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgVmlkZW9QbGF5ZXJDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc291cmNlcy5wdXNoKHRoaXMuaW1hZ2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWaWRlb1BsYXllckNvbXBvbmVudDtcclxufSgpKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIFZpZGVvUGxheWVyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpbWFnZVwiLCB2b2lkIDApO1xyXG5WaWRlb1BsYXllckNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICd2aWRlby1wbGF5ZXInLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3ZpZGVvcGxheWVyLmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtpbWFnZV9zZXJ2aWNlXzEuSW1hZ2VTZXJ2aWNlXSlcclxuXSwgVmlkZW9QbGF5ZXJDb21wb25lbnQpO1xyXG5leHBvcnRzLlZpZGVvUGxheWVyQ29tcG9uZW50ID0gVmlkZW9QbGF5ZXJDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZpZGVvcGxheWVyLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92aWRlby92aWRlb3BsYXllci5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8dmctcGxheWVyIHN0eWxlPVxcXCJ3aWR0aDogNTAlOyBoZWlnaHQ6IDQwMHB4XFxcIiBjbGFzcz1cXFwiZmx1aWQgY2VudGVyLWJsb2NrXFxcIj5cXHJcXG4gICAgPHZnLW92ZXJsYXktcGxheT48L3ZnLW92ZXJsYXktcGxheT5cXHJcXG4gICAgPHZnLWJ1ZmZlcmluZz48L3ZnLWJ1ZmZlcmluZz5cXHJcXG5cXHJcXG4gICAgPHZnLXNjcnViLWJhcj5cXHJcXG4gICAgICAgIDx2Zy1zY3J1Yi1iYXItY3VycmVudC10aW1lPjwvdmctc2NydWItYmFyLWN1cnJlbnQtdGltZT5cXHJcXG4gICAgICAgIDx2Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWU+PC92Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWU+XFxyXFxuICAgIDwvdmctc2NydWItYmFyPlxcclxcblxcclxcbiAgICA8dmctY29udHJvbHM+XFxyXFxuICAgICAgICA8dmctcGxheS1wYXVzZT48L3ZnLXBsYXktcGF1c2U+XFxyXFxuICAgICAgICA8dmctcGxheWJhY2stYnV0dG9uPjwvdmctcGxheWJhY2stYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgPHZnLXRpbWUtZGlzcGxheSB2Z1Byb3BlcnR5PVxcXCJjdXJyZW50XFxcIiB2Z0Zvcm1hdD1cXFwibW06c3NcXFwiPjwvdmctdGltZS1kaXNwbGF5PlxcclxcblxcclxcbiAgICAgICAgPHZnLXNjcnViLWJhciBzdHlsZT1cXFwicG9pbnRlci1ldmVudHM6IG5vbmU7XFxcIj48L3ZnLXNjcnViLWJhcj5cXHJcXG5cXHJcXG4gICAgICAgIDx2Zy10aW1lLWRpc3BsYXkgdmdQcm9wZXJ0eT1cXFwibGVmdFxcXCIgdmdGb3JtYXQ9XFxcIm1tOnNzXFxcIj48L3ZnLXRpbWUtZGlzcGxheT5cXHJcXG4gICAgICAgIDx2Zy10aW1lLWRpc3BsYXkgdmdQcm9wZXJ0eT1cXFwidG90YWxcXFwiIHZnRm9ybWF0PVxcXCJtbTpzc1xcXCI+PC92Zy10aW1lLWRpc3BsYXk+XFxyXFxuXFxyXFxuICAgICAgICA8dmctbXV0ZT48L3ZnLW11dGU+XFxyXFxuICAgIDwvdmctY29udHJvbHM+XFxyXFxuXFxyXFxuICAgIDx2aWRlbyB2Z01lZGlhICNtZWRpYSBpZD1cXFwic2luZ2xlVmlkZW9cXFwiIHByZWxvYWQ9XFxcImF1dG9cXFwiIGNyb3Nzb3JpZ2luIGNsYXNzPVxcXCJmbHVpZCBjZW50ZXItYmxvY2tcXFwiPlxcclxcbiAgICAgICAgPHNvdXJjZSAqbmdGb3I9XFxcImxldCB2aWRlbyBvZiBzb3VyY2VzXFxcIiBbc3JjXT1cXFwiaW1hZ2VTZXJ2aWNlLnNhbml0aXplKHZpZGVvLmltYWdlVXJsKVxcXCIgdHlwZT1cXFwidmlkZW8vbXA0XFxcIj5cXHJcXG4gICAgPC92aWRlbz5cXHJcXG48L3ZnLXBsYXllcj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZpZGVvL3ZpZGVvcGxheWVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgQm9vbGVhblBpcGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9vbGVhblBpcGUoKSB7XHJcbiAgICB9XHJcbiAgICBCb29sZWFuUGlwZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKGJvb2xlYW4sIHR5cGUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICd5ZXNObycpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gYm9vbGVhbiA/ICdZZXMnIDogJ05vJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdhcHByb3ZlZCcpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gYm9vbGVhbiA/ICdBcHByb3ZlZCcgOiAnVW4tQXBwcm92ZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3JlYWRVbnJlYWQnKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGJvb2xlYW4gPyAnVW5yZWFkJyA6ICdSZWFkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICd2aXNpYmxlJykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBib29sZWFuID8gJ1Zpc2libGUnIDogJ0hpZGRlbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGJvb2xlYW4gPyAnQWRtaW4nIDogJ05vbi1BZG1pbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSAnc3lzQWRtaW4nKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGJvb2xlYW4gPyAnU3lzdGVtIEFkbWluJyA6ICdOb24tU3lzdGVtIEFkbWluJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdub3RpZmljYXRpb24nKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGJvb2xlYW4gPyAnR2V0cyBOb3RpZmllZCcgOiAnRG9lcyBub3QgZ2V0IE5vdGlmaWVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm9vbGVhblBpcGU7XHJcbn0oKSk7XHJcbkJvb2xlYW5QaXBlID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuUGlwZSh7XHJcbiAgICAgICAgbmFtZTogJ3llc05vJ1xyXG4gICAgfSlcclxuXSwgQm9vbGVhblBpcGUpO1xyXG5leHBvcnRzLkJvb2xlYW5QaXBlID0gQm9vbGVhblBpcGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXllc05vLnBpcGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3BpcGVzL3llc05vLnBpcGUuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xyXG52YXIgRGF0ZVBpcGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRGF0ZVBpcGUoKSB7XHJcbiAgICB9XHJcbiAgICBEYXRlUGlwZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKGRhdGUsIGFyZ3MsIHRyYW5zZm9ybSkge1xyXG4gICAgICAgIGlmICh0cmFuc2Zvcm0gPT09IHZvaWQgMCkgeyB0cmFuc2Zvcm0gPSB0cnVlOyB9XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICBpZiAodHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIGQuc2V0TWludXRlcyhkLmdldE1pbnV0ZXMoKSArIGQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZCkuZm9ybWF0KGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkKS5mb3JtYXQoYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBEYXRlUGlwZTtcclxufSgpKTtcclxuRGF0ZVBpcGUgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5QaXBlKHtcclxuICAgICAgICBuYW1lOiAnZm9ybWF0RGF0ZSdcclxuICAgIH0pXHJcbl0sIERhdGVQaXBlKTtcclxuZXhwb3J0cy5EYXRlUGlwZSA9IERhdGVQaXBlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXREYXRlLnBpcGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3BpcGVzL2Zvcm1hdERhdGUucGlwZS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=