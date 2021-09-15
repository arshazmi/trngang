import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { SchoolComponent } from './school.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BannerComponent } from './banner/banner.component';
import { MatTableModule } from '@angular/material/table';
import { SchooltableComponent } from './schooltable/schooltable.component'  
import { AuthService } from '../service/auth.service';
@NgModule({
  declarations: [
    ListComponent,
    RegisterComponent,
    SchoolComponent,
    BannerComponent,
    SchooltableComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [AuthService],
})
export class SchoolModule { }
