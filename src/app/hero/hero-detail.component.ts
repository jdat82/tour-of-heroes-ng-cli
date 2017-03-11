import "rxjs/add/operator/switchMap";
import { Component, OnInit, HostBinding, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Hero } from "../core/hero/hero.model";
import { slideInDownAnimation } from "../animations";
import { Store } from "@ngrx/store";
import HeroActions from "../core/hero/hero.action";
import { AppState } from "../root.reducer";
import { Observable } from "rxjs";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
  <h2>HEROES</h2>
  <div *ngIf="hero$ | async; let hero;">
    <h3>"{{ hero.name }}"</h3>
    <div>
      <label>Id: </label>{{ hero.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="goToHeroes()">Back</button>
    </p>
  </div>
  `,
  animations:[slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  hero$:Observable<Hero>;

  private paramsSub = null;

  constructor(private route:ActivatedRoute, private router:Router, private store:Store<AppState>) {
    this.hero$ = this.store.select('hero');
  }

  ngOnInit() {
    // (+) converts string 'id' to a number
    this.paramsSub = this.route.params.subscribe((params:Params) => {
      this.store.dispatch(HeroActions.getHero(params['id']))
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  goToHeroes() {
    this.hero$.take(1).subscribe(hero => {
      // Pass along the hero id if available
      // so that the HeroList component can select that hero.
      // Include a junk 'foo' property for fun.
      this.router.navigate(['/heroes', {id:hero.id, foo:'foo'}]);
    });
  }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
