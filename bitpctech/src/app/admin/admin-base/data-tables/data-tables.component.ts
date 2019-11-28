import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';


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

  settingsBase = {
    add: {
      addButtonContent: '<i class="fa fa-plus-square fa-3x ml-1"></i>',
      createButtonContent: '<i class="fa fa-check fa-lg mr-2"></i>',
      cancelButtonContent: '<i class="fa fa-times fa-lg"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="fa fa-edit fa-lg"></i>',
      saveButtonContent: '<i class="fa fa-check fa-lg mr-1"></i>',
      cancelButtonContent: '<i class="fa fa-times fa-lg"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash fa-lg"></i>',
      confirmDelete: true
    },
    actions:{
      position: 'left'
    },
    pager: {
      display: true,
      perPage: 20
    },
    columns: {
    },
    attr: {
      class: 'table table-bordered'
    }
  };

  source: LocalDataSource = new LocalDataSource();

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();

    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();

      delete event.newData.tableName;
      delete event.newData.id;

      this.adminService.addBrand(event.newData).subscribe(
        (res: any) => {
          this.toastrService.success(res.message);
          console.log(res);
        },
        err => {
          this.toastrService.success(err.error);
          console.log(err);
        }
      );
    } else {
      event.confirm.reject();
    }
  }


  brandSetting = this.settingsBase;
  getAllBrands() {
    this.brandSetting.columns = {
      tableName: {
        title: 'Brands'
      },
      id: {
        title: 'ID'
      },
      name: {
        title: 'Brand Name'
      }
    };
    this.adminService.getAllBrands().subscribe(
      (res: any) => {
        this.source = new LocalDataSource(res.brands);
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
