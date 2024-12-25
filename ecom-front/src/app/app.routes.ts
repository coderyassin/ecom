import { Routes } from '@angular/router';
import {ProductsComponent} from './ui/products/products.component';
import {CustomersComponent} from './ui/customers/customers.component';
import {AuthGuard} from './guard/auth.guard';

export const routes: Routes = [
  {path : "products", component : ProductsComponent, canActivate : [AuthGuard]},
  {path : "customers", component : CustomersComponent},
  { path: '', redirectTo: "products", pathMatch: "full" }
];
