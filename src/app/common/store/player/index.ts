import { PlayerState, reducer } from './player.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';


export interface AppState {
    playerState: PlayerState;
}

export const reducers: ActionReducerMap<AppState> = {
    playerState: reducer,
};
