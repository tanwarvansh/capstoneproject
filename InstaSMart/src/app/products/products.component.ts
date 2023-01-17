import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from '../shared/products.service';
import { loadProducts, removeProduct } from '../state/products/product.action';
import { selectAllProducts } from '../state/products/product.selectors';
import { Product } from './product';
import { HelperService } from './products.helpservice';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnChanges{
  constructor(private productService:ProductService,private store:Store,private helper:HelperService){}
  filterValue:string='All';
  ngOnChanges(changes: SimpleChanges): void {
    console.log('in ng chnage')
    this.helper.currentFilterStage.subscribe(data=>this.filterValue=data);
    this.allProducts$.subscribe(data=>{
      this.productList=data.filter(data=>data.category==this.filterValue);
    })
    
  }
  productList:Product[]=[];
  filteredList:Product[]=[];

  public allProducts$:Observable<Product[]>=this.store.select(selectAllProducts);

   private msger=new BehaviorSubject('mesg necc');
   public check=this.msger.asObservable();
   ram=this.helper.currentFilterStage;



  ngOnInit(): void {
    this.check=this.helper.currentFilterStage;
    this.helper.currentFilterStage.subscribe(data=>{console.log(data+'here is data'),this.filterValue=data,console.log(this.filterValue)
    this.filteredList=this.productList.filter(data=>{
      if(this.filterValue=='All')return true;
      return data.category==this.filterValue});
    console.log(this.filteredList);
  });



    this.store.dispatch(loadProducts());
    this.allProducts$.subscribe(data=>{
      this.filteredList=data;
      this.productList=data;
    })




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
