import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ProductService } from "src/app/shared/products.service";
import { loadProducts, LoadToFailure, LoadToSucccess } from "./product.action";


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
        )


    })

}