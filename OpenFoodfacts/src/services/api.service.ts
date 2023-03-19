import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductData } from 'src/models/ProductData.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string = 'https://world.openfoodfacts.org/cgi';
  private pageSize: number = 30; //questo valore cambia il numero di dati mostrati

  constructor(
    private http: HttpClient
  ) { }

  public products(query: string): Observable<any> {        //questo cerca il prodotto(searchProduct da porta)
    return this.http.get(`${this.baseURL}/search.pl`, {
      params: {
        json: true,
        search_terms: query,
        page_size: this.pageSize
      }
    });
  }
  public product(id: string): Observable<ProductData> {   //questo lo prende(getProduct da porta)
    return this.http.get<ProductData>(`${this.baseURL}/api/v0/product/${id}`, {});
  }
}
