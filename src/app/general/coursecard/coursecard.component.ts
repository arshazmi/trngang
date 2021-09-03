import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.css']
})
export class CoursecardComponent implements OnInit {
  @Input() subject={id:'',name:'',total_hour:'',createdAt:Date.now()};
  course:string="";
  hour:string="";
  id:string='';
  createdAt:any;//date
  @Output() changed=new EventEmitter();
  @Output() deleted=new EventEmitter();

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      width: '250px',
      data: {id:this.id,course: this.course, total_hour: this.hour}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.load();
  }

  load():void{
    this.id=this.subject.id;
    this.course=this.subject.name;
    this.hour=this.subject.total_hour;
    this.createdAt=this.subject.createdAt;

  }

  edit():void{
    console.log("edit ",this.subject)
  }

  del():void{
    console.log(this.subject);
    this.deleted.emit(this.subject);
  }

}
