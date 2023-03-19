import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  routeObs!: Observable<ParamMap>;

  product: any; //Qui salverò la traccia selezionata
  ApiServiceObs!: Observable<Object>;
  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private location: Location) { }

  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) => {
    let productId = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log(productId); //Stampo su console
    //spotifyServiceObs va dichiarato
    if (productId != null) {
      this.ApiServiceObs = this.service.getProduct(productId);
      this.ApiServiceObs.subscribe((data) => {this.product = data; console.log(this.product)})
    }
  }
  back() : void
  {
    this.location.back();
  }
}