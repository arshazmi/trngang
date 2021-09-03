import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private baseUrl =' http://localhost:8081/api/class';
  
  constructor(private http:HttpClient) { }

  getClass():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }


}
