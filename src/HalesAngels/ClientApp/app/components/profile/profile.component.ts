
import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap'
import { AppUser } from '../../models/appUser.model';

@
    Component({
        selector: 'profile',
        template: require('./profile.component.html')
    })
export class ProfileComponent {
    @ViewChild('profileModal') public profileModal: ModalDirective;
    @ViewChild('loginModal') public loginModal: ModalDirective;

    user: AppUser;
    isLoggedIn = false;
    
    userSubscription: Subscription;

    constructor(private userService: UserService, private router: Router) { }
    
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

    ngOnInit(): void {
        
        this.isLoggedIn = this.userService.isLoggedIn;
        this.user = this.userService.user;
        
        this.userSubscription = this.userService.userObjectChange.subscribe((value) => {
            this.user = value;
        });
    }

    ngAfterViewInit() {
        if (!this.isLoggedIn) {
            if (this.loginModal !== undefined)
                this.loginModal.show();
        }
    }

    dismissLoginModal() {
        this.router.navigate(['/home']);
    }

    saveProfile(form: any) {
        this.user.receiveNotifications = form.notifications;
        this.userService.saveProfile(this.user).constructor(res => {
            this.user = res;
            this.profileModal.show();
        });
        
        return false;
    }
}