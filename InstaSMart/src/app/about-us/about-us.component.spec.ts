import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should be about us',()=>{
    const title=fixture.debugElement.query(By.css('#title'));
    expect(title).toBeTruthy();
    console.log(title);
    expect(title.nativeElement.textContent).toEqual('About Us');
    // expect(title.nativeElement.getAttribute('r')).toBeTrue;
  })
});
