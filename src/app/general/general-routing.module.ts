import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CourseComponent } from './course/course.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import {AuthGuard} from '../auth.guard';
const routes: Routes = [
  {path:'course',component:CourseComponent,canActivate: [AuthGuard]},
  {path:'course/view',component:ViewcourseComponent},
  {path:'course/add',component:AddcourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
