import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
