import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { 
    console.log(this.baseUrl);
  }
  
  isAdmin(){
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    return (payLoad.role == "Admin") ? true : false;
  }

  isLoggedIn(){
    return (localStorage.getItem('token')) != null ? true : false;
  }

  loginUrl = this.baseUrl + 'api/V1/identity/login';
  login(formData){
    return this.http.post(this.loginUrl, formData);
  }

  registerUrl = this.baseUrl + 'api/V1/identity/register';
  register(body) {
    return this.http.post(this.registerUrl, body);
  }
}
