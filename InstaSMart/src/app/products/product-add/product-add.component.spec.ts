import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ProductAddComponent } from './product-add.component';
import { StoreModule } from '@ngrx/store';

describe('ProductAdd', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  const fakeActivatedRoute = {
    snapshot: {
      queryParams: {
        returnUrl: '/'
      }
    }
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule,StoreModule.forRoot({})],
      declarations: [ProductAddComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useFactory: () => fakeActivatedRoute }
      ]

    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ProductAddComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    component.addProduct.controls['id'].setValue('');
    component.addProduct.controls['name'].setValue('');
    component.addProduct.controls['category'].setValue('');
    component.addProduct.controls['price'].setValue('');
    component.addProduct.controls['image'].setValue('');
    expect(component.addProduct.valid).toBeFalsy();
  });

  it('name field validity', () => {
    const name = component.addProduct.controls['name'];
    name.setValue('');
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });

  it('category field validity', () => {
    const category = component.addProduct.controls['category'];
    category.setValue('');
    expect(category.valid).toBeFalsy();

    
  });
  it('category field validity require', () => {
    const category = component.addProduct.controls['category'];

    category.setValue('');
    expect(category.hasError('required')).toBeTruthy();
  });

  it('rating field validity', () => {
    const phone = component.addProduct.controls['rating'];
    phone.setValue('');
    expect(phone.valid).toBeFalsy();

    phone.setValue('');
    expect(phone.hasError('required')).toBeTruthy();

  });

  it('price field validity', () => {
    const price = component.addProduct.controls['price'];
    expect(price.valid).toBeFalsy();

    price.setValue('');
    expect(price.hasError('required')).toBeTruthy();

  });

  it('oPrice field validity', () => {
    const oPrice = component.addProduct.controls['oPrice'];
    expect(oPrice.valid).toBeFalsy();

    oPrice.setValue('');
    expect(oPrice.hasError('required')).toBeTruthy();

  });

  it('should set submitted to true', () => {
    if(component.product)
    component.saveProduct(component.product);
    expect(component.added).toBeTruthy();
  });



  it('form should be valid', () => {
    component.addProduct.controls['name'].setValue('sasd');
    component.addProduct.controls['category'].setValue('Kitchen');
    component.addProduct.controls['price'].setValue('13245678');
    component.addProduct.controls['oPrice'].setValue('13245678');
    component.addProduct.controls['image'].setValue('qwerty');
    component.addProduct.controls['rating'].setValue('qwerty');
    expect(component.addProduct.valid).toBeTruthy();
  });
});