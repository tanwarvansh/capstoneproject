import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/products/product";


export const createProduct = createAction(
    `[Product] Create Product`,
    props<{product:Product}>()
);

export const createProductSuccess = createAction(
    '[Product] Create Product Success',
    props<{ product: Product }>()
  );
  
  export const createProductFailure = createAction(
    '[Product] Create Product Fail',
    props<{ error: string }>()
  );


  export const updateProduct = createAction(
    '[Product] Update Product',
    props<{ product: Product }>()
  );
  
  export const updateProductSuccess = createAction(
    '[Product] Update Product Success',
    props<{ product: Product }>()
  );
  
  export const updateProductFailure = createAction(
    '[Product] Update Product Fail',
    props<{ error: string }>()
  );








export const removeProduct=createAction(
    `[Product Page] Remove Product`,
    props<{id:number}>()
);

export const removeProductSuccess = createAction(
    '[Product] Delete Product Success',
    props<{ productId: number }>()
  );
  
  export const removeProductFailure = createAction(
    '[Product] Delete Product Fail',
    props<{ error: string }>()
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