import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Modules/auth/auth.module';
import { SidebarComponent } from './Shared/Components/sidebar/sidebar.component';
import { TopbarComponent } from './Shared/Components/topbar/topbar.component';
import { CoreModule } from './Modules/core/core.module';



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
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
