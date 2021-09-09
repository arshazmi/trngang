import { Component, OnInit } from '@angular/core';
import { School } from '../models/school';
import { SchoolService } from '../service/school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  title=" List of Schools ";
   listData:School[]=[{
    id: "",
    schoolName:"",
    registerNumber:"",
    email:"",
    address:"",
    mobile:"",
    logo:""
  }];
    id:string= "";
    schoolName:string="";
    registerNumber:string="";
    email:string="";
    address:string="";
    mobile:string="";
    logo:string="";

  constructor(private sService:SchoolService) { }

  ngOnInit(): void {
    console.log(this.listData);
    this.load();
  }

  load():void{
    this.sService.getSchool().subscribe(data=>{
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
    this.id=an.id;
    this.schoolName=an.schoolName;
    this.registerNumber=an.registerNumber;
    this.email=an.email;
    this.address=an.address;
    this.mobile=an.mobile;
    this.logo=an.logo;

   
    
    this.sService.delSchool(this.id).subscribe(data=>{
      console.log("Deleted",data);
      this.load();
    });
    
    this.id= "";
    this.schoolName="";
    this.registerNumber="";
    this.email="";
    this.address="";
    this.mobile="";
    this.logo="";
    
  }

  // onclickvh(an:any):void{
  //   console.log(an);
  //   this.name=an.name;
  //   this.reg=an.regnum;
  //   this.email=an.email;
  //   this.mobile=an.mobile;
  //   this.id=an.id;
  // }


  // save():void{
  //   this.sService.insertSchool(this.name,this.reg,this.email,this.mobile).subscribe(data=>{
  //     console.log("Inserted",data)
  //     this.load();
  //   })
     
  // }

//   update():void{
//     if(this.id===''){
//       console.log("No value")
      
//     }else{
//     this.sService.updateSchool(this.id,this.name,this.reg,this.email,this.mobile).subscribe(data=>{
//       console.log("Updated",data);
//       this.load();
//     })
//     this.load();
//   }
//  }

  // del():void{
  //   if(this.id===''){
  //     console.log("No value")
      
  //   }else{
  //   this.sService.delSchool(this.id).subscribe(data=>{
  //     console.log("Deleted",data);
  //     this.load();
  //   });
    
  //   this.id='';
  //   this.name='';
  //   this.reg='';
  //   this.email='';
  //   this.mobile='';
  //   }
  // }
}
