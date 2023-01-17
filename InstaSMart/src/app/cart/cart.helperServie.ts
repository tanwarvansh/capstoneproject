import { identifierName } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../products/product";


@Injectable({
    providedIn:'root'
})
export class CartHelper{

    prod!:Product;
    productList:Product[]=[];
    cartStageManager=new BehaviorSubject(this.prod);
    currentCartStage=this.cartStageManager.asObservable();

    getDeatils(){
        return this.productList;
    }
    clearCart(){
        this.productList=[];
    }
    deleteProductById(id:number){
        for(let i=0;i<this.productList.length;i++){
            if(this.productList[i].id==id)
                this.productList.splice(i,1);
          }
    }


    updateCartStageManager(product:Product){
        
        let found:boolean=false;
        for(let pro of this.productList){
            if(pro.id==product.id)
            found=true;
        }



        if(!found)
        this.productList.push(product);
        console.log(this.productList);
        console.log(product);
        this.cartStageManager.next(product);
    }

}