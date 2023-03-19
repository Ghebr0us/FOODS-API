import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/models/Product.model';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  product!: Product;
  id: string | undefined = '';
  loading: boolean = true;
  ingredients: Array<string> = [];

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')?.toString();

      if (!this.id) this.router.navigate(['/']);
      else {
        this.api.product(this.id).subscribe((data) => {
          this.product = data.product;
          this.loading = false;

          this.ingredients = this.product.ingredients.map((i) => i.text);
        });
      }
    });
  }

  clean(l: Array<string>): Array<string> {
    return l.map(i => i.replace(/[A-z]*\:/, ''));
  }
}
