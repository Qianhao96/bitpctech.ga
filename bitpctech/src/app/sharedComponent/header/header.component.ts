import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/sharedService/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor(
    private router: Router,
    private userService: UserService,
    private toastrService: ToastrService) { }

  isAdmin: boolean;
  isLoggedIn: boolean;

  ngOnInit() {  }

  ngDoCheck(){
    this.isLoggedIn = this.userService.isLoggedIn();
    if(this.isLoggedIn){
      this.isAdmin = this.userService.isAdmin();
    }
  }


  onLogin(){
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    this.toastrService.success('Logout successfully');
  }
}
