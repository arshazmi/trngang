import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private baseUrl =' http://localhost:8081/api/school';
  
  constructor(private http:HttpClient) { }

  getSchool():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  insertSchool(name:string,reg:string,email:string,mobile:string):Observable<any>{
    return this.http.post(`${this.baseUrl}`,{schoolName:name,registerNumber:reg,email:email,mobile:mobile});
  }

  updateSchool(id:string,name:string,reg:string,email:string,mobile:string):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,{schoolName:name,registerNumber:reg,email:email,mobile:mobile});
  }

  delSchool(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`/* ,{params} */);
  }

}
