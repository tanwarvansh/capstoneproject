import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";
import { Category } from "../products/product";
import { ForCart } from "./cart.component";



import { CartHelper } from "./cart.helperServie";



describe('CartService',()=>{

    let injector: TestBed;
    let service:CartHelper;

  let httpMock: HttpTestingController;

let  items:any[]=[];

afterEach(() => {
  httpMock.verify();
});

beforeEach(()=>{
     TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
        providers:[CartHelper],
     });
     service=TestBed.get(CartHelper);


     injector = getTestBed();

    httpMock = injector.get(HttpTestingController);
      items=[
        // {
    //     product:{
    //         id:1,
    //         name:'Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
    //         price:27999,
    //         oPrice:38999,
    //         imageUrl:'../../assets/SamsungGalaxys215g.jpg',
    //         rating:4.2,
    //         category:Category.Mobile
    //     },
    //     quantity:1
    // }
      ];



  });

  it('should be created',()=>{
    expect(service).toBeTruthy();
  })


  it('should getEmptyCart',
    inject([HttpTestingController,CartHelper],
      (httpMock:HttpTestingController,service:CartHelper)=>{
      expect(service.getDeatils()).toEqual(items);
    //   const mockReq = httpMock.expectOne(service.url);

    //   expect(mockReq.cancelled).toBeFalsy();
    //   expect(mockReq.request.responseType).toEqual('json');
    //   mockReq.flush(items);
    }
  ));
   
   it('deletProduct () should delete  a product',()=>{
    //  service.deleteProduct(1).subscribe(resp=>expect(resp).toEqual({}) )
    expect(service.deleteProductById(1)).toEqual();

    });
    it('clearCart () should delete  all Product',()=>{
        //  service.deleteProduct(1).subscribe(resp=>expect(resp).toEqual({}) )
        service.clearCart();
        expect(service.productList.length).toEqual(0);
    
        });




});



  
