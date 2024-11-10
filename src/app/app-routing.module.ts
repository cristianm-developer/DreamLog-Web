import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Modules/auth/Guardians/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Modules/welcome/welcome.module').then(m => m.WelcomeModule)},
  { path: 'user', loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule), canActivate: []},
  { path: 'api', loadChildren: () => import('./Modules/core/core.module').then(m => m.CoreModule), canActivate: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
