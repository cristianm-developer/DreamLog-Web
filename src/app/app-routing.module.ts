import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Modules/landing-page/landing-page.module').then(m => m.LandingPageModule)},
  { path: 'app', loadChildren: () => import('./Modules/app/app-dream-log.module').then(m => m.AppDreamLogModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
