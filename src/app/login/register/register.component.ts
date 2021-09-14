import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {  
  username: '',
  email:'',
  password: '',
  usertype:'' 
};

constructor(private auth: AuthService, private router: Router) { }

ngOnInit() {
}
signUp(){

this.auth.register(this.user).subscribe(data =>{
  if(data)
  {
    console.log("user created")
  }
  else
  this.router.navigateByUrl("/");
});

}
}