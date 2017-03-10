import { HeroState, HeroListState } from "./hero.state";
import { Action } from "@ngrx/store";
import HeroActions from "./hero.action";
import * as _ from 'lodash';
import { Hero } from "./hero.model";

const heroInitialState:HeroState = {
  id:0,
  name:''
};

export function heroReducer(state:HeroState = heroInitialState, action:Action):HeroState {
  switch (action.type) {
    case HeroActions.RESET_BLANK_HERO: {
      return heroInitialState;
    }
    case HeroActions.GET_HERO_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
}

const heroListInitialState:HeroListState = [];

export function heroListReducer(state:HeroListState = heroListInitialState, action:Action):HeroListState {
  switch (action.type) {
    case HeroActions.LOAD_HEROES_SUCCESS: {
      return action.payload;
    }
    case HeroActions.ADD_HERO_SUCCESS: {
      return [...state, action.payload];
    }
    case HeroActions.SAVE_HERO_SUCCESS: {
      let index = _.findIndex(state, {id: action.payload.id});
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          action.payload,
          ...state.slice(index + 1)
        ];
      }
      return state;
    }
    case HeroActions.DELETE_HERO_SUCCESS: {
      return state.filter(hero => {
        return hero.id !== action.payload.id;
      });
    }
    default:
      return state;
  }
}
