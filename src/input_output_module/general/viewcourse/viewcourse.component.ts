import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {
  heading='Edit subject';
  title='course details';
  listData:any;
  course:string="";
  hour:string="";
  id:string='';
  update:boolean=false;
  currentSubject={id:'',name:'',total_hour:''};
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.load();
  }

  onclickvh(an:any):void{
    console.log(an);
    this.course=an.name;
    this.hour=an.total_hour;
    this.id=an.id;
  }

  load():void{
    this.courseService.getCourse().subscribe(data=>{
      console.log(data);
      this.listData=data;
    })
  }

  edit(an:any):void{
    console.log('Pencil clicked');
    this.currentSubject=an;
    console.log("current subject",an);
    this.update=true;
  }

  updateDone(evt:any):void{
    console.log(evt)
    this.update=false;
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
