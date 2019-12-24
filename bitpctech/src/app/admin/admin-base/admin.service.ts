import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    console.log(this.baseUrl);
  }

  //Category table controls
  getAllCategories() {
    var url = this.baseUrl + 'api/V1/admin/category'
    return this.http.get(url);
  }

  addCategory(data) {
    var url = this.baseUrl + 'api/V1/admin/category'
    return this.http.post(url, data);
  }

  deleteCategory(categoryId) {
    var url = this.baseUrl + 'api/V1/admin/category/' + categoryId
    return this.http.delete(url);
  }

  //Brand table controls
  getAllBrands() {
    var url = this.baseUrl + 'api/V1/admin/brand'
    return this.http.get(url);
  }

  addBrand(data) {
    var url = this.baseUrl + 'api/V1/admin/brand'
    return this.http.post(url, data);
  }

  deleteBrand(brandId) {
    var url = this.baseUrl + 'api/V1/admin/brand/' + brandId
    return this.http.delete(url);
  }

  //Specification table controls
  getAllSpecifications() {
    var url = this.baseUrl + 'api/V1/admin/specification'
    return this.http.get(url);
  }

  addSpecification(data) {
    var url = this.baseUrl + 'api/V1/admin/specification'
    return this.http.post(url, data);
  }

  deleteSpecification(specificationId) {
    var url = this.baseUrl + 'api/V1/admin/specification/' + specificationId
    return this.http.delete(url);
  }

  //Specification table controls
  getAllImages() {
    var url = this.baseUrl + 'api/V1/admin/images'
    return this.http.get(url);
  }

  addImage(data) {
    var url = this.baseUrl + 'api/V1/admin/images'
    return this.http.post(url, data);
  }

  deleteImage(imageId) {
    var url = this.baseUrl + 'api/V1/admin/images/' + imageId
    return this.http.delete(url);
  }

  //Specification table controls
  getAllPcPart() {
    var url = this.baseUrl + 'api/V1/admin/pcpart'
    return this.http.get(url);
  }

  addPcPart(data) {
    var url = this.baseUrl + 'api/V1/admin/pcpart'
    return this.http.post(url, data);
  }

  deletePcPart(imageId) {
    var url = this.baseUrl + 'api/V1/admin/pcpart/' + imageId
    return this.http.delete(url);
  }

}
