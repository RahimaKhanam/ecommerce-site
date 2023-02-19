import { Component, OnInit } from '@angular/core';
import { dealsContent, peopleData } from 'src/app/common/content';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productCategories: any;
  productCategoryWise: any;
  tshirtData: any;
  dressesData: any;
  dealsData = dealsContent;
  peopleData= peopleData;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadAPI();
  }

  loadAPI() {
    this.apiService.getProductCategories().subscribe((list: any) => {
      console.log("List", list);
      this.productCategories = list;
    })
    this.apiService.productsList().subscribe((list: any) => {
      console.log("List", list.products);
      this.productCategoryWise = list.products;
    })
    this.apiService.productsByCategoryList('mens-shirts').subscribe((list: any) => {
      console.log("List", list.products);
      this.tshirtData = list.products;
    })
    this.apiService.productsByCategoryList('womens-dresses').subscribe((list: any) => {
      console.log("List", list.products);
      this.dressesData = list.products;
    })
  }

  selectionChange(data :any){
    console.log(data.target.value);
    this.apiService.productsByCategoryList(data.target.value).subscribe((list: any) => {
      console.log("List", list.products);
      this.productCategoryWise = list.products;
    })
  }

}
