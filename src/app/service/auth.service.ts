import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl =' http://localhost:8081/api/user';
  constructor(private http: HttpClient,private _router:Router) { }

  loginUser(user:any)
  {
    return this.http.post(`${this._loginUrl}/login`, user)
  }

  register(user:any){
    return this.http.post(`${this._loginUrl}/`, user)
  }

  loggedIn() {
    
    return !!localStorage.getItem('token')    
  }

  // loggerOut(){
  //   this._router.navigate(['/']);
  //    localStorage.removeItem('token')
  // }

}
