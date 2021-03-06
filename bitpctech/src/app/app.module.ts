import { ParticlesModule } from 'angular-particle';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './sharedComponent/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginAndRegistrationComponent } from './user/login-and-registration/login-and-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './sharedComponent/about/about.component';
import { FooterComponent } from './sharedComponent/footer/footer.component';
import { AdminBaseComponent } from './admin/admin-base/admin-base.component';
import { AuthInterceptor } from './sharedComponent/auth/auth.interceptor';
import { ForbiddenComponent } from './sharedComponent/forbidden/forbidden.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { DataTablesComponent } from './admin/admin-base/data-tables/data-tables.component';
import { ReadmeComponent } from './admin/admin-base/readme/readme.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ImagePreviewComponent } from './admin/image-preview/image-preview.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CatalogComponent } from './anonymous/catalog/catalog.component';
import { ProductCardComponent } from './anonymous/catalog/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginAndRegistrationComponent,
    UserHomeComponent,
    AboutComponent,
    FooterComponent,
    AdminBaseComponent,
    ForbiddenComponent,
    DataTablesComponent,
    ReadmeComponent,
    ImagePreviewComponent,
    CatalogComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    ParticlesModule,
    Ng2SmartTableModule,
    NgImageSliderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
