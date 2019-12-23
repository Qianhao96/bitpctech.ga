import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
    this.specificationGetAll();
    this.ImageGetAll();
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
      class: 'table table-striped table-bordered table-hover'
    }
  };

  //Use to validate if there is empty field 
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

  //Use to deep copy an variable or object
  deepCopy(oldObj: any) {
    var newObj = oldObj;
    if (oldObj && typeof oldObj === "object") {
      if (oldObj instanceof Date) {
        return new Date(oldObj.getTime());
      }
      newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
      for (var i in oldObj) {
        newObj[i] = this.deepCopy(oldObj[i]);
      }
    }
    return newObj;
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
  categorySetting = this.deepCopy(this.settingsBase);
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
  brandSetting = this.deepCopy(this.settingsBase);
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

  //Specification table controls
  specificationDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.adminService.deleteSpecification(event.data.id).subscribe(
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

  specificationCreateConfirm(event): void {
    delete event.newData.id;
    if (this.validatingField(event.newData)) {
      this.toastrService.warning("Invalid input");
      return;
    }

    if (window.confirm('Are you sure you want to add this?')) {
      event.confirm.resolve();

      this.adminService.addSpecification(event.newData).subscribe(
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

  specificationSource: LocalDataSource = new LocalDataSource();
  specificationSetting = this.deepCopy(this.settingsBase);
  specificationGetAll() {
    this.specificationSetting.columns = {
      // tableName: {
      //   title: 'Brand'
      // },
      id: {
        title: 'ID'
      },
      description: {
        title: 'Specification'
      }
    };
    this.adminService.getAllSpecifications().subscribe(
      (res: any) => {
        this.specificationSource = new LocalDataSource(res.specifications);
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


  //Image control
  imageForm = new FormGroup({
    image1: new FormControl('', [
      Validators.required
    ]),
    image2: new FormControl('', [
      Validators.required
    ]),
    image3: new FormControl('', [
      Validators.required
    ]),
    image4: new FormControl('', [
      Validators.required
    ]),
    image5: new FormControl('', [
      Validators.required
    ]),
    image6: new FormControl('', [
      Validators.required
    ]),
    image7: new FormControl('', [
      Validators.required
    ]),
    image8: new FormControl('', [
      Validators.required
    ]),
    image9: new FormControl('', [
      Validators.required
    ]),
    image10: new FormControl('', [
      Validators.required
    ])
  });

  imageDeleteForm = new FormGroup({
    imageId: new FormControl('', [
      Validators.required
    ])
  });
  get imageId(){
    return this.imageDeleteForm.get('imageId');
  }

  get image1() {
    return this.imageForm.get('image1');
  }

  get image2() {
    return this.imageForm.get('image2');
  }

  get image3() {
    return this.imageForm.get('image3');
  }

  get image4() {
    return this.imageForm.get('image4');
  }
  get image5() {
    return this.imageForm.get('image5');
  }

  get image6() {
    return this.imageForm.get('image6');
  }
  get image7() {
    return this.imageForm.get('image7');
  }

  get image8() {
    return this.imageForm.get('image8');
  }
  get image9() {
    return this.imageForm.get('image9');
  }

  get image10() {
    return this.imageForm.get('image10');
  }

  imagePostData = {};

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): any {
    var id = inputValue.id;
    var imagePostData = this.imagePostData;
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    myReader.readAsDataURL(file);
    myReader.onload = function () {
      console.log(myReader.result);
      imagePostData[id] = myReader.result;
      return myReader.result;
    };
    myReader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  clickedAddImage: boolean;
  newImagesId: string;
  imageObject = [];

  AddImages() {
    this.clickedAddImage = true;
    this.adminService.addImage(this.imagePostData).subscribe(
      (res: any) => {
        this.toastrService.success(res.message);
        this.clickedAddImage = false;
        this.newImagesId = res.imageId;
        console.log(res);
      },
      err => {
        this.toastrService.success(err.error);
        this.clickedAddImage = false;
        console.log(err);
      }
    );
  }


  //If want to know how ng-image-slider works, go to https://www.npmjs.com/package/ng-image-slider
  ImageGetAll() {
    this.adminService.getAllImages().subscribe(
      (res: any) => {
        for (let image of res.images) {
          var tempImagesObject = [];
          var temId = image.id;
          delete image.id;

          for (let key in image) {
            var tempImageObject = {};
            tempImageObject = {
              image: image[key],
              thumbImage: image[key],
              alt: 'alt of image',
              title: temId
            };
            tempImagesObject.push(tempImageObject);
            console.log(image[key]);
          }
          this.imageObject.push(tempImagesObject);
        }
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  clickedDeleteImage: boolean;
  imageDelete(){
    this.clickedDeleteImage = true;
    let imageId = this.imageDeleteForm.value.imageId;
      this.adminService.deleteImage(imageId).subscribe(
        (res: any) => {
          this.clickedDeleteImage = false;
          this.toastrService.success(res.message);
          console.log(res);
        },
        err => {
          this.clickedDeleteImage = false;
          this.toastrService.success(err.error);
          console.log(err);
        }
      );
  }

}
