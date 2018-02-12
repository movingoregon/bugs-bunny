import { NgModule } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { YouTubePlayerModule } from 'ng5-yt-player';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatTabsModule, MatDividerModule } from '@angular/material';
import { AppStoreModule } from '../../common/store/store.module';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatDividerModule,
        YouTubePlayerModule,
        AppStoreModule
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
