import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Hero } from "../core/hero/hero.model";


let HEROES:Hero[] = [
  {id:11, name:'Mr. Nice'},
  {id:12, name:'Narco'},
  {id:13, name:'Bombasto'},
  {id:14, name:'Celeritas'},
  {id:15, name:'Magneta'},
  {id:16, name:'RubberMan'}
];

let heroes$ = Observable.of(HEROES);

@Injectable()
export class HeroService {

  getHeroes() {
    return heroes$;
  }

  getHero(id:number | string) {
    return heroes$
      .map((heroes:Hero[]) => heroes.find(hero => hero.id === +id));
  }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
