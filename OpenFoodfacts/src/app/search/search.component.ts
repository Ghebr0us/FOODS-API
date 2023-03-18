import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data!: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

  }

  search(e: any) {
    var q = e.target.value;
    this.api.products(q).subscribe((data: any) => this.data = data);
    console.log(this.data)
  }
}
