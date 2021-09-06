import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClass } from '../class/class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private baseUrl =' http://localhost:8081/api/class';
  
  constructor(private http:HttpClient) { }

  getClass():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getClas(id:any){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  newClass(item:IClass)
  {   
    return this.http.post(`${this.baseUrl}`,{name:item.name,startDate:item.startDate,endDate:item.endDate})
    .subscribe(data =>{console.log(data)})
  }

  editClass(id:any,item:any)
  {
    console.log(`class updated`)
    return this.http.put(`${this.baseUrl}/${id}`,{name:item.name,startDate:item.startDate,endDate:item.endDate})
    .subscribe(data =>{console.log(data)})
  }
  // editClass(data:any){
  //   return this.http.put(`${this.baseUrl}/${data}`, data)
  // }

  deleteClass(id:any)
  {

    return this.http.delete(`${this.baseUrl}/${id}`)

  }
}
