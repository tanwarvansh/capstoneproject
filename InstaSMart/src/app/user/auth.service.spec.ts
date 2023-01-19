import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";
import { Category } from "../products/product";
import { AuthService } from "./auth.service";








describe('AuthService',()=>{

    let injector: TestBed;
    let service:AuthService;

  let httpMock: HttpTestingController;

let  items:any[]=[];

afterEach(() => {
  httpMock.verify();
});

beforeEach(()=>{
     TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
        providers:[AuthService],
     });
     service=TestBed.get(AuthService);


     injector = getTestBed();

    httpMock = injector.get(HttpTestingController);
      items=[
        {
            username:'vanshtanwar9',
            password:'vansh@123',
            isAdmin:true
            },
            {
                username:'ravikumar63',
                password:'ravi@123',
                isAdmin:false
            },
            {
                username:'shekharchaudhary',
                password:'shekhar@123',
                isAdmin:false
            }
      ];



  });

  it('should be created',()=>{
    expect(service).toBeTruthy();
  })


  it('should getAllUsers',
    inject([HttpTestingController,AuthService],
      (httpMock:HttpTestingController,service:AuthService)=>{
      expect(service.getUsers()).toEqual(items);
    //   const mockReq = httpMock.expectOne(service.url);

    //   expect(mockReq.cancelled).toBeFalsy();
    //   expect(mockReq.request.responseType).toEqual('json');
    //   mockReq.flush(items);
    }
  ));

   
   it('should validate users',()=>{
    //  service.deleteProduct(1).subscribe(resp=>expect(resp).toEqual({}) )
    expect(service.login('vanshtanwar9','vansh@123')).toEqual(true);

    });
    






});



  



