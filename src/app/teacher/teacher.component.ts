import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../service/teacher.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  toTeacher :any ="Teacher";
  teachers=[{
    id:'',
    firstName: '',
    lastName: '',
    salary: '',
    experience: '',
    gender:'',
    mobile:''
   }]

  constructor(private router:Router,private route: ActivatedRoute,
    private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe((data)=>{
      console.log(data);
      this.teachers=JSON.parse(JSON.stringify(data));
  })

  }

  editTeacher(item:any)
  {console.log(item);
    // localStorage.setItem("editTeacherId", item.id.toString());
  //   this.route.params.subscribe(params => {
  //     console.log("ID "+params['id'] ); 
  // });
  // let id=this.route.params.['id'];
    this.router.navigate(['editteacher',item.id]);

  }
  deleteTeacher(product:any)
  {
    this.teacherService.deleteTeacher(product.id)
      .subscribe((data) => {
        console.log(data);
        this.teachers = this.teachers.filter(p => p !== product);
      })
  

  }

}
