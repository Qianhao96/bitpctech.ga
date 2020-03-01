import { ToastrService } from 'ngx-toastr';
import { AnonymousService } from './../../sharedService/anonymous.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(public anonymousService: AnonymousService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.categoryGetAll();
    this.brandGetAll();
  }
  showSideNavBar = true
  toggleNavBar() {
    this.showSideNavBar = !this.showSideNavBar;
  }

  Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  Categories;
  categoryGetAll() {
    this.anonymousService.getAllCategories().subscribe(
      (res: any) => {
        this.Categories = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  Brands;
  brandGetAll() {
    this.anonymousService.getAllBrands().subscribe(
      (res: any) => {
        this.Brands = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
