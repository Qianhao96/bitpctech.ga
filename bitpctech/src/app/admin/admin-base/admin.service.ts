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
getAllCategories(){
  var url = this.baseUrl + 'api/V1/admin/category'
  return this.http.get(url);
}

addCategory(data){
  var url = this.baseUrl + 'api/V1/admin/category'
  return this.http.post(url, data);
}

deleteCategory(categoryId){
  var url = this.baseUrl + 'api/V1/admin/category/' + categoryId
  return this.http.delete(url);
}

//Brand table controls
  getAllBrands(){
    var url = this.baseUrl + 'api/V1/admin/brand'
    return this.http.get(url);
  }

  addBrand(data){
    var url = this.baseUrl + 'api/V1/admin/brand'
    return this.http.post(url, data);
  }

  deleteBrand(brandId){
    var url = this.baseUrl + 'api/V1/admin/brand/' + brandId
    return this.http.delete(url);
  }

}
