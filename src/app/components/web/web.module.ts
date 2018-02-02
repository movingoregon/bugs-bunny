import { NgModule } from '@angular/core';
import { WebContainerComponent } from './web-container/web-container.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonModule } from '../../common/common.module';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SidenavComponent,
        WebContainerComponent
    ],
    exports: [
        SidenavComponent,
        WebContainerComponent
    ]
})
export class WebModule { }
