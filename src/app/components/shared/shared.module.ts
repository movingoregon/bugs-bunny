import { NgModule } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { YouTubePlayerModule } from 'ng5-yt-player';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatTabsModule, MatDividerModule } from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatDividerModule,
        YouTubePlayerModule
    ],
    declarations: [
        PlayerComponent
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatDividerModule,
        PlayerComponent
    ]
})
export class SharedModule { }
