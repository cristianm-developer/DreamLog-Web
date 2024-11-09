import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DreamViewComponent } from './Pages/dream-view/dream-view.component';

const routes: Routes = [
  { path:'v:id', component: DreamViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
