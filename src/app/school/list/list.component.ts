import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/service/school.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  id:string='';
  SchoolList : School={
  id: "",
  schoolName:" ",
  registerNumber:"",
  email:"",
  address:"",
  mobile:"",
  logo:""
  };
  
  @Input() school:any=this.SchoolList;
  @Output() changed=new EventEmitter();
  @Output() deleted=new EventEmitter();
  
  constructor(private schoolService:SchoolService) { }

  ngOnInit(): void {
    this.load();
  }

  load():void{
    console.log(this.school);
    this.SchoolList.id=this.school.id;
    this.SchoolList.schoolName=this.school.name;
    this.SchoolList.registerNumber=this.school.regnum;
    this.SchoolList.email=this.school.email;
    this.SchoolList.address=this.school.address;
    this.SchoolList.mobile=this.school.mobile;
    this.SchoolList.logo=this.school.logo;
  }

  edit():void{
    console.log("edit ",this.school);
    this.schoolService.updateSchool(this.SchoolList).subscribe(data=>{
      console.log("Updated",data);
      this.changed.emit('changed')
    });
  }

  del():void{
    console.log(this.school);
    this.deleted.emit(this.school);
  }


}
