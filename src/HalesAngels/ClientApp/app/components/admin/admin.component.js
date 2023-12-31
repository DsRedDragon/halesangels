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
        template: require('./admin.component.html')
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map