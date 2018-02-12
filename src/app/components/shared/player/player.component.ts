import { Component, Input } from '@angular/core';
import { YT } from '../../../common/models/youtube';
import { Store } from '@ngrx/store';
import { PlayerReadyAction, PlayVideoAction, PlayerStateChangeAction } from '../../../common/store/player/player.action';
import { AppState } from '../../../common/store/player/index';


@Component({
  selector: 'tnow-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  params: YT.PlayerVars = {
    showinfo: 0,
    modestbranding: 1
  };

  constructor(private store: Store<AppState>) {
  }

  @Input() height: number;
  @Input() width: number;

  setupPlayer($event) {
    this.store.dispatch(new PlayerReadyAction($event));
    this.store.dispatch(new PlayVideoAction('M7lc1UVf-VE'));
  }

  playerStateChange($event) {
    this.store.dispatch(new PlayerStateChangeAction($event));
  }
}
