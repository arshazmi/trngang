import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { CustomPipe } from './custom.pipe';
//For card
import {MatCardModule} from '@angular/material/card';
// For modal
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BannerComponent } from './banner/banner.component';
import { CoursecardComponent } from './coursecard/coursecard.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
//import {MatIconModule} from '@angular/material/icon'
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    ViewcourseComponent,
    AddcourseComponent,
    CourseComponent,
    BannerComponent,
    CustomPipe,
    CoursecardComponent,
    UpdateDialogComponent
  ],
  entryComponents: [
    CoursecardComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
    
  ]
})
export class GeneralModule { }
