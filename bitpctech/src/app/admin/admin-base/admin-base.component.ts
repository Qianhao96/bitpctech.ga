import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.css']
})
export class AdminBaseComponent implements OnInit {

  showSideNavBar = true

  constructor() { }

  ngOnInit() {
  }

  // public innerWidth: any;
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.innerWidth = window.innerWidth;
  //   if(this.innerWidth == 768)
  //     this.showSideNavBar = !this.showSideNavBar;
  //   console.log(this.innerWidth);
  // }

  toggleNavBar() {
    this.showSideNavBar = !this.showSideNavBar;
  }
}
