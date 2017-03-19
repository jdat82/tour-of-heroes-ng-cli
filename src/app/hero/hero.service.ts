import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../core/hero/hero.model';
import { AppState } from '../core/root.reducer';
import { Store } from '@ngrx/store';


const HEROES:Hero[] = [
    { id:11, name:'Mr. Nice' },
    { id:12, name:'Narco' },
    { id:13, name:'Bombasto' },
    { id:14, name:'Celeritas' },
    { id:15, name:'Magneta' },
    { id:16, name:'RubberMan' }
];

const heroes$ = Observable.of(HEROES);

@Injectable()
export class HeroService {

    constructor(private store:Store<AppState>) {}

    // Simulate loading heroes from a backend.
    getHeroes() {
        return heroes$;
    }

    // Find a hero in the store.
    getHero(id:number | string) {
        return this.store.select('heroList')
            .map((heroes:Hero[]) => heroes.find((hero:Hero) => hero.id === +id));
    }

    // Noop : I don't have a backend right now
    saveHero(hero) {
        return Observable.of(hero);
    }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
