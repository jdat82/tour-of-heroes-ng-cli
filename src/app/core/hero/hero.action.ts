import { Action } from "@ngrx/store";

export default class HeroActions {

  static LOAD_HEROES = '[Hero] Load Heroes';

  static loadHeroes():Action {
    return {
      type:HeroActions.LOAD_HEROES
    };
  }

  static LOAD_HEROES_SUCCESS = '[Hero] Load Heroes Success';

  static loadHeroesSuccess(heroes):Action {
    return {
      type:HeroActions.LOAD_HEROES_SUCCESS,
      payload:heroes
    };
  }

  static GET_HERO = '[Hero] Get Hero';

  static getHero(id):Action {
    return {
      type:HeroActions.GET_HERO,
      payload:id
    };
  }

  static GET_HERO_SUCCESS = '[Hero] Get Hero Success';

  static getHeroSuccess(hero):Action {
    return {
      type:HeroActions.GET_HERO_SUCCESS,
      payload:hero
    };
  }

  static RESET_BLANK_HERO = '[Hero] Reset Blank Hero';

  static resetBlankHero():Action {
    return {
      type:HeroActions.RESET_BLANK_HERO
    };
  }

  static SAVE_HERO = '[Hero] Save Hero';

  static saveHero(hero):Action {
    return {
      type:HeroActions.SAVE_HERO,
      payload:hero
    };
  }

  static SAVE_HERO_SUCCESS = '[Hero] Save Hero Success';

  static saveHeroSuccess(hero):Action {
    return {
      type:HeroActions.SAVE_HERO_SUCCESS,
      payload:hero
    };
  }

  static ADD_HERO = '[Hero] Add Hero';

  static addHero(hero):Action {
    return {
      type:HeroActions.ADD_HERO,
      payload:hero
    };
  }

  static ADD_HERO_SUCCESS = '[Hero] Add Hero Success';

  static addHeroSuccess(hero):Action {
    return {
      type:HeroActions.ADD_HERO_SUCCESS,
      payload:hero
    };
  }

  static DELETE_HERO = '[Hero] Delete Hero';

  static deleteHero(hero):Action {
    return {
      type:HeroActions.DELETE_HERO,
      payload:hero
    };
  }

  static DELETE_HERO_SUCCESS = '[Hero] Delete Hero Success';

  static deleteHeroSuccess(hero):Action {
    return {
      type:HeroActions.DELETE_HERO_SUCCESS,
      payload:hero
    };
  }
}
