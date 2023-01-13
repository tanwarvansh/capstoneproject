import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { AuthGuard } from './user/auth.gaurd.service';

const routes: Routes = [
  {path:'',component:ProductsComponent,pathMatch:'full'},
  {path:'products',component:ProductsComponent,children:[
    {path:'view/:id',component:ViewProductComponent}
  ]},
  {path:'view/:id',component:ViewProductComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
