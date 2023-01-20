import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartHelper } from 'src/app/cart/cart.helperServie';
import { ProductService } from 'src/app/shared/products.service';
import { getProductById, loadProducts } from 'src/app/state/products/product.action';
import { selectAllProducts } from 'src/app/state/products/product.selectors';
import { Product } from '../product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  id:number=0;
  product:Product|undefined;
  productList:Product[]=[];
  productList$:Observable<Product[]>=new Observable();

  constructor(private router:Router,private productServie:ProductService,private activatedRoute:ActivatedRoute,private store:Store,private cartHelper:CartHelper){}

  private deliveryDat=(new Date());
  deliveryDate:any;
  message:string='';

  showDate=false;

  toggleDate(){
    this.showDate = !this.showDate;
  }
  cartLIst:Product[]=[];
  cartAlIst:Product[]=[];

  addToCart(prod:Product|undefined)
  {
    if(prod){
      this.cartLIst.push(prod);
      this.cartAlIst=this.cartLIst
      console.log(this.cartAlIst);
      this.cartHelper.updateCartStageManager(prod);
    }

    this.message="Item Added to Cart Successfully";

    setTimeout(()=>this.message='',2000);




  }

  buyNow(product:Product|undefined){
    this.addToCart(product);
    this.router.navigate(['cart']);
  }




  ngOnInit(): void {
    this.deliveryDate=this.deliveryDat.getDate()+5+"-"+0+(this.deliveryDat.getMonth()+1)+"-"+this.deliveryDat.getFullYear() ;
    this.productList$ =this.store.select(selectAllProducts);
    this.productList$.subscribe(data=>{this.productList=data});

    this.activatedRoute.paramMap.subscribe((params)=>{
      console.log(params);
      let id=(params.get('id'));

      if(id){
        this.id+=Number.parseInt(id);
      }
      console.log(this.id);

      this.store.dispatch(getProductById({id:this.id}));
      if(this.productList){
        this.product=this.productList.find(data=>data.id==this.id);
      }

      console.log(this.productList);
      console.log(this.product);
      this.store.dispatch(loadProducts());

    })
    
  }
  percentOf(price:number,oPrice:number):number{
    return Math.round(((oPrice-price)/oPrice)*100);

  }



}
