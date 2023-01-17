import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService:AuthService,private router:Router){ }
  errorMessage:string='';
  onSubmit(form:NgForm){
    if(form && form.valid){
      const username=form.form.value.username;
      const password=form.form.value.password;
    

    this.authService.login(username,password);

    if(this.authService.redirectToUrl){
      this.router.navigateByUrl(this.authService.redirectToUrl);
    }else{
      this.router.navigate(['products'])
    }


    }

    const user=this.authService.currentUser;
    if(user){

    }else{
      this.errorMessage="Please Enter Valid Username or Password";
      setTimeout(()=>this.errorMessage='',2000);
    }



  }

}
