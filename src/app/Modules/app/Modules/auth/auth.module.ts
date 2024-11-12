import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { FirebaseAuthService } from '../../Shared/Services/firebase-auth.service';
import { AuthComponent } from './auth.component';
import { environment } from '../../../../../environments/environment';
import { SharedModule } from '../../Shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,

    
    ReactiveFormsModule
  ],
  providers:[
    FirebaseAuthService
  ]
})
export class AuthModule { }
