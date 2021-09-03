import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../service/school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  title="list of schools ";
  listData:any;
  name: string='';
  reg:string='';
  email:string='';
  address: string='';
  mobile: string='';
  id:string='';

  constructor(private sService:SchoolService) { }

  ngOnInit(): void {
    this.load();
  }

  load():void{
    this.sService.getSchool().subscribe(data=>{
      console.log(data);
      this.listData=data;
    })
  }

  onclickvh(an:any):void{
    console.log(an);
    this.name=an.name;
    this.reg=an.regnum;
    this.email=an.email;
    this.mobile=an.mobile;
    this.id=an.id;
  }


  save():void{
    this.sService.insertSchool(this.name,this.reg,this.email,this.mobile).subscribe(data=>{
      console.log("Inserted",data)
      this.load();
    })
     
  }

  update():void{
    if(this.id===''){
      console.log("No value")
      
    }else{
    this.sService.updateSchool(this.id,this.name,this.reg,this.email,this.mobile).subscribe(data=>{
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
    this.sService.delSchool(this.id).subscribe(data=>{
      console.log("Deleted",data);
      this.load();
    });
    
    this.id='';
    this.name='';
    this.reg='';
    this.email='';
    this.mobile='';
    }
  }
}
