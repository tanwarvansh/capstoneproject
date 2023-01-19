import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { ProductStoreComponent } from './product-store.component';

describe('ProductStoreComponent', () => {
  let component: ProductStoreComponent;
  let fixture: ComponentFixture<ProductStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductStoreComponent ],
      imports:[StoreModule.forRoot({}),
      RouterOutlet,RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
