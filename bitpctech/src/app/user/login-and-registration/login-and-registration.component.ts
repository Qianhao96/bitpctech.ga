import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/sharedService/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { RegistrationValidators } from './login-and-registration.validators';

@Component({
  selector: 'app-login-and-registration',
  templateUrl: './login-and-registration.component.html',
  styleUrls: ['./login-and-registration.component.css']
})
export class LoginAndRegistrationComponent implements OnInit {

  showSignInForm = true

  constructor(public service: UserService,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit() {
    if(this.service.isLoggedIn()){
      this.router.navigate(['/']);
    }
  }

  ngDoCheck(){
  }
  
  //could use form builder to simpler the code 

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  get SignInEmail() {
    return this.loginForm.get('email');
  }

  get SignInPassword() {
    return this.loginForm.get('password');
  }

  onSignInSubmit(form) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.toastrService.success('Hi, welcome!');
        this.router.navigate(['/'])
      },
      err => {
        if (err.status == 400)
          this.toastrService.error(err.error["errors"]);
        else
          console.log(err);
      }
    );
  }

  registrationForm = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    matchPassword: new FormGroup({
      password: new FormControl('', [
        Validators.required,
        RegistrationValidators.passwordLength,
        RegistrationValidators.passwordLetter
      ]),
      confirmPassword: new FormControl('', Validators.required)
    }, { validators: this.comparePasswords })
  });

  //customs validator within the same file as where it is used 
  comparePasswords(form: FormGroup) {
    let password = form.get('password');
    let confirmPs = form.get('confirmPassword');

    if (password.value != confirmPs.value) {
      confirmPs.setErrors({ passwordMismatch: 'Password is not match' })
      return null
    }
  }

  toggleNavbar() {
    this.showSignInForm = !this.showSignInForm;
  }

  //use this can let the html become less mass
  get SignUpEmail() {
    return this.registrationForm.get('email');
  }

  get SignUpPassword() {
    return this.registrationForm.get('matchPassword.password');
  }

  get SignUpConfirmPassword() {
    return this.registrationForm.get('matchPassword.confirmPassword');
  }

  onRegisterSubmit() {
    let body = {
      Email: this.registrationForm.value.email,
      Password: this.registrationForm.value.matchPassword.password,
    }
    this.service.register(body).subscribe(
      (res: any) => {
        console.log(res.Token);
        this.toastrService.success('Please sign in with your new account.');
        this.showSignInForm = true;
        //this.router.navigate(['/user/login']);
      },
      err => {
        this.toastrService.success(err.error["errors"]);
      }
    );
  }
}
