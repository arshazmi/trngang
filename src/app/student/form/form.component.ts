import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/service/student.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class SFormComponent implements OnInit {
isAddMode: boolean=true;
submitted = false;
id: string="";

  constructor(private studService: StudentService,private router: Router,private route: ActivatedRoute) { }

  studentItem: Student = {id:'',firstName:'',lastName:'', dob:'',  email:'',  gender:'', mobile:'', address:'',  doj:''};
  ngOnInit(): void {
    console.log("reached form")
      this.id = this.route.snapshot.params['id'];
      console.log(this.id,!this.id);
        this.isAddMode = !this.id;
    // let idd = localStorage.getItem("editClassId");
    // console.log(id);
    if(!this.isAddMode){
      this.studService.getStudent(this.id)
    .subscribe((data)=>{
      this.studentItem=JSON.parse(JSON.stringify(data));
      console.log("item"+this.studentItem)
  })
    }
    
  
  }

    onSubmit() {
    this.submitted = true;

    if (this.isAddMode) {
        this.AddStudent();
    }
     else {
        this.EditStudent(this.studentItem);
    }
}

  AddStudent()
  {    
    this.studService.newStudent(this.studentItem);
    console.log(this.studentItem,"newStudent");    
    alert("Success");
    this.router.navigate(['/student']);
  }

  EditStudent(item:any)
  {
    // let id = localStorage.getItem("editTeacherId"); 
    let id=this.id;
    // console.log("id"+id);
    console.log("teacheritem"+item) ;
    this.studService.editStudent(id,item);
    alert("Success");
    this.router.navigate(['student']);
  }
}
