import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SFormComponent } from './form/form.component';
import { StudentComponent } from './student.component';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    StudentComponent,
    SFormComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentRoutingModule
  
  ],
  providers: [AuthService],
})
export class StudentModule { }
