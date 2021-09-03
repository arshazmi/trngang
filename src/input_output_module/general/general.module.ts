import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { CustomPipe } from './custom.pipe';
// For modal
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
//import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [
    ViewcourseComponent,
    AddcourseComponent,
    CourseComponent,
    CustomPipe
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
    
  ]
})
export class GeneralModule { }
