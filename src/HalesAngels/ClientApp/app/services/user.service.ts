import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AppUser } from '../models/appUser.model';
import { ExternalData } from '../models/externalData.model';
import { SettingService } from '../services/setting.service'

declare var hello: any;

@Injectable()
export class UserService {
    
    user: AppUser;
    myUser: AppUser;
    result: ExternalData;
    userInfoChanged: boolean = false;
    isLoggedIn = false;
    userId = 0;
    stateChange = new Subject<boolean>();
    userChange= new Subject<number>();
    userObjectChange = new Subject<AppUser>();
    fbResponse = {
        expires: 0
    };

    fbA = '';
    fbS = '';
    fbP = '';

    constructor(private http: Http, private router: Router, private settingService: SettingService) {

        this.settingService.getSetting(1001).subscribe(result => {
            this.fbA = result.settingValue;

            this.settingService.getSetting(1002).subscribe(result => {
                this.fbS = result.settingValue;
            });

            this.settingService.getSetting(1003).subscribe(result => {
                this.fbP = result.settingValue;

                hello()
                    .init({
                        facebook: this.fbA
                    },
                    { response_type: 'code' });
            });
        });
    }

    getUser(externalId) {
        return this.http.get(`/api/User/GetUserViewByExternalId?externalId=${externalId}`)
            .map(result => result.json());
    }

    getApplicationUsers() {
        return this.http.get('/api/User/GetApplicationUsers')
            .map(result => result.json());
    }

    getApplicationUsersForNotifications() {
        return this.http.get('/api/User/GetApplicationUsersForNotifications')
            .map(result => result.json());
    }

    saveProfile(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/User/UpdateUser?fromLogin=false',
                JSON.stringify(user),
                {
                    headers: headers
                })
            .map(res => res.json()).subscribe(result => {
                this.user = result;
                this.userId = result.applicationUserId;
                this.change();
            });
    }

    logout(): void {

        hello('facebook').logout().then(result => {
            this.router.navigate(['/home']);
            this.result = new ExternalData;
            this.user = undefined;
            this.change();
        });
    };

    login(): void {
        hello('facebook')
            .login({ scope: 'email,public_profile' })
            .then(result => {
                hello('facebook')
                    .api('/me', 'get')
                    .then(res => {
                        this.result = res;
                        this.saveUserDataFromExternal();
                    });
            });
    };

    checkLogin(): void {

        this.fbResponse = hello('facebook')
            .getAuthResponse();
        if (this.fbResponse != null) {

            var date1 = new Date(this.fbResponse.expires * 1000);
            var date2 = new Date(Date.now());
            if (date1 > date2) {
                hello('facebook')
                    .api('/me', 'get')
                    .then(res => {
                        this.result = res;
                        this.saveUserDataFromExternal();
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
    
    saveUserDataFromExternal() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.getUser(this.result.id)
            .subscribe(res => {
                this.myUser = res;
                this.myUser.emailAddress = this.result.email;
                this.myUser.firstName = this.result.first_name;
                this.myUser.lastName = this.result.last_name;
                this.myUser.externalId = this.result.id;

                this.http.post('/api/User/UpdateUser?fromLogin=true',
                        JSON.stringify(this.myUser),
                        {
                            headers: headers
                        })
                    .map(res => res.json())
                    .subscribe(result => {
                        this.user = result;
                        this.userId = result.applicationUserId;
                        this.change();
                    });
            });
    }

    change() {
        this.isLoggedIn = !this.isLoggedIn;
        this.userObjectChange.next(this.user);
        this.userChange.next(this.userId);
        this.stateChange.next(this.isLoggedIn);
    }
}