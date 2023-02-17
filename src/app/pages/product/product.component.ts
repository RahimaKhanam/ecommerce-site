import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('quantity') quantityInput: any;

  productData = {
    mainImage: '../../../assets/products/p1a.webp',
    image1: '../../../assets/products/p1a.webp',
    image2: '../../../assets/products/p1b.webp',
    image3: '../../../assets/products/p1c.webp',
    image4: '../../../assets/products/p1a.webp',
    title: 'Half Sleve T-shirt for Men',
    text: "Men's Wear, T-Shirt",
    price: '299',
    oldPrice: '499',
    percent: '40',
    quantity: 0
  }
  mainImage: any;
  constructor() { }

  ngOnInit(): void {
    this.mainImage = this.productData.mainImage;
  }

  changeImage(image: any) {
    this.mainImage = image;
  }

  Increase() {
    let value = parseInt(this.quantityInput.nativeElement.value);
    console.log("increment called", value, this.productData.quantity);
    // if (this.productData.quantity >= 1){
    //   value++;

    //   if (value > this.productData.quantity) {
    //     // @ts-ignore
    //     value = this.product.quantity;
    //   }
    // } else {
    //   return;
    // }

    value++;


    this.quantityInput.nativeElement.value = value.toString();
  }

  Decrease() {
    console.log("decrement called");
    let value = parseInt(this.quantityInput.nativeElement.value);
    if (this.quantityInput.nativeElement.value > 0){
      value--;

    //   if (value <= 0) {
    //     // @ts-ignore
    //     value = 0;
    //   }
    // } else {
    //   return;
    }

    if (this.quantityInput.nativeElement.value <= 0) {
      return;
    }

    this.quantityInput.nativeElement.value = value.toString();
  }

}
