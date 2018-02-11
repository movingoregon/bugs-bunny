import { Component, Input } from '@angular/core';
import { YT } from '../../../common/models/youtube';

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

  @Input() height: number;
  @Input() width: number;
}
