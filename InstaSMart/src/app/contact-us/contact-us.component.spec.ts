import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      imports: [FormsModule, MatFormFieldModule,MatOptionModule,
        MatInputModule,MatSelectModule,BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing title of contact us',()=>{
    const title=fixture.debugElement.query(By.css('#title'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent).toEqual('InstaSMart Help Center | 24x7 Custome Care Support');
    // expect(title.nativeElement.getAttribute('r')).toBeTrue;
  })

  it('first Name should be of type text',()=>{
    const title=fixture.debugElement.query(By.css('#firstName'));
    expect(title).toBeTruthy();
    // expect(title.nativeElement.textContent).toEqual('InstaSMart Help Center | 24x7 Custome Care Support');
    expect(title.nativeElement.getAttribute('type')).toEqual('text');
  })
  it('last Name should be of type text',()=>{
    const title=fixture.debugElement.query(By.css('#lastName'));
    expect(title).toBeTruthy();
    // expect(title.nativeElement.textContent).toEqual('InstaSMart Help Center | 24x7 Custome Care Support');
    expect(title.nativeElement.getAttribute('type')).toEqual('text');
  })
  it('comments should be of type text',()=>{
    const title=fixture.debugElement.query(By.css('#comments'));
    expect(title).toBeTruthy();
    // expect(title.nativeElement.textContent).toEqual('InstaSMart Help Center | 24x7 Custome Care Support');
    expect(title.nativeElement.getAttribute('type')).toEqual('text');
  })

});
