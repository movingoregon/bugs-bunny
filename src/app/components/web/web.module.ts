import { NgModule } from '@angular/core';
import { WebContainerComponent } from './web-container/web-container.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
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
