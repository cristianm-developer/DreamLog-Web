import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DreamEditComponent } from './Pages/dream-edit/dream-edit.component';
import { DreamListComponent } from './Pages/dream-list/dream-list.component';
import { CoreRoutingModule } from './core-routing.module';




@NgModule({
  declarations: [
    DreamListComponent,
    DreamEditComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
