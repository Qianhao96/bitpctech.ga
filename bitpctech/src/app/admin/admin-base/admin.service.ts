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
  

  getAllBrandsUrl = this.baseUrl + 'api/V1/admin/brand';
  getAllBrands(){
    return this.http.get(this.getAllBrandsUrl);
  }

}
