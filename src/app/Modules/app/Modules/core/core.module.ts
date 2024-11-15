import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DreamEditComponent } from './Pages/dream-edit/dream-edit.component';
import { DreamListComponent } from './Pages/dream-list/dream-list.component';
import { CoreRoutingModule } from './core-routing.module';
import { DreamViewComponent } from './Pages/dream-view/dream-view.component';
import { CoreComponent } from './core.component';
import { DreamsDataService } from './Services/dreams-data.service';

@NgModule({
  declarations: [
    DreamListComponent,
    DreamEditComponent,
    DreamViewComponent,
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [
    DreamsDataService
  ]
})
export class CoreModule { }
