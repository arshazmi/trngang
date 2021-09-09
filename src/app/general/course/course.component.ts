import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { ICourse } from 'src/app/models/icourse';
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
  //data:Course={id:'',name:'',total_hour:'',createdAt:Date.now()};
  data:Course=new Course();///
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
   // this.data={id:'',name:'',total_hour:'',createdAt:Date.now()}
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
    // this.courseService.insertCourse( this.course,this.hour ).subscribe(data=>{
    //   console.log("Inserted",data)
    //   this.load();
    // })
    this.courseService.insertCourse( this.data ).subscribe(data=>{
      console.log("Inserted",data)
      this.load();
    })
  }

  update():void{
    if(this.id===''){
      console.log("No value")
      
    }else{
    // this.courseService.updateCourse(this.id,this.course,this.hour).subscribe(data=>{
    //   console.log("Updated",data);
    //   this.load();
    // })
    this.courseService.updateCourse(this.data).subscribe(data=>{
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

