import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DreamViewComponent } from './Pages/dream-view/dream-view.component';
import { DreamEditComponent } from './Pages/dream-edit/dream-edit.component';

const routes: Routes = [
  { path:'v:id', component: DreamViewComponent },
  { path: 'edit' , component: DreamEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
