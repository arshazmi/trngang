import { Component, OnInit } from '@angular/core';
import { ClassService } from '../service/class.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  toClass :any ="Class"
  clas=[{
    id:'',
    name:'',
    startDate:'',
    endDate:''
  }];
  constructor(private router:Router,private classService:ClassService) {}
  
  ngOnInit() {
    this.classService.getClass().subscribe(data=>{
      console.log(data);
      this.clas = data;
    })
  }

  deleteClass(cla:any)
  {
    this.classService.deleteClass(cla.id)
      .subscribe((data) => {
        this.clas = this.clas.filter( p => p !== cla);
      })
  }

  // editClass(clas:any)
  // {
  //   localStorage.setItem("editClassId", clas._id.toString());
  //   this.router.navigate(['editclass']);

  // }

 
}
