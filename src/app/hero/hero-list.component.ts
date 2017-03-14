import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Hero } from "../core/hero/hero.model";
import { AppState } from "../core/root.reducer";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes$ | async"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>`
})
export class HeroListComponent {

  heroes$:Observable<Hero[]>;

  private selectedId:number;

  constructor(private store:Store<AppState>, private router:Router) {
    this.heroes$ = this.store.select('heroList');
  }

  isSelected(hero:Hero) {
    return hero.id === this.selectedId;
  }

  onSelect(hero:Hero) {
    this.router.navigate(['/hero', hero.id]);
  }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
