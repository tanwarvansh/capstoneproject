import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductStoreComponent } from './products/product-store/product-store.component';
import { ProductsComponent } from './products/products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { AuthGuard } from './user/auth.gaurd.service';

const routes: Routes = [
  {path:'',component:ProductsComponent,pathMatch:'full'},
  {path:'products',component:ProductsComponent,children:[
    {path:'view/:id',component:ViewProductComponent}
  ]},
  {path:'view/:id',component:ViewProductComponent,
  // canActivate:[AuthGuard]
},
{path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'productStore',component:ProductStoreComponent,
children:[{path:'productAdd',component:ProductAddComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
