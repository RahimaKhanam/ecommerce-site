import { Component, OnInit } from '@angular/core';
import { dealsContent, peopleData, tshirts } from 'src/app/common/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tshirtData= tshirts;
  dealsData = dealsContent;
  peopleData= peopleData;

  constructor() { }

  ngOnInit(): void {
  }

}
