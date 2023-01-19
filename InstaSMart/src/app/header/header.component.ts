import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartHelper } from '../cart/cart.helperServie';
import { HelperService } from '../products/products.helpservice';
import { AuthService } from '../user/auth.service';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user!:User|null;
  username:string|undefined='Sign-In'
  value:number=0;

  constructor(private authServie:AuthService,private router:Router,private helper:CartHelper,private filterSearch:HelperService){
    this.value=helper.productList.length;
    this.helper.currentCartStage.subscribe(data=>{
      this.value=this.helper.productList.length;
      console.log(this.helper.productList);
    })
  }
  ngOnInit(): void {
    

  }

  get isLoggedIn(){
    return this.authServie.isLoggedIn();
  }

  get userName(){
    return this.authServie.currentUser?.username;
  }
  get isAdmin(){
    return this.authServie.currentUser?.isAdmin;
  }

  logout(){
    this.authServie.logOut();
    this.router.navigate(['/login'])
  }

  filter(form:NgForm){
    console.log(form.form.value.search);
    this.filterSearch.updatefilterSearch(form.form.value.search);

  }

  


}
