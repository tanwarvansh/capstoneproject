import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/products/product';
import { HelperService } from 'src/app/products/products.helpservice';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-mini-header',
  templateUrl: './mini-header.component.html',
  styleUrls: ['./mini-header.component.css']
})
export class MiniHeaderComponent implements OnInit {
  constructor(private authService:AuthService,private helper:HelperService,private router:Router){}
  ngOnInit(): void {
    this.helper.currentFilterStage.subscribe(data=>console.log(data));
  }



  get isAdmin(){
    return this.authService.currentUser?.isAdmin;
  }

  filter(value:string){
    this.router.navigate(['/products']);
    console.log(value);
    this.helper.updatefilterStage(value);

  }

}
