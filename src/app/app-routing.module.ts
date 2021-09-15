import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { ClassComponent } from './class/class.component';
import { AddclassComponent } from './class/addclass/addclass.component';
import { EditclassComponent } from './class/editclass/editclass.component';
import { FormComponent } from './teacher/form/form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:"teacher",component:TeacherComponent,canActivate: [AuthGuard]},
  {path:"class",component:ClassComponent,canActivate: [AuthGuard]},
  {path:"addclass",component:AddclassComponent},
  {path:"editclass",component:EditclassComponent},
  {path:"addteacher",component:FormComponent},
  {path:"editteacher/:id",component:FormComponent},
  {path:'school',
  loadChildren: () => import('./school/school.module').then(m => m.SchoolModule)},
  {path:"student",
  loadChildren: () => import('./student/student.module').then(m => m.StudentModule)}
  
  // ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
