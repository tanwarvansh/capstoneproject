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
    this.calculateCost();
  }
  cartList:ForCart[]=[];
  productList:Product[]=[];
  totalCost:number=0;
  checkOut:boolean=false;
  upimode:boolean|null=null;
  date:string="2023-01-19";

  ngOnInit(): void {
    // this.cartHelper.currentCartStage.subscribe(data=>{
    //   console.log(data);
    //   this.cartList.push(data);
    // })
    

  }
  calculateCost(){
    this.totalCost=0;
    for(let i=0;i<this.cartList.length;i++){
      this.totalCost+=(this.cartList[i].quantity*this.cartList[i].product.price);
    }
  }

  checkout(){
    this.checkOut=true;
  }

  upiMode(val:string){
    if(val=='of')
    this.upimode=false;
    else
    this.upimode=true;
  }

  isValid():boolean{

    console.log(this.upimode);
    if(this.upimode==null)
    return false;

    if(this.upimode==false || (this.upimode==true && this.data())){
       return true;
    }

    return false;
  }
  val:string='';
  data1(val:string){
    this.val=val;
  }
  data(){
    if(this.val.length>5 && this.val.length<20)
    return true;
    else
    return false;
  }

  paymentDone(){
    if(!this.isValid()){
      alert("Please Enter Valid Details");
      return;
    }

    alert("Congratulations! Your order has been successfully placed");
    this.router.navigate(['products']);
  }


  add(pro:Product){
    for(let i=0;i<this.productList.length;i++){
  
        
  
      if(this.cartList[i].product==pro){
         this.cartList[i].quantity++;
          
      }
  
    }
    this.calculateCost();
  
    
  }
  
  minus(pro:Product){
    for(let i=0;i<this.productList.length;i++){
  
        
  
      if(this.cartList[i].product==pro){
         this.cartList[i].quantity--;
         if(this.cartList[i].quantity==0){
          if(confirm("Are you sure you want to remove the item")){
          this.cartHelper.deleteProductById(this.cartList[i].product.id)
          this.cartList.splice(i,1);
          }else{
            this.cartList[i].quantity++;
          }
          
         }
          
      }
  
    }
    this.calculateCost();
  
    
  }

  clear(){
    this.cartList=[];
    this.productList=[];
    this.cartHelper.clearCart();
    this.totalCost=0;
  }

  coninueShop(){
    this.router.navigate(['/products']);
  }





  
  
  



}

export interface ForCart{
  product:Product,
  quantity:number
}
