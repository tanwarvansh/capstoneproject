import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./products.state";



export const productsDataState= createFeatureSelector<ProductState>('products');


export const selectAllProducts:any=createSelector(
    productsDataState,
    (state)=>state.products
)