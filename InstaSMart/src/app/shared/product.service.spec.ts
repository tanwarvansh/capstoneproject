import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";

import { of } from "rxjs";
import { Category, Product } from '../products/product'
import { ProductService } from "./products.service";


describe('ProductService',()=>{

    let service:ProductService;
    let injector: TestBed;

  let httpMock: HttpTestingController;

let  items:any[]=[];
afterEach(() => {
  httpMock.verify();
});
  beforeEach(()=>{
     TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
        providers:[ProductService],
     });
     service=TestBed.get(ProductService);


     injector = getTestBed();

    httpMock = injector.get(HttpTestingController);
      items=[
        {
            id:1,
            name:'Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
            price:27999,
            oPrice:38999,
            imageUrl:'../../assets/SamsungGalaxys215g.jpg',
            rating:4.2,
            category:Category.Mobile
        },
        {
            id:2,
            name:'Hexagon Furnitures Junglewood Textured 4 Door Wardrobe with Mirror',
            price:29000,
            oPrice:38999,
            imageUrl:'../../assets/Alimrah.webp',
            rating:4.2,
            category:Category.Furniture
        },
        {
        id:3,
            name:'HEERA MOTI CORPORATION Whibla Low Height King Size Bed with Side Tables Without Storage(Finish:- Black & White)',
            price:37999,
            oPrice:38999,
            imageUrl:'../../assets/bed.jpeg',
            rating:4.2,
            category:Category.Furniture
        },
        {
            id:4,
            name:'Amazon Brand - Solimo Medusa Engineered Wood Wardrobe With Mirror wenge finish , 4 Doors',
            price:36000,
            oPrice:38999,
            imageUrl:'../../assets/AmazonBrandAlmirah.jpg',
            rating:4.2,
            category:Category.Furniture
        },
        {
            id:5,
            name:'OPPO Reno8 5G (Shimmer Gold, 128 GB)  (8 GB RAM)',
            price:29900,
            oPrice:38999,
            imageUrl:'../../assets/oppophone.webp',
            rating:4.3,
            category:Category.Mobile
        },{
            id:6,
            name:'OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)  (6 GB RAM)',
            price:19670,
            oPrice:19870,
            imageUrl:'../../assets/onePlus.webp',
            rating:4.3,
            category:Category.Mobile
        },{
            id:7,
            name:'Lifelong Chaze by Milind Soman SX 20 CZBC2704 27.5T with Dual Disc 27.5 T Mountain/Hardtail Cycle  (Single Speed, Black)',
            price:8499,
            oPrice:14499,
            imageUrl:'../../assets/cycleSport.webp',
            rating:4.2,
            category:Category.Sports
        },{
            id:8,
            name:'Dr Ortho Orthopaedic Back Support (Backrest) - High Density Memory Foam Back Support  (Black)',
            price:1423,
            oPrice:1498,
            imageUrl:'../../assets/support.webp',
            rating:4.2,
            category:Category.Sports
        },{
            id:9,
            name:'Amazon Brand Fresh Tomatoes',
            price:30,
            oPrice:32,
            imageUrl:'../../assets/tomatoImage.jpeg',
            rating:4.4,
            category:Category.Fresh
        },{
            id:10,
            name:'Del Monte Tomato Ketchup - Classic Blend, 950g',
            price:95,
            oPrice:130,
            imageUrl:'../../assets/tomatoKetchup.jpeg',
            rating:4.1,
            category:Category.Fresh
        },{
            id:11,
            name:'Tata Tea Premium Teaveda | Premium Assam Tea Leaves | With Goodness of Time-tested Indian Ingredients -Tulsi, Elaichi, Ginger & Brahmi | Flavoured Tea | 100g',
            price:45,
            oPrice:53,
            imageUrl:'../../assets/freshTea.jpg',
            rating:3.9,
            category:Category.Fresh
        },{
            id:12,
            name:'Our Non-fairy Tale Life (Order Now & Get Author Signed Copy)',
            price:129,
            oPrice:140,
            imageUrl:'../../assets/book1.jpeg',
            rating:4.5,
            category:Category.Books
        },{
            id:13,
            name:'World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set',
            price:445,
            oPrice:527,
            imageUrl:'../../assets/book2.jpeg',
            rating:4.5,
            category:Category.Books
        },{
            id:14,
            name:'Bajaj ATX 4 750-Watt Pop-up Toaster (White)',
            price:1496,
            oPrice:1600,
            imageUrl:'../../assets/kitchen1.jpg',
            rating:4.5,
            category:Category.Kitchen
        }
      
       
        ];



  });
  it('should be created',()=>{
    expect(service).toBeTruthy();
  })
  it('should getAllProducts',
    inject([HttpTestingController,ProductService],
      (httpMock:HttpTestingController,service:ProductService)=>{



      service.getProducts().subscribe(resp=>expect(items).toEqual(resp));


      const mockReq = httpMock.expectOne(service.url);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(items);


    }
  ));

  //using spyOn to test getProductById
  it('should get product by id',()=>{
      let response:Product;


     let item ={

        id:13,
        name:'World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set',
        price:445,
        oPrice:527,
        imageUrl:'../../assets/book2.jpeg',
        rating:4.5,
        category:Category.Books


     };

      const fn=spyOn(service, 'getProductById').and.returnValue(of(item));

      service.getProductById(13).subscribe(res=>{response=res;expect(response).toEqual(item);});

     expect(fn).toHaveBeenCalled();

  });
 //failed the test , tried to POST item1 and expected it to be equal to item2
 //then change it back to item and  see the test passed

   it('createProduct() should post a product and    return that new product  as data',()=>{


    const item:Product={
        id:15,
        name:'World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set',
        price:445,
        oPrice:527,
        imageUrl:'../../assets/book2.jpeg',
        rating:4.5,
        category:Category.Books

     };


    const item2:Product ={

        id:16,
        name:'Bajaj ATX 4 750-Watt Pop-up Toaster (White)',
        price:1496,
        oPrice:1600,
        imageUrl:'../../assets/kitchen1.jpg',
        rating:4.5,
        category:Category.Kitchen

     };

    items =[...items,item];
     service.createProduct(item).subscribe(resp=>expect(resp).toEqual(item));
     expect(items.length).toEqual(15);

     const req = httpMock.expectOne(service.url);
     expect(req.request.method).toBe('POST');
     //here the item is the response flushed , as the response body
     req.flush(item);

     });



     it('updateProduct () should update  a product and    return updated product as data',()=>{





      let item2 ={

        id:16,
        name:'Bajaj ATX 4 750-Watt Pop-up Toaster (White)',
        price:1496,
        oPrice:1600,
        imageUrl:'../../assets/kitchen1.jpg',
        rating:4.5,
        category:Category.Kitchen

       };

       service.updateProduct(item2).subscribe(resp=>expect(resp).toEqual(item2) )


       const req = httpMock.expectOne(`${service.url}/${item2.id}`);
       expect(req.request.method).toBe('PUT');
       req.flush({item2 });

       })








   
   it('deletProduct () should delete  a product',()=>{





   

     service.deleteProduct(6).subscribe(resp=>expect(resp).toEqual({}) )


     const req = httpMock.expectOne(`${service.url}/${6}`);
     expect(req.request.method).toBe('DELETE');

     })


    });





 



