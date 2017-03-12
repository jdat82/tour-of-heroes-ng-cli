
import { Actions, Effect } from "@ngrx/effects";

import { Injectable } from "@angular/core";
import { HeroService } from "../../hero/hero.service";
import HeroActions from "./hero.action";
import {Action} from "@ngrx/store";
import {Hero} from "./hero.model";
import {Observable} from "rxjs";

@Injectable()
export class HeroEffects {

  constructor(private actions$:Actions, private heroService:HeroService){}

  @Effect()
  loadHeroes$:Observable<Action> = this.actions$
    .ofType(HeroActions.LOAD_HEROES)
    .switchMap(() => this.heroService.getHeroes())
    .map((heroes:Hero[]) => HeroActions.loadHeroesSuccess(heroes));

  @Effect()
  getHero$:Observable<Action> = this.actions$
    .ofType(HeroActions.GET_HERO)
    .switchMap(action => this.heroService.getHero(action.payload))
    .map(hero => HeroActions.getHeroSuccess(hero));

  @Effect()
  saveHero$:Observable<Action> = this.actions$
      .ofType(HeroActions.SAVE_HERO)
      .switchMap((action:Action) => this.heroService.saveHero(action.payload))
      .map((hero:Hero) => HeroActions.saveHeroSuccess(hero));


}
