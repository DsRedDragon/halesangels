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
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
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
        template: require('./profile.component.html')
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map