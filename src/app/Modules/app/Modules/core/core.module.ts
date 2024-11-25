import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DreamEditComponent } from './Pages/dream-edit/dream-edit.component';
import { DreamListComponent } from './Pages/dream-list/dream-list.component';
import { CoreRoutingModule } from './core-routing.module';
import { DreamViewComponent } from './Pages/dream-view/dream-view.component';
import { CoreComponent } from './core.component';
import { DreamsDataService } from './Services/dreams-data.service';
import { SharedModule } from '../../Shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../../../environments/environment';

@NgModule({
  declarations: [
    DreamListComponent,
    DreamEditComponent,
    DreamViewComponent,
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,

    AngularFireModule.initializeApp(environment.firebaseConfig, {
      
    }),
  ],
  providers: [
    DreamsDataService
  ]
})
export class CoreModule { }
