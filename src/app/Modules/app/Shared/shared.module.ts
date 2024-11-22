import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { CryptoService } from './Services/crypto.service';
import { LocalstorageService } from './Services/localstorage.service';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirebaseAuthService } from './Services/firebase-auth.service';
import { TopbarButtonComponent } from './Components/topbar-button/topbar-button.component';
import { LoadingScreenComponent } from './Components/loading-screen/loading-screen.component';



@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    TopbarButtonComponent,
    LoadingScreenComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    CryptoService,
    LocalstorageService,
    FirebaseAuthService
  ],
  exports: [
    SidebarComponent,
    TopbarComponent,    
    LoadingScreenComponent,
  ]
})
export class SharedModule { }
