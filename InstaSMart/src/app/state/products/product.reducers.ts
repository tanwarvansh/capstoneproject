import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { createProduct, getProductById, loadProducts, LoadToFailure, LoadToSucccess, removeProduct, updateProduct } from "./product.action";
import { intialState } from "./products.state";



export const productReducer=createReducer(
    intialState,
    
    on(createProduct,(state,{product})=>({
        ...state,
        products:[...state.products,{id:Date.now(),name:product.name,price:product.price,oPrice:product.oPrice,imageUrl:product.imageUrl,rating:product.rating,category:product.category}],
    })),

    on(removeProduct,(state,{id})=>({
        ...state,
        products:state.products.filter((product)=>product.id!==id),
    })),

    // on(updateProduct,(state,{product})=>({
        // ...state,
        // products:state.products.filter((data)=>{if(data.id==product.id){data.price = product.price} return true} )
    // })),


    on(getProductById,(state,{id})=>({       
            ...state,
            products:state.products.filter((product)=>product.id==id)     

    })),

    on(loadProducts,(state)=>({
        ...state,
        status:'loading'
    })),

    on(LoadToSucccess,(state,{products})=>({
        ...state,
        products,
        error:'null',
        status:'success'
    })),

    on(LoadToFailure,(state, {error})=>({
        ...state,
        error:error,
        status:'error'
    }))

)