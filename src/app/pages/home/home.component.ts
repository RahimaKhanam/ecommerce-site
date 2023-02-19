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
  peopleData = peopleData;
  filterState: any;
  searchedFilter: any;
  searchedTerm: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadAPI();
    // Retrive data releavnt to the searched term
    this.apiService.searchedTerm.subscribe(data => {
      console.log(data);
      this.searchedTerm = data;
      if (data) {
        this.apiService.searchProduct(data).subscribe((list: any) => {
          console.log("List", list.products);
          this.productCategoryWise = list.products;
          if(this.searchedTerm) this.apiService.searchedCategory.next('')
        })
      }
    });
    // Preserve state of the searched filter
    this.apiService.searchedCategory.subscribe(data => {
      console.log(data);
      this.searchedFilter = data;
      if (data) {
        this.apiService.productsByCategoryList(data).subscribe((list: any) => {
          console.log("List", list.products);
          this.productCategoryWise = list.products;
          // if(this.searchedFilter) this.apiService.searchedTerm.next('')
        })
      }
    });
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

  selectionChange(data: any) {
    console.log(data.target.value);
    this.apiService.productsByCategoryList(data.target.value).subscribe((list: any) => {
      console.log("List", list.products);
      this.productCategoryWise = list.products;
    })
    // Save state of the searched filter
    this.apiService.searchedCategory.next(data.target.value);
  }

}
