import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Hero } from "../core/hero/hero.model";
import { AppState } from "../root.reducer";

@Component({
  template:`
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes$ | async"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>

    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class HeroListComponent {

  public heroes$:Observable<Hero[]>;

  private selectedId:number;

  constructor(private store:Store<AppState>,
              private route:ActivatedRoute,
              private router:Router) {
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