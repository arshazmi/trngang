import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  @Input()  head="subject list";
  title="course";
  listData:any;
  course:string="";
  hour:string="";
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

  onclickvh(an:any):void{
    console.log(an);
    this.course=an.name;
    this.hour=an.total_hour;
    this.id=an.id;
  }


  save():void{
    this.courseService.insertCourse(this.course,this.hour).subscribe(data=>{
      console.log("Inserted",data)
      this.load();
    })
     
  }

  update():void{
    if(this.id===''){
      console.log("No value")
      
    }else{
    this.courseService.updateCourse(this.id,this.course,this.hour).subscribe(data=>{
      console.log("Updated",data);
      this.load();
    })
    this.load();
  }
 }

  del():void{
    if(this.id===''){
      console.log("No value")
      
    }else{
    this.courseService.delCourse(this.id).subscribe(data=>{
      console.log("Deleted",data);
      this.load();
    });
    
    this.id='';
    this.course='';
    this.hour='';
    }
  }


}

