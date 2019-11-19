import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAndRegistrationComponent } from './user/login-and-registration/login-and-registration.component';
import { AboutComponent } from './sharedComponent/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'user/login', component: LoginAndRegistrationComponent },
  { path: 'sharedComponent/about', component: AboutComponent}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
