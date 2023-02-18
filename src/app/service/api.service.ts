import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.base_url

@Injectable({
  providedIn: 'root'
})



export class ApiService {

  constructor(private http: HttpClient) { }

  // All Products
  productsList() {
    return this.http.get(`${baseUrl}`)
  }
  // Products by category
  productsByCategoryList(category:any) {
    return this.http.get(`${baseUrl}/category/${category}`)
  }
  // Data of a product
  getProductById(id:any) {
    return this.http.get(`${baseUrl}/${id}`)
  }
}
