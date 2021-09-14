import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isloggedin:string="false";
  user={username:'',
  password:''}

  constructor(private _auth: AuthService,
              private _router:Router,private fb:FormBuilder) { }
            
          
 
  ngOnInit() {
  }

  loginUser () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        console.log("login res"+res);
        if(res){
        this._router.navigate(['/class'])
        console.log(res);
        this.isloggedin="true"
        
        localStorage.setItem('token', this.isloggedin)
        }else{
          console.log("Login failed");
        }
      },
      err => {
        console.log(err);
        this._router.navigate(['/'])
      }
    ) 
  }

}
