import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DreamViewComponent } from './Pages/dream-view/dream-view.component';
import { DreamEditComponent } from './Pages/dream-edit/dream-edit.component';
import { DreamListComponent } from './Pages/dream-list/dream-list.component';
import { CoreComponent } from './core.component';

const routes: Routes = [
  { path: '', component: CoreComponent, children:[
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: DreamListComponent },
    { path: 'view', component: DreamViewComponent },
    { path: 'edit', component: DreamEditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
