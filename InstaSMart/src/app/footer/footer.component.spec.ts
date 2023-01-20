import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports:[MatToolbarModule,RouterModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // about us
  it('should have about us',()=>{
    expect(fixture.debugElement.query(By.css('#aboutus'))).toBeTruthy();
  });

  // contact us
  it('should have contact us',()=>{
    expect(fixture.debugElement.query(By.css('#contactus'))).toBeTruthy();
  });
  it("checking routerLink for about-us",()=>{
    const el = fixture.debugElement.query(By.css('#aboutus'));
    expect(el.nativeElement.getAttribute('routerLink')).toEqual('about-us');
  });
  it("checking routerLink for contact-us",()=>{
    const el = fixture.debugElement.query(By.css('#contactus'));
    expect(el.nativeElement.getAttribute('routerLink')).toEqual('contact-us');
  });



});
