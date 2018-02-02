import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from 'ng5-yt-player';
import { MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    YouTubePlayerModule,
  ],
  declarations: []
})
export class CommonModule { }
