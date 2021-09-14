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
    
  }

  getTeacher(id:any){
    console.log(id);
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  newTeacher(item:any)
  {   
    return this.http.post(`${this.baseUrl}`,{firstName:item.firstname,lastName:item.lastname,salary:item.salary,experience:item.experience,gender:item.gender,mobile:item.mobile})
    .subscribe(data =>{console.log(data)})
  }
 
  editTeacher(id:any,item:any)
  {
    console.log('teacher updated');
    return this.http.put(`${this.baseUrl}/${id}`,{firstName:item.firstName,lastName:item.lastName,salary:item.salary,experience:item.experience,gender:item.gender,mobile:item.mobile})
    .subscribe(data =>{"updatedteacher"+console.log(data)});
    
  }
  deleteTeacher(id:any)
  {

    return this.http.delete(`${this.baseUrl}/${id}`)
    // .subscribe(data =>{console.log(data)})

  }
}

