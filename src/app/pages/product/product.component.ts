import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger("animateCart", [
      state(
        "ready",
        style({
          transform: "rotate(0)",
          marginLeft: 0
        })
      ),
      state(
        "active",
        style({
          transform: "rotate(-20deg)",
          marginLeft: "140px",
          display: "none"
        })
      ),
      transition("ready => active", animate("600ms 100ms ease-in")),
      transition("active => ready", animate("100ms ease-in"))
    ]),
    trigger("animateText", [
      state(
        "ready_text",
        style({
          opacity: 1
        })
      ),
      state(
        "active_text",
        style({
          opacity: 0
        })
      ),
      transition("ready_text => active_text", animate("100ms linear")),
      transition("active_text => ready_text", animate("100ms 100ms linear"))
    ]),
    trigger("hideText", [
      state(
        "ready_text",
        style({
          display: "inline"
        })
      ),
      state(
        "active_text",
        style({
          display: "none"
        })
      ),
      transition("ready_text => active_text", animate("0ms 700ms linear")),
      transition("active_text => ready_text", animate("0ms linear"))
    ]),
    trigger("animateCheck", [
      state(
        "ready_check",
        style({
          opacity: 0
        })
      ),
      state(
        "active_check",
        style({
          opacity: 1
        })
      ),
      transition("ready_check => active_check", animate("100ms 750ms linear")),
      transition("ready_check => active_check", animate("100ms linear"))
    ]),
    trigger("hideCheck", [
      state(
        "ready_check",
        style({
          display: "none"
        })
      ),
      state(
        "active_check",
        style({
          display: "inline"
        })
      ),
      transition("ready_check => active_check", animate("100ms 720ms linear"))
    ])
  ]
})

export class ProductComponent implements OnInit {
  @ViewChild('quantity') quantityInput: any;
  productData: any;
  mainImage: any;
  quantity = 0;
  panelOpenState = false;
  tshirtData: any;
  id: any;
  cartState = 'ready';

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

  addToCart(): void {
    this.cartState = "active";

    setTimeout(() => {
      this.cartState = "ready";
    }, 1800);
  }
  getItemState(): string {
    return this.cartState;
  }

}
