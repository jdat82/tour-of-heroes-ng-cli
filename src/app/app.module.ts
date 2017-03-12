import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Router} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {HeroModule} from "./hero/hero.module";
import {CoreModule} from "./core/core.module";
import {LoginModule} from "./authentication/login.module";

import {environment} from "../environments/environment";

import rootReducer from "./root.reducer";
import {EffectsModule} from "@ngrx/effects";
import {HeroEffects} from "./core/hero/hero.effect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

console.info('Environment:', environment);


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        HeroModule,
        LoginModule,
        AppRoutingModule,

        /**
         * StoreModule.provideStore is imported once in the root module, accepting a reducer
         * function or object map of reducer functions. If passed an object of
         * reducers, combineReducers will be run creating your application
         * meta-reducer. This returns all providers for an @ngrx/store
         * based application.
         */
        StoreModule.provideStore(rootReducer),

        /**
         * Store devtools instrument the store retaining past versions of state
         * and recalculating new states. This enables powerful time-travel
         * debugging.
         *
         * To use the debugger, install the Redux Devtools extension for either
         * Chrome or Firefox
         *
         * See: https://github.com/zalmoxisus/redux-devtools-extension
         */
        StoreDevtoolsModule.instrumentOnlyWithExtension(),

        /**
         * EffectsModule.run() sets up the effects class to be initialized
         * immediately when the application starts.
         *
         * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
         */
        EffectsModule.run(HeroEffects)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
