import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

const baseUrl = environment.base_url

@Injectable({
  providedIn: 'root'
})



export class ApiService {
  // For storing the state of the searched filter
  searchedCategory: BehaviorSubject<any> = new BehaviorSubject<any>('');

  // For storing the state of the searched term
  searchedTerm: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) { }

  // All Products
  productsList() {
    return this.http.get(`${baseUrl}`)
  }
  // Products by category
  productsByCategoryList(category: any) {
    return this.http.get(`${baseUrl}/category/${category}`)
  }
  // Data of a product
  getProductById(id: any) {
    return this.http.get(`${baseUrl}/${id}`)
  }
  // Get Categories
  getProductCategories() {
    return this.http.get(`${baseUrl}/categories`)
  }
  // Product Search
  searchProduct(searchTerm: any) {
    return this.http.get(`${baseUrl}//search?q=${searchTerm}`)
  }
}
