import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ClassComponent } from './class/class.component';
import { AddclassComponent } from './class/addclass/addclass.component';
import { EditclassComponent } from './class/editclass/editclass.component';
import { FormComponent } from './teacher/form/form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { SFormComponent } from './student/form/form.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'school',component:SchoolComponent},
  {path:"teacher",component:TeacherComponent},
  {path:"class",component:ClassComponent},
  {path:"addclass",component:AddclassComponent},
  {path:"editclass",component:EditclassComponent},
  {path:"addteacher",component:FormComponent},
  {path:"editteacher/:id",component:FormComponent},
  {path:"student",component:StudentComponent},
  {path:"addstudent",component:SFormComponent},
  {path:"editstudent/:id",component:SFormComponent}
  // ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
