import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AnonymousService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {
        console.log(this.baseUrl);
    }

    getAllBrands() {
        var url = this.baseUrl + 'api/V1/catalog/brand'
        return this.http.get(url);
    }

    //Category table controls
    getAllCategories() {
        var url = this.baseUrl + 'api/V1/catalog/category'
        return this.http.get(url);
    }
}