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
    this.brandGetAll();
    this.categoryGetAll();
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
    actions: {
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

  validatingField(fields) {
    var empty: Boolean;
    for (let key in fields) {
      if (fields[key] == "")
        empty = true;
      else
        empty = false;
    }
    return empty;
  }

  //Brand table controls
  categoryDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.adminService.deleteCategory(event.data.id).subscribe(
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

  categoryCreateConfirm(event): void {
    delete event.newData.id;
    if (this.validatingField(event.newData)) {
      this.toastrService.warning("Invalid input");
      return;
    }

    if (window.confirm('Are you sure you want to add this?')) {
      event.confirm.resolve();
      this.adminService.addCategory(event.newData).subscribe(
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

  categorySource: LocalDataSource = new LocalDataSource();
  categorySetting = this.settingsBase;
  categoryGetAll() {
    this.categorySetting.columns = {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Category Name'
      },
      displayOrder: {
        title: 'Display Order'
      }
    };
    this.adminService.getAllCategories().subscribe(
      (res: any) => {
        this.categorySource = new LocalDataSource(res.categories);
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  //Brand table controls
  brandDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.adminService.deleteBrand(event.data.id).subscribe(
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

  brandCreateConfirm(event): void {
    delete event.newData.id;
    if (this.validatingField(event.newData)) {
      this.toastrService.warning("Invalid input");
      return;
    }
    if (window.confirm('Are you sure you want to add this?')) {
      event.confirm.resolve();

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

  brandSource: LocalDataSource = new LocalDataSource();
  brandSetting = this.settingsBase;
  brandGetAll() {
    this.brandSetting.columns = {
      // tableName: {
      //   title: 'Brand'
      // },
      id: {
        title: 'ID'
      },
      name: {
        title: 'Brand Name'
      }
    };
    this.adminService.getAllBrands().subscribe(
      (res: any) => {
        this.brandSource = new LocalDataSource(res.brands);
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
