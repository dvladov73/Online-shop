import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
   { path: 'user', component: UserComponent,
       children: [
         { path: 'signin', component: SignInComponent},
         { path: 'signup', component: SignUpComponent}
       ]
   },
   { path: 'products', component: ProductsComponent},
   { path: 'product-view/:id', component: ProductViewComponent },
   { path: 'cart/:id', component: CartComponent },
   { path: '**', component:ProductsComponent  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
