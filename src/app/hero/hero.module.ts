import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailFormComponent } from './hero-detail-form.component';
import { CovalentCoreModule } from '@covalent/core';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    CovalentCoreModule,
    HeroRoutingModule
  ],
  declarations:[
    HeroListComponent,
    HeroDetailComponent,
    HeroDetailFormComponent
  ],
  providers:[
    HeroService
  ]
})
export class HeroModule {
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
