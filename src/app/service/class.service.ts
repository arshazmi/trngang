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

  newClass(item:IClass)
  {   
    return this.http.post(`${this.baseUrl}`,{name:item.name,startDate:item.startDate,endDate:item.endDate})
    .subscribe(data =>{console.log(data)})
  }

  deleteClass(id:any)
  {

    return this.http.delete(`${this.baseUrl}/${id}`)

  }
}
