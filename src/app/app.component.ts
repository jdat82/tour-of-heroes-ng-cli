import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import HeroActions from './core/hero/hero.action';
import { Store } from '@ngrx/store';
import { AppState } from './core/root.reducer';

@Component({
  selector:'app',
  styleUrls:['./app.component.scss'],
  templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit {

  routes:Object[] = [{
    title:'Crisis',
    route:'/crisis-center',
    icon:'',
  }, {
    title:'Heroes',
    route:'/heroes',
    icon:'',
  }, {
    title:'Admin',
    route:'/admin',
    icon:'',
  }, {
    title:'Login',
    route:'/login',
    icon:'',
  }];

  constructor(private store:Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(HeroActions.loadHeroes());
  }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
