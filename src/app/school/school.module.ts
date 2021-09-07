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
@NgModule({
  declarations: [
    ListComponent,
    RegisterComponent,
    SchoolComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SchoolModule { }
