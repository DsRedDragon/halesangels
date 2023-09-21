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
var image_service_1 = require("../../services/image.service");
var setting_service_1 = require("../../services/setting.service");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var setting_model_1 = require("../../models/setting.model");
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
        template: require('./setting.component.html')
    }),
    __metadata("design:paramtypes", [setting_service_1.SettingService, image_service_1.ImageService, router_1.Router])
], SettingComponent);
exports.SettingComponent = SettingComponent;
//# sourceMappingURL=setting.component.js.map