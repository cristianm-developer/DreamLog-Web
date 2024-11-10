import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Modules/auth/auth.module';
import { SidebarComponent } from './Shared/Components/sidebar/sidebar.component';
import { TopbarComponent } from './Shared/Components/topbar/topbar.component';
import { CoreModule } from './Modules/core/core.module';

import { environment } from '../environments/environment.development';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModule,
    CoreModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
