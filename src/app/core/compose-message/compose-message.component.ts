import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { slideInDownAnimation } from '../../animations';

@Component({
    changeDetection:ChangeDetectionStrategy.OnPush,
    templateUrl:'./compose-message.component.html',
    styles:[':host { position: fixed; bottom: 120px; right: 50px }'],
    animations:[slideInDownAnimation]
})
export class ComposeMessageComponent {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    details:string;
    sending:boolean = false;

    constructor(private router:Router) {}

    send() {
        this.sending = true;
        this.details = 'Sending Message...';

        setTimeout(() => {
            this.sending = false;
            this.closePopup();
        }, 1000);
    }

    cancel() {
        this.closePopup();
    }

    closePopup() {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate([{ outlets:{ popup:null } }]);
    }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
