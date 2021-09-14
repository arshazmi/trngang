import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralModule } from './general/general.module';
import { BannerComponent } from './banner/banner.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormComponent } from './teacher/form/form.component';
import { SFormComponent } from './student/form/form.component';
import { ClassComponent } from './class/class.component';
import { AddclassComponent } from './class/addclass/addclass.component';
import { EditclassComponent } from './class/editclass/editclass.component';
import { SchoolModule } from './school/school.module';
import { LoginComponent } from './login/login.component';
import {AuthService} from './service/auth.service';
import { RegisterComponent } from './login/register/register.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BannerComponent,
    TeacherComponent,
    FormComponent,
    ClassComponent,
    AddclassComponent,
    EditclassComponent,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    SFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GeneralModule,
    SchoolModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
