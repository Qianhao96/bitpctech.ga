import { ReadmeComponent } from './admin/admin-base/readme/readme.component';
import { DataTablesComponent } from './admin/admin-base/data-tables/data-tables.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AdminBaseComponent } from './admin/admin-base/admin-base.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAndRegistrationComponent } from './user/login-and-registration/login-and-registration.component';
import { AboutComponent } from './sharedComponent/about/about.component';
import { ForbiddenComponent } from './sharedComponent/forbidden/forbidden.component';
import { AuthGuard } from './sharedComponent/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'admin', component: AdminBaseComponent,
    children:[
      { path: 'data-tables', component: DataTablesComponent},
      { path: 'readme', component: ReadmeComponent},
    ],
    canActivate: [AuthGuard], data: { permittedRoles: ['Admin'] }
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'user',
    children:[
      { path: 'login', component: LoginAndRegistrationComponent},
      { path: 'home', component: UserHomeComponent, canActivate: [AuthGuard]}
    ]
  },
  { path: 'about-us', component: AboutComponent}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
