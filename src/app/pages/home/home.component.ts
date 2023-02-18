import { Component, OnInit } from '@angular/core';
import { dealsContent, peopleData, tshirts } from 'src/app/common/content';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tshirtData: any;
  dressesData: any;
  dealsData = dealsContent;
  peopleData= peopleData;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadAPI();
  }

  loadAPI() {
    this.apiService.productsByCategoryList('mens-shirts').subscribe((list: any) => {
      console.log("List", list.products);
      this.tshirtData = list.products;
    })
    this.apiService.productsByCategoryList('womens-dresses').subscribe((list: any) => {
      console.log("List", list.products);
      this.dressesData = list.products;
    })
  }

}
