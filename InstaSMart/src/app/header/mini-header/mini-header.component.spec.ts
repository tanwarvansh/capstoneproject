import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';

import { MiniHeaderComponent } from './mini-header.component';

describe('MiniHeaderComponent', () => {
  let component: MiniHeaderComponent;
  let fixture: ComponentFixture<MiniHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniHeaderComponent ],
      imports:[MatToolbarModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should have all",()=>{
    const el = fixture.debugElement.query(By.css('#all'));
    expect(el).toBeTruthy();
    // expect(el.nativeElement.getAttribute('type')).toEqual('text');
    // expect(el.nativeElement.getAttribute('required')).toBeTrue;

  });
  it("should have fresh",()=>{
    const el = fixture.debugElement.query(By.css('#fresh'));
    expect(el).toBeTruthy();

  });
  it("should have ecltric",()=>{
    const el = fixture.debugElement.query(By.css('#electric'));
    expect(el).toBeTruthy();
   

  });
});
