import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../../service/teacher.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
// isAddMode: boolean=false;
  constructor(private teacherService: TeacherService,private router: Router,private route: ActivatedRoute,) { }
 id:any;
  teacherItem={
    id:'',
    firstName: '',
    lastName: '',
    salary: '',
    experience: '',
    gender:'',
    mobile:''
   }
  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      console.log(this.id)
    //     this.isAddMode = !this.id;
  }

  //   onSubmit() {
//     // this.submitted = true;

//     if (this.isAddMode) {
//         this.AddTeacher();
//     }
//      else {
//         this.EditTeacher(this.classItem);
//     }
// }

  AddTeacher()
  {    
    this.teacherService.newTeacher(this.teacherItem);
    // console.log("success");    
    alert("Success");
    this.router.navigate(['/teacher']);
  }

  EditTeacher(item:any)
  {
    localStorage.setItem("editTeacherId", item.id.toString());
    this.router.navigate(['/teacher']);

  }
}
