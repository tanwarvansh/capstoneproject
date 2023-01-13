import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/products.service';
import { loadProducts, removeProduct } from '../state/products/product.action';
import { selectAllProducts } from '../state/products/product.selectors';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private productService:ProductService,private store:Store){}
  productList:Product[]=[];

  public allProducts$:Observable<Product[]>=this.store.select(selectAllProducts);

  ngOnInit(): void {
    // this.productService.getProducts().subscribe((data)=>{
    //     this.productList=data;
    //     console.log(data);
    // })

    this.store.dispatch(loadProducts());

  }

  percentOf(price:number,oPrice:number):number{
    return Math.round(((oPrice-price)/oPrice)*100);

  }


  removeProduct(product:Product){
    console.log(product);
    const id=product.id;
    this.store.dispatch(removeProduct({id:id}));
  }

   

   

}
