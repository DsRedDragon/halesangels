import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
})
export class NavMenuComponent implements OnInit {
    
    constructor(private userService: UserService) {  }

    ngOnInit(): void {
        this.userService.checkLogin();
    }
}
