import { Injectable } from '@angular/core';

@Injectable()
export class AppUser {
    applicationUserId: number;
    emailAddress: string;
    isAdmin: boolean;
    lastLoggedInDt: Date;
    isSystemAdmin: boolean;
    firstName: string;
    lastName: string;
    externalId: string;
    externalTypeId: number;
    receiveNotifications: boolean;
    externalLoginTypeName: string;
}