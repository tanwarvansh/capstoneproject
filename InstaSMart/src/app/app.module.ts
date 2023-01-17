import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DBService } from './shared/inMemoryDatabase';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/products/product.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/products/product.effects';
import { MiniHeaderComponent } from './header/mini-header/mini-header.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductStoreComponent } from './products/product-store/product-store.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    MiniHeaderComponent,
    ViewProductComponent,
    LoginComponent,
    ProductStoreComponent,
    ProductAddComponent,
    CartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MaterialExampleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    InMemoryWebApiModule.forRoot(DBService),
    StoreModule.forRoot([]),
    StoreModule.forFeature('products',productReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(ProductEffects),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
