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
isAddMode: boolean=true;
submitted = false;
id: string="";

  constructor(private teacherService: TeacherService,private router: Router,private route: ActivatedRoute,) { }

  teacherItem={
    firstName: '',
    lastName: '',
    salary: '',
    experience: '',
    gender:'',
    mobile:''
   }
  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      // console.log(this.id)
        this.isAddMode = !this.id;
    // let idd = localStorage.getItem("editClassId");
    // console.log(id);
    this.teacherService.getTeacher(this.id)
    .subscribe((data)=>{
      this.teacherItem=JSON.parse(JSON.stringify(data));
      console.log("item"+this.teacherItem)
  })
  
  }

    onSubmit() {
    this.submitted = true;

    if (this.isAddMode) {
        this.AddTeacher();
    }
     else {
        this.EditTeacher(this.teacherItem);
    }
}

  AddTeacher()
  {    
    this.teacherService.newTeacher(this.teacherItem);
    console.log(this.teacherItem);    
    alert("Success");
    this.router.navigate(['/teacher']);
  }

  EditTeacher(item:any)
  {
    // let id = localStorage.getItem("editTeacherId"); 
    let id=this.id;
    // console.log("id"+id);
    console.log("teacheritem"+item) ;
    this.teacherService.editTeacher(id,item);
    alert("Success");
    this.router.navigate(['teacher']);
  }
}
