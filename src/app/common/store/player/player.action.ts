import { Action } from '@ngrx/store';
import { YT } from '../../models/youtube';

export const PLAYER_READY = '[Player] Ready';
export const PLAY_VIDEO = '[Play] Video';
export const PLAYER_STATE_CHANGE = '[Player] State Change';


export class PlayerReadyAction implements Action {
    type = PLAYER_READY;
    constructor(public payload?: YT.Player) { }
}

export class PlayVideoAction implements Action {
    type = PLAY_VIDEO;
    constructor(public payload: string) { }
}

export class PlayerStateChangeAction implements Action {
    type = PLAYER_STATE_CHANGE;
    constructor(public payload: string) { }
}
