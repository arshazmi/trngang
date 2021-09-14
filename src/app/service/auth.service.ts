import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl =' http://localhost:8081/api/user';
  constructor(private http: HttpClient) { }

  loginUser(user:any)
  {
    return this.http.post(`${this._loginUrl}/login`, user)
  }

  register(user:any){
    return this.http.post(`${this._loginUrl}/`, user)
  }

}
