import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SchoolComponent } from './school/school.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralModule } from './general/general.module';
import { BannerComponent } from './banner/banner.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormComponent } from './teacher/form/form.component';
import { ClassComponent } from './class/class.component';
import { SchoolModule } from './school/school.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
   // SchoolComponent,
    BannerComponent,
    TeacherComponent,
    FormComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    GeneralModule,
    SchoolModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
