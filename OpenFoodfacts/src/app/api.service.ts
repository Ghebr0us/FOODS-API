import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  searchProducts(query: string){
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=30&json=true`
    
    return this.http.get(url)
    
  }

  getProduct(id: string){
    const url = ` https://world.openfoodfacts.org/api/v0/product/${id}`;
  
    return this.http.get(url);
  }
}
