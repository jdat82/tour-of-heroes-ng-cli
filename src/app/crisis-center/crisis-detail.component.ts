import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { slideInDownAnimation } from '../animations';
import { Crisis } from './crisis.service';
import { DialogService } from '../core/dialog.service';

@Component({
    changeDetection:ChangeDetectionStrategy.OnPush,
    template:`
      <md-card *ngIf="crisis">
        <md-card-title>{{ editName }}</md-card-title>
        <md-card-content>
          <p><label>Id: </label>{{ crisis.id }}</p>
          <md-input-container>
            <input mdInput [(ngModel)]="editName" [value]="editName" placeholder="Name"/>
          </md-input-container>
        </md-card-content>
        <md-card-actions>
          <button md-button (click)="save()">Save</button>
          <button md-button (click)="cancel()">Cancel</button>
        </md-card-actions>
      </md-card>
    `,
    styles:['input {width: 20em}'],
    animations:[slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    crisis:Crisis;
    editName:string;

    constructor(private route:ActivatedRoute,
                private router:Router,
                public dialogService:DialogService) {}

    ngOnInit() {
        this.route.data
            .subscribe((data:{ crisis:Crisis }) => {
                this.editName = data.crisis.name;
                this.crisis = data.crisis;
            });
    }

    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    canDeactivate():Promise<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    }

    gotoCrises() {
        let crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the crisis id if available
        // so that the CrisisListComponent can select that crisis.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the crises
        this.router.navigate(['../', { id:crisisId, foo:'foo' }], { relativeTo:this.route });
    }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
