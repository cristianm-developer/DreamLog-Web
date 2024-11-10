import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DreamViewComponent } from './Pages/dream-view/dream-view.component';
import { DreamEditComponent } from './Pages/dream-edit/dream-edit.component';
import { DreamListComponent } from './Pages/dream-list/dream-list.component';

const routes: Routes = [
  { path:'view', component: DreamViewComponent },
  { path:'list', component: DreamListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
