import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl =' http://localhost:8081/api/course';
  
  constructor(private http:HttpClient) { }

  getCourse():Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }

  // insertCourse(course:string,total_hour:string):Observable<Course>{
  //   return this.http.post<Course>(`${this.baseUrl}`,{name:course,total_hour:total_hour});
  // }
  insertCourse(course:Course):Observable<Course>{
    return this.http.post<Course>(`${this.baseUrl}`,course);
  }

  // updateCourse(id:string|undefined,course:string,total_hour:string):Observable<string>{
  //   return this.http.put<string>(`${this.baseUrl}/${id}`,{name:course,total_hour:total_hour});
  // }

  updateCourse(course:Course):Observable<string>{
    return this.http.put<string>(`${this.baseUrl}/${course.id}`,course);
  }

  delCourse(id:string):Observable<string>{
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }

}

