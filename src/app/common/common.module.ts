import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from 'ng5-yt-player';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatTabsModule } from '@angular/material';

@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    YouTubePlayerModule,
  ],
  declarations: []
})
export class CommonModule { }
