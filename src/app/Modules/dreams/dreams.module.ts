import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DreamEditComponent } from './Pages/dream-edit/dream-edit.component';
import { DreamListComponent } from './Pages/dream-list/dream-list.component';
import { DreamsRoutingModule } from './dreams-routing.module';




@NgModule({
  declarations: [
    DreamListComponent,
    DreamEditComponent
  ],
  imports: [
    CommonModule,
    DreamsRoutingModule
  ]
})
export class DreamsModule { }
