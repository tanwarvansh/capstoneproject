import { Injectable } from "@angular/core";
import { User } from "./user"

@Injectable({
    providedIn:'root'
})

export class AuthService{

    currentUser!:User |null;
    redirectToUrl!:string;

    constructor(){}

    getUsers(){
        const users:User[]=[
            {
            username:'vanshtanwar9',
            password:'vansh@123',
            isAdmin:true
            },
            {
                username:'ravikumar63',
                password:'ravi@123',
                isAdmin:false
            },
            {
                username:'shekharchaudhary',
                password:'shekhar@123',
                isAdmin:false
            }
        ]

        return users;
    }

    isAdmin():boolean{
            if(this.currentUser)
            return this.currentUser?.isAdmin;
            return false;
    }

    isLoggedIn():boolean{
        return !!this.currentUser;
    }

    login(username:string,password:string):boolean{
        const users:User[]=this.getUsers();
        for(let i of users){
            if(i.username==username && i.password==password){
                this.currentUser={
                    username:username,
                    password:password,
                    isAdmin:i.isAdmin
                }
                return true;
            }
        }
        return false;
            


    }

    logOut(){
        this.currentUser=null;
    }


}