import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { CryptoService } from './Services/crypto.service';
import { LocalstorageService } from './Services/localstorage.service';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirebaseAuthService } from './Services/firebase-auth.service';
import { TopbarButtonComponent } from './Components/topbar-button/topbar-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TopbarComponent,
    TopbarButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    CryptoService,
    LocalstorageService,
    FirebaseAuthService
  ],
  exports: [
    TopbarComponent,    
    TopbarButtonComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
