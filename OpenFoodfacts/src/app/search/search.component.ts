import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product.model';
import { Observable } from 'rxjs';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: Product[] = [];
  query!: string;
  obsproduct!: Observable<Object>;
  item: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {

  }
  search(e: any) {
    var q = e.target.value;
    this.api.products(q).subscribe(data => this.data = data.products);
  }
  
  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsproduct = this.api.products(this.query);
    this.obsproduct.subscribe((data) => { this.item = data; console.log(this.item.products) });
  }

  renderResults(res: any): void {
    this.item = null;
    if (res && res.tracks && res.tracks.items) {
      this.item = res.tracks.items;
    }
  }
}