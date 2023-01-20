import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../user/auth.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService:AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[MatToolbarModule,FormsModule,MatIconModule,RouterModule,RouterTestingModule,MatBadgeModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have home',()=>{
    expect(fixture.debugElement.query(By.css('#home'))).toBeTruthy();
  });

  it('should have login when user not logged in',()=>{
    expect(fixture.debugElement.query(By.css('#login'))).toBeTruthy();
  });
  
  it("should not have logout when user isn't logged in",()=>{
    // authService.login('vanshtanwar9','vansh@123');
    expect(fixture.debugElement.query(By.css('#logout'))).toBeFalsy();
  })




});
