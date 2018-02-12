import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { reducers as PlayerReducers } from './player';
import { StoreModule } from '@ngrx/store';
import { PlayerApi } from './player/player.api';
import { PlayerEffects } from './player/player.effects';

@NgModule({
    imports: [
        StoreModule.forRoot(PlayerReducers, {}),
        EffectsModule.forRoot([
            PlayerEffects
        ])
    ],
    providers: [PlayerApi]
})
export class AppStoreModule { }
