import { Component, OnInit } from '@angular/core';
import { tshirts } from 'src/app/common/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tshirtData= tshirts;

  constructor() { }

  ngOnInit(): void {
  }

}
