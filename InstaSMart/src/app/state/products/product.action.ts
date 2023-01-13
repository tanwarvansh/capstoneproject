import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/products/product";


export const addProduct = createAction(
    `[Product Page] Add Product`,
    props<{product:Product}>()
);

export const removeProduct=createAction(
    `[Product Page] Remove Product`,
    props<{id:number}>()
);

export const getProductById=createAction(
    `[Product Page] Load Product`,
    props<{id:number}>()
)

export const loadProducts=createAction(
    `[Product Page] Load Products`
);

export const LoadToSucccess= createAction(
    `[Products API] Product Load Success`,
    props<{products:Product[]}>()
);

export const LoadToFailure= createAction(
    `[Product Page] Product Load Failure`,
    props<{error:any}>()
);