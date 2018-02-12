import { PlayerStateChangeAction, PLAYER_STATE_CHANGE } from './player.action';
import { YT } from '../../models/youtube';


export interface PlayerState {
    playerState: number;
}

export const initialState: PlayerState = {
    playerState: null
};

export function reducer(state = initialState, action: any) {
    console.log('Current State: %o', state);
    switch (action.type) {
        case PLAYER_STATE_CHANGE:
            return changePlayerState(state, action.payload);
        default:
            return state;
    }
}

export function changePlayerState(state: any, playerState: number) {
    return { playerState: playerState };
}
