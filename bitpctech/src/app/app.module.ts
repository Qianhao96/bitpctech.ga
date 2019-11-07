import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './sharedComponent/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginAndRegistrationComponent } from './user/login-and-registration/login-and-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginAndRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
