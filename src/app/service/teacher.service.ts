import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

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
  // constructor(private http: HttpClient) { }

  // getTeachers(){
  //   return this.http.get("/teacher/");
  // }

  // getTeacherById(id:any){
  //   return this.http.get("/teacher/" + id);
  // }
  // deleteTeacher(id:any){
  //   return this.http.delete("/teacher/" + id);
  // }

  // editTeacher(id:any,data:any){
  //   return this.http.put("/teacher/"+id, data)
  // }

  // addTeacher(item:any){
  //   return this.http.post("/teacher/", {"teacher":item})
  //   .subscribe(data =>{console.log(data)})
  // }
}

