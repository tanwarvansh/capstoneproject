import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap, timeout } from 'rxjs';
import { ProductService } from 'src/app/shared/products.service';
import { createProduct, loadProducts } from 'src/app/state/products/product.action';
import { Category, Product } from '../product';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'


// import { clearCurrentProduct, createProduct, deleteProduct, loadProducts, updateProduct } from '../state/products/product.actions';
// import { getCurrentProduct } from '../state/products/product.selectors';
// import { Category, Product } from './product.component';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit ,OnDestroy{

  // constructor(private productService:ProductService){}
  
  

  product:Product|null|undefined={
    id:1,
    name:"a",
    price:10,
    oPrice:20,
    imageUrl:"c",
    rating:0,
    category:Category.Kitchen
  };

  // product!:Product|null|undefined;

  pageTitle='Add Product';
  errorMessage='';
  product$!:Observable<Product|null | undefined> ;
  addProduct!: FormGroup;
  sub!:Subscription;

  displayMessage: {[key:string]:string}={};
  private validationMessages!:{[key:string]:{[key:string]:string}};
  // private genericValidator!:GenericValidator;
  constructor(private formBuilder:FormBuilder,private router:Router,private productService:ProductService,private store:Store){

  this.validationMessages={

    name:{
      required:'Product name is required ',
      minLength:'Product name must have 3 characters',
      maxLength:'Product name must have less than  equal to 10 chars'
    },
    category:{
      required:'Category is required'
    },
    price:{
      required:'Price is required'
    },image:{
      required:'Image is required'
    },rating:{
      required:'Rating is required'
    },


    };




  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  ngOnInit(): void {
    console.log("in add product",this.product);
    
    this.addProduct=this.formBuilder.group({
      id: [],
      name: ['abc',[ Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      category:[Category.Kitchen,[Validators.required]],
      price:['',[Validators.required]],
      image:['',[Validators.required]],
      rating:[3,[Validators.required]]
    })

    console.log("add form created for product",this.addProduct.value);


    // this.product$ = this.store.select(getCurrentProduct)
      // .pipe(
        // tap(currentProduct => this.displayProduct(currentProduct))
      // );

      // this.product$.subscribe(data=>this.product=data);

      // this.addProduct.valueChanges.subscribe(
      //   ()=>this.displayMessage=
      //   this.genericValidator.processMessages(this.addProduct)
      // );

      // this.addProduct.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addProduct));

  
  }

  get id(){
    return this.addProduct.get("id");
  }

  get name(){
    return this.addProduct.get("name");
    }

  get image(){
    return this.addProduct.get("image");
    }
  get price(){
    return this.addProduct.get("price");
      }
  get category(){
      return this.addProduct.get("category");
        }
  get rating(){
      return this.addProduct.get("rating");
        }



        displayProduct(productParam: Product |null |undefined):void{

          this.product = productParam;
          if(this.product){
       //reset the form to its original
           this.addProduct.reset();
       
           if(this.product.id==0){
             this.pageTitle='Add Product';
           }
           else{
       
             this.pageTitle=`Edit Product: ${this.product.name}`;
       
           }


 this.addProduct.patchValue({
  id:this.product.id,
   name:this.product.name,
   image:this.product.imageUrl,
   rating:this.product.rating,
   price:this.product.price,
   category:this.product.category


 })


   }

  }

  saveProduct(originalProduct:Product):void{
    console.log(originalProduct);
    if(this.addProduct.valid){
      if(this.addProduct.dirty){
        const prod={...originalProduct,...this.addProduct.value}
    this.store.dispatch(createProduct({product:prod}));
      }

    }

  }

}


