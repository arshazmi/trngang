import { Component, OnInit } from '@angular/core';
import { ClassService } from '../service/class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  toClass :any ="Class"
  clas:any;
  constructor(private classService:ClassService) {}
  
  ngOnInit() {
    this.classService.getClass().subscribe(data=>{
      console.log(data);
      this.clas = data;
    })
  }

 
}
