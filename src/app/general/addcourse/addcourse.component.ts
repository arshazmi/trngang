import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  @Input() h2="Add a course";
  @Output() changed=new EventEmitter();
  listData:any;
  course:string="";
  hour:string="";
  id:string='';
  edit:boolean=false;
  @Input() subject={id:this.id,name:this.course,total_hour:this.hour};
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    if(this.subject.id!==''){
      this.id=this.subject.id;
      this.course=this.subject.name;
      this.hour=this.subject.total_hour;
      this.edit=true;
    }
  }

  save():void{
    if(this.edit){
      this.update();
    }else{
    this.courseService.insertCourse(this.course,this.hour).subscribe(data=>{
      console.log("Inserted",data)
      this.course="";
      this.hour="";
    
    })
  } 
  }

  update():void{
    if(this.subject.id===''){
      console.log("No value")
      
    }else{
     
      
    this.courseService.updateCourse(this.id,this.course,this.hour).subscribe(data=>{
      console.log("Updated",data);
     this.changed.emit('updated output test'+data)
    })
   
  }
 }

}
