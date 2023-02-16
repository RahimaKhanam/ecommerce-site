import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent implements OnInit {

  @Input() peopleData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
