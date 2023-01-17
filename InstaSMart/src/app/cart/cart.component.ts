import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Product } from '../products/product';
import { CartHelper } from './cart.helperServie';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private cartHelper:CartHelper,private router:Router){
    // this.cartHelper.currentCartStage.subscribe(data=>{
    //   console.log(data);
    //   this.cartList.push(data);
    // })
    this.productList=cartHelper.getDeatils();
    for(let pro of this.productList){
      this.cartList.push({product:pro,quantity:1})
    }
  }
  cartList:ForCart[]=[];
  productList:Product[]=[];

  ngOnInit(): void {
    // this.cartHelper.currentCartStage.subscribe(data=>{
    //   console.log(data);
    //   this.cartList.push(data);
    // })
    

  }

  add(pro:Product){
    for(let i=0;i<this.productList.length;i++){
  
        
  
      if(this.cartList[i].product==pro){
         this.cartList[i].quantity++;
          
      }
  
    }
  
    
  }
  
  minus(pro:Product){
    for(let i=0;i<this.productList.length;i++){
  
        
  
      if(this.cartList[i].product==pro){
         this.cartList[i].quantity--;
         if(this.cartList[i].quantity==0){
          this.cartHelper.deleteProductById(this.cartList[i].product.id)
          this.cartList.splice(i,1);
          
         }
          
      }
  
    }
  
    
  }

  clear(){
    this.cartList=[];
    this.productList=[];
    this.cartHelper.clearCart();
  }

  coninueShop(){
    this.router.navigate(['/products']);
  }





  
  
  



}

export interface ForCart{
  product:Product,
  quantity:number
}
