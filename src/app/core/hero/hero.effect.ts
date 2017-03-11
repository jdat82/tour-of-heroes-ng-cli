
import { Actions, Effect } from "@ngrx/effects";

import { Injectable } from "@angular/core";
import { HeroService } from "../../hero/hero.service";
import HeroActions from "./hero.action";

@Injectable()
export class HeroEffects {

  constructor(private update$:Actions, private heroService:HeroService){}

  @Effect()
  public loadHeroes$ = this.update$
    .ofType(HeroActions.LOAD_HEROES)
    .switchMap(() => this.heroService.getHeroes())
    .map(heroes => HeroActions.loadHeroesSuccess(heroes));

  @Effect()
  public getHero$ = this.update$
    .ofType(HeroActions.GET_HERO)
    .switchMap(action => this.heroService.getHero(action.payload))
    .map(hero => HeroActions.getHeroSuccess(hero));

}
