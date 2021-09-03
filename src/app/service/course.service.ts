import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl =' http://localhost:8081/api/course';
  
  constructor(private http:HttpClient) { }

  getCourse():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  insertCourse(course:string,total_hour:string):Observable<any>{
    return this.http.post(`${this.baseUrl}`,{name:course,total_hour:total_hour});
  }

  updateCourse(id:string,course:string,total_hour:string):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,{name:course,total_hour:total_hour});
  }

  delCourse(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}

