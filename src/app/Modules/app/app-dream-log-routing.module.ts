import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authPass } from './Guardians/auth-pass.guard';
import { authGuard } from './Guardians/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'api', pathMatch:'full'},
  { path: 'auth', loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule), canActivate: [ authPass ] },
  { path: 'api', loadChildren: () => import('./Modules/core/core.module').then(m => m.CoreModule), canActivate: [ authGuard ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppDreamLogRoutingModule { }
