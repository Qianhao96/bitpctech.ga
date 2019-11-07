import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  

  isAdmin(){
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    return (payLoad.role == "Admin") ? true : false;
  }

  isLoggedIn(){
    return (localStorage.getItem('token')) != null ? true : false
  }

  // getUserSecurityQuetionURL = 'https://bitpctechapi.ga/api/ApplicationUser/Get-Question'
  // getQuestion(userName){
  //   return this.http.post(this.getUserSecurityQuetionURL, userName);
  // }


  // checkAnswerUrl = 'https://bitpctechapi.ga/api/ApplicationUser/Check-Answer'
  // checkAnswer(body){
  //   return this.http.post(this.checkAnswerUrl, body);
  // }

  // changePasswordUrl = 'https://bitpctechapi.ga/api/ApplicationUser/New-Password'
  // changePassword(body){
  //   return this.http.post(this.changePasswordUrl, body);
  // }


}
