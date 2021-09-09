import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {
  heading='Edit subject';
  title='course details';
  listData:Course[]=[];
  course:string="";
  hour:string="";
  id:string='';
  //update:boolean=false;
  currentSubject={id:'',course:'',total_hour:''};

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

  updateDone(evt:any):void{
    console.log(evt)
    this.load();
  }

  del(an:any):void{
    
      console.log(an,"data to delete");
      this.course=an.name;
      this.hour=an.total_hour;
      this.id=an.id;
   
    
    this.courseService.delCourse(this.id).subscribe(data=>{
      console.log("Deleted",data);
      this.load();
    });
    
    this.id='';
    this.course='';
    this.hour='';
    
  }

}
