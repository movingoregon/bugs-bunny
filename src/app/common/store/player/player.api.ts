import { Injectable, NgZone } from '@angular/core';
import { YT } from '../../models/youtube';


@Injectable()
export class PlayerApi {
    public player: YT.Player;
    constructor(private zone: NgZone) { }

    registerPlayer(player) {
        this.player = player;
    }

    playVideo(videoId: string) {
        if (this.player) {
            // Sorry happening out of angular context.
            this.zone.runOutsideAngular(() => this.player.loadVideoById(videoId));
        }
    }
}
