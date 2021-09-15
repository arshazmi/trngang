import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { SFormComponent } from './form/form.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {path:'',component:StudentComponent,canActivate: [AuthGuard]},
  {path:"addstudent",component:SFormComponent},
  {path:"editstudent/:id",component:SFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
