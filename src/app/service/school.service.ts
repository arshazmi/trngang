import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private baseUrl =' http://localhost:8081/api/school';
  
  constructor(private http:HttpClient) { }

  getSchoolById(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getSchool():Observable<School[]>{
    return this.http.get<School[]>(`${this.baseUrl}`);
  }

  insertSchool(/* name:string,reg:string,email:string,mobile:string */data:School):Observable<School>{
    console.log(data,"school service");
    return this.http.post<School>(`${this.baseUrl}`,data/* {schoolName:name,registerNumber:reg,email:email,mobile:mobile} */);
  }

  updateSchool(/* id:string,name:string,reg:string,email:string,mobile:string */data:School):Observable<string>{
    return this.http.put<string>(`${this.baseUrl}/${data.id}`,data/* {schoolName:name,registerNumber:reg,email:email,mobile:mobile} */);
  }

  delSchool(id:string):Observable<string>{
    return this.http.delete<string>(`${this.baseUrl}/${id}`/* ,{params} */);
  }

}
