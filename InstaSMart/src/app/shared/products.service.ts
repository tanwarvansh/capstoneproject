import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, map } from "rxjs";
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




   createProduct(product:Product):Observable<Product>{
    console.log(product);
    const headers= new HttpHeaders({'Content-type':'application/json'});

    const newProduct={...product,id:null}

    return this.http.post<Product>(this.url,newProduct,{headers}).pipe(
      tap(data=>{
        console.log('create new product'+JSON.stringify(data));
        console.log(data);
        this.products.push(data);
      })
      
    )

   }



   deleteProduct(id:number):Observable<{}>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});

    //@DeleteMapping deleteAll delete url/id  /api/products/111
    const url= `${this.url}/${id}`;

    return this.http.delete<Product>(url,{headers})
    .pipe(
      tap(data=>{
        console.log('deleted prd'+id);
       const foundIndex = this.products.findIndex(item=>item.id===id);
       //if product id is not found means index returned will be -1
       if(foundIndex > -1)
       this.products.splice(foundIndex,1);


      },
      // catchError(this.errorHandler)
      )


    );


    }



    updateProduct(product:Product):Observable<Product>{
      const headers= new HttpHeaders({'Content-Type':'application/json'});
  
      //put http method
      console.log('hle'+product);

      const url= `${this.url}/${product.id}`;
  
      //logic to call http put method to update the product on the given url
      return this.http.put<Product>(url,product,{headers}).pipe(
  
      tap(()=>{console.log('update product'+product.id);
      const foundIndex =this.products.findIndex(item=>item.id === product.id);
      if(foundIndex > -1){
        this.products[foundIndex]=product;
          }
      }),
      map(()=>product),
      // catchError(this.errorHandler)
      );
  
  
     }








  }










