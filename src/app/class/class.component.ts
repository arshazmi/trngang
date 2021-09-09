import { Component, OnInit } from '@angular/core';
import { ClassService } from '../service/class.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  toClass :any ="Class";
  // toAdd:any="ADD";
  // toEdit:any="EDIT";
  clas=[{
    id:'',
    name:'',
    startDate:'',
    endDate:''
  }];
  constructor(private router:Router,private classService:ClassService) {}
  
  ngOnInit() {
    this.classService.getClass().subscribe((data)=>{
      console.log(data);
      this.clas = JSON.parse(JSON.stringify(data));
    })
  }

  deleteClass(cla:any)
  {
    this.classService.deleteClass(cla.id)
      // .subscribe((cla)=> {
      //   this.clas = this.clas.filter( p => p!== cla);
      // })
  }

  editClass(item:any)
  {console.log(item);
    localStorage.setItem("editClassId", item.id.toString());
    
    this.router.navigate(['/editclass']);

  }

 
}
