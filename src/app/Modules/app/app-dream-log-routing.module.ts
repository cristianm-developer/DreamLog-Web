import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guardians/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'api', pathMatch:'full'},
  { path: 'auth', loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'api', loadChildren: () => import('./Modules/core/core.module').then(m => m.CoreModule), canActivate: [ AuthGuard ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppDreamLogRoutingModule { }
