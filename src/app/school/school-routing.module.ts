import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { RegisterComponent } from './register/register.component';
import { SchoolComponent } from './school.component';
import { SchooltableComponent } from './schooltable/schooltable.component';

const routes: Routes = [
  {path:'',component:SchoolComponent,canActivate: [AuthGuard]},
  {path:'add',component:RegisterComponent},
  {path:'update/:id',component:RegisterComponent},
  {path:'table',component:SchooltableComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
