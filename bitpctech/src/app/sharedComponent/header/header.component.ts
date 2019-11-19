import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ViewportScroller } from '@angular/common';
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
		private toastrService: ToastrService,
		private vps: ViewportScroller
		){}

	isAdmin: boolean;
	isLoggedIn: boolean;

	ngOnInit() { }

	ngDoCheck() {
		this.isLoggedIn = this.userService.isLoggedIn();
		if (this.isLoggedIn) {
			this.isAdmin = this.userService.isAdmin();
		}
	}

	onLogin() {
		this.isLoggedIn = this.userService.isLoggedIn();
	}

	onLogout() {
		localStorage.removeItem('token');
		this.router.navigate(['/user/login']);
		this.toastrService.success('Logout successfully');
	}

	onScroll(id){
		let el = document.getElementById(id);
		if(el != null){
			el.scrollIntoView({behavior: 'smooth'});
		}
	}
}
