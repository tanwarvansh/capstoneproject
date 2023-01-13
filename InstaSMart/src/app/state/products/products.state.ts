import { Product } from "src/app/products/product";
import * as AppState from "../app.state";

export interface State extends AppState.State{
    products:ProductState;
}
export interface ProductState{
    products:Product[];
    error:string;
    status:'pending' | 'loading' |'error'|'success';
}

export const intialState: ProductState={

    products:[],
    error:'null',
    status:'pending'

}