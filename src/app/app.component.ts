import { Component, OnInit } from '@angular/core';
import HeroActions from "./core/hero/hero.action";
import { Store } from "@ngrx/store";
import { AppState } from "./root.reducer";

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Angular Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent implements  OnInit {

  constructor(private store:Store<AppState>){}

  ngOnInit(){
    this.store.dispatch(HeroActions.loadHeroes());
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
