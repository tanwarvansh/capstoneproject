import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Category } from "src/app/products/product";
import { ProductState } from "./products.state";



export const productsDataState= createFeatureSelector<ProductState>('products');


export const selectAllProducts:any=createSelector(
    productsDataState,
    (state)=>state.products
)

export const getCurrentProductId:any = createSelector(
    productsDataState,
    state => state.currentProductId
  );
  
  export const getCurrentProduct = createSelector(
    productsDataState,
    getCurrentProductId,
    (state, currentProductId) => {
  
      if (currentProductId === 0) {
        return {
          id:0,
          name:'',
          category:Category.Kitchen,
          price:0,
          oPrice:10,
          imageUrl:'',
          rating:1,
          qty:0
        };
      } else {
        return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
      }
    }
  );