import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError } from "rxjs";
import { Product } from "../products/product";


@Injectable({
    providedIn:'root'
})
export class ProductService{

    constructor(private http:HttpClient){}

     private url:string='/api/products';
     products:Product[]=[];




    getProducts():Observable<Product[]>{
      console.log("hello hiirbfiebrfgk");
      return this.http.get<Product[]>(`${this.url}`).pipe(
        tap(data=> {console.log(data);
          this.products=data;
        }),
        
      );
     
    }


}