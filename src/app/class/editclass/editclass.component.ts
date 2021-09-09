import { Component,Input, OnInit } from '@angular/core';
import { ClassService } from '../../service/class.service';
import { ActivatedRoute,Router } from '@angular/router';
import { IClass } from '../class.model';

@Component({
  selector: 'app-editclass',
  templateUrl: './editclass.component.html',
  styleUrls: ['./editclass.component.css']
})
export class EditclassComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute,private classService:ClassService) { }
 
  @Input() id:string='';
  classItem={
    
    name :'',
    startDate:'',
    endDate:''}

  ngOnInit(): void {
     let id = localStorage.getItem("editClassId");
    this.classService.getClas(id).subscribe((data)=>{
      this.classItem=JSON.parse(JSON.stringify(data));
  })
  }

  editClass()
  {   
    let id = localStorage.getItem("editClassId"); 
    console.log("id"+id);
    this.classService.editClass(id,this.classItem);  
    alert("Success");
    this.router.navigate(['class']);
  }

}
