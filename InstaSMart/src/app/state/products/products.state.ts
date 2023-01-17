import { Product } from "src/app/products/product";
import * as AppState from "../app.state";

export interface State extends AppState.State{
    products:ProductState;
}
export interface ProductState{
    products:Product[];
    currentProductId:number|null;
    error:string;
    status:'pending' | 'loading' |'error'|'success';
}

export const intialState: ProductState={

    products:[],
    currentProductId:null,
    error:'null',
    status:'pending'

}