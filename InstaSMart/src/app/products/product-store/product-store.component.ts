import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProducts, removeProduct, updateProduct } from 'src/app/state/products/product.action';
import { selectAllProducts } from 'src/app/state/products/product.selectors';
import { Category, Product } from '../product';
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent {
  constructor(private store:Store,private modelService:NgbModal,private formBuilder:FormBuilder){}
  title:string='';
  updateProduct!:FormGroup;

  closeResult!:string;
  productList:Product[]=[];
  product1:Product|null|undefined={
    id:1,
    name:'',
    price:10,
    oPrice:20,
    imageUrl:'',
    rating:3,
    category:Category.Mobile
  }

  public allProducts$:Observable<Product[]>=this.store.select(selectAllProducts);

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.allProducts$.subscribe((data)=>{this.productList=data}); 


  }

  percentOf(price:number,oPrice:number):number{
    return Math.round(((oPrice-price)/oPrice)*100);

  }


  removeProduct(product:Product){
    console.log(product);
    const id=product.id;
    this.store.dispatch(removeProduct({id:id}));
  }

  open(content: any,product:Product) {
    this.updateProduct=this.formBuilder.group({
      id:[product.id],
      name:[product.name,[Validators.required,Validators.minLength(3)]],
      price:[product.price,[Validators.required]],
      oPrice:[product.oPrice,[Validators.required]],
      imageUrl:[product.imageUrl,[Validators.required]],
      rating:[product.rating,[Validators.required,Validators.min(1),Validators.max(5)]],
      category:[product.category,[Validators.required]]

    })

    console.log(content);
    console.log(product);
    this.modelService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      
    });
  }

  get id(){
    return this.updateProduct.get('id');
  }
  get name(){
    return this.updateProduct.get('name');
  }
  get price(){
    return this.updateProduct.get('price');
  }
  get oPrice(){
    return this.updateProduct.get('oPrice');
  }

  get imageUrl(){
    return this.updateProduct.get('imageUrl');
  }


  update(product:Product){
    console.log(this.updateProduct.value);
      const prod={...product,...this.updateProduct.value}
      this.store.dispatch(updateProduct({product:prod}));
      this.store.dispatch(loadProducts());





  }





  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }







}
