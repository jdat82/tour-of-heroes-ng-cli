import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../core/hero/hero.model';

@Component({
  selector:'hero-detail-form',
  template:`
        <form>
          <md-card>
              <md-card-title>"{{ hero.name }}"</md-card-title>
              <md-card-content>
                <p>
                  <label>Id: </label>{{ hero.id }}</p>
                <md-input-container>
                  <input mdInput [value]="hero.name" [(ngModel)]="hero.name" name="name" placeholder="Name" />
                </md-input-container>
              </md-card-content>
              <md-card-actions>
                <button md-button (click)="back.emit()">Back</button>
                <button md-button (click)="save.emit(hero)">Save</button>
              </md-card-actions>
          </md-card>
        </form>
    `
})
export class HeroDetailFormComponent {

  private _hero:Hero;

  @Input()
  set hero(value) { this._hero = Object.assign({}, value); }

  get hero() { return this._hero; }

  @Output()
  back:EventEmitter<any> = new EventEmitter();

  @Output()
  save:EventEmitter<Hero> = new EventEmitter();


}
