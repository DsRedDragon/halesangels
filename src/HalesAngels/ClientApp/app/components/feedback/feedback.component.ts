
import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service'
import { CommentService } from '../../services/comment.service'
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap'
import { AppUser } from '../../models/appUser.model';
import { Suggestion } from '../../models/suggestion.model';
import { SelectItem } from 'primeng/primeng';

@
    Component({
        selector: 'profile',
        template: require('./feedback.component.html')
    })
export class FeedbackComponent {
    @ViewChild('feedbackModal') public feedbackModal: ModalDirective;
    @ViewChild('loginModal') public loginModal: ModalDirective;

    user: AppUser;
    isLoggedIn = false;
    types: SelectItem[];
    suggestion = new Suggestion();

    userSubscription: Subscription;

    constructor(private userService: UserService, private router: Router, private commentService: CommentService) { }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

    ngOnInit(): void {

        this.isLoggedIn = this.userService.isLoggedIn;
        this.user = this.userService.user;

        this.userSubscription = this.userService.userObjectChange.subscribe((value) => {
            this.user = value;
        });

        if (this.isLoggedIn) {
            this.commentService.getSuggestionTypes()
                .subscribe(res => {
                    this.types = [];

                    res.forEach(result => {
                        this.types.push({ label: result.value, value: result.listEnumId });
                    });
                });

            this.suggestion.typeId = 0;
        }
    }

    ngAfterViewChecked() {
        if (!this.isLoggedIn) {
            if (this.loginModal !== undefined)
                this.loginModal.show();
        }
    }

    dismissLoginModal() {
        this.router.navigate(['/home']);
    }

    saveFeedback(form: any) {

        this.suggestion.applicationUserId = this.user.applicationUserId;
        this.suggestion.typeId = form.typeId;
        this.suggestion.value = form.feedback;

        this.commentService.insertFeedback(this.suggestion).subscribe(res => {
            this.feedbackModal.show();
        });

        return false;
    }

    dismissModal() {
        this.router.navigate(['/feedbackredirect']);
    }
}