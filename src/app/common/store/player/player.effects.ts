import { Actions, Effect } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { PLAYER_READY, PlayerReadyAction, PLAY_VIDEO } from './player.action';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { PlayerApi } from './player.api';
import { AppState } from './index';


@Injectable()
export class PlayerEffects {
    constructor(
        public actions$: Actions<ActionWithPayload>,
        public store: Store<AppState>,
        public playerApi: PlayerApi
    ) { }

    @Effect({ dispatch: false })
    registerPlayer$: any = this.actions$
        .ofType(PLAYER_READY)
        .pipe(tap(action => this.playerApi.registerPlayer(action.payload)));

    @Effect({ dispatch: false })
    PlayVideo$: any = this.actions$
        .ofType(PLAY_VIDEO)
        .pipe(tap(action => this.playerApi.playVideo(action.payload)));
}

export interface ActionWithPayload extends Action {
    payload?: any;
}
