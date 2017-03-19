import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../core/hero/hero.model';

@Component({
    selector:'hero-detail-form',
    templateUrl:'hero-detail-form.component.html'
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

/*export interface Hero {
 id:number, // Label
 name:string, // Input text
 age:number, // Slider
 sex:Sex, // Button toggle
 active:boolean, // Slide toggle
 city:HeroCity, // Select
 powers: string[] // Chips & autocomplete
 mainPower: string // Input with autocomplete
 franchise: Franchise // Checkbox list
 }*/
