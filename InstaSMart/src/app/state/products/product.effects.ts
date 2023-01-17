import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of } from "rxjs";
import { ProductService } from "src/app/shared/products.service";
import { createProduct, createProductFailure, createProductSuccess, loadProducts, LoadToFailure, LoadToSucccess, removeProduct, removeProductFailure, removeProductSuccess, updateProduct, updateProductFailure, updateProductSuccess } from "./product.action";


@Injectable()
export class ProductEffects{
    constructor(private actions$:Actions,private productsService:ProductService){}

    loadProducts$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(loadProducts),
            mergeMap(()=>this.productsService.getProducts()
            .pipe(map(products=>LoadToSucccess({products})),
            catchError(error=>of(LoadToFailure({error})))
            
            )
            )
        );


    });



    updateProduct$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(updateProduct),
          concatMap(action =>
            this.productsService.updateProduct(action.product)
              .pipe(
                map(product => updateProductSuccess({ product })),
                catchError(error => of(updateProductFailure({ error })))
              )
          )
        );
    });





    createProduct$ = createEffect(() => {
        return this.actions$
          .pipe(
            ofType(createProduct),
            concatMap(action =>
              this.productsService.createProduct(action.product).pipe(
                map(product => createProductSuccess({ product })),
                catchError(error => of(createProductFailure({ error })))
              )
            )
          );
      });



      deleteProduct$ = createEffect(() => {
        return this.actions$
          .pipe(
            ofType(removeProduct),
            mergeMap(action =>
              this.productsService.deleteProduct(action.id).pipe(
                map(() => removeProductSuccess({ productId: action.id })),
                catchError(error => of(removeProductFailure({ error })))
              )
            )
          );
      });


      

}