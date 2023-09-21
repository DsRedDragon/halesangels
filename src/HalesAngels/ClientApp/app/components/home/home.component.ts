
import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@
    Component({
        selector: 'home',
        template: require('./home.component.html')
    })
export class HomeComponent {

    imageUrl = '';

    constructor(private settingService: SettingService) {

        this.settingService.getSetting(1)
            .subscribe(x => {
                this.imageUrl = x.settingValue;
            });
    }
}

