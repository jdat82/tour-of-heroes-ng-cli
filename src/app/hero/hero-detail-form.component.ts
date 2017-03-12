import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../core/hero/hero.model';

@Component({
    selector:'hero-detail-form',
    template:`
        <form>
            <h3>"{{ hero.name }}"</h3>
            <div>
              <label>Id: </label>{{ hero.id }}</div>
            <div>
              <label for="name">Name: </label>
              <input [(ngModel)]="hero.name" name="name" placeholder="name" />
            </div>
            <p>
              <button (click)="back.emit()">Back</button>
              <button (click)="save.emit(hero)">Save</button>
            </p>
        </form>
    `
})
export class HeroDetailFormComponent {
    
    private _hero:Hero;
    
    @Input()
    set hero(value) {
        this._hero = Object.assign({}, value);
    }
    
    get hero() {return this._hero;}
    
    @Output()
    back:EventEmitter<any> = new EventEmitter();
    
    @Output()
    save:EventEmitter<Hero> = new EventEmitter();
    
    
}