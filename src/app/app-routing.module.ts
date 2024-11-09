import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Modules/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'user', loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dreams', loadChildren: () => import('./Modules/dreams/dreams.module').then(m => m.CoreModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
