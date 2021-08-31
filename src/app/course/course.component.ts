import { Component, OnInit } from '@angular/core';
import {CourseService} from '../service/course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  title="Subject list";
  listData:any;
  course:string="";
  dept:string="";
  id:string='';

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.load();
  }

  load():void{
    this.courseService.getCourse().subscribe(data=>{
      console.log(data);
      this.listData=data;
    })
  }


  save():void{
    this.courseService.insertCourse(this.id,this.course,this.dept).subscribe(data=>{
      console.log("Inserted",data)
      this.load();
    })
     
  }

}

