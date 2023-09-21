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
var comment_service_1 = require("../../services/comment.service");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var suggestion_model_1 = require("../../models/suggestion.model");
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
        template: require('./feedback.component.html')
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, comment_service_1.CommentService])
], FeedbackComponent);
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=feedback.component.js.map