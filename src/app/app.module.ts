import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Modules/auth/auth.module';
import { DreamsModule } from './Modules/dreams/dreams.module';
import { SidebarComponent } from './Shared/Components/sidebar/sidebar.component';
import { TopbarComponent } from './Shared/Components/topbar/topbar.component';



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
    DreamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
