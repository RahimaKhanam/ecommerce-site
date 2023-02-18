import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tshirts } from 'src/app/common/content';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('quantity') quantityInput: any;

  // productData = {
  //   mainImage: '../../../assets/products/p1a.webp',
  //   image1: '../../../assets/products/p1a.webp',
  //   image2: '../../../assets/products/p1b.webp',
  //   image3: '../../../assets/products/p1c.webp',
  //   image4: '../../../assets/products/p1a.webp',
  //   title: 'Half Sleve T-shirt for Men',
  //   text: "Men's Wear, T-Shirt",
  //   price: '299',
  //   oldPrice: '499',
  //   percent: '40',
  //   quantity: 0
  // }
  productData: any;
  mainImage: any;
  quantity = 0;
  panelOpenState = false;
  tshirtData: any;
  id: any;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      console.log(param)
      this.id = param.get('id');
      console.log(this.id);
      this.apiService.getProductById(this.id).subscribe((data: any) => {
        console.log(data);
        this.productData = data;
        this.mainImage = this.productData?.images[0];
      });
    });
    this.loadAPI();
  }

  loadAPI() {
    this.apiService.productsByCategoryList('mens-shirts').subscribe((list: any) => {
      console.log("List", list.products);
      this.tshirtData = list.products;
    })
  }

  changeImage(image: any) {
    this.mainImage = image;
  }

  increaseItem() {
    let value = parseInt(this.quantityInput.nativeElement.value);
    console.log("increment called", value, this.productData.stock);
    if (value < this.productData.stock) {
      value++;
    }

    this.quantityInput.nativeElement.value = value.toString();
  }

  decreaseItem() {
    console.log("decrement called");
    let value = parseInt(this.quantityInput.nativeElement.value);
    if (this.quantityInput.nativeElement.value > 0) {
      value--;
    }

    if (this.quantityInput.nativeElement.value <= 0) {
      return;
    }

    this.quantityInput.nativeElement.value = value.toString();
  }

}
