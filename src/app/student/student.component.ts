import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student';
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

   pager= {
       totalItems: 0,
       currentPage: 0,
       pageSize: 0,
       totalPages: 0,
       startPage: 0,
       endPage: 0,
       startIndex: 0,
       endIndex: 0,
       pages: [0]
     
   };
   pageOfItems:Student[] = [];

  constructor(private router:Router,private route: ActivatedRoute,
    private studService:StudentService) {
      this.setPage(1);//remove if no pagination
     }

  ngOnInit(): void {
    // this.studService.getStudents().subscribe((data)=>{
    //   console.log(data);
    //   this.student=JSON.parse(JSON.stringify(data));
  //})
  this.studService.getPage()
  .subscribe(response => {
      this.pager = response.pager;
      this.pageOfItems = response.pageOfItems;
  });
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

  setPage(page: number) {
    // get new pager object and page of items from the api
    this.studService.getPage(page)
        .subscribe(response => {
            this.pager = response.pager;
            this.pageOfItems = response.pageOfItems;
        });
}


}
