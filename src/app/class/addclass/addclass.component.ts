import { Component,Input, OnInit } from '@angular/core';
import { ClassService } from '../../service/class.service';
import { ActivatedRoute,Router } from '@angular/router';
import { IClass } from '../class.model';
@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent implements OnInit {
  // @Input() additem = ''; 
  // id: string="";
  // isAddMode: boolean=false;
  constructor(private router:Router,private route: ActivatedRoute,private classService:ClassService) { }
  
  classItem: IClass= {
    id:'',
    name :'',
    startDate:'',
    endDate:''}
// classItem: IClass;
  ngOnInit(): void {

    // this.id = this.route.snapshot.params['id'];
    //     this.isAddMode = !this.id;
  }

//   onSubmit() {
//     // this.submitted = true;

//     if (this.isAddMode) {
//         this.AddClass();
//     }
//      else {
//         this.EditClass(this.classItem);
//     }
// }

  AddClass()
  {    
    this.classService.newClass(this.classItem);
    console.log(this.classItem);    
    alert("Success");
    this.router.navigate(['/class']);
  }

  EditClass(clas:any)
  {
    localStorage.setItem("editClassId", clas.id.toString());
    this.router.navigate(['/class']);

  }

}
