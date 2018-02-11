import { Action } from '@ngrx/store';
import { YT } from '../../models/youtube';

export const PLAYERREADY = '[Player] Ready';
export const PLAYVIDEO = '[Play] Video';

export class PlayerReadyAction implements Action {
    type = PLAYERREADY;
    constructor(public payload: YT.Player) { }
}

export class PlayVideoAction implements Action {
    type = PLAYVIDEO;
    constructor(public payload: string) { }
}
