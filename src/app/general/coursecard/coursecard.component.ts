import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/service/course.service';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.css']
})
export class CoursecardComponent implements OnInit {
  @Input() subject:Course={id:'',name:'',total_hour:'',createdAt:Date.now()};
  name:string="";
  hour:string="";
  id:string|undefined='';
  createdAt:any;//date
  data:Course=this.subject;///
  @Output() changed=new EventEmitter();
  @Output() deleted=new EventEmitter();

  constructor(public dialog: MatDialog,
              private courseService:CourseService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      width: '550px',
      height:'400px',
      data: {id:this.id,name: this.name, total_hour: this.hour}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.subject=result;
      this.data=result;///
      this.edit();
    });
  }

  ngOnInit(): void {
    this.load();
  }

  load():void{
    this.id=this.subject.id;
    this.name=this.subject.name;
    this.hour=this.subject.total_hour;
    this.createdAt=this.subject.createdAt;
    this.data=this.subject;

  }

  edit():void{
    console.log("edit ",this.subject);
    // this.courseService.updateCourse(this.subject.id,this.subject.name,this.subject.total_hour).subscribe(data=>{
    //   console.log("Updated",data);
    //   this.changed.emit('changed')
    // });
    this.courseService.updateCourse(this.data).subscribe(data=>{
      console.log("Updated",data);
      this.changed.emit('changed')
    });
  }

  del():void{
    console.log(this.subject);
    this.deleted.emit(this.subject);
  }

}
