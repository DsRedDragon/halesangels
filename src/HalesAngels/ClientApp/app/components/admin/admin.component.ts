
import { Component, ViewChild, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';
import { AppUser } from '../../models/appUser.model';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@
    Component({
        selector: 'admin',
        template: require('./admin.component.html')
    })
export class AdminComponent implements OnInit {

    @ViewChild('loginModal') public loginModal: ModalDirective;


    user: AppUser;
    isLoggedIn = false;
    userSubscription: Subscription;
    stateSubscription: Subscription;

    constructor(private userService: UserService, private router: Router) { }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
        this.stateSubscription.unsubscribe();
    }

    ngOnInit(): void {

        this.isLoggedIn = this.userService.isLoggedIn;
        this.user = this.userService.user;

        this.stateSubscription = this.userService.stateChange.subscribe((value) => {
            this.isLoggedIn = value;
        });

        this.userSubscription = this.userService.userObjectChange.subscribe((value) => {
            this.user = value;
        });
    }

    ngAfterViewInit() {
        if (!this.isLoggedIn) {
            this.loginModal.show();
        }
    }

    dismissLoginModal() {
        this.router.navigate(['/home']);
    }

}

