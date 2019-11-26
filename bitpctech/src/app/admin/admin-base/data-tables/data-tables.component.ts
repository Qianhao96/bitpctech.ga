import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.css']
})
export class DataTablesComponent implements OnInit {

  constructor(public adminService: AdminService,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.getAllBrands();
  }

  getAllBrands() {
    this.adminService.getAllBrands().subscribe(
      (res: any) => {
        console.log(res);
      },
      err => {
          console.log(err);
      }
    );
  }
}
