import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('term') searchTerm: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.searchedTerm.subscribe(data => {
      console.log(data);
      if (data == '') {
        this.searchTerm.nativeElement.value = ''
      }
    });
  }

  keyEnter(data: any) {
    console.log(data.target.value, "SearchedTerm");
    // Save state of the searched term
    this.apiService.searchedTerm.next(data.target.value);
  }

}
