import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  normal:boolean=true;
  data:any;
  toStudent :any ="Student";
 // teachername:string='';
  student=[{
    id:'',
    firstName: '',
    lastName: '',
    dob: '',
    email:'',
    address: '',
    gender:'',
    mobile:'',
    doj:''
   }]

  constructor(private router:Router,private route: ActivatedRoute,
    private studService:StudentService) { }

  ngOnInit(): void {
    this.studService.getStudents().subscribe((data)=>{
      console.log(data);
      this.student=JSON.parse(JSON.stringify(data));
  })

  }

  editStudent(item:any)
  {console.log(item);
    // localStorage.setItem("editTeacherId", item.id.toString());
  //   this.route.params.subscribe(params => {
  //     console.log("ID "+params['id'] ); 
  // });
  // let id=this.route.params.['id'];
    this.router.navigate(['/student/editstudent',item.id]);

  }
  deleteStudent(product:any)
  {
    this.studService.deleteStudent(product.id)
      .subscribe((data) => {
        console.log(data);
        this.student = this.student.filter(p => p !== product);
      })
  

  }

  getStudOfTeacher(teachername:string){
    console.log(teachername," obtained");
    if(teachername!==''){
      this.studService.getStudentByTeacher(teachername).subscribe(data=>{
        console.log(data);
        this.data=data;
        this.normal=false;
      })
    }
    this.normal=true;
  }


}
