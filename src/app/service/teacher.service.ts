import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl =' http://localhost:8081/api/teacher';
  
  constructor(private http:HttpClient) { }

  getTeachers():Observable<any>{
    
    return this.http.get(`${this.baseUrl}`);
    console.log(this.getTeachers);
  }

  // getTeacher(id:any){
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  newTeacher(item:any)
  {   
    return this.http.post(`${this.baseUrl}`,{firstname:item.firstName,lastname:item.lastName,salary:item.salary,experience:item.experience,gender:item.gender,mobile:item.mobile})
    .subscribe(data =>{console.log(data)})
  }
 
  // editTeacher(id:any,product:any)
  // {
  //   console.log('client update')
  //   return this.http.put(`${this.baseUrl}/${id}`,product)
  //   .subscribe(data =>{console.log(data)})
  // }
  deleteTeacher(id:any)
  {

    return this.http.delete(`${this.baseUrl}/${id}`)
    // .subscribe(data =>{console.log(data)})

  }
}

