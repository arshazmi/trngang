import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl =' http://localhost:8081/api/student';
  
  constructor(private http:HttpClient) { }

  getStudents():Observable<any>{
    
    return this.http.get(`${this.baseUrl}`);
    
  }

  getStudent(id:any){
    console.log(id);
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getStudentByTeacher(name:any){
    return this.http.get(`${this.baseUrl}/teach/${name}`);
  }

  newStudent(item:any)
  {   
    return this.http.post(`${this.baseUrl}`,item)
    .subscribe(data =>{console.log(data)})
  }
 
  editStudent(id:any,item:any)
  {
    console.log('student updated');
    return this.http.put(`${this.baseUrl}/${id}`,item)
    .subscribe(data =>{"updatedstudent"+console.log(data)});
    
  }
  deleteStudent(id:any)
  {

    return this.http.delete(`${this.baseUrl}/${id}`)
    // .subscribe(data =>{console.log(data)})

  }
}
