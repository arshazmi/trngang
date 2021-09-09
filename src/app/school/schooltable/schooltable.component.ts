import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/service/school.service';

@Component({
  selector: 'app-schooltable',
  templateUrl: './schooltable.component.html',
  styleUrls: ['./schooltable.component.css']
})
export class SchooltableComponent implements OnInit {
  id:string='';
  School : School={
  id: "",
  schoolName:" ",
  registerNumber:'',
  email:"",
  address:"",
  mobile:"",
  logo:""
  };
  
  displayedColumns: string[] = ['regnum', 'name', 'email', 'mobile' ,'action' ];
  dataSource:School[] =  [{id:''}];
  clickedRows = new Set<School>();
  constructor(private sService:SchoolService) { }

  ngOnInit(): void {
    this.sService.getSchool().subscribe(data=>{
      console.log("schhol table",data);
      this.dataSource=data;
    })
   
  }

  load():void{
    // console.log(this.school);
    // this.School.id=this.school.id;
    // this.School.schoolName=this.school.name;
    // this.School.registerNumber=this.school.regnum;
    // this.School.email=this.school.email;
    // this.School.address=this.school.address;
    // this.School.mobile=this.school.mobile;
    // this.School.logo=this.school.logo;
  }

  edit():void{
    
    this.sService.updateSchool(this.School).subscribe(data=>{
      console.log("Updated",data);
      
    });
  }

  del():void{
    this.sService.delSchool('1').subscribe(data=>{
      console.log(data)
    })
   
  }



}
