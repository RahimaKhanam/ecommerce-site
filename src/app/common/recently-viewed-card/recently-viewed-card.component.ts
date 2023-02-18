import { Component, OnInit } from '@angular/core';
import { recentlyViewed } from '../content';

@Component({
  selector: 'recently-viewed',
  templateUrl: './recently-viewed-card.component.html',
  styleUrls: ['./recently-viewed-card.component.scss']
})
export class RecentlyViewedCardComponent implements OnInit {
  recentlyViewed = recentlyViewed;

  constructor() { }

  ngOnInit(): void {
  }

}
