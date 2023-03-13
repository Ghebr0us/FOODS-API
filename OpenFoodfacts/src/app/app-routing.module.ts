import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'description/:id', component: DescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
