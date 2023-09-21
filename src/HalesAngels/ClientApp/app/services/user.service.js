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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var router_1 = require("@angular/router");
var externalData_model_1 = require("../models/externalData.model");
var setting_service_1 = require("../services/setting.service");
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