import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/service/school.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  listData:any;
  data:School={id:'',schoolName:'',registerNumber:'',email:'',address:'',mobile:'',logo:''};///
  add:boolean=true;
  constructor(private sService:SchoolService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params.id!==undefined){
      this.data.id=this.route.snapshot.params['id'];
    }
    

    if(this.data.id!==''){
      this.add=false;
      console.log(this.data);
      this.sService.getSchoolById(this.data.id).subscribe(data=>{
        console.log("from server",data);
      this.data.schoolName=data.name;
      this.data.registerNumber=data.regnum;
      this.data.address=data.address;
      this.data.mobile=data.mobile;
      this.data.email=data.email;
      this.data.logo=data.logo;
      })
     
    }
  }

  save():void{
   if(this.data.id===''){
    this.sService.insertSchool(this.data).subscribe(data=>{
      console.log("Inserted",data)   
      this.data.schoolName="";
      this.data.registerNumber="";
      this.data.address="";
      this.data.mobile="";
      this.data.email="";
      this.data.logo="";
    })
  }else{
    console.log(this.data);
    this.data.regnum=this.data.registerNumber;
    this.data.name=this.data.schoolName;
    console.log(this.data,"to int");
    this.sService.updateSchool(this.data).subscribe(data=>{
      console.log("Updated",data)   
      this.data.schoolName="";
      this.data.registerNumber="";
      this.data.address="";
      this.data.mobile="";
      this.data.email="";
      this.data.logo="";
  });
  } 
}

}
