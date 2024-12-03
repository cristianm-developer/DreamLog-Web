import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rootMatcher } from './Modules/app/Matchers/root-matcher';

const routes: Routes = [
  { path: '', redirectTo: 'v', pathMatch: 'full'},
  { path: 'v', loadChildren: () => import('./Modules/landing-page/landing-page.module').then(m => m.LandingPageModule)},
  { path: 'app', loadChildren: () => import('./Modules/app/app-dream-log.module').then(m => m.AppDreamLogModule)},
  { matcher: rootMatcher, redirectTo: 'v', pathMatch:'full'},
  { path: '**', redirectTo: 'v', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
