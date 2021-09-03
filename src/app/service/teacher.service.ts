import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getTeachers(){
    return this.http.get("/teacher/");
  }

  getTeacherById(id:any){
    return this.http.get("/teacher/" + id);
  }
  deleteTeacher(id:any){
    return this.http.delete("/teacher/" + id);
  }

  editTeacher(id:any,data:any){
    return this.http.put("/teacher/"+id, data)
  }

  addTeacher(item:any){
    return this.http.post("/teacher/", {"teacher":item})
    .subscribe(data =>{console.log(data)})
  }
}

