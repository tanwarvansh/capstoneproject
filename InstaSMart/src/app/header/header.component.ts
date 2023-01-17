import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authServie:AuthService,private router:Router){}
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

  


}
