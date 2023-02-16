import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'carousel-deals',
  templateUrl: './carousel-deals.component.html',
  styleUrls: ['./carousel-deals.component.scss']
})
export class CarouselDealsComponent implements OnInit {

  @Input() dealsData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
