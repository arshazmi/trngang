import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl =' http://localhost:8081/api/course ';
  
  constructor(private http:HttpClient) { }

  getCourse():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  insertCourse(id:string,course:string,dept:string):Observable<any>{
    return this.http.post(`${this.baseUrl}`,{id:id,course:course,dept:dept});
  }

  delCourse(id:string):Observable<any>{
    const params = new HttpParams()
       .set('id',id );
    return this.http.get(`${this.baseUrl}/delcourse`,{params});
  }

}

