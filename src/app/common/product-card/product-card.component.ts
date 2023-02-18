import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() cardData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  productDetails(id: any){
    console.log(id);
    this.router.navigate([`/product/${id}`]);
  }

}
