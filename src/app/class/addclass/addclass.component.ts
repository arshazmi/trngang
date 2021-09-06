import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../service/class.service';
import { ActivatedRoute,Router } from '@angular/router';
import { IClass } from '../class.model';
@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent implements OnInit {

  constructor(private router:Router,private classService:ClassService) { }
  classItem: IClass= {
    name :'name',
    startDate:'date',
    endDate:'date'}
// classItem: IClass;
  ngOnInit(): void {
  }

  AddClass()
  {    
    this.classService.newClass(this.classItem);
    console.log(this.classItem);    
    // alert("Success");
    // this.router.navigate(['/']);
  }

}
