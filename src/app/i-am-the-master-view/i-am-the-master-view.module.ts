import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IAmTheMasterViewRoutingModule } from './i-am-the-master-view-routing.module';
import { IAmTheMasterViewComponent } from './i-am-the-master-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { IgxListModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxIconModule, IgxNavbarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

@NgModule({
  declarations: [
    IAmTheMasterViewComponent,
    ListViewComponent,
    KanbanBoardComponent
  ],
  imports: [
    CommonModule,
    IAmTheMasterViewRoutingModule,
    IgxListModule,
    IgxAvatarModule,
    FormsModule,
    IgxCardModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavbarModule
  ]
})
export class IAmTheMasterViewModule {
}
